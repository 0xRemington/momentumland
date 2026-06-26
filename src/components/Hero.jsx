import ImageSlot from './ImageSlot.jsx'
import imgConstruction from '../../homeimages/housing-development-under-construction.webp'
import imgTownhouse from '../../homeimages/onesto-contemporain-maisondeville-exterieur2-1-800x600.webp'
import imgChalet from '../../homeimages/Panorama-2.0-Chalet-Moderne-Exterieur-V1-og-1.webp'
import imgMultiunit from '../../homeimages/vinkel6-multilogement-exterieur-avant-og-800x600.webp'

const cards = [
  { id: 'c1', label: "Persimmon Ridge — St. John's", src: imgConstruction },
  { id: 'c2', label: 'Cypress Bend — Mount Pearl', src: imgTownhouse },
  { id: 'c3', label: 'Wheatfield Commons — Paradise', src: imgChalet },
  { id: 'c4', label: "Harbourview Estates — St. John's", src: imgMultiunit },
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
            across St. John's, Mount Pearl, and Paradise, Newfoundland —
            disciplined and deliberate, from the
            first survey stake to the final homesite.
          </p>
          <div className="hero-actions">
            <a href="#communities" className="btn-primary">View our communities</a>
            <a href="#approach" className="btn-text">
              Our approach <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-carousel" aria-label="Featured developments">
          {cards.map((c) => (
            <div key={c.id} className="hero-card">
              <ImageSlot
                src={c.src}
                alt={c.label}
                placeholder="House development"
                radius={14}
                style={{ display: 'block', width: '100%', height: '100%' }}
              />
              <div className="hero-badge">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
