import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiSend } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

const initial = { name: '', email: '', subject: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).'
  if (!v.email.trim()) e.email = 'Email is required.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please enter a subject (at least 3 characters).'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

/*
 * Integration point: this form has no backend, so it opens the visitor's email
 * client via mailto:. To send directly from the page, replace `sendMessage`
 * with a fetch() to an email service (e.g. Formspree, EmailJS, Netlify Forms)
 * and report its result through `setStatus`.
 */
function sendMessage(values) {
  const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
  window.location.href =
    `mailto:${profile.email}?subject=${encodeURIComponent(values.subject.trim())}` +
    `&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [copied, setCopied] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus({ type: 'error', text: 'Please fix the highlighted fields and try again.' })
      return
    }
    try {
      sendMessage(values)
      setStatus({
        type: 'success',
        text: 'Your email app should open with the message ready. Nothing is sent until you press send there.',
      })
      setValues(initial)
    } catch {
      setStatus({ type: 'error', text: `Could not open your email app. Please email ${profile.email} directly.` })
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setStatus({ type: 'error', text: `Copy failed. My email is ${profile.email}` })
    }
  }

  const field = (name, label, props = {}) => (
    <div className="mb-3">
      <label htmlFor={`c-${name}`} className="form-label">{label}</label>
      {props.as === 'textarea' ? (
        <textarea
          id={`c-${name}`} name={name} rows={5} value={values[name]} onChange={onChange}
          className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
          aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `e-${name}` : undefined}
        />
      ) : (
        <input
          id={`c-${name}`} name={name} type={props.type ?? 'text'} value={values[name]} onChange={onChange}
          autoComplete={props.autoComplete}
          className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
          aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `e-${name}` : undefined}
        />
      )}
      {errors[name] && <div id={`e-${name}`} className="invalid-feedback">{errors[name]}</div>}
    </div>
  )

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have a project in mind or looking for a frontend developer? Let's connect."
        />
        <div className="row g-4">
          <div className="col-lg-5">
            <Reveal className="glass card-pad h-100" variant="left">
              <ul className="contact-list list-unstyled mb-4">
                <li>
                  <span className="icon-tile"><FiMail /></span>
                  <div className="min-w-0">
                    <small>Email</small>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                  <button type="button" className="icon-btn ms-auto" onClick={copyEmail} aria-label="Copy email address">
                    {copied ? <FiCheck /> : <FiCopy />}
                  </button>
                </li>
                <li>
                  <span className="icon-tile"><FiPhone /></span>
                  <div>
                    <small>Phone</small>
                    <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
                  </div>
                </li>
                <li>
                  <span className="icon-tile"><FiMapPin /></span>
                  <div>
                    <small>Location</small>
                    <span>{profile.location}</span>
                  </div>
                </li>
                <li>
                  <span className="icon-tile"><FaLinkedinIn /></span>
                  <div className="min-w-0">
                    <small>LinkedIn</small>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">nandha-kumar-61407724a</a>
                  </div>
                </li>
              </ul>
              <span className="visually-hidden" aria-live="polite">{copied ? 'Email copied' : ''}</span>
              {copied && <p className="small text-success mb-0">Email copied to clipboard.</p>}
            </Reveal>
          </div>

          <div className="col-lg-7">
            <Reveal className="glass card-pad" variant="right">
              <form onSubmit={onSubmit} noValidate>
                <div className="row">
                  <div className="col-md-6">{field('name', 'Name', { autoComplete: 'name' })}</div>
                  <div className="col-md-6">{field('email', 'Email', { type: 'email', autoComplete: 'email' })}</div>
                </div>
                {field('subject', 'Subject')}
                {field('message', 'Message', { as: 'textarea' })}
                <button type="submit" className="btn btn-accent">
                  <FiSend className="me-2" aria-hidden="true" />
                  Send Message
                </button>
                <div aria-live="polite">
                  {status && (
                    <div className={`alert mt-3 mb-0 ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="status">
                      {status.text}
                    </div>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
