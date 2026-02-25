export default function AboutSection() {
  return (
    <section className="section section--alt" id="about" aria-label="About me" style={{ padding: 'var(--section-pad) 5%' }}>
      <div className="container" style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label reveal">About</p>
        <h2 className="section-heading reveal">Turning ideas into enterprise&#8209;grade web&nbsp;solutions.</h2>

        <div className="about-grid">
          <div className="about-text">
            <p className="reveal">
              I&apos;m a Software Developer at <strong>Skillmine Technology Consulting</strong>,
              working on CMS-driven enterprise commerce platforms under the
              <strong> eCompass</strong> project for <strong>Sterling Accuris</strong>.
            </p>
            <p className="reveal">
              My day-to-day involves building frontend interfaces with React, Next.js,
              and Angular, creating backend APIs, handling MongoDB data operations,
              and managing deployments through GitLab CI/CD pipelines.
            </p>
            <p className="reveal">
              I hold a B.E. in Computer Science and Engineering from P.S.R Engineering
              College with a CGPA of 9.0, and I&apos;m passionate about building scalable,
              production-ready web applications.
            </p>
          </div>

          <div className="about-stats reveal-stagger">
            <div className="stat-card reveal">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-card reveal">
              <span className="stat-number">2</span>
              <span className="stat-label">Live Projects</span>
            </div>
            <div className="stat-card reveal">
              <span className="stat-number">3+</span>
              <span className="stat-label">Frameworks</span>
            </div>
            <div className="stat-card reveal">
              <span className="stat-number">9.0</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
