import { FiExternalLink } from 'react-icons/fi'
import Reveal from './Reveal'

export default function ProjectCard({ project, variant }) {
  return (
    <Reveal as="article" className="project-card glass h-100" variant={variant} tilt={4}>
      <div className="project-body">
        <span className="project-cat">{project.category}</span>
        <h3 className="h5">{project.name}</h3>
        <p className="text-muted-2 small project-desc">{project.description}</p>
        <h4 className="stack-label">Tech Stack</h4>
        <ul className="tag-list list-unstyled">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {project.url && (
          <div className="mt-auto">
            <a className="btn btn-accent btn-sm" href={project.url} target="_blank" rel="noopener noreferrer">
              View Project <FiExternalLink className="ms-1" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </Reveal>
  )
}
