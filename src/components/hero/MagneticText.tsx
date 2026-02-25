'use client';

import { useRef, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function MagneticText() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const isPointerFine = useMediaQuery('(pointer: fine)');
  const letters = 'Nandhini M'.split('');

  useEffect(() => {
    if (!isPointerFine || !containerRef.current) return;

    const magLetters = containerRef.current.querySelectorAll<HTMLSpanElement>('.mag-letter');
    const heroEl = containerRef.current.closest('.hero') as HTMLElement | null;
    if (!heroEl || magLetters.length === 0) return;

    const onMouseMove = (e: MouseEvent) => {
      // Batch-read
      const rects: DOMRect[] = [];
      for (let i = 0; i < magLetters.length; i++) {
        rects.push(magLetters[i].getBoundingClientRect());
      }
      // Batch-write
      for (let i = 0; i < magLetters.length; i++) {
        const lx = rects[i].left + rects[i].width / 2;
        const ly = rects[i].top + rects[i].height / 2;
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const force = (1 - dist / 120) * 30;
          const angle = Math.atan2(dy, dx);
          magLetters[i].style.transform = `translate(${-Math.cos(angle) * force}px, ${-Math.sin(angle) * force}px)`;
        } else {
          magLetters[i].style.transform = '';
        }
      }
    };

    const onMouseLeave = () => {
      for (let i = 0; i < magLetters.length; i++) {
        magLetters[i].style.transform = '';
      }
    };

    heroEl.addEventListener('mousemove', onMouseMove);
    heroEl.addEventListener('mouseleave', onMouseLeave);

    return () => {
      heroEl.removeEventListener('mousemove', onMouseMove);
      heroEl.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isPointerFine]);

  return (
    <h1 className="hero-name" ref={containerRef}>
      {letters.map((letter, i) => (
        <span key={i} className="mag-letter">
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
}
