import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Navbar() {
  const { t, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#doctors', label: t.nav.doctors },
    { href: '#appointment', label: t.nav.appointment },
    { href: '#contact', label: t.nav.contact },
  ]

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#0ea5e9" />
              <path d="M16 7v18M7 16h18" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="navbar__logo-text">Medi<span>Care</span></span>
        </a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
            </li>
          ))}
          <li>
            <button className="btn btn--outline btn--sm lang-btn" onClick={() => { toggleLang(); handleLinkClick() }}>
              {t.nav.langToggle}
            </button>
          </li>
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
