import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="Technical Skills" title="Tools I work with" />
        <div className="row g-4">
          {skillGroups.map((group, gi) => (
            <div className={group.skills.length > 4 ? 'col-lg-8' : 'col-md-6 col-lg-4'} key={group.title}>
              <Reveal className="glass card-pad skill-group h-100" variant={gi % 2 ? 'right' : 'left'} tilt={3}>
                <h3 className="h6 group-title">{group.title}</h3>
                <ul className="skill-list list-unstyled mb-0">
                  {group.skills.map(({ name, icon: Icon, color }, si) => (
                    <li className="skill-chip" key={name} title={name} tabIndex={0} style={{ '--i': si }}>
                      <Icon aria-hidden="true" style={color ? { color } : undefined} />
                      <span className="skill-name">{name}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
