import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="navbar__logo footer__logo">
            <span className="navbar__logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#0ea5e9" />
                <path d="M16 7v18M7 16h18" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="navbar__logo-text">Medi<span>Care</span></span>
          </a>
          <p className="footer__desc">{f.description}</p>
          <div className="footer__social">
            <span className="footer__social-label">{f.followUs}:</span>
            {['f', 'in', 'tw', 'yt'].map((s, i) => (
              <a key={i} href="#" className="footer__social-link" aria-label={s}>
                {s === 'f' ? '📘' : s === 'in' ? '💼' : s === 'tw' ? '🐦' : '▶️'}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">{f.quickLinks}</h4>
          <ul className="footer__list">
            {f.links.map((link, i) => (
              <li key={i}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">{f.services}</h4>
          <ul className="footer__list">
            {f.serviceLinks.map((s, i) => (
              <li key={i}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">{f.contact}</h4>
          <ul className="footer__contact-list">
            <li>📍 {f.address}</li>
            <li>📞 {f.phone}</li>
            <li>✉️ {f.email}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>{f.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
