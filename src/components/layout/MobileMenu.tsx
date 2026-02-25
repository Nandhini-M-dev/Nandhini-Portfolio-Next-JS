'use client';

import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = ['about', 'experience', 'skills', 'projects', 'education', 'contact'];

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
      {links.map((id) => (
        <a key={id} href={`#${id}`} onClick={onClose}>
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </div>
  );
}
