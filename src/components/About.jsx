import ImageSlot from './ImageSlot.jsx'

export default function About() {
  return (
    <section id="about" className="container about">
      <div className="about-grid">
        <ImageSlot
          placeholder="Team or site photo"
          radius={3}
          style={{ display: 'block', width: '100%', height: 480 }}
        />
        <div>
          <div className="eyebrow">Who we are</div>
          <h2 className="about-title">Land is patient. We're precise.</h2>
          <p className="about-copy first">
            Momentum Land Development is a family of planners, engineers, and
            operators who've spent fifteen years turning overlooked acreage into
            the kind of neighborhoods people are proud to live in. We hold our
            projects from acquisition through delivery — no handoffs, no shortcuts.
          </p>
          <p className="about-copy second">
            We believe good development respects the land it sits on. That
            conviction shapes every plat we draw and every lot we sell.
          </p>
          <div className="about-facts">
            <div>
              <div className="about-fact-label">Held in-house</div>
              <div className="about-fact-sub">Acquisition to delivery</div>
            </div>
            <div>
              <div className="about-fact-label">Newfoundland rooted</div>
              <div className="about-fact-sub">St. John's, Mount Pearl & Paradise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
