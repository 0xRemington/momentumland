import ImageSlot from './ImageSlot.jsx'
import imgPersimmon from '../../homeimages/listings/luxury-home.webp'
import imgCypress from '../../homeimages/listings/6167-commercial-street-vancouver-R3137684-1-p480.webp'
import imgWheatfield from '../../homeimages/listings/private-house-halifax-new-brunswick-canada-house-halifax-new-brunswick-canada-120501414.webp'

const communities = [
  {
    id: 'proj-1',
    tag: 'Selling',
    tagClass: 'tag-selling',
    name: 'Persimmon Ridge',
    location: 'St. John\'s, NL',
    homesites: '142 homesites',
    copy: 'A coastal enclave of one-acre estate lots wrapped around protected spruce stands and a shared trail network.',
    image: imgPersimmon,
  },
  {
    id: 'proj-2',
    tag: 'In development',
    tagClass: 'tag-dev',
    name: 'Cypress Bend',
    location: 'Mount Pearl, NL',
    homesites: '318 homesites',
    copy: 'A master-planned community along the Waterford River corridor, with greenbelt frontage and walkable village density.',
    image: imgCypress,
  },
  {
    id: 'proj-3',
    tag: 'Delivered',
    tagClass: 'tag-delivered',
    name: 'Wheatfield Commons',
    location: 'Paradise, NL',
    homesites: '96 homesites',
    copy: 'A completed cottage-lot neighborhood centered on a restored coastal barren park, fully sold within eighteen months.',
    image: imgWheatfield,
  },
]

export default function Communities() {
  return (
    <section id="communities" className="container communities">
      <div className="section-head">
        <div>
          <div className="eyebrow">Selected communities</div>
          <h2 className="section-title">
            Neighborhoods we've planned, graded, and brought to life.
          </h2>
        </div>
      </div>
      <div className="community-grid">
        {communities.map((c) => (
          <article key={c.id}>
            <div className="community-media">
              <ImageSlot
                src={c.image}
                alt={`${c.name} community`}
                placeholder="Community photo"
                radius={3}
                style={{ display: 'block', width: '100%', height: 300 }}
              />
              <span className={`community-tag ${c.tagClass}`}>{c.tag}</span>
            </div>
            <h3 className="community-name">{c.name}</h3>
            <div className="community-meta">
              <span>{c.location}</span>
              <span className="sep">/</span>
              <span>{c.homesites}</span>
            </div>
            <p className="community-copy">{c.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
