import useTilt from '../hooks/useTilt'

// Standalone tilt wrapper for elements that must not own the reveal transform.
export default function Tilt({ max = 5, className = '', children, ...rest }) {
  const handlers = useTilt(max)
  return (
    <div className={`tilt-el has-tilt ${className}`} {...handlers} {...rest}>
      {children}
    </div>
  )
}
