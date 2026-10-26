import { FaGraduationCap, FaAward } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education, certification } from '../data/content'

const items = [
  ...education.map((e) => ({
    key: e.degree + e.period,
    title: e.degree,
    org: e.school,
    meta: e.period,
    text: `Score: ${e.score}`,
    icon: FaGraduationCap,
  })),
  {
    key: 'certification',
    title: certification.title,
    org: certification.issuer,
    meta: 'Certification',
    text: certification.text,
    icon: FaAward,
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Education & Certification" />
        <ol className="edu-timeline list-unstyled">
          {items.map(({ key, title, org, meta, text, icon: Icon }, i) => (
            <Reveal as="li" className="edu-item" variant={i % 2 ? 'right' : 'left'} key={key}>
              <span className="edu-node" aria-hidden="true"><Icon /></span>
              <div className="edu-card">
                <h3>{title}</h3>
                <p className="edu-org">{org}</p>
                <p className="edu-meta">{meta}</p>
                <p className="edu-text">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
