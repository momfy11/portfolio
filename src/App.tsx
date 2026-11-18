import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, BrainCircuit, Layers3, Smartphone, Database, Terminal, Download } from 'lucide-react'
import { useState, useEffect } from 'react'

const projects = [
  {
    number: '01',
    name: 'V.E.R.A.',
    type: 'PERSONAL AI PROJECT',
    description: 'Full-stack voice assistant with real-time WebSocket communication, semantic long-term memory via pgvector embeddings, OAuth 2.0 auth and Docker containerisation. Progressing from web prototype to native Android.',
    tags: ['FastAPI', 'React', 'WebSockets', 'pgvector', 'OAuth 2.0', 'Docker'],
    className: 'vera',
    link: 'https://vera-app.hopto.org',
    linkLabel: 'Web preview',
    github: 'https://github.com/momfy11/VERA',
    note: 'Web preview does not represent every feature in the current native app work.',
  },
  {
    number: '02',
    name: 'Learning Bot',
    type: 'AI / FULL-STACK PROJECT',
    description: 'RAG platform with advanced data ingestion — parses text, PDFs and EPUBs into vector databases for semantic exploration. Features adaptive learning logic, user profiling and authentication.',
    tags: ['React', 'FastAPI', 'RAG', 'PostgreSQL', 'ChromaDB'],
    className: 'learning',
    github: 'https://github.com/momfy11/Learning-Bot',
  },
  {
    number: '03',
    name: 'PodManager.ai',
    type: 'INTERNSHIP / PRODUCT DEVELOPMENT',
    description: 'Designed core e-commerce features with Stripe payment integration (LIA 1). Rewrote complex business logic and co-owned critical Edit Page logic to diagnose production bugs (LIA 2).',
    tags: ['Next.js', 'Python', 'Flask', 'MongoDB', 'Azure', 'Stripe'],
    className: 'podmanager',
    note: 'Selected internship work. Details subject to project ownership and confidentiality.',
  },
  {
    number: '04',
    name: 'CUDA Audio Pipeline',
    type: 'GPU / SYSTEMS PROJECT',
    description: 'Audio enhancement pipeline using DeepFilterNet with CUDA-accelerated processing. Rewrote data flow for GPU efficiency and resolved memory allocation bottlenecks through optimised kernel design.',
    tags: ['Python', 'CUDA', 'DeepFilterNet', 'GPU Computing'],
    className: 'cuda',
    github: 'https://github.com/momfy11/CUDA-Audio',
  },
  {
    number: '05',
    name: 'Squares',
    type: 'FULL-STACK APPLICATION',
    description: 'A grid-based application focused on practical problem-solving, with a React frontend and an ASP.NET Core backend.',
    tags: ['React', 'Tailwind CSS', 'ASP.NET Core', 'C#'],
    className: 'squares',
  },
]

