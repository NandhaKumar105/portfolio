# Nandha Kumar P — Frontend Developer Portfolio

React + Vite + Bootstrap 5 portfolio with a dark/light theme, scroll-spy navigation, reveal animations, project detail modal and a validated contact form.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint      # ESLint
npm run build     # production build -> dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  components/   Navbar, Hero, About, Skills, Experience, Projects, ProjectCard,
                ProjectModal, ProjectPreview, Education, Certification, Contact, Footer
  data/content.js   ALL text content (profile, skills, jobs, projects, education)
  hooks/        useActiveSection (scroll-spy), useReveal (IntersectionObserver)
  index.css     theme tokens + custom styling on top of Bootstrap 5
public/         favicon.svg (and your resume.pdf)
```

## Customize

- **Content:** edit `src/data/content.js`. Everything on the page comes from there.
- **Resume:** copy your PDF to `public/resume.pdf`. Until then the "Download Resume" button returns a 404.
- **GitHub:** set `github` in `profile` to your real profile URL. GitHub icons in the Hero and Footer appear only when it is set.
- **Project links:** each project has an empty `url`, so cards show "Case Study" (opens the details modal). Add a real `url` to turn it into a "View Project" link.
- **Project previews:** the thumbnails are original CSS illustrations (labelled "Illustrative mockup"), not real screenshots. To use real screenshots, put images in `public/` and swap `ProjectPreview` for an `<img>`.
- **Colors:** change the CSS variables at the top of `src/index.css` (`--accent`, `--accent-2`, backgrounds).
- **Open Graph image:** add `public/og.png` and a `<meta property="og:image">` tag in `index.html`.

## Contact form

There is no backend. A valid submission opens the visitor's email client via `mailto:` with the message prefilled, and the UI says so. To send directly from the page, replace `sendMessage` in `src/components/Contact.jsx` with a request to Formspree, EmailJS or Netlify Forms.

## Deploy

**Vercel:** push the repo to GitHub → Import project at vercel.com → framework "Vite" is auto-detected (build `npm run build`, output `dist`) → Deploy. CLI: `npx vercel`.

**Netlify:** push to GitHub → "Add new site" → Import → build command `npm run build`, publish directory `dist` → Deploy. Or drag the `dist/` folder onto app.netlify.com/drop after `npm run build`.
