import { useLang } from '../context/LanguageContext'

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="section section--light">
      <div className="container">
        <div className="section-header">
          <span className="badge">{s.badge}</span>
          <h2 className="section-title">{s.title}</h2>
          <p className="section-subtitle">{s.subtitle}</p>
        </div>

        <div className="services-grid">
          {s.items.map((item, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__icon">{item.icon}</div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__desc">{item.desc}</p>
              <span className="service-card__arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
