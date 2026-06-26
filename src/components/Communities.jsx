import ImageSlot from './ImageSlot.jsx'

const communities = [
  {
    id: 'proj-1',
    tag: 'Selling',
    tagClass: 'tag-selling',
    name: 'Persimmon Ridge',
    location: 'Boerne, TX',
    homesites: '142 homesites',
    copy: 'A hill-country enclave of one-acre estate lots wrapped around protected oak groves and a shared trail network.',
  },
  {
    id: 'proj-2',
    tag: 'In development',
    tagClass: 'tag-dev',
    name: 'Cypress Bend',
    location: 'New Braunfels, TX',
    homesites: '318 homesites',
    copy: 'A master-planned community along the Guadalupe corridor, with greenbelt frontage and walkable village density.',
  },
  {
    id: 'proj-3',
    tag: 'Delivered',
    tagClass: 'tag-delivered',
    name: 'Wheatfield Commons',
    location: 'Fredericksburg, TX',
    homesites: '96 homesites',
    copy: 'A completed cottage-lot neighborhood centered on a restored prairie park, fully sold within eighteen months.',
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
