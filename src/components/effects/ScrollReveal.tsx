'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const initReveal = () => {
      if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal').forEach((el) => {
          el.classList.add('visible');
        });
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(initReveal);
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(initReveal, 1);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
