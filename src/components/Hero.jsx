import { FaGithub, FaLinkedinIn, FaReact, FaBootstrap, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiFigma } from 'react-icons/si'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { profile } from '../data/content'

const scrollTo = (e, id) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const orbitIcons = [
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#60a5fa' },
  { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
]

export default function Hero() {
  return (
    <section id="home" className="hero d-flex align-items-center">
      <div className="hero-glow glow-1" aria-hidden="true" />
      <div className="hero-glow glow-2" aria-hidden="true" />
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 order-2 order-lg-1 hero-copy">
            <p className="eyebrow mb-2">HELLO, I&apos;M</p>
            <h1 className="hero-title">{profile.name}</h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-desc">
              I build responsive, intuitive, and user-focused web experiences using React.js and
              modern frontend technologies.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a className="btn btn-accent btn-lg" href="#projects" onClick={(e) => scrollTo(e, 'projects')}>
                View My Projects <FiArrowRight className="ms-1" aria-hidden="true" />
              </a>
              <a className="btn btn-ghost btn-lg" href={profile.resume} download="Nandha_Kumar_Resume.pdf">
                <FiDownload className="me-2" aria-hidden="true" />
                Download Resume
              </a>
            </div>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <a className="social-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <FaLinkedinIn />
              </a>
              {profile.github && (
                <a className="social-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <FaGithub />
                </a>
              )}
              <span className="exp-badge">
                <span className="dot" aria-hidden="true" />
                1+ Year of Frontend Development Experience
              </span>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-visual" aria-hidden="true">
              <div className="ring ring-1" />
              <div className="ring ring-2" />
              <div className="orbit">
                {orbitIcons.map(({ name, icon: Icon, color }, i) => (
                  <span key={name} className="orbit-item" style={{ '--a': `${(360 / orbitIcons.length) * i}deg` }}>
                    <span className="orbit-pos">
                      <span className="orbit-icon glass" title={name}>
                        <Icon style={{ color }} />
                      </span>
                    </span>
                  </span>
                ))}
              </div>
              <div className="flip-card">
                <div className="flip-inner">
                  <div className="flip-face code-card">
                    <div className="code-dots"><i /><i /><i /></div>
                    <pre>
                      <code>
                        <span className="k">const</span> <span className="v">developer</span> = {'{'}
                        {'\n'}  name: <span className="s">&apos;Nandha Kumar P&apos;</span>,
                        {'\n'}  role: <span className="s">&apos;Frontend Dev&apos;</span>,
                        {'\n'}  stack: [<span className="s">&apos;React.JS&apos;</span>,
                        {'\n'}          <span className="s">&apos;UI/UX Design&apos;</span>],
                        {'\n'}  loves: <span className="s">&apos;clean UI&apos;</span>,
                        {'\n'}{'}'}
                      </code>
                    </pre>
                  </div>
                  <div className="flip-face flip-back code-card">
                    <div className="code-dots"><i /><i /><i /></div>
                    <p className="flip-title">Beyond the Screen</p>
                    <ul className="flip-list list-unstyled mb-0">
                      <li>Photography</li>
                      <li>Cricket</li>
                      <li>Fitness</li>
                      <li>Bike Enthusiast</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
