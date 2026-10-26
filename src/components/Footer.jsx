import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'
import { navLinks, profile } from '../data/content'

export default function Footer() {
  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-4">
            <a className="brand" href="#home" onClick={(e) => go(e, 'home')}>
              Nandha Kumar P
            </a>
            <p className="text-muted-2 small mt-2 mb-0">
              Frontend developer crafting responsive, user-focused web experiences.
            </p>
          </div>
          <nav className="col-lg-5" aria-label="Footer">
            <ul className="footer-links list-unstyled d-flex flex-wrap gap-3 mb-0">
              {navLinks.map((l) => (
                <li key={l.id}><a href={`#${l.id}`} onClick={(e) => go(e, l.id)}>{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="col-lg-3 d-flex gap-2 justify-content-lg-end">
            <a className="social-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FaLinkedinIn />
            </a>
            {profile.github && (
              <a className="social-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <FaGithub />
              </a>
            )}
            <button type="button" className="social-btn" onClick={(e) => go(e, 'home')} aria-label="Back to top">
              <FiArrowUp />
            </button>
          </div>
        </div>
        <hr />
        <p className="text-muted-2 small text-center mb-0">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
