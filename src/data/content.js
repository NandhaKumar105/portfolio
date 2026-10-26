import {
  FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaAws, FaPlug,
} from 'react-icons/fa'
import {
  SiJavascript, SiRedux, SiMysql, SiVercel, SiNetlify, SiPostman, SiFigma,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FiCode, FiSmartphone, FiLayout, FiServer } from 'react-icons/fi'

export const profile = {
  name: 'Nandha Kumar P',
  brand: 'NANDHA.DEV',
  title: 'Frontend Developer | React.js | UI/UX',
  email: 'nandhu.105.nandhu@gmail.com',
  phone: '+91 9597714314',
  location: 'Puducherry, India',
  linkedin: 'https://www.linkedin.com/in/nandha-kumar-61407724a',
  // Add your real GitHub profile URL here to show GitHub icons in Hero and Footer.
  github: '',
  // Put your resume PDF at public/resume.pdf (see README).
  resume: '/resume.pdf',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const aboutText =
  "I'm a Frontend Developer with 1+ year of experience building responsive, user-focused web applications using React.js, JavaScript, HTML5, CSS3, and Bootstrap 5. I enjoy translating Figma designs and wireframes into pixel-perfect interfaces, integrating REST APIs, and creating smooth user experiences across devices. I also have experience with Redux Toolkit, UI/UX design, testing, and frontend deployment."

export const highlights = [
  { icon: FiCode, title: 'Frontend Development', text: 'React.js, JavaScript ES6+ and Redux Toolkit.' },
  { icon: FiSmartphone, title: 'Responsive Web Design', text: 'Layouts that adapt across phones, tablets and desktops.' },
  { icon: FiLayout, title: 'UI/UX Implementation', text: 'Figma designs turned into pixel-perfect interfaces.' },
  { icon: FiServer, title: 'REST API Integration', text: 'Fetching and updating dynamic data in the UI.' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', color: '#61dafb', icon: FaReact },
      { name: 'JavaScript ES6+', color: '#f7df1e', icon: SiJavascript },
      { name: 'Redux Toolkit', color: '#60a5fa', icon: SiRedux },
      { name: 'HTML5', color: '#e34f26', icon: FaHtml5 },
      { name: 'CSS3', color: '#1572b6', icon: FaCss3Alt },
      { name: 'Bootstrap 5', color: '#60a5fa', icon: FaBootstrap },
      { name: 'REST API Integration', icon: FaPlug },
    ],
  },
  {
    title: 'Database & Testing',
    skills: [
      { name: 'MySQL', color: '#4479a1', icon: SiMysql },
      { name: 'Postman', color: '#ff6c37', icon: SiPostman },
    ],
  },
  {
    title: 'Deployment',
    skills: [{ name: 'Vercel', icon: SiVercel }, { name: 'Netlify', color: '#00c7b7', icon: SiNetlify }],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', color: '#f05032', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Figma', color: '#f24e1e', icon: SiFigma },
      { name: 'VS Code', color: '#2f9ae8', icon: VscVscode },
      { name: 'AWS basics', color: '#ff9900', icon: FaAws },
    ],
  },
]

export const experience = [
  {
    company: 'Skyntric Technologies',
    location: 'Bangalore',
    period: 'July 2026 – Present',
    current: true,
    points: [
      'Develop and maintain responsive web interfaces using React.js, JavaScript, HTML5, CSS3, and Bootstrap 5.',
      'Convert Figma designs into responsive, pixel-perfect interfaces.',
      'Perform UI, functional, and cross-browser testing.',
      'Manage version control using Git and GitHub and collaborate through feature branches and code reviews.',
    ],
  },
  {
    company: 'Shine Craft Technologies',
    location: 'Puducherry',
    period: 'February 2025 – June 2026',
    current: false,
    points: [
      'Developed responsive web applications using React.js and Bootstrap 5.',
      'Designed user-friendly interfaces using Figma and modern UI/UX principles.',
      'Tested and debugged interfaces across supported devices.',
      'Used Git and GitHub for version control and collaborative development.',
      'Deployed frontend applications using Vercel and Netlify, with foundational AWS knowledge.',
    ],
  },
]

// No project URLs were provided, so `url` is empty and each card shows a
// "Case Study" action that opens the details modal. Add a real URL to switch
// that action to a "View Project" link.
export const projects = [
  {
    id: 'skyntric',
    name: 'Skyntric Technologies Website',
    category: 'Company Website',
    preview: 'corporate',
    tags: ['React.js', 'HTML5', 'CSS3', 'Bootstrap 5'],
    description:
      'Developed and maintained a responsive company website with reusable UI components, cross-browser testing, and Git-based collaboration.',
    url: '',
  },
  {
    id: 'limitz',
    name: 'Limitz — Data Monitoring Application',
    category: 'UI/UX Design | Figma',
    preview: 'analytics',
    tags: ['UI/UX Design', 'Figma'],
    description:
      'Designed user flows, wireframes, and high-fidelity prototypes for a smart data monitoring application. Created responsive dashboards and visualizations for tracking data usage, application activity, and screen time, with intuitive usage-limit controls.',
    url: '',
  },
  {
    id: 'neet',
    name: 'NEET Champ — Learning Platform',
    category: 'Learning Platform',
    preview: 'learning',
    tags: ['React.js', 'HTML5', 'CSS3', 'Bootstrap 5', 'UI/UX Design'],
    description:
      'Designed the user experience in Figma and developed responsive frontend interfaces focused on intuitive navigation and an engaging learning experience.',
    url: '',
  },
  {
    id: 'karope',
    name: 'Karope — Admin Panel',
    category: 'Admin Dashboard',
    preview: 'admin',
    tags: ['React.js', 'Bootstrap 5', 'Redux Toolkit', 'REST API Integration', 'UI/UX Design'],
    description:
      'Designed wireframes and high-fidelity prototypes, developed responsive admin interfaces, integrated REST APIs to fetch and update dynamic data, and implemented Redux Toolkit for state management.',
    url: '',
  },
]

export const education = [
  { degree: 'Bachelor of Technology in Information Technology', school: 'Manakula Vinayagar Institute of Technology, Puducherry', period: '2020–2024', score: '83%' },
  { degree: 'Higher Secondary School', school: 'Seventh Day Adventist Higher Secondary School, Puducherry', period: '2019–2020', score: '76%' },
  { degree: 'SSLC', school: 'Seventh Day Adventist Higher Secondary School, Puducherry', period: '2017–2018', score: '86%' },
]

export const certification = {
  title: 'Python Full Stack Development',
  issuer: 'FITA Academy',
  text: 'Completed a six-month Python Full Stack Development course, gaining practical experience in frontend and backend technologies.',
}
