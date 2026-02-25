'use client';

import { useRef, useEffect } from 'react';

export default function IcosahedronCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Desktop only
    if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.display = 'none';
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let heroVisible = true;
    let animId: number;

    // IntersectionObserver for hero visibility
    const heroSection = canvas.closest('section') || canvas.parentElement;
    let obs: IntersectionObserver | undefined;
    if (heroSection) {
      obs = new IntersectionObserver(
        (entries) => { heroVisible = entries[0].isIntersecting; },
        { threshold: 0 }
      );
      obs.observe(heroSection);
    }

    let gw = 0, gh = 0;

    function gResize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      gw = canvas!.width = rect.width;
      gh = canvas!.height = rect.height;
    }

    gResize();
    let geoParentRect = canvas.parentElement!.getBoundingClientRect();

    // ── Icosahedron vertices using golden ratio ──
    const phi = (1 + Math.sqrt(5)) / 2;
    const len = Math.sqrt(1 + phi * phi);

    const rawVerts: [number, number, number][] = [
      [0, 1, phi],   [0, -1, phi],  [0, 1, -phi],  [0, -1, -phi],
      [1, phi, 0],   [-1, phi, 0],  [1, -phi, 0],  [-1, -phi, 0],
      [phi, 0, 1],   [-phi, 0, 1],  [phi, 0, -1],  [-phi, 0, -1]
    ];

    const verts = rawVerts.map((v) => [v[0] / len, v[1] / len, v[2] / len]);

    // ── 30 edges of an icosahedron ──
    const edges: [number, number][] = [
      [0, 1], [0, 4], [0, 5], [0, 8], [0, 9],
      [1, 6], [1, 7], [1, 8], [1, 9],
      [2, 3], [2, 4], [2, 5], [2, 10], [2, 11],
      [3, 6], [3, 7], [3, 10], [3, 11],
      [4, 5], [4, 8], [4, 10],
      [5, 9], [5, 11],
      [6, 7], [6, 8], [6, 10],
      [7, 9], [7, 11],
      [8, 10], [9, 11]
    ];

    let autoRotX = 0;
    let autoRotY = 0;
    let mouseInfX = 0;
    let mouseInfY = 0;

    const parentEl = canvas.parentElement!;

    const onMouseMove = (e: MouseEvent) => {
      mouseInfX = ((e.clientX - geoParentRect.left) / geoParentRect.width - 0.5) * 0.6;
      mouseInfY = ((e.clientY - geoParentRect.top) / geoParentRect.height - 0.5) * 0.6;
    };

    const onMouseLeave = () => {
      mouseInfX = 0;
      mouseInfY = 0;
    };

    parentEl.addEventListener('mousemove', onMouseMove);
    parentEl.addEventListener('mouseleave', onMouseLeave);

    // ── Rotation: rotate point around X then Y axes ──
    function rotateP(p: number[], ax: number, ay: number): [number, number, number] {
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const x1 = p[0] * cosY - p[2] * sinY;
      const z1 = p[0] * sinY + p[2] * cosY;
      const cosX = Math.cos(ax), sinX = Math.sin(ax);
      const y2 = p[1] * cosX - z1 * sinX;
      const z2 = p[1] * sinX + z1 * cosX;
      return [x1, y2, z2];
    }

    // ── Perspective projection ──
    function project(p: [number, number, number]): { x: number; y: number; z: number } {
      const fov = 1.8;
      const z = p[2] + fov;
      const scale = Math.min(gw, gh) * 0.7;
      return {
        x: gw / 2 + (p[0] / z) * scale,
        y: gh / 2 + (p[1] / z) * scale,
        z: p[2]
      };
    }

    const techLabels = [
      'React', 'Next.js', 'Angular', 'Node', 'MongoDB', 'TypeScript',
      'JS', 'Tailwind', 'Git', 'HTML', 'CSS', 'Figma'
    ];

    const root = document.documentElement;

    function drawGeo() {
      if (!heroVisible || document.hidden) {
        animId = requestAnimationFrame(drawGeo);
        return;
      }

      ctx!.clearRect(0, 0, gw, gh);
      autoRotX += 0.003;
      autoRotY += 0.005;

      const ax = autoRotX + mouseInfY;
      const ay = autoRotY + mouseInfX;

      const isLight = root.getAttribute('data-theme') === 'light';
      const goldRGB = isLight ? '140,106,46' : '198,167,94';

      // Rotate and project all vertices
      const projected = verts
        .map((v) => rotateP(v, ax, ay))
        .map(project);

      // Draw edges with depth-based alpha
      for (let i = 0; i < edges.length; i++) {
        const a = projected[edges[i][0]];
        const b = projected[edges[i][1]];
        const avgZ = (a.z + b.z) / 2;
        const alpha = 0.12 + (avgZ + 1) * 0.22;

        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.strokeStyle = 'rgba(' + goldRGB + ',' + alpha + ')';
        ctx!.lineWidth = 1.2;
        ctx!.stroke();
      }

      // Draw vertices with glow + tech labels
      for (let j = 0; j < projected.length; j++) {
        const p = projected[j];
        const vAlpha = 0.3 + (p.z + 1) * 0.35;
        const vr = 2.5 + (p.z + 1) * 1.2;

        // Glow
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, vr * 3, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(' + goldRGB + ',' + (vAlpha * 0.1) + ')';
        ctx!.fill();

        // Vertex dot
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, vr, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(' + goldRGB + ',' + vAlpha + ')';
        ctx!.fill();

        // Tech label (only shown if vertex alpha > 0.3)
        if (vAlpha > 0.3) {
          ctx!.font = '600 11px Inter, system-ui, sans-serif';
          ctx!.textAlign = 'center';
          ctx!.textBaseline = 'middle';
          ctx!.fillStyle = 'rgba(' + goldRGB + ',' + (vAlpha * 0.85) + ')';
          ctx!.fillText(techLabels[j], p.x, p.y - vr - 10);
        }
      }

      animId = requestAnimationFrame(drawGeo);
    }

    drawGeo();

    const handleResize = () => {
      if (window.innerWidth < 768) {
        cancelAnimationFrame(animId);
        canvas!.style.display = 'none';
        return;
      }
      gResize();
      geoParentRect = canvas!.parentElement!.getBoundingClientRect();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      parentEl.removeEventListener('mousemove', onMouseMove);
      parentEl.removeEventListener('mouseleave', onMouseLeave);
      if (obs && heroSection) obs.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} id="geoCanvas" aria-hidden="true" />;
}
