'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import MobileMenu from './MobileMenu';

const NAV_LINKS = ['about', 'experience', 'skills', 'projects', 'education', 'contact'];

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      const sy = window.scrollY;

      // Navbar background
      setScrolled(sy > 60);

      // Scroll progress
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (sy / docH) * 100 : 0);

      // Active section
      const y = sy + 200;
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(el.id);
        }
      });

      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Primary navigation">
        <a href="#hero" className="nav-logo" aria-label="Nandhini M — Home">
          <span className="sig-text">
            <span className="sig-letter" style={{ '--i': 0 } as React.CSSProperties}>N</span>
            <span className="sig-letter" style={{ '--i': 1 } as React.CSSProperties}>M</span>
          </span>
          <svg className="sig-circle" viewBox="-52 -30 104 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <ellipse className="sig-ellipse" cx="0" cy="0" rx="48" ry="26" />
          </svg>
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              aria-current={activeSection === id ? 'true' : undefined}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark and light mode">
            <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>

        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span /><span /><span />
        </button>

        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
