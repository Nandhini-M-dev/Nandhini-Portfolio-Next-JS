'use client';

import { useRef, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isPointerFine = useMediaQuery('(pointer: fine)');

  useEffect(() => {
    if (!isPointerFine) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    let animId: number;
    const lerpRing = () => {
      if (!document.hidden) {
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      animId = requestAnimationFrame(lerpRing);
    };

    const setCursorBlack = () => {
      dot.style.background = '#111111';
      ring.style.borderColor = '#111111';
    };

    const resetCursorGold = () => {
      dot.style.background = '';
      ring.style.borderColor = '';
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, .skill-tag, .cert-chip, .project-card')) {
        ring.classList.add('hover');
        setCursorBlack();
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, .skill-tag, .cert-chip, .project-card')) {
        ring.classList.remove('hover');
        resetCursorGold();
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    animId = requestAnimationFrame(lerpRing);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animId);
    };
  }, [isPointerFine]);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
