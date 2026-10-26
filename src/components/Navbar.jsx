import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { navLinks, profile } from '../data/content'

export default function Navbar({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top site-nav ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand brand" href="#home" onClick={(e) => go(e, 'home')} aria-label="Nandha Kumar P, home">
          <span className="brand-mark">NK</span>
        </a>

        <div className="d-flex align-items-center gap-2 order-lg-last ms-auto ms-lg-0">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mainNav"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="mainNav">
          <ul className="navbar-nav mx-lg-auto mb-3 mb-lg-0">
            {navLinks.map((l) => (
              <li className="nav-item" key={l.id}>
                <a
                  className={`nav-link ${active === l.id ? 'active' : ''}`}
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'page' : undefined}
                  onClick={(e) => go(e, l.id)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-accent me-lg-3"
            href="#contact"
            onClick={(e) => go(e, 'contact')}
            title={`Contact ${profile.name}`}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  )
}
