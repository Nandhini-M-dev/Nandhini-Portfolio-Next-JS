export default function SkillsSection() {
  return (
    <section className="section section--alt" id="skills" aria-label="Technical skills" style={{ padding: 'var(--section-pad) 5%' }}>
      <div className="container" style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label reveal">Skills</p>
        <h2 className="section-heading reveal">Technologies I work with.</h2>

        <div className="skills-grid reveal-stagger">
          {/* Frontend */}
          <div className="skill-group reveal">
            <h3 className="skill-group-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              {' '}Frontend
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="2.5" />
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
                </svg>
                {' '}React
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 19.5h20L12 2zm0 4l7 13.5H5L12 6z" />
                </svg>
                {' '}Next.js
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.93 12L12 4.59 14.07 12H9.93zM4.24 18.5l1.19-3.5h9.14l1.19 3.5H20L12 1 4 18.5h.24z" />
                </svg>
                {' '}Angular
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v18H3V3zm2.5 15.5h3.2l.8-2.1h5l.8 2.1h3.2L12 5.5l-6.5 13z" />
                </svg>
                {' '}JavaScript
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="12" y="17" fontSize="12" fontWeight="700" textAnchor="middle" fill="currentColor">TS</text>
                </svg>
                {' '}TypeScript
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                {' '}Tailwind CSS
              </span>
            </div>
          </div>

          {/* Backend & DB */}
          <div className="skill-group reveal">
            <h3 className="skill-group-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
              {' '}Backend &amp; DB
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5v-7l6 3.5-6 3.5z" />
                </svg>
                {' '}Node.js
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 2.4.85 4.6 2.26 6.33L12 12l7.74 6.33A9.96 9.96 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
                {' '}MongoDB
              </span>
            </div>
          </div>

          {/* CMS & Platforms */}
          <div className="skill-group reveal">
            <h3 className="skill-group-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              {' '}CMS &amp; Platforms
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                {' '}Crafter CMS
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                {' '}GitLab CI/CD
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="2" x2="12" y2="7" />
                  <line x1="12" y1="17" x2="12" y2="22" />
                  <path d="M4.22 4.22l3.54 3.54" />
                  <path d="M16.24 16.24l3.54 3.54" />
                </svg>
                {' '}Git
              </span>
            </div>
          </div>

          {/* Dev Tools */}
          <div className="skill-group reveal">
            <h3 className="skill-group-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
              </svg>
              {' '}Dev Tools
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
                {' '}Claude AI
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {' '}GitHub Copilot
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 3l5 5.5L12 20l-9-11.5L8 3h8z" />
                </svg>
                {' '}VS Code
              </span>
              <span className="skill-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 12L2 12" />
                  <path d="M16 6l6 6-6 6" />
                  <circle cx="7" cy="12" r="3" />
                </svg>
                {' '}Postman
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
