export default function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-label="Work experience" style={{ padding: 'var(--section-pad) 5%' }}>
      <div className="container" style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label reveal">Experience</p>
        <h2 className="section-heading reveal">Where I&apos;ve worked.</h2>

        <div className="exp-card reveal">
          <div className="exp-header">
            <div>
              <h3 className="exp-role">
                <svg className="exp-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <path d="M3 21V9l9-5 9 5v12" />
                  <rect x="9" y="13" width="6" height="8" rx="1" />
                </svg>
                {' '}Junior Software Developer
              </h3>
              <p className="exp-company">Skillmine Technology Consulting</p>
            </div>
            <span className="exp-badge">6-Month Internship</span>
          </div>

          <p className="exp-project">Project: <strong>eCompass</strong> — Client: Sterling Accuris</p>

          <p className="exp-sub">Quick Commerce (Express) — Built from scratch</p>
          <ul className="exp-list">
            <li>Built backend services from scratch using <strong>Node.js</strong> and <strong>MongoDB</strong></li>
            <li>Moved to frontend — built the <strong>admin panel</strong> and <strong>user</strong> side from scratch</li>
            <li>Developed responsive UI using <strong>React</strong> and <strong>Next.js</strong></li>
          </ul>

          <p className="exp-sub">Sterling Accuris — Maintenance &amp; enhancements</p>
          <ul className="exp-list">
            <li>Fixed bugs and implemented new banners and UI changes using <strong>Groovy, FTL, JavaScript</strong> and <strong>Angular</strong></li>
            <li>Worked on content updates and page changes with <strong>Crafter CMS</strong></li>
          </ul>

          <p className="exp-sub">Common</p>
          <ul className="exp-list">
            <li>Used <strong>Git</strong> and <strong>GitLab</strong> for version control and merge requests</li>
            <li>Coordinated with the team for UAT and production releases</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
