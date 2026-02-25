'use client';

import { useState, useRef, useCallback } from 'react';

export default function ContactSection() {
  const [btnText, setBtnText] = useState('Send Message');
  const [status, setStatus] = useState<{ text: string; type: '' | 'success' | 'error' }>({ text: '', type: '' });
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const hidePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  const launchConfetti = useCallback(() => {
    const cc = document.createElement('canvas');
    cc.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:10001;pointer-events:none';
    document.body.appendChild(cc);
    const ctx = cc.getContext('2d');
    if (!ctx) return;
    cc.width = window.innerWidth;
    cc.height = window.innerHeight;

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const colors = isLight
      ? ['#8C6A2E', '#A07E3E', '#6B4F1E', '#C6A75E', '#D4B56A']
      : ['#C6A75E', '#D4B56A', '#9F8747', '#E8D5A3', '#B8954A'];

    const pieces: Array<{
      x: number; y: number; vx: number; vy: number;
      w: number; h: number; color: string; rot: number;
      rotV: number; alpha: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      pieces.push({
        x: cc.width / 2,
        y: cc.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: -(Math.random() * 12 + 4),
        w: Math.random() * 8 + 4,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * 360,
        rotV: (Math.random() - 0.5) * 12,
        alpha: 1,
      });
    }

    function animate() {
      ctx!.clearRect(0, 0, cc.width, cc.height);
      let alive = false;
      for (let i = 0; i < pieces.length; i++) {
        const p = pieces[i];
        p.x += p.vx;
        p.vy += 0.3;
        p.y += p.vy;
        p.rot += p.rotV;
        p.alpha -= 0.006;
        if (p.alpha <= 0) continue;
        alive = true;
        ctx!.save();
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rot * Math.PI) / 180);
        ctx!.globalAlpha = Math.max(0, p.alpha);
        ctx!.fillStyle = p.color;
        ctx!.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx!.restore();
      }
      if (alive) {
        requestAnimationFrame(animate);
      } else {
        cc.remove();
      }
    }

    animate();
  }, []);

  const showSuccessPopup = useCallback(() => {
    setShowPopup(true);
    launchConfetti();
    closeTimerRef.current = setTimeout(hidePopup, 3000);
  }, [launchConfetti, hidePopup]);

  const handleClosePopup = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    hidePopup();
  }, [hidePopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);
    setBtnText('Sending...');
    setStatus({ text: '', type: '' });

    try {
      const data = new FormData(formRef.current);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();

      if (result.success) {
        formRef.current.reset();
        showSuccessPopup();
      } else {
        setStatus({ text: 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch {
      setStatus({ text: 'Network error. Please try again.', type: 'error' });
    } finally {
      setSubmitting(false);
      setBtnText('Send Message');
    }
  };

  return (
    <>
      <section className="section section--alt" id="contact" aria-label="Contact" style={{ padding: 'var(--section-pad) 5%' }}>
        <div className="container contact-wrap" style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <p className="section-label reveal">Contact</p>
          <h2 className="section-heading reveal">Let&apos;s work together.</h2>

          <div className="contact-split reveal">
            {/* LEFT — Contact Info */}
            <div className="contact-left">
              <h3 className="contact-left-heading">Get in touch</h3>
              <p className="contact-left-desc">Feel free to reach out for collaborations, opportunities, or just to say hello.</p>

              <div className="contact-info-list">
                <a href="mailto:nanthininanthini708@gmail.com" className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Email</p>
                    <p className="contact-info-value">nanthininanthini708@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919655404090" className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Phone</p>
                    <p className="contact-info-value">+91 9655404090</p>
                  </div>
                </a>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Location</p>
                    <p className="contact-info-value">Sivakasi, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <a href="https://www.linkedin.com/in/nandhini-m-747b84370/" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://github.com/Nandhini-M-dev" target="_blank" rel="noopener" className="social-link" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="contact-right">
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="b3ec8b26-ba48-463d-9a25-5b858a587db9" />
                <input type="hidden" name="subject" value="New message from portfolio" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} aria-hidden="true" tabIndex={-1} />

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" required className="form-input" placeholder="Your name" autoComplete="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" required className="form-input" placeholder="you@example.com" autoComplete="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" required rows={5} className="form-input form-textarea" placeholder="Your message..." />
                </div>

                <button type="submit" className="btn btn--filled form-submit" disabled={submitting}>
                  <span>{btnText}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>

                <p className={`form-status ${status.type}`} aria-live="polite" role="status">{status.text}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <>
          <div className="toast-overlay show" onClick={handleClosePopup} />
          <div className="toast-popup show" onClick={handleClosePopup}>
            <svg className="toast-check" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="var(--accent)" strokeWidth="2" />
              <path d="M15 24l6 6 12-12" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="toast-title">Message Sent!</h3>
            <p className="toast-desc">Thank you for reaching out. I&apos;ll get back to you soon.</p>
          </div>
        </>
      )}
    </>
  );
}
