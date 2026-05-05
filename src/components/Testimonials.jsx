import { useLang } from '../context/LanguageContext'

export default function Testimonials() {
  const { t } = useLang()
  const ts = t.testimonials

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">{ts.badge}</span>
          <h2 className="section-title">{ts.title}</h2>
          <p className="section-subtitle">{ts.subtitle}</p>
        </div>

        <div className="testimonials-grid">
          {ts.items.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{item.text}</p>
              <div className="testimonial-card__rating">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <span key={j} className="star">★</span>
                ))}
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" style={{ background: `${item.color}20`, color: item.color }}>
                  {item.initials}
                </div>
                <div>
                  <div className="testimonial-card__name">{item.name}</div>
                  <div className="testimonial-card__role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
