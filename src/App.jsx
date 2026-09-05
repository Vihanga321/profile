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

function ShenvixCaseStudy({ project }) {
  const modules = [
    ['01', 'Point of Sale', 'Fast checkout, product lookup, held bills, voids, reprints and operational controls for daily sales.'],
    ['02', 'Inventory', 'Products, stock movement, GRN / purchasing workflows and stock-aware sales operations.'],
    ['03', 'Customers & Warranty', 'Customer records, autofill, warranty lookup and after-sales support workflows.'],
    ['04', 'Reports & Expenses', 'Day bills, operational reporting, expenses and business visibility for owners.'],
    ['05', 'Delivery Operations', 'Loading-to-complete delivery jobs, driver workflows, fuel expenses and owner oversight.'],
    ['06', 'Manufacturing', 'Material prices, production records and stock summaries for block / brick manufacturing.'],
    ['07', 'Rental', 'Rental periods, advances, customer identity capture and item return tracking.'],
    ['08', 'Admin & Recovery', 'Users, audit logs, settings, activation, backup / restore and operational safeguards.'],
  ]

  const threats = [
    ['Unauthorized access', 'Protecting administrative, cashier and owner-only functions from inappropriate access.'],
    ['Privilege misuse', 'Reducing the risk of sensitive actions such as voids, returns and configuration changes being abused.'],
    ['Transaction integrity', 'Keeping sales, totals, stock deductions and financial records consistent across workflows.'],
    ['Data loss / corruption', 'Designing backup and restore paths around a local business database and operational state.'],
    ['Customer data exposure', 'Treating customer details, warranty records and identity images as sensitive business data.'],
    ['Cloud authorization', 'Separating owner and driver functions when selected operational modules extend to Supabase.'],
    ['Auditability', 'Keeping important user and operational actions traceable through logs and controlled workflows.'],
    ['Peripheral reliability', 'Handling printer, receipt and cash-drawer failures without breaking the core sale workflow.'],
  ]

  const contributions = [
    'Designed the product structure and business workflows from POS checkout through back-office operations.',
    'Built the desktop application stack with Electron, React and TypeScript.',
    'Designed and evolved the local data layer using Prisma and SQLite.',
    'Implemented sales, product, stock, customer, warranty, supplier and reporting workflows.',
    'Integrated receipt printing and cash-drawer operations into the desktop experience.',
    'Expanded the system into delivery, manufacturing and rental workflows instead of keeping it as a basic POS.',
    'Worked through production-style bugs including bill voiding, receipt rendering, UI layout and database migration issues.',
    'Designed cloud-connected owner / driver extensions using Supabase for selected operational workflows.',
  ]

  return (
    <div className="shenvix-case">
      <section className="shenvix-hero">
        <div className="case-breadcrumb">
          <Link to="/projects">Projects</Link><span>/</span><span>Shenvix POS</span>
        </div>

        <div className="shenvix-hero-grid">
          <div>
            <div className="case-kicker"><span>02</span> BUSINESS SOFTWARE / DESKTOP ECOSYSTEM</div>
            <h1>SHENVIX<br/><span>POS</span></h1>
            <p className="shenvix-lead">
              A modular point-of-sale and business operations system that grew from checkout and stock control into
              warranty, reporting, delivery, manufacturing, rental and cloud-connected workflows.
            </p>
            <div className="chips case-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          </div>

          <aside className="case-facts">
            <div><span>Role</span><strong>Founder / Product Designer / Developer</strong></div>
            <div><span>Platform</span><strong>Windows Desktop + Selected Cloud Modules</strong></div>
            <div><span>Architecture</span><strong>Electron · React · Prisma · SQLite</strong></div>
            <div><span>Focus</span><strong>Retail & Business Operations</strong></div>
          </aside>
        </div>
      </section>

      <section className="case-metrics">
        <div><strong>Multi-module</strong><span>Business ecosystem</span></div>
        <div><strong>Desktop-first</strong><span>Operational application</span></div>
        <div><strong>Local + Cloud</strong><span>Hybrid workflow design</span></div>
        <div><strong>End-to-end</strong><span>Product ownership</span></div>
      </section>

      <section className="section shenvix-story">
        <div className="case-section-title">
          <Eyebrow>01 / THE PROBLEM</Eyebrow>
          <h2>A POS should do more than print a bill.</h2>
        </div>
        <div className="case-story-copy">
          <p className="case-big-copy">
            Small and growing businesses often operate sales, stock, warranty, suppliers, expenses and delivery as
            separate processes. Shenvix POS was designed around the idea that those workflows should connect.
          </p>
          <p>
            The project began with the checkout experience and expanded as new operational problems appeared. Instead
            of treating every feature as an isolated screen, the system was shaped around the lifecycle of a real
            transaction: purchase stock, sell an item, record the customer, handle warranty, report the result and
            support the next operational step.
          </p>
        </div>
      </section>

      <section className="section screenshot-section">
        <div className="section-heading">
          <div>
            <Eyebrow>02 / INTERFACE</Eyebrow>
            <h2>Designed for daily use, not just a demo.</h2>
          </div>
          <p className="screenshot-note">UI previews — ready to replace with your real screenshots.</p>
        </div>

        <div className="shot-featured">
          <div className="shot-browser">
            <div className="shot-topbar"><span></span><span></span><span></span><small>Shenvix POS / Checkout</small></div>
            <div className="pos-mock">
              <aside className="pos-sidebar">
                <b>SHENVIX</b>
                {['Sell', 'Products', 'Customers', 'Warranty', 'Reports', 'Settings'].map((item, i) => (
                  <span className={i === 0 ? 'active' : ''} key={item}>{item}</span>
                ))}
              </aside>
              <div className="pos-main">
                <div className="pos-search">Search product, barcode or quick item...</div>
                <div className="pos-products">
                  {['PVC Fitting', 'LED Bulb', 'Tap Set', 'Paint Brush', 'Switch', 'Sealant'].map((item, i) => (
                    <div key={item}><span>0{i + 1}</span><b>{item}</b><small>In stock</small></div>
                  ))}
                </div>
              </div>
              <div className="pos-bill">
                <span>CURRENT BILL</span>
                <div><b>PVC Fitting</b><small>2 × 450</small></div>
                <div><b>LED Bulb</b><small>1 × 1,250</small></div>
                <div className="pos-total"><span>Total</span><strong>LKR 2,150</strong></div>
                <button type="button">PAY & PRINT</button>
              </div>
            </div>
          </div>
          <div className="shot-caption"><span>01</span><div><strong>Checkout workspace</strong><p>Fast product lookup, current bill management and payment / receipt workflow.</p></div></div>
        </div>

        <div className="shot-grid">
          <article>
            <div className="mini-dashboard">
              <div className="mini-header"><span>OWNER DASHBOARD</span><b>Today</b></div>
              <div className="mini-stats"><div><small>Sales</small><strong>128K</strong></div><div><small>Profit</small><strong>31K</strong></div><div><small>Bills</small><strong>42</strong></div></div>
              <div className="mini-bars">{[70,45,82,58,92,65,78].map((h,i)=><i key={i} style={{height: h + '%'}}></i>)}</div>
            </div>
            <div className="shot-caption"><span>02</span><div><strong>Reporting & visibility</strong><p>Operational summaries designed for owners and daily decisions.</p></div></div>
          </article>

          <article>
            <div className="mini-ops">
              <div className="mini-header"><span>OPERATIONS</span><b>Live workflow</b></div>
              {[
                ['Delivery #204', 'Loading', 'Driver assigned'],
                ['Block Production', 'Active', 'Materials recorded'],
                ['Rental #R88', 'Due today', 'Advance received'],
              ].map(([a,b,c]) => <div className="ops-row" key={a}><span className="ops-dot"></span><div><strong>{a}</strong><small>{c}</small></div><b>{b}</b></div>)}
            </div>
            <div className="shot-caption"><span>03</span><div><strong>Extended operations</strong><p>Delivery, manufacturing and rental workflows beyond the traditional POS boundary.</p></div></div>
          </article>
        </div>
      </section>

      <section className="section architecture-section">
        <div className="case-section-title">
          <Eyebrow>03 / ARCHITECTURE</Eyebrow>
          <h2>Local reliability with room to extend.</h2>
        </div>

        <div className="architecture-map">
          <div className="arch-column">
            <span className="arch-label">DESKTOP</span>
            <div className="arch-node primary"><small>01</small><strong>React UI</strong><span>Sales · Stock · Reports · Admin</span></div>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-column">
            <span className="arch-label">APPLICATION</span>
            <div className="arch-node"><small>02</small><strong>Electron Runtime</strong><span>Desktop shell · IPC · hardware bridge</span></div>
            <div className="arch-node"><small>03</small><strong>Business Services</strong><span>Workflow rules · validation · operations</span></div>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-column">
            <span className="arch-label">DATA</span>
            <div className="arch-node"><small>04</small><strong>Prisma ORM</strong><span>Typed data access</span></div>
            <div className="arch-node"><small>05</small><strong>SQLite</strong><span>Local operational database</span></div>
          </div>
          <div className="arch-arrow split-arrow">↗<br/>↘</div>
          <div className="arch-column">
            <span className="arch-label">EXTENSIONS</span>
            <div className="arch-node accent"><small>06</small><strong>Supabase</strong><span>Selected cloud operations</span></div>
            <div className="arch-node"><small>07</small><strong>Peripherals</strong><span>Receipt printer · cash drawer</span></div>
          </div>
        </div>

        <div className="architecture-note">
          <strong>Design idea</strong>
          <p>
            Core retail operations stay close to the desktop application and local database, while selected workflows
            such as driver / owner operations can extend to cloud-backed services where remote access adds value.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><Eyebrow>04 / SYSTEM MODULES</Eyebrow><h2>From checkout to operations.</h2></div>
        </div>
        <div className="module-grid">
          {modules.map(([number, title, text]) => (
            <article className="module-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section threat-section">
        <div className="case-section-title">
          <Eyebrow>05 / THREAT & CONTROL AREAS</Eyebrow>
          <h2>Business software has a security surface too.</h2>
          <p className="section-copy">
            These are the main risk categories considered around Shenvix workflows. They describe the security surface;
            they are not a claim that the product has undergone an independent security audit.
          </p>
        </div>

        <div className="threat-grid">
          {threats.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contribution-section">
        <div className="case-section-title">
          <Eyebrow>06 / MY CONTRIBUTION</Eyebrow>
          <h2>I owned the product across design, code and workflow.</h2>
        </div>
        <div className="contribution-layout">
          <div className="contribution-quote">
            <span>ROLE</span>
            <strong>Founder<br/>Product Designer<br/>Developer</strong>
          </div>
          <div className="contribution-list">
            {contributions.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section challenge-section">
        <Eyebrow>07 / ENGINEERING CHALLENGES</Eyebrow>
        <div className="challenge-grid">
          <article><span>01</span><h3>Keeping modules consistent</h3><p>As the system grew, shared data such as customers, stock and transactions had to stay consistent across more workflows.</p></article>
          <article><span>02</span><h3>Desktop hardware</h3><p>Receipt printers and cash drawers introduced real operational dependencies that a normal web-only project does not have.</p></article>
          <article><span>03</span><h3>Growing without rewriting</h3><p>The application evolved from a POS into a broader business platform, so new modules needed to fit the existing architecture.</p></article>
          <article><span>04</span><h3>Production-style debugging</h3><p>Issues such as void-bill failures, receipt rendering, migrations and UI state required iterative debugging rather than one-off implementation.</p></article>
        </div>
      </section>

      <section className="case-outcome">
        <Eyebrow>08 / OUTCOME</Eyebrow>
        <h2>More than a student CRUD project.</h2>
        <p>
          Shenvix POS became a practical exercise in product ownership: understanding business processes, designing
          workflows, maintaining a growing data model, integrating hardware and extending a desktop application into
          new operational domains.
        </p>
        <div className="outcome-actions">
          <Link className="button primary" to="/projects/book4tech">Next project <span>→</span></Link>
          <Link className="button ghost" to="/projects">All projects</Link>
        </div>
      </section>
    </div>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <PageHero eyebrow="404" title="Project not found." text="That case study does not exist yet." />

  if (slug === 'shenvix-pos') return <ShenvixCaseStudy project={project} />

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
