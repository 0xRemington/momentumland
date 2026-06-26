const steps = [
  {
    n: '01',
    title: 'Acquisition',
    copy: 'We source and underwrite raw land with a clear thesis — location, water, topography, and a market that\'s ready for it.',
  },
  {
    n: '02',
    title: 'Entitlement & planning',
    copy: 'Zoning, utilities, and engineering come together into a plat that honors the site and the community around it.',
  },
  {
    n: '03',
    title: 'Horizontal development',
    copy: 'Roads, drainage, and infrastructure go in the ground — managed in-house to hold quality and schedule.',
  },
  {
    n: '04',
    title: 'Community delivery',
    copy: 'Finished homesites move to builders and homeowners, with amenities and stewardship that endure past the sale.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="container approach-inner">
        <div className="approach-grid">
          <div className="approach-aside">
            <div className="eyebrow">How we work</div>
            <h2 className="section-title">A disciplined path from acreage to address.</h2>
            <p className="approach-lead">
              Every community moves through the same deliberate sequence. It's how
              we protect timelines, capital, and the character of the land.
            </p>
          </div>
          <div>
            {steps.map((s) => (
              <div key={s.n} className="step">
                <div className="step-num">{s.n}</div>
                <div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-copy">{s.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
