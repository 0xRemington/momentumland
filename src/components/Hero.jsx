import ImageSlot from './ImageSlot.jsx'

const stats = [
  { num: <>2,400<span>+</span></>, label: 'Acres entitled & developed' },
  { num: '18', label: 'Communities delivered' },
  { num: '6,100', label: 'Homesites created' },
  { num: '2009', label: 'Building communities since' },
]

export default function Hero() {
  return (
    <header id="top" className="container hero">
      <div className="hero-grid">
        <div>
          <div className="hero-kicker">
            <span className="hero-rule" />
            <span className="eyebrow">Master-planned residential communities</span>
          </div>
          <h1 className="hero-title">
            Shaping raw land into <em>thriving</em> places to call home.
          </h1>
          <p className="hero-lead">
            Momentum acquires, entitles, and delivers master-planned neighborhoods
            across the Texas Hill Country — disciplined and deliberate, from the
            first survey stake to the final homesite.
          </p>
          <div className="hero-actions">
            <a href="#communities" className="btn-primary">View our communities</a>
            <a href="#approach" className="btn-text">
              Our approach <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-media">
          <ImageSlot
            placeholder="Site work in progress"
            radius={3}
            style={{ display: 'block', width: '100%', height: 440 }}
          />
          <div className="hero-badge">Persimmon Ridge — Phase II underway</div>
        </div>
      </div>

      <div id="stats" className="stats">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </header>
  )
}
