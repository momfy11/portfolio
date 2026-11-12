import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, BrainCircuit, Layers3, Smartphone, Database, Terminal } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    name: 'V.E.R.A.',
    type: 'PERSONAL AI PROJECT',
    description: 'A voice-enabled personal assistant designed to understand context, learn preferences over time and help with everyday tasks. The project is progressing from a web prototype into native Android development.',
    tags: ['AI', 'Python', 'Android', 'Voice', 'Memory'],
    className: 'vera',
    link: 'https://vera-app.hopto.org',
    linkLabel: 'Web preview',
    note: 'The web preview does not represent every feature in the current native app work.',
  },
  {
    number: '02',
    name: 'Learning Bot',
    type: 'AI / FULL-STACK PROJECT',
    description: 'An AI-supported learning application exploring retrieval-augmented generation, structured learning profiles and different ways to guide users through a topic.',
    tags: ['React', 'FastAPI', 'RAG', 'PostgreSQL', 'ChromaDB'],
    className: 'learning',
  },
  {
    number: '03',
    name: 'PodManager.ai',
    type: 'INTERNSHIP / PRODUCT DEVELOPMENT',
    description: 'Contributed to a podcast production platform during my internship, working with application features around audio, video, guests and AI-assisted workflows.',
    tags: ['Next.js', 'Python', 'Flask', 'MongoDB', 'Azure'],
    className: 'podmanager',
    note: 'Selected internship work. Details and implementation are subject to project ownership and confidentiality.',
  },
  {
    number: '04',
    name: 'Squares',
    type: 'FULL-STACK APPLICATION',
    description: 'A grid-based application focused on practical problem-solving, with a React frontend and an ASP.NET Core backend.',
    tags: ['React', 'Tailwind CSS', 'ASP.NET Core', 'C#'],
    className: 'squares',
  },
]

const skills = [
  { icon: Code2, title: 'Frontend', items: 'React · TypeScript · JavaScript · HTML · CSS · Tailwind CSS' },
  { icon: Terminal, title: 'Backend', items: 'C# · ASP.NET Core · Python · FastAPI · Flask · Java' },
  { icon: Database, title: 'Data & storage', items: 'PostgreSQL · MongoDB · SQLite · ChromaDB' },
  { icon: BrainCircuit, title: 'AI & integration', items: 'LLM APIs · RAG · Prompt design · Voice integrations' },
  { icon: Layers3, title: 'Tools & workflow', items: 'Git · GitHub · Docker · REST APIs · VS Code' },
  { icon: Smartphone, title: 'Application development', items: 'Responsive web · PWA · Native Android development' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-label">SOFTWARE DEVELOPER</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Building useful<br />software with <span>purpose.</span></h1>
            <p className="hero-lead">I'm a software developer focused on full-stack engineering and AI-powered applications — turning ideas into practical, well-built products.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><b>01</b> Full-stack development</span>
              <span><b>02</b> Applied AI</span>
              <span><b>03</b> Product mindset</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract code-inspired graphic">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="orbit orbit-c" />
            <div className="core-card">
              <div className="core-top"><span>BUILD / LEARN / IMPROVE</span><span className="core-live">● LIVE</span></div>
              <div className="code-mark"><span>&lt;</span><i>/</i><span>&gt;</span></div>
              <div className="core-bottom"><span>curiosity.exe</span><span>RUNNING</span></div>
            </div>
            <div className="float-chip chip-ai"><BrainCircuit size={15} /> AI SYSTEMS</div>
            <div className="float-chip chip-code"><Code2 size={15} /> CLEAN CODE</div>
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE <ArrowDown size={13} /></a>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="intro-content">
            <h2>Curious by nature.<br /><span>Developer by choice.</span></h2>
            <div className="intro-text">
              <p>I recently graduated from the Software Developer programme with an AI specialisation at NBI/Handelsakademin in Halmstad, Sweden.</p>
              <p>I enjoy working across the stack — from shaping user experiences to building APIs, data layers and AI integrations. I learn by building, testing ideas and improving them through real-world use.</p>
              <p>I'm now looking for an opportunity to grow as a developer, contribute to a team and build software that solves meaningful problems.</p>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading">
            <div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects in focus<span>.</span></h2></div>
            <p>A selection of personal projects and practical product development experience.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.className}`}>
                  <div className="visual-grid" />
                  {project.className === 'vera' && <div className="visual-orb"><div className="visual-orb-inner" /></div>}
                  {project.className === 'learning' && <div className="visual-nodes"><i /><i /><i /><i /><i /><span>KNOWLEDGE<br />GRAPH</span></div>}
                  {project.className === 'podmanager' && <div className="waveform">{Array.from({length: 34}, (_, i) => <i key={i} style={{height: `${18 + ((i * 17) % 62)}%`}} />)}</div>}
                  {project.className === 'squares' && <div className="square-grid">{Array.from({length: 25}, (_, i) => <i key={i} />)}</div>}
                  <span className="visual-label">{project.type}</span>
                </div>
                <div className="project-info">
                  <div className="project-topline"><span>{project.number} / {project.type}</span><span className="project-line" /></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  {project.note && <p className="project-note">{project.note}</p>}
                  {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={15} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-kicker">03 / TOOLKIT</div>
          <div className="skills-heading"><h2>Tools I work with<span>.</span></h2><p>Technologies I've used across education, personal projects and internship work. Always learning and expanding the toolkit.</p></div>
          <div className="skill-grid">
            {skills.map(({icon: Icon, title, items}) => (
              <div className="skill-card" key={title}><div className="skill-icon"><Icon size={19} /></div><h3>{title}</h3><p>{items}</p></div>
            ))}
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-kicker">04 / EXPERIENCE & EDUCATION</div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">INTERNSHIP</div>
              <div><h3>Software Development Intern <span>· PodManager.ai</span></h3><p>Contributed to a product environment involving podcast workflows, audio/video functionality and AI-supported features. Worked with a modern web stack and collaborated on practical application development.</p><div className="mini-tags">Next.js / Flask / MongoDB / Azure</div></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">EDUCATION</div>
              <div><h3>Software Developer – AI Specialisation <span>· NBI/Handelsakademin</span></h3><p>Higher vocational education focused on software development, full-stack programming and applied AI. Based in Halmstad, Sweden.</p><div className="mini-tags">Software engineering / Full-stack / AI</div></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">EARLIER CAREER</div>
              <div><h3>Team Coordination & Operations <span>· Manufacturing</span></h3><p>Previous experience coordinating daily work, prioritising tasks, troubleshooting operational issues and supporting teams in a technical production environment.</p><div className="mini-tags">Coordination / Troubleshooting / Problem-solving</div></div>
            </article>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-kicker">05 / CONTACT</div>
          <div className="contact-panel">
            <div><div className="eyebrow"><span className="status-dot" /> OPEN TO THE NEXT CHALLENGE</div><h2>Have a project<br />in mind<span>?</span></h2><p>I'm interested in junior software development opportunities, especially within full-stack development and applied AI.</p></div>
            <div className="contact-links">
              <a href="https://github.com/momfy11" target="_blank" rel="noreferrer"><Github size={19} /> GitHub <ArrowUpRight size={15} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn <ArrowUpRight size={15} /></a>
              <div className="contact-hint"><Mail size={18} /><span>Add your professional email before publishing.</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  )
}

export default App
