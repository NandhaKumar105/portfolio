import useReveal from '../hooks/useReveal'
import useTilt from '../hooks/useTilt'

// variant: 'up' (default) | 'left' | 'right' | 'zoom'
// tilt: enables the pointer-driven 3D tilt (value = max degrees).
export default function Reveal({
  as: Tag = 'div', variant = 'up', delay = 0, tilt = 0, className = '', children, ...rest
}) {
  const ref = useReveal()
  const handlers = useTilt(tilt || 6)
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${tilt ? 'has-tilt' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...(tilt ? handlers : {})}
      {...rest}
    >
      {children}
    </Tag>
  )
}
