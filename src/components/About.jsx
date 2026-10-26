import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { aboutText, highlights } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About Me" title="Building interfaces people enjoy using" />
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <Reveal className="glass card-pad hover-border h-100" variant="left">
              <p className="about-text mb-0">{aboutText}</p>
            </Reveal>
          </div>
          <div className="col-lg-6">
            <div className="row g-3 h-100">
              {highlights.map(({ icon: Icon, title, text }, i) => (
                <div className="col-sm-6" key={title}>
                  <Reveal className="glass card-pad hover-lift h-100" variant="right" tilt={7} delay={i * 80}>
                    <span className="icon-tile"><Icon /></span>
                    <h3 className="h6 mt-3 mb-1">{title}</h3>
                    <p className="text-muted-2 small mb-0">{text}</p>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
