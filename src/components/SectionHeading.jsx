import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-heading text-center mb-5">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p className="text-muted-2 mx-auto">{subtitle}</p>}
    </Reveal>
  )
}
