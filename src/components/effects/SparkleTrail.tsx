'use client';

import { useRef, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function SparkleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isPointerFine = useMediaQuery('(pointer: fine)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (!isPointerFine || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    interface Sparkle {
      x: number; y: number; r: number; alpha: number;
      dy: number; dx: number; decay: number; gold: number[];
    }

    const sparkles: Sparkle[] = [];
    let lastSparkleTime = 0;
    let sparkleRunning = false;

    function resizeCanvas() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const onMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSparkleTime < 50) return;
      lastSparkleTime = now;

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      for (let i = 0; i < 3; i++) {
        sparkles.push({
          x: e.clientX + (Math.random() * 16 - 8),
          y: e.clientY + (Math.random() * 16 - 8),
          r: Math.random() * 2.5 + 0.8,
          alpha: Math.random() * 0.5 + 0.5,
          dy: Math.random() * 0.8 + 0.3,
          dx: (Math.random() - 0.5) * 0.6,
          decay: Math.random() * 0.015 + 0.015,
          gold: isLight ? [140, 106, 46] : [198, 167, 94],
        });
      }

      if (!sparkleRunning && sparkles.length > 0) {
        sparkleRunning = true;
        drawSparkles();
      }
    };

    function drawSparkles() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.dx;
        s.y += s.dy;
        s.alpha -= s.decay;
        s.r *= 0.985;

        if (s.alpha <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${s.gold[0]},${s.gold[1]},${s.gold[2]},${s.alpha})`;
        ctx!.fill();
      }

      if (sparkles.length > 0) {
        requestAnimationFrame(drawSparkles);
      } else {
        sparkleRunning = false;
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isPointerFine, prefersReducedMotion]);

  if (!isPointerFine || prefersReducedMotion) return null;

  return <canvas ref={canvasRef} id="sparkleCanvas" aria-hidden="true" />;
}
