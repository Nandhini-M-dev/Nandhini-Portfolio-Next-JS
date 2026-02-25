export default function EducationSection() {
  return (
    <section className="section section--alt" id="education" aria-label="Education and certifications" style={{ padding: 'var(--section-pad) 5%' }}>
      <div className="container" style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label reveal">Education</p>
        <h2 className="section-heading reveal">Academic background.</h2>

        {/* Education Timeline */}
        <div className="edu-timeline">
          <div className="edu-card reveal">
            <span className="edu-year">2021 — 2025</span>
            <div className="edu-info">
              <h3 className="edu-degree">
                <svg className="edu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                {' '}B.E — Computer Science and Engineering
              </h3>
              <p className="edu-school">P.S.R Engineering College</p>
              <p className="edu-detail">CGPA: 9.0</p>
              <p className="edu-award">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {' '}2nd Rank — CS Department (2021–2022)
              </p>
            </div>
          </div>

          <div className="edu-card reveal">
            <span className="edu-year">2020 — 2021</span>
            <div className="edu-info">
              <h3 className="edu-degree">
                <svg className="edu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                </svg>
                {' '}Higher Secondary (HSC)
              </h3>
              <p className="edu-school">A.V.M Marimuthu Nadar Higher Secondary School</p>
            </div>
          </div>

          <div className="edu-card reveal">
            <span className="edu-year">2018 — 2019</span>
            <div className="edu-info">
              <h3 className="edu-degree">
                <svg className="edu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                </svg>
                {' '}Secondary (SSLC)
              </h3>
              <p className="edu-school">A.V.M Marimuthu Nadar Higher Secondary School</p>
            </div>
          </div>
        </div>

        {/* Internships */}
        <h3 className="edu-sub-heading reveal">Internships</h3>
        <div className="edu-timeline">
          <div className="edu-card reveal">
            <span className="edu-year">6 Months</span>
            <div className="edu-info">
              <h3 className="edu-degree">
                <svg className="edu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
                {' '}Full Stack Development
              </h3>
              <p className="edu-school">Skillmine Technology Consulting</p>
              <p className="edu-detail">Built enterprise commerce platforms using React, Next.js, Angular, Node.js and MongoDB.</p>
            </div>
          </div>

          <div className="edu-card reveal">
            <span className="edu-year">May 2023</span>
            <div className="edu-info">
              <h3 className="edu-degree">
                <svg className="edu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                {' '}Advanced Python Programming
              </h3>
              <p className="edu-school">Anjana Infotech, Rajapalayam</p>
            </div>
          </div>

          <div className="edu-card reveal">
            <span className="edu-year">Dec 2022</span>
            <div className="edu-info">
              <h3 className="edu-degree">
                <svg className="edu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                {' '}Web Development
              </h3>
              <p className="edu-school">Anjana Infotech, Rajapalayam</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <h3 className="edu-sub-heading reveal">Certifications</h3>
        <div className="cert-grid reveal-stagger">
          <span className="cert-chip reveal">Web Development</span>
          <span className="cert-chip reveal">Advanced Python Programming</span>
          <span className="cert-chip reveal">IOT Training with Arduino &amp; ESP</span>
          <span className="cert-chip reveal">ICT Learnathon</span>
          <span className="cert-chip reveal">Robotic Process Automation</span>
          <span className="cert-chip reveal">Matlab Onramp</span>
          <span className="cert-chip reveal">PepSheCo Sales Star Program</span>
        </div>
      </div>
    </section>
  );
}
