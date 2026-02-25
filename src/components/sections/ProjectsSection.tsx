'use client';

import { useRef, useCallback, useEffect, useState } from 'react';

function ProjectCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktop || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rotY = ((x - cx) / cx) * 3;
      const rotX = ((cy - y) / cy) * 2;

      cardRef.current.style.transform =
        `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    },
    [isDesktop],
  );

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card reveal${isDesktop ? ' tilt-hover' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-label="Projects" style={{ padding: 'var(--section-pad) 5%' }}>
      <div className="container" style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label reveal">Projects</p>
        <h2 className="section-heading reveal">What I&apos;m building.</h2>

        {/* Project 1 */}
        <ProjectCard>
          <span className="project-tag">Built from Scratch</span>
          <h3 className="project-title">Quick Commerce (Express)</h3>
          <p className="project-client">Client: Sterling Accuris</p>
          <p className="project-desc">
            Built the Quick Commerce platform end-to-end — started with backend
            services, then moved to frontend and developed the complete admin
            and user-facing application.
          </p>

          <a href="https://express.sterlingaccuris.com/" target="_blank" rel="noopener" className="project-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            {' '}Live
          </a>

          <div className="project-highlights">
            <div className="project-hl">
              <h4>Backend Development</h4>
              <p>Built backend services from scratch using Node.js and MongoDB for data management.</p>
            </div>
            <div className="project-hl">
              <h4>Frontend — Admin &amp; User</h4>
              <p>Developed both admin panel and user-facing side from scratch using React and Next.js.</p>
            </div>
          </div>

          <div className="project-tech">
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Git</span>
            <span>GitLab</span>
          </div>
        </ProjectCard>

        {/* Project 2 */}
        <ProjectCard>
          <span className="project-tag">Enterprise</span>
          <h3 className="project-title">Sterling Accuris</h3>
          <p className="project-client">Client: Sterling Accuris</p>
          <p className="project-desc">
            Enterprise web platform for Sterling Accuris. I handle bug fixes,
            new banners, UI enhancements, and content updates across the
            frontend and CMS layers.
          </p>

          <a href="https://sterlingaccuris.com/" target="_blank" rel="noopener" className="project-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            {' '}Live
          </a>

          <div className="project-highlights">
            <div className="project-hl">
              <h4>Bug Fixes &amp; UI Changes</h4>
              <p>Fixed bugs, added new banners, and made UI enhancements using Groovy, FTL, Next.js, and Angular.</p>
            </div>
            <div className="project-hl">
              <h4>CMS &amp; Data Updates</h4>
              <p>Handled MongoDB data changes and content updates using Crafter CMS and Crafter CMS Portal.</p>
            </div>
          </div>

          <div className="project-tech">
            <span>React</span>
            <span>Next.js</span>
            <span>Angular</span>
            <span>MongoDB</span>
            <span>Crafter CMS</span>
            <span>GitLab</span>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}
