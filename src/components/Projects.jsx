import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="Featured Projects" title="My Project Work" />
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-6" key={p.id}>
              <ProjectCard project={p} variant={i % 2 ? 'right' : 'left'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
