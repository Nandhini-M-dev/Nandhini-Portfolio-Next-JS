'use client';

import { useRef, useEffect } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check if mobile or reduced motion
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

    let w = 0, h = 0;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      w = canvas!.width = rect.width;
      h = canvas!.height = rect.height;
    }

    resize();
    canvas.style.visibility = 'visible';

    const root = document.documentElement;

    const count = Math.min(Math.floor(w * h / 4000), 50);
    const particles: Array<{
      x: number; y: number; r: number; dx: number; dy: number;
      alpha: number; alphaBase: number; twinkleSpeed: number;
      twinkleOffset: number; goldBase: string;
    }> = [];

    const isLight = root.getAttribute('data-theme') === 'light';

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.0 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.3 - 0.1,
        alpha: Math.random() * 0.5 + 0.15,
        alphaBase: Math.random() * 0.5 + 0.15,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        goldBase: isLight ? 'rgba(140,106,46,' : 'rgba(198,167,94,',
      });
    }

    let frameCount = 0;

    function draw() {
      if (!heroVisible || document.hidden) {
        animId = requestAnimationFrame(draw);
        return;
      }
      ctx!.clearRect(0, 0, w, h);
      frameCount++;

      // Update gold color on each frame (handles theme changes)
      const currentLight = root.getAttribute('data-theme') === 'light';
      const gold = currentLight ? 'rgba(140,106,46,' : 'rgba(198,167,94,';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.goldBase = gold;
        p.x += p.dx;
        p.y += p.dy;
        p.alpha = p.alphaBase + Math.sin(frameCount * p.twinkleSpeed + p.twinkleOffset) * 0.2;
        if (p.alpha < 0.05) p.alpha = 0.05;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.goldBase + p.alpha + ')';
        ctx!.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    draw();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth < 768) {
          cancelAnimationFrame(animId);
          canvas!.style.display = 'none';
        } else {
          resize();
        }
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      if (obs && heroSection) obs.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} id="heroCanvas" aria-hidden="true" />;
}
