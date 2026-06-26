export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-grid">
          <div>
            <div className="eyebrow contact-eyebrow">Let's talk land</div>
            <h2 className="contact-title">Have acreage, or a community in mind?</h2>
            <p className="contact-lead">
              Whether you're a landowner, a broker, or a builder, we'd like to hear
              what you're working on.
            </p>
          </div>
          <div className="contact-actions">
            <a href="mailto:hello@momentumland.co" className="contact-btn solid">
              hello@momentumland.co
            </a>
            <a href="tel:+18305550142" className="contact-btn ghost">
              (830) 555-0142
            </a>
          </div>
        </div>
        <div className="contact-footer">
          <div className="footer-brand">
            <span className="footer-brand-name">Momentum</span>
            <span className="footer-brand-sub">Land Development</span>
          </div>
          <div className="footer-addr">217 Main Street, Boerne, Texas 78006</div>
          <div className="footer-copy">© 2026 Momentum Land Development, LLC</div>
        </div>
      </div>
    </section>
  )
}
