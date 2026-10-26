import Reveal from './Reveal'
import Tilt from './Tilt'
import SectionHeading from './SectionHeading'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="Work Experience" title="Where I've worked" />
        <ol className="timeline list-unstyled mx-auto">
          {experience.map((job, i) => (
            <Reveal as="li" className="timeline-item" variant={i % 2 ? 'right' : 'left'} key={job.company}>
              <span className={`timeline-dot ${job.current ? 'current' : ''}`} aria-hidden="true" />
              <Tilt className="glass card-pad hover-lift" max={3}>
                <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">
                  <div>
                    <h3 className="h5 mb-1">{job.company}</h3>
                    <p className="text-muted-2 mb-0">{job.location}</p>
                  </div>
                  <span className="period-pill">{job.period}</span>
                </div>
                <ul className="check-list mb-0">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Tilt>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