const skills = [
  { icon: Code2, title: 'Frontend', items: 'React · TypeScript · JavaScript · HTML · CSS · Tailwind CSS' },
  { icon: Terminal, title: 'Backend', items: 'C# · ASP.NET Core · Python · FastAPI · Flask · Java · REST APIs' },
  { icon: Database, title: 'Data & storage', items: 'PostgreSQL · MongoDB · SQLite · ChromaDB · pgvector' },
  { icon: BrainCircuit, title: 'AI & ML', items: 'LLM APIs · RAG · Vector search · Prompt design · DeepFilterNet · CUDA' },
  { icon: Layers3, title: 'Tools & platforms', items: 'Git · GitHub · Docker · Linux · Vite · OAuth 2.0 · CI/CD' },
  { icon: Smartphone, title: 'Application types', items: 'Responsive web · PWA · Native Android · WebSockets · GPU workloads' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    document.querySelectorAll('section[id]').forEach((el) => navObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      navObserver.disconnect()
    }
  }, [])

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
          <a href="#about" onClick={closeMenu} className={activeSection === 'about' ? 'nav-active' : ''}>About</a>
          <a href="#projects" onClick={closeMenu} className={activeSection === 'projects' ? 'nav-active' : ''}>Projects</a>
          <a href="#skills" onClick={closeMenu} className={activeSection === 'skills' ? 'nav-active' : ''}>Skills</a>
          <a href="#experience" onClick={closeMenu} className={activeSection === 'experience' ? 'nav-active' : ''}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Building useful<br />software with <span>purpose.</span></h1>
            <p className="hero-lead">Software developer with a background in operations and technical problem-solving. I build full-stack applications and AI-powered tools — turning complex ideas into practical, well-built products.</p>
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

        <section className="intro section-wrap reveal" id="about">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="intro-content">
            <h2>Curious by nature.<br /><span>Developer by choice.</span></h2>
            <div className="intro-text">
              <p>I graduated from the Software Developer programme with an AI specialisation at NBI/Handelsakademin, Gothenburg. Based in Helsingborg, Sweden.</p>
              <p>I bring ten years of operations coordination and technical problem-solving from manufacturing into software development. I enjoy working across the full stack — from shaping user experiences to building APIs, data layers and AI integrations.</p>
              <p>I'm looking for an opportunity to grow as a developer, contribute to a team and build software that solves meaningful problems.</p>
              <div className="languages">
                <span>Serbian <b>Native</b></span>
                <span>Swedish <b>Fluent</b></span>
                <span>English <b>Professional</b></span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading reveal">
            <div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects in focus<span>.</span></h2></div>
            <p>Personal projects and practical product development experience.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <div className="reveal" key={project.number}>
                <article className="project-card">
                  <div className={`project-visual ${project.className}`}>
                    <div className="visual-grid" />
                    {project.className === 'vera' && <div className="visual-orb"><div className="visual-orb-inner" /></div>}
                    {project.className === 'learning' && <div className="visual-nodes"><i /><i /><i /><i /><i /><span>KNOWLEDGE<br />GRAPH</span></div>}
                    {project.className === 'podmanager' && <div className="waveform">{Array.from({length: 34}, (_, i) => <i key={i} style={{height: `${18 + ((i * 17) % 62)}%`}} />)}</div>}
                    {project.className === 'cuda' && <div className="cuda-wave">{Array.from({length: 40}, (_, i) => <i key={i} style={{height: `${14 + ((i * 23 + 7) % 72)}%`}} />)}</div>}
                    {project.className === 'squares' && <div className="square-grid">{Array.from({length: 25}, (_, i) => <i key={i} />)}</div>}
                    <span className="visual-label">{project.type}</span>
                  </div>
                  <div className="project-info">
                    <div className="project-topline"><span>{project.number} / {project.type}</span><span className="project-line" /></div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    {project.note && <p className="project-note">{project.note}</p>}
                    {(project.link || project.github) && (
                      <div className="project-links">
                        {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={15} /></a>}
                        {project.github && <a className="project-link github-link" href={project.github} target="_blank" rel="noreferrer"><Github size={14} /> Source <ArrowUpRight size={15} /></a>}
                      </div>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-kicker reveal">03 / TOOLKIT</div>
          <div className="skills-heading reveal"><h2>Tools I work with<span>.</span></h2><p>Technologies I've used across education, personal projects and internship work.</p></div>
          <div className="skill-grid">
            {skills.map(({icon: Icon, title, items}) => (
              <div className="skill-card reveal" key={title}>
                <div className="skill-icon"><Icon size={19} /></div>
                <h3>{title}</h3>
                <p>{items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-kicker reveal">04 / EXPERIENCE & EDUCATION</div>
          <div className="timeline">
            <article className="timeline-item reveal">
              <div className="timeline-date">2025 – 2026</div>
              <div><h3>Software Developer Intern <span>· PodManager.ai</span></h3><p>Two internship periods (LIA 1 & 2). Designed and built core e-commerce features with Stripe payment integration. Rewrote complex business logic, co-owned critical page logic and diagnosed production bugs. Agile Git workflows with CI/CD.</p><div className="mini-tags">Next.js / Flask / MongoDB / Azure / Stripe / CI/CD</div></div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-date">2016 – 2026</div>
              <div><h3>Operations Coordinator <span>· McNeil AB</span></h3><p>Coordinated daily operations and workforce planning across departments for ten years. Investigated workflow bottlenecks, troubleshot technical and infrastructure incidents alongside international support teams. Extensive work with business systems and operational data.</p><div className="mini-tags">Coordination / Systems / Troubleshooting / Data / Process Improvement</div></div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-date">2024 – 2026</div>
              <div><h3>Software Developer – AI Specialisation <span>· NBI/Handelsakademin</span></h3><p>Higher vocational education focused on full-stack development, software engineering and applied AI.</p><div className="mini-tags">Software engineering / Full-stack / AI / Python / C#</div></div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-date">2002 – 2010</div>
              <div><h3>Earlier Education <span>· Rönnowska Upper Secondary</span></h3><p>Marine Engineering (Motorman) and Electrical Engineering & IT programmes. Foundation in technical systems and engineering thinking.</p><div className="mini-tags">Marine Engineering / Electrical Engineering / IT</div></div>
            </article>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-kicker reveal">05 / CONTACT</div>
          <div className="contact-panel reveal">
            <div>
              <div className="eyebrow"><span className="status-dot" /> OPEN TO THE NEXT CHALLENGE</div>
              <h2>Have a project<br />in mind<span>?</span></h2>
              <p>I'm interested in junior software development roles, especially within full-stack development and applied AI.</p>
              <a className="button button-primary cv-button" href={`${import.meta.env.BASE_URL}Srecko_Radivojevic_CV.pdf`} download><Download size={16} /> Download CV</a>
            </div>
            <div className="contact-links">
              <a href="https://github.com/momfy11" target="_blank" rel="noreferrer"><Github size={19} /> GitHub <ArrowUpRight size={15} /></a>
              <a href="https://www.linkedin.com/in/srecko-radivojevic-b77272106/" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn <ArrowUpRight size={15} /></a>
              <a href="mailto:Momfy86@gmail.com"><Mail size={19} /> Momfy86@gmail.com <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  )
}

export default App
