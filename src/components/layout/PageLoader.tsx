'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    setHidden(true);
    const timer = setTimeout(() => setRemoved(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div className={`page-loader ${hidden ? 'hidden' : ''}`} aria-hidden="true">
      <div className="loader-ring" />
    </div>
  );
}
