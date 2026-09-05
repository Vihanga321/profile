import { useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { profile, projects, skills } from './data/portfolio'

function Shell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/projects', 'Projects'],
    ['/security', 'Cybersecurity'],
    ['/experience', 'Experience'],
    ['/resume', 'Resume'],
    ['/contact', 'Contact'],
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <Link className="brand" to="/" onClick={closeMenu}>V<span>.</span></Link>

        <nav className="nav-links">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(value => !value)}
          >
            <span></span><span></span>
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-links">
            {links.map(([to, label], index) => (
              <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu}>
                <span>0{index + 1}</span>{label}
              </NavLink>
            ))}
          </div>
          <a className="mobile-github" href={profile.github} target="_blank" rel="noreferrer">GitHub / @Vihanga321 ↗</a>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div>
          <strong>{profile.name}</strong>
          <p>Cybersecurity · Software · Products</p>
        </div>
        <div className="footer-right">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <p>Built with React + Vite</p>
        </div>
      </footer>
    </div>
  )
}

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="availability"><span></span>AVAILABLE FOR OPPORTUNITIES</div>
          <h1>VIHANGA<br/><span>APPUHAMY</span></h1>
          <p className="hero-role">CYBERSECURITY × SOFTWARE × PRODUCTS</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <Link className="button primary" to="/projects">Explore my work <span>↗</span></Link>
            <Link className="button ghost" to="/resume">View CV</Link>
          </div>

          <div className="hero-meta">
            <span>Based in Sri Lanka</span>
            <span>GitHub / @Vihanga321</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>
          <div className="hero-panel">
            <div className="terminal-head">
              <div><span></span><span></span><span></span></div>
              <small>portfolio.sh</small>
            </div>
            <code>
              <em>$</em> whoami<br/><br/>
              <b>Vihanga Appuhamy</b><br/>
              Cybersecurity undergraduate<br/>
              Software developer<br/>
              Product builder<br/><br/>
              <em>$</em> cat focus.txt<br/>
              secure systems<br/>
              practical software<br/>
              real-world products<br/><br/>
              <em>$</em> status<br/>
              <b className="status-text">building_</b>
            </code>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div><strong>04</strong><span>Featured projects</span></div>
        <div><strong>03</strong><span>Core disciplines</span></div>
        <div><strong>01</strong><span>Goal: build useful systems</span></div>
        <div className="proof-note"><span>Security-minded.</span><span>Product-focused.</span></div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <Eyebrow>SELECTED WORK / 2026</Eyebrow>
            <h2>Projects that show how I think and build.</h2>
          </div>
          <Link to="/projects">View all projects →</Link>
        </div>

        <div className="project-grid">
          {projects.map(project => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </section>

      <section className="section philosophy">
        <div className="philosophy-lead">
          <Eyebrow>HOW I WORK</Eyebrow>
          <h2>Understand the system.<br/>Find the problem.<br/><span>Build the fix.</span></h2>
        </div>
        <div className="philosophy-grid">
          <article>
            <span>01</span>
            <h3>Security first</h3>
            <p>I look at attack surfaces, failure points and trust boundaries—not only whether a feature works.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Build practically</h3>
            <p>I prefer working systems, prototypes and measurable outcomes over ideas that only live in slides.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Think like a product</h3>
            <p>I connect technical choices to the user, business workflow and the real problem the software needs to solve.</p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <Eyebrow>CAPABILITIES</Eyebrow>
          <h2>Security thinking.<br/>Product execution.</h2>
          <p className="section-copy">My strongest work happens where software, infrastructure and security overlap.</p>
        </div>

        <div className="skill-list">
          {Object.entries(skills).map(([group, items], index) => (
            <div className="skill-group" key={group}>
              <span>0{index + 1}</span>
              <div>
                <h3>{group}</h3>
                <p>{items.join(' · ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <Eyebrow>LET'S CONNECT</Eyebrow>
          <h2>Have a project, opportunity or interesting problem?</h2>
        </div>
        <Link className="round-link" to="/contact" aria-label="Contact Vihanga">↗</Link>
      </section>
    </>
  )
}

function ProjectCard({ project }) {
  return (
    <Link className={`project-card project-${project.number}`} to={'/projects/' + project.slug}>
      <div className="project-card-bg">{project.number}</div>
      <div className="project-top"><span>{project.number}</span><span className="project-arrow">↗</span></div>
      <div className="project-body">
        <p className="muted">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <div className="chips">{project.stack.slice(0, 4).map(item => <span key={item}>{item}</span>)}</div>
    </Link>
  )
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}

function About() {
  return (
    <>
      <PageHero eyebrow="ABOUT" title="Curious about systems. Obsessed with making them work." text="I’m a cybersecurity undergraduate and developer who enjoys turning technical ideas into practical software." />
      <section className="section split">
        <h2>What I’m building toward.</h2>
        <div className="prose">
          <p>My interests sit where cybersecurity, software development, infrastructure and product design overlap. I like understanding how systems fail, how they can be protected, and how better software can solve real operational problems.</p>
          <p>I learn best by building: security labs, business applications, dashboards, infrastructure environments and full product concepts.</p>
        </div>
      </section>
      <section className="section">
        <Eyebrow>TECHNICAL AREAS</Eyebrow>
        <div className="three-grid">
          {Object.entries(skills).map(([group, items]) => (
            <article className="info-card" key={group}><h3>{group}</h3><ul>{items.map(i => <li key={i}>{i}</li>)}</ul></article>
          ))}
        </div>
      </section>
    </>
  )
}

function Projects() {
  return (
    <>
      <PageHero eyebrow="PROJECTS" title="Selected systems, products and experiments." text="A mix of cybersecurity work, business software, marketplaces and data-driven systems." />
      <section className="section"><div className="project-grid">{projects.map(project => <ProjectCard project={project} key={project.slug} />)}</div></section>
    </>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <PageHero eyebrow="404" title="Project not found." text="That case study does not exist yet." />

  return (
    <>
      <section className="case-hero">
        <p className="muted">{project.number} / {project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="chips">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
      </section>
      <section className="section case-grid">
        <div><Eyebrow>OVERVIEW</Eyebrow><h2>The project</h2></div>
        <div className="prose">
          <p>{project.summary}</p>
          <h3>Key areas</h3>
          <ul>{project.highlights.map(h => <li key={h}>{h}</li>)}</ul>
          <h3>Case study status</h3>
          <p>This page is ready for screenshots, architecture diagrams, implementation details, results and repository links as we continue building the portfolio.</p>
        </div>
      </section>
    </>
  )
}

function Security() {
  const labs = ['Hack The Box', 'TryHackMe', 'WebGoat', 'Network reconnaissance', 'Windows Server & Active Directory', 'Virtualization & failover clustering']
  return (
    <>
      <PageHero eyebrow="CYBERSECURITY" title="Learning security by working with real systems." text="Hands-on labs, infrastructure practice, defensive thinking and controlled offensive-security exercises." />
      <section className="section"><div className="three-grid">{labs.map((lab, i) => <article className="info-card" key={lab}><span className="card-no">0{i+1}</span><h3>{lab}</h3><p>Practical learning and documented lab work in authorized environments.</p></article>)}</div></section>
    </>
  )
}

function Experience() {
  return (
    <>
      <PageHero eyebrow="EXPERIENCE" title="Building beyond the classroom." text="Product work, university projects and independent technical exploration." />
      <section className="section timeline">
        <article><span>Current</span><div><h3>Founder / Developer · Shenvix</h3><p>Designing and developing business software and digital product concepts across POS, operations, delivery and management workflows.</p></div></article>
        <article><span>Current</span><div><h3>Cybersecurity Undergraduate</h3><p>Studying cybersecurity while completing practical work across security, networking, infrastructure, virtualization and data analytics.</p></div></article>
        <article><span>Projects</span><div><h3>Independent Product Development</h3><p>Building Vision Guard, Book4Tech, MarketFusion and other experiments to strengthen full-stack and systems experience.</p></div></article>
      </section>
    </>
  )
}

function Resume() {
  return (
    <>
      <PageHero eyebrow="RESUME" title="A quick view of my technical profile." text="The downloadable PDF CV will be added after we finalize your CV content and design." />
      <section className="section resume-grid">
        <article className="info-card"><h3>Education</h3><p>Bachelor-level studies with a Cyber Security major at Victoria University / NSBM, Sri Lanka.</p></article>
        <article className="info-card"><h3>Focus</h3><p>Cybersecurity, software engineering, product development, infrastructure and automation.</p></article>
        <article className="info-card"><h3>Projects</h3><p>Vision Guard, Shenvix POS, Book4Tech and MarketFusion.</p></article>
        <article className="info-card"><h3>Tools</h3><p>React, Node.js, TypeScript, MySQL, Supabase, Docker, Hyper-V, Nmap, Burp Suite and more.</p></article>
      </section>
    </>
  )
}

function Contact() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="Let’s build something useful." text="For opportunities, collaborations or project conversations, GitHub is connected now. We can add your email and LinkedIn next." />
      <section className="section contact-grid">
        <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>@Vihanga321 ↗</strong></a>
        <div className="contact-card"><span>Location</span><strong>{profile.location}</strong></div>
      </section>
    </>
  )
}

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/security" element={<Security />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Shell>
  )
}
