import { useEffect, useState } from 'react'
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
          {projects.slice(0, 4).map(project => <ProjectCard project={project} key={project.slug} />)}
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

const shenvixScreens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    image: '/projects/shenvix/dashboard.png',
    title: 'Business Dashboard',
    description:
      'A central view of sales, profit, expenses, invoices, stock value, outstanding balances, load sales and active driver operations.',
  },
  {
    id: 'sales',
    label: 'POS / Sales',
    image: '/projects/shenvix/sales.png',
    title: 'Retail Sales & Invoicing',
    description:
      'Barcode and item entry, retail and wholesale workflows, customer details, payments, discounts, warranty, held bills, voids, drawer controls and invoice operations.',
  },
  {
    id: 'products',
    label: 'Products',
    image: '/projects/shenvix/products.png',
    title: 'Product & Stock Management',
    description:
      'Manage hardware products, product codes, Sinhala names, categories, brands, suppliers, cost, retail and wholesale prices, stock quantities, reorder levels, rack locations, units, warranty and expiry information.',
  },
  {
    id: 'suppliers',
    label: 'Suppliers',
    image: '/projects/shenvix/suppliers.png',
    title: 'Supplier Management',
    description:
      'Supplier records, company details, contact information, supplied products, credit balances and supplier status.',
  },
  {
    id: 'grn',
    label: 'GRN / Purchases',
    image: '/projects/shenvix/grn-purchases.png',
    title: 'GRN & Purchasing',
    description:
      'Receive supplier stock, record supplier invoices, update purchasing costs, quantities, selling prices, expiry dates, rack locations and supplier balances.',
  },
  {
    id: 'reports',
    label: 'Reports',
    image: '/projects/shenvix/reports.png',
    title: 'Business Reporting',
    description:
      'Sales, stock, purchasing, income and operational reporting with date filters and PDF, print and Excel export workflows.',
  },
  {
    id: 'backup',
    label: 'Backup / Restore',
    image: '/projects/shenvix/backup-restore.png',
    title: 'Backup & Recovery',
    description:
      'Manual backup, database restore, automatic backup configuration and backup-history controls for the local SQLite business database.',
  },
]

function ShenvixGallery() {
  const [activeScreenId, setActiveScreenId] = useState(shenvixScreens[0].id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const activeIndex = shenvixScreens.findIndex(screen => screen.id === activeScreenId)
  const activeScreen = shenvixScreens[activeIndex]

  useEffect(() => {
    if (!lightboxOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = event => {
      if (event.key === 'Escape') setLightboxOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [lightboxOpen])

  const selectScreen = id => {
    setActiveScreenId(id)
    setLightboxOpen(false)
  }

  return (
    <>
      <div className="screen-tabs" role="tablist" aria-label="Shenvix POS screens">
        {shenvixScreens.map(screen => (
          <button
            className={screen.id === activeScreen.id ? 'active' : ''}
            key={screen.id}
            type="button"
            role="tab"
            aria-selected={screen.id === activeScreen.id}
            onClick={() => selectScreen(screen.id)}
          >
            {screen.label}
          </button>
        ))}
      </div>

      <div className="gallery-stage" role="tabpanel" aria-label={activeScreen.title}>
        <div className="gallery-window">
          <div className="gallery-window-bar">
            <div className="window-dots" aria-hidden="true"><span></span><span></span><span></span></div>
            <span>SHENVIX POS / {activeScreen.label.toUpperCase()}</span>
            <small>REAL APPLICATION UI</small>
          </div>
          <button
            className="gallery-image-button"
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`Enlarge ${activeScreen.title} screenshot`}
          >
            <img
              src={activeScreen.image}
              alt={`Shenvix POS ${activeScreen.title} screen built for Sudeepa Hardware`}
            />
            <span>Click image to enlarge</span>
          </button>
        </div>

        <div className="gallery-caption">
          <span>{String(activeIndex + 1).padStart(2, '0')} / {activeScreen.label}</span>
          <div>
            <h3>{activeScreen.title}</h3>
            <p>{activeScreen.description}</p>
          </div>
        </div>
      </div>

      <div className="screen-thumbnails" aria-label="Choose another Shenvix POS screen">
        {shenvixScreens.map((screen, index) => (
          <button
            className={screen.id === activeScreen.id ? 'active' : ''}
            key={screen.id}
            type="button"
            onClick={() => selectScreen(screen.id)}
            aria-label={`Show ${screen.title}`}
            aria-current={screen.id === activeScreen.id ? 'true' : undefined}
          >
            <img src={screen.image} alt="" loading="lazy" />
            <span>{String(index + 1).padStart(2, '0')} / {screen.label}</span>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${activeScreen.title} full-screen preview`} onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close" type="button" aria-label="Close full-screen preview" onClick={() => setLightboxOpen(false)}>Close <span>×</span></button>
          <div className="lightbox-content" onClick={event => event.stopPropagation()}>
            <img src={activeScreen.image} alt={`Shenvix POS ${activeScreen.title} screen`} />
            <p>{activeScreen.title} <span>— {activeScreen.label}</span></p>
          </div>
        </div>
      )}
    </>
  )
}

function ShenvixCaseStudy({ project }) {
  const modules = [
    ['01', 'Retail & Wholesale POS', 'Fast item or barcode entry, retail / wholesale modes, customer details, discounts, payment status, held bills, voids and receipt operations.'],
    ['02', 'Products & Stock', 'Hardware product codes, Sinhala names, categories, brands, suppliers, cost / selling prices, quantities, reorder levels, racks, UOM, warranty and expiry data.'],
    ['03', 'Suppliers & GRN', 'Supplier records, supplied products, credit balances, stock receiving, supplier invoices, purchasing costs and GRN summaries.'],
    ['04', 'Credit & Outstanding', 'Pay-later sales, outstanding balances, payment tracking and operational visibility around customer credit.'],
    ['05', 'Warranty & Returns', 'Warranty-aware products, warranty lookup and sales-return workflows for after-sales support.'],
    ['06', 'Rentals', 'Rental products, rental records, advances and reporting alongside the normal hardware retail business.'],
    ['07', 'Manufacturing & Delivery', 'Raw-material prices, production / manufacturing records, load sales, driver jobs and lorry-delivery workflows.'],
    ['08', 'Reports, Admin & Recovery', 'Sales and stock reports, PDF / Excel export, expenses, users, audit logs, settings, backup / restore and auto-backup controls.'],
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
    "Translated Sudeepa Hardware's real retail and back-office workflows into the product structure, from checkout through stock, purchasing and operations.",
    'Built the desktop application stack with Electron, React and TypeScript.',
    'Designed and evolved the local data layer using Prisma and SQLite.',
    'Implemented retail / wholesale sales, product, stock, customer, warranty, supplier, GRN / purchases, outstanding and reporting workflows.',
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
              A custom point-of-sale and business operations system I built for Sudeepa Hardware, combining day-to-day
              hardware-store sales with stock, suppliers, warranty, credit, rentals, manufacturing, delivery and reporting.
            </p>
            <div className="chips case-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          </div>

          <aside className="case-facts">
            <div><span>Project</span><strong>Shenvix POS</strong></div>
            <div><span>Built For</span><strong>Sudeepa Hardware</strong></div>
            <div><span>Role</span><strong>Founder / Product Designer / Developer</strong></div>
            <div><span>Type</span><strong>Custom Business Software</strong></div>
            <div><span>Platform</span><strong>Windows Desktop + selected cloud-connected operational modules</strong></div>
            <div><span>Tech Stack</span><strong>Electron · React · TypeScript · Prisma · SQLite · Supabase</strong></div>
          </aside>
        </div>
      </section>

      <section className="case-metrics">
        <div><strong>Sudeepa Hardware</strong><span>Real business use case</span></div>
        <div><strong>Retail + Wholesale</strong><span>Sales workflows</span></div>
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
            Sudeepa Hardware needed more than a simple billing screen. A hardware-store workflow has large product lists,
            changing supplier costs, stock quantities, retail and wholesale sales, customer credit, warranty items,
            purchases and operational activities that all need to stay connected.
          </p>
          <p>
            I built Shenvix POS around Sudeepa Hardware's actual workflows. The system grew from product management and
            invoicing into supplier records, GRN / purchases, outstanding balances, warranty, returns, rentals,
            manufacturing, lorry-delivery operations, reports, audit logs and backup / restore.
          </p>
        </div>
      </section>

      <section className="section screenshot-section">
        <div className="section-heading">
          <div>
            <Eyebrow>02 / PRODUCT INTERFACE</Eyebrow>
            <h2>Built for real day-to-day hardware-store operations.</h2>
            <p className="gallery-intro">Actual Shenvix POS application screens from the system built for Sudeepa Hardware.</p>
          </div>
          <span className="interface-badge">REAL APPLICATION UI</span>
        </div>
        <ShenvixGallery />
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
        <h2>A business system shaped by real operations.</h2>
        <p>
          Shenvix POS became a real business system built around Sudeepa Hardware's operations: hardware retail and
          wholesale sales, inventory, purchasing, supplier management, warranty, credit, rentals, manufacturing,
          delivery, reporting and recovery workflows in one expanding desktop platform.
        </p>
        <div className="outcome-actions">
          <Link className="button primary" to="/projects/book4tech">Next project <span>→</span></Link>
          <Link className="button ghost" to="/projects">All projects</Link>
        </div>
      </section>
    </div>
  )
}


function VisionGuardCaseStudy({ project }) {
  const monitoredThreats = [
    ['01', 'Brute-force attempts', 'Repeated authentication attempts against camera or recorder management interfaces.', 'ACCESS'],
    ['02', 'Unauthorized access', 'Unexpected logins or account activity outside the intended operator flow.', 'ACCESS'],
    ['03', 'Port scanning', 'Discovery-style probing that may indicate exposed services are being mapped.', 'NETWORK'],
    ['04', 'RTSP / stream abuse', 'Suspicious access patterns around camera-stream services or unauthorized viewing.', 'STREAM'],
    ['05', 'Traffic spikes & DoS', 'Abnormal traffic volume that may indicate flooding or service disruption.', 'AVAILABILITY'],
    ['06', 'Botnet-like behavior', 'Repeated connections or network activity inconsistent with normal CCTV operation.', 'NETWORK'],
    ['07', 'Default / weak credentials', 'Risk created by unchanged or insecure camera and recorder credentials.', 'ACCESS'],
    ['08', 'Firmware / config changes', 'Unexpected configuration or device-state changes that can affect security.', 'CONFIG'],
    ['09', 'Unusual login times', 'Access activity occurring outside the expected operating pattern.', 'ACCESS'],
    ['10', 'Data exfiltration signals', 'Unexpected outbound transfer behavior that may indicate footage leaving the trusted environment.', 'DATA'],
    ['11', 'Camera tampering', 'Covering, moving, damaging, powering off or disconnecting a camera.', 'PHYSICAL'],
    ['12', 'Recorder / storage tampering', 'DVR theft, HDD removal, recording deletion or credential misuse.', 'PHYSICAL'],
  ]

  const physicalRisks = [
    ['Cable unplug / cut', 'Loss of camera connectivity caused by deliberate or accidental cable disconnection.'],
    ['Power interruption', 'Camera or recorder power loss that stops monitoring or recording.'],
    ['Camera covered', 'Lens obstruction that leaves the device online but makes the video unusable.'],
    ['Angle changed / moved', 'A camera can stay online while being redirected away from the protected area.'],
    ['Camera damage', 'Physical damage that degrades or completely disables surveillance.'],
    ['DVR / recorder theft', 'Removal of the recorder can eliminate both recording capability and locally stored evidence.'],
    ['HDD removal', 'Storage can be removed even when the recorder itself remains in place.'],
    ['Recording deletion / misuse', 'Unauthorized recorder access can be used to delete footage or alter settings.'],
  ]

  const features = [
    ['Network monitoring', 'Observe CCTV-related network activity and surface suspicious patterns around devices and services.'],
    ['Device discovery', 'Identify cameras and related devices present on the monitored LAN.'],
    ['Access monitoring', 'Track suspicious login behavior, brute-force attempts and unauthorized-access indicators.'],
    ['Physical tamper awareness', 'Model non-network threats such as movement, covering, cable cuts, power loss and recorder/storage interference.'],
    ['Security dashboard', 'Present devices, alerts and security events in one operator-facing interface.'],
    ['Alert delivery', 'Escalate high-priority events through the project alert flow, including the later independent SIM-based notification-unit design.'],
  ]

  const technologyGroups = [
    ['Software', ['React', 'Node.js 20', 'Express', 'Sequelize', 'MySQL 8']],
    ['Project Services', ['cameraMonitor', 'alertService']],
    ['Test Hardware', ['TP-Link Tapo C200', 'Dialog Wi-Fi router', 'Raspberry Pi 4 — optional']],
  ]

  const contributions = [
    'Helped define the system around both cyber threats and physical CCTV tampering rather than treating camera security as a network-only problem.',
    'Worked on the threat model covering unauthorized access, brute force, port scanning, RTSP misuse, traffic anomalies and physical interference.',
    'Helped shape the isolated-LAN architecture so CCTV monitoring can continue without depending on normal Internet connectivity.',
    'Contributed to the SIM-based notification-unit concept, designed to activate briefly to send an alert and then power down again.',
    'Worked with the React frontend and Node.js / Express backend architecture used for monitoring, alerting and device data flows.',
    'Contributed to the MySQL / Sequelize application data model and the project service structure around cameraMonitor and alertService.',
    'Contributed to footage-integrity ideas using hashes and a multi-part storage concept designed to make tampering more detectable.',
    'Prepared architecture, workflow, threat and presentation material explaining how the monitoring and alert flow works.',
    'Tested and documented security scenarios in a controlled academic environment as part of the project work.',
  ]

  const integritySteps = [
    ['01', 'Split', 'The design exploration separates footage/data across five storage parts rather than treating one database as the only trusted copy.'],
    ['02', 'Hash', 'Hashes are used as an integrity concept so modified or replaced content can be detected.'],
    ['03', 'Reassemble', 'The viewing flow concept reconstructs the required parts when footage is requested.'],
    ['04', 'Resilience question', 'The design also considers how the system should behave if one storage location becomes unavailable or compromised.'],
  ]

  const developmentAreas = [
    ['Foundation', 'React, Node.js, Express, Sequelize and MySQL architecture for the application and its core services.'],
    ['Monitoring', 'Camera and device monitoring, event handling and alert logic are being developed and integrated.'],
    ['Validation', 'Cyber and physical attack scenarios require continued testing in the controlled hardware environment.'],
    ['Evidence', 'Final UI captures and validated detection results will be added as the relevant screens stabilize.'],
  ]

  return (
    <div className="vision-case">
      <section className="vision-hero">
        <div className="vision-radar" aria-hidden="true"><span></span><span></span><span></span></div>
        <div className="case-breadcrumb">
          <Link to="/projects">Projects</Link><span>/</span><span>Vision Guard</span>
        </div>

        <div className="vision-hero-grid">
          <div>
            <div className="development-pill"><span></span>IN DEVELOPMENT</div>
            <div className="case-kicker"><span>01</span> CYBERSECURITY / SMART SURVEILLANCE</div>
            <h1>VISION<br/><span>GUARD</span></h1>
            <p className="vision-full-title">Smart CCTV Monitoring System for Detecting Unauthorized Access and Network Threats</p>
            <p className="vision-lead">
              An in-development smart CCTV security-monitoring system for detecting unauthorized access, network threats
              and physical tampering around surveillance infrastructure — not just watching the camera feed.
            </p>
            <div className="chips case-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          </div>

          <aside className="case-facts">
            <div><span>Status</span><strong>In Development / Ongoing</strong></div>
            <div><span>Project Type</span><strong>Cybersecurity / Smart Surveillance</strong></div>
            <div><span>Context</span><strong>Group 12 · Academic Project</strong></div>
            <div><span>Focus</span><strong>Network Security + CCTV Security + Physical Tampering</strong></div>
            <div><span>Environment</span><strong>Isolated CCTV LAN</strong></div>
            <div><span>Stack</span><strong>React · Node.js 20 · Express · Sequelize · MySQL 8</strong></div>
            <div><span>Hardware</span><strong>Tapo C200 · Dialog Router · Raspberry Pi optional</strong></div>
          </aside>
        </div>
      </section>

      <section className="case-metrics vision-metrics">
        <div><strong>Cyber + Physical</strong><span>Combined threat model</span></div>
        <div><strong>12</strong><span>Cyber / monitoring threat categories</span></div>
        <div><strong>8</strong><span>Physical tamper scenarios</span></div>
        <div><strong>Isolated + SIM</strong><span>Local monitoring / alert design</span></div>
      </section>

      <nav className="case-subnav" aria-label="Vision Guard case study sections">
        <a href="#vg-overview">Overview</a>
        <a href="#vg-architecture">Architecture</a>
        <a href="#vg-threats">Threats</a>
        <a href="#vg-physical">Physical</a>
        <a href="#vg-technology">Technology</a>
        <a href="#vg-integrity">Integrity</a>
        <a href="#vg-contribution">Contribution</a>
        <a href="#vg-status">Status</a>
      </nav>

      <section className="section vision-story case-anchor" id="vg-overview">
        <div className="case-section-title">
          <Eyebrow>01 / THE PROBLEM</Eyebrow>
          <h2>A CCTV system can record an incident and still miss the attack on itself.</h2>
        </div>
        <div className="case-story-copy">
          <p className="case-big-copy">
            Cameras and recorders are security devices, but they are also networked computers and physical assets. If an
            attacker compromises the CCTV infrastructure, disables a camera, steals a recorder, removes storage or deletes
            footage, the surveillance system itself becomes part of the incident.
          </p>
          <p>
            Vision Guard was designed around that gap: monitor the security of the surveillance environment itself. The
            project combines network and access monitoring with physical-tamper scenarios so operators can see when the
            CCTV system is being targeted, not only what the camera is recording.
          </p>
        </div>
      </section>

      <section className="section vision-flow-section">
        <div className="section-heading">
          <div>
            <Eyebrow>02 / SYSTEM DESIGN</Eyebrow>
            <h2>Detect locally. Escalate independently.</h2>
          </div>
          <p className="screenshot-note">Architecture visualization based on the current project design.</p>
        </div>

        <div className="vision-pipeline" aria-label="Vision Guard monitoring flow">
          <div className="pipeline-track">
            <article className="pipeline-node device"><span>01 / DEVICE</span><i aria-hidden="true">C</i><strong>CCTV Devices</strong><small>Camera · DVR/NVR · recorder storage</small></article>
            <b className="pipeline-arrow" aria-hidden="true">↓</b>
            <article className="pipeline-node network"><span>02 / NETWORK</span><i aria-hidden="true">L</i><strong>Isolated LAN</strong><small>Dialog router · local surveillance network</small></article>
            <b className="pipeline-arrow" aria-hidden="true">↓</b>
            <article className="pipeline-node service"><span>03 / MONITOR</span><i aria-hidden="true">M</i><strong>cameraMonitor</strong><small>Device state · access · traffic signals</small></article>
            <b className="pipeline-arrow" aria-hidden="true">↓</b>
            <article className="pipeline-node api"><span>04 / APPLICATION</span><i aria-hidden="true">N</i><strong>Node / Express</strong><small>API · event logic · service orchestration</small></article>
            <b className="pipeline-arrow" aria-hidden="true">↓</b>
            <article className="pipeline-node alert"><span>05 / ALERT</span><i aria-hidden="true">A</i><strong>alertService</strong><small>Priority handling · notification routing</small></article>
            <b className="pipeline-arrow" aria-hidden="true">↓</b>
            <article className="pipeline-node dashboard"><span>06 / INTERFACE</span><i aria-hidden="true">D</i><strong>React Dashboard</strong><small>Devices · alerts · security state</small></article>
          </div>
          <aside className="pipeline-branch">
            <span>INDEPENDENT ALERT BRANCH</span>
            <div><strong>alertService</strong><b aria-hidden="true">→</b><strong>SIM Notification Unit</strong></div>
            <p>Designed to power on briefly for a critical notification, then power down again.</p>
          </aside>
        </div>

        <div className="vision-flow-notes">
          <article><span>LOCAL FIRST</span><p>The architecture was updated to an isolated LAN so core CCTV monitoring does not rely on ordinary Internet access.</p></article>
          <article><span>ALERT EVOLUTION</span><p>Earlier project alerting considered email / Telegram. The later isolated-LAN design adds a separate SIM-based notification unit for critical events.</p></article>
          <article><span>POWER BEHAVIOR</span><p>The notification-unit concept is designed to power on briefly, send the alert, then power down again.</p></article>
        </div>
      </section>

      <section className="section case-anchor" id="vg-threats">
        <div className="section-heading">
          <div><Eyebrow>03 / MONITORED CYBER THREATS</Eyebrow><h2>The attack surface is bigger than the camera lens.</h2></div>
        </div>
        <div className="vision-threat-grid">
          {monitoredThreats.map(([number, title, text, category]) => (
            <article key={title}>
              <div className="threat-meta"><span>{number}</span><small>{category}</small></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section vision-physical-section case-anchor" id="vg-physical">
        <div className="case-section-title">
          <Eyebrow>04 / PHYSICAL TAMPER MODEL</Eyebrow>
          <h2>When the attack never touches the network.</h2>
          <p className="section-copy">
            Vision Guard explicitly includes physical failure and tamper scenarios because an attacker can defeat
            surveillance without exploiting software at all.
          </p>
        </div>
        <div className="vision-physical-grid">
          {physicalRisks.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section vision-capabilities">
        <div className="case-section-title">
          <Eyebrow>05 / CORE CAPABILITIES</Eyebrow>
          <h2>One monitoring layer across the surveillance environment.</h2>
        </div>
        <div className="vision-capability-grid">
          {features.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section architecture-section case-anchor" id="vg-architecture">
        <div className="case-section-title">
          <Eyebrow>06 / APPLICATION ARCHITECTURE</Eyebrow>
          <h2>Frontend, monitoring services, data and physical devices.</h2>
        </div>

        <div className="vg-architecture">
          <div className="vg-architecture-core">
            <span className="arch-label">APPLICATION PATH</span>
            <article className="primary"><small>01 / INTERFACE</small><strong>React Dashboard</strong><span>Devices · alerts · security state</span></article>
            <b aria-hidden="true">↓</b>
            <article><small>02 / API</small><strong>Node.js / Express</strong><span>API · event handling · backend logic</span></article>
            <b aria-hidden="true">↓</b>
            <div className="vg-service-pair">
              <article><small>03 / SERVICE</small><strong>cameraMonitor</strong><span>Camera and device monitoring</span></article>
              <article><small>04 / SERVICE</small><strong>alertService</strong><span>Alert and notification workflow</span></article>
            </div>
            <b aria-hidden="true">↓</b>
            <article><small>05 / DATA ACCESS</small><strong>Sequelize</strong><span>Application data access</span></article>
            <b aria-hidden="true">↓</b>
            <article><small>06 / DATABASE</small><strong>MySQL 8</strong><span>Devices · events · application records</span></article>
          </div>
          <aside className="vg-external-systems">
            <span className="arch-label">EXTERNAL / PHYSICAL SYSTEMS</span>
            {[
              ['CCTV LAN', 'Isolated surveillance network'],
              ['Tapo C200', 'Project test camera'],
              ['Dialog Router', 'Local network environment'],
              ['Raspberry Pi 4', 'Optional edge node'],
              ['SIM Notification Unit', 'Independent alert-path design'],
            ].map(([title, text], index) => <article key={title}><small>0{index + 1}</small><div><strong>{title}</strong><span>{text}</span></div></article>)}
          </aside>
        </div>
      </section>

      <section className="section vision-implementation case-anchor" id="vg-technology">
        <div className="section-heading">
          <div><Eyebrow>07 / TECHNOLOGY & TEST ENVIRONMENT</Eyebrow><h2>Built as a real cyber-physical prototype environment.</h2></div>
        </div>
        <div className="technology-groups">
          {technologyGroups.map(([label, items], index) => (
            <article key={label}>
              <span>0{index + 1} / {label}</span>
              <div>{items.map(item => <strong key={item}>{item}</strong>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section vision-integrity-section case-anchor" id="vg-integrity">
        <div className="case-section-title">
          <Eyebrow>08 / FOOTAGE & EVIDENCE INTEGRITY CONCEPT</Eyebrow>
          <h2>Detect tampering with the evidence, not only with the camera.</h2>
          <p className="section-copy">
            This is a project design exploration rather than a claim that the final storage system is already complete.
            The concept uses multiple storage parts plus hashing to make unauthorized modification or loss more visible.
          </p>
        </div>

        <div className="integrity-flow">
          {integritySteps.map(([number, title, text], index) => (
            <article key={title}>
              <span>{number}</span>
              <div className="integrity-icon">{index < 3 ? '●' : '?'}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="integrity-visual">
          <span className="concept-badge">DESIGN / RESEARCH CONCEPT</span>
          <div className="integrity-rail">
            <div className="integrity-stage"><span>INPUT</span><strong>Video / Evidence</strong></div>
            <b aria-hidden="true">↓</b>
            <div className="integrity-stage accent"><span>INTEGRITY</span><strong>Hash</strong></div>
            <b aria-hidden="true">↓</b>
            <div className="storage-parts">
              {['DB 01', 'DB 02', 'DB 03', 'DB 04', 'DB 05'].map(item => <span key={item}>{item}</span>)}
            </div>
            <b aria-hidden="true">↓</b>
            <div className="integrity-actions">
              <span>Verify</span><b aria-hidden="true">→</b><span>Reassemble</span><b aria-hidden="true">→</b><span>View</span>
            </div>
          </div>
          <p>Five storage parts are explored as a resilience and tamper-detection design—not as a claim of completed implementation.</p>
        </div>
      </section>

      <section className="section vision-evidence">
        <div className="section-heading">
          <div>
            <Eyebrow>09 / PROJECT EVIDENCE</Eyebrow>
            <h2>The case-study page is complete; final product evidence will grow with the build.</h2>
            <p className="gallery-intro">
              Vision Guard is still under active development. Real working UI and test captures will replace these
              evidence slots when the relevant screens and detections are stable.
            </p>
          </div>
          <span className="interface-badge pending">REAL BUILD EVIDENCE WILL BE ADDED DURING DEVELOPMENT</span>
        </div>

        <div className="vision-evidence-grid">
          <article><span>01 / EVIDENCE SLOT</span><div aria-hidden="true">DASHBOARD</div><strong>Monitoring Dashboard</strong><p>Final device and threat overview capture will be added from the working build.</p></article>
          <article><span>02 / EVIDENCE SLOT</span><div aria-hidden="true">EVENT</div><strong>Alert / Event View</strong><p>Detection and alert evidence will be added from controlled project testing.</p></article>
          <article><span>03 / EVIDENCE SLOT</span><div aria-hidden="true">DISCOVERY</div><strong>Device Discovery</strong><p>Camera and device-discovery evidence will be added as integration stabilizes.</p></article>
          <article><span>04 / EVIDENCE SLOT</span><div aria-hidden="true">TEST</div><strong>Detection Test Result</strong><p>Validated scenario output will be added after repeatable testing is documented.</p></article>
        </div>
      </section>

      <section className="section contribution-section case-anchor" id="vg-contribution">
        <div className="case-section-title">
          <Eyebrow>10 / MY CONTRIBUTION</Eyebrow>
          <h2>My work spans the threat model, architecture, application and project documentation.</h2>
        </div>
        <div className="contribution-layout">
          <div className="contribution-quote vision-role">
            <span>GROUP PROJECT CONTRIBUTION</span>
            <strong>Cybersecurity<br/>Architecture<br/>Development</strong>
          </div>
          <div className="contribution-list">
            {contributions.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section challenge-section">
        <Eyebrow>11 / ENGINEERING CHALLENGES</Eyebrow>
        <div className="challenge-grid">
          <article><span>01</span><h3>Cyber + physical threats</h3><p>The design has to model network attacks and physical interference as one surveillance-security problem.</p></article>
          <article><span>02</span><h3>Offline resilience</h3><p>An isolated CCTV network changes how monitoring, storage and alerting services can communicate.</p></article>
          <article><span>03</span><h3>Independent notification</h3><p>Critical alerts need a path that still makes sense when normal network connectivity is unavailable or compromised.</p></article>
          <article><span>04</span><h3>Evidence trust</h3><p>Recorded footage is only useful as evidence if unauthorized deletion, replacement or modification can be detected.</p></article>
        </div>
      </section>

      <section className="section vision-development case-anchor" id="vg-status">
        <div className="case-section-title">
          <Eyebrow>12 / DEVELOPMENT STATUS</Eyebrow>
          <h2>Complete portfolio case study. Ongoing system build.</h2>
        </div>
        <div className="development-grid">
          {developmentAreas.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-outcome">
        <Eyebrow>13 / DIRECTION</Eyebrow>
        <h2>Security monitoring for the security system itself.</h2>
        <p>
          Vision Guard is an ongoing cybersecurity project that reframes CCTV from a passive recording tool into a
          monitored cyber-physical environment. The project combines threat modeling, network monitoring, device state,
          physical tamper scenarios, application development, evidence-integrity thinking and independent alert design.
        </p>
        <div className="outcome-actions">
          <Link className="button primary" to="/projects/shenvix-pos">Next project <span>→</span></Link>
          <Link className="button ghost" to="/projects">All projects</Link>
        </div>
      </section>
    </div>
  )
}

const book4TechScreens = [
  { id: 'home', platform: 'web', label: 'Home', image: '/projects/book4tech/web-home.png', title: 'Marketplace Homepage', description: 'The public entry point introduces Book4Tech, explains the service journey and directs customers toward services or expert discovery.' },
  { id: 'services', platform: 'web', label: 'Services', image: '/projects/book4tech/web-services.png', title: 'Technology Services', description: 'Customers can explore technology-service categories and move from a service need toward suitable experts.' },
  { id: 'experts', platform: 'web', label: 'Experts', image: '/projects/book4tech/web-experts.png', title: 'Expert Discovery', description: 'Search, category and sorting controls help customers compare expert profiles, services and marketplace information.' },
  { id: 'booking', platform: 'web', label: 'Booking', image: '/projects/book4tech/web-booking-service.png', title: 'Book a Service', description: 'A structured booking starts with service and expert selection before moving through schedule, customer details and review.' },
  { id: 'customer-bookings', platform: 'web', label: 'Customer Dashboard', image: '/projects/book4tech/web-customer-bookings.jpg', title: 'Customer Booking Status', description: 'Customers can review booking progress, quotation state and the actions available around each service request.', compact: true },
  { id: 'expert-dashboard', platform: 'web', label: 'Expert Dashboard', image: '/projects/book4tech/web-expert-dashboard.png', title: 'Expert Workspace', description: 'The expert portal connects profile visibility, client bookings, chat, service management and earnings-related workflows.', compact: true },
  { id: 'payment', platform: 'web', label: 'Payment', image: '/projects/book4tech/web-payment-confirmation.png', title: 'Payment Confirmation State', description: 'A booking-connected quotation view communicates payment status and the operational state that follows approval.', compact: true },
  { id: 'reviews', platform: 'web', label: 'Reviews', image: '/projects/book4tech/web-reviews.png', title: 'Customer Reviews', description: 'The reviews experience presents service feedback and marketplace context around completed work.', compact: true },
  { id: 'login', platform: 'web', label: 'Login', image: '/projects/book4tech/web-login.png', title: 'Account Access', description: 'The account entry flow supports standard credentials and Google sign-in within the Book4Tech web experience.' },
  { id: 'contact', platform: 'web', label: 'Contact', image: '/projects/book4tech/web-contact.png', title: 'Support & Contact', description: 'A public support route connects booking, payment and technical-assistance questions to the platform contact workflow.' },
  { id: 'mobile-welcome', platform: 'mobile', label: 'Mobile Home', image: '/projects/book4tech/mobile-welcome.jpg', title: 'Mobile Welcome Experience', description: 'A compact mobile entry point introduces trusted technology experts, booking and account access.' },
  { id: 'mobile-experts', platform: 'mobile', label: 'Mobile Browse', image: '/projects/book4tech/mobile-experts.jpg', title: 'Mobile Expert Discovery', description: 'The mobile discovery view keeps expert browsing, service context and navigation available in a compact layout.' },
]

function Book4TechGallery() {
  const [platform, setPlatform] = useState('all')
  const [activeId, setActiveId] = useState(book4TechScreens[0].id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const filteredScreens = platform === 'all' ? book4TechScreens : book4TechScreens.filter(screen => screen.platform === platform)
  const activeScreen = filteredScreens.find(screen => screen.id === activeId) || filteredScreens[0]
  const activeIndex = filteredScreens.findIndex(screen => screen.id === activeScreen.id)

  const selectPlatform = nextPlatform => {
    const nextScreens = nextPlatform === 'all' ? book4TechScreens : book4TechScreens.filter(screen => screen.platform === nextPlatform)
    setPlatform(nextPlatform)
    setActiveId(nextScreens[0].id)
  }

  const showRelativeScreen = offset => {
    const nextIndex = (activeIndex + offset + filteredScreens.length) % filteredScreens.length
    setActiveId(filteredScreens[nextIndex].id)
  }

  useEffect(() => {
    if (!lightboxOpen) return undefined
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = event => {
      if (event.key === 'Escape') setLightboxOpen(false)
      if (event.key === 'ArrowLeft') showRelativeScreen(-1)
      if (event.key === 'ArrowRight') showRelativeScreen(1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxOpen, activeIndex, filteredScreens])

  return (
    <>
      <div className="book-gallery-controls">
        <div className="platform-toggle" aria-label="Filter screenshots by platform">
          {['all', 'web', 'mobile'].map(option => <button className={platform === option ? 'active' : ''} key={option} type="button" onClick={() => selectPlatform(option)}>{option.toUpperCase()}</button>)}
        </div>
        <div className="book-screen-tabs" role="tablist" aria-label="Book4Tech application screens">
          {filteredScreens.map(screen => <button className={activeScreen.id === screen.id ? 'active' : ''} key={screen.id} type="button" role="tab" aria-selected={activeScreen.id === screen.id} onClick={() => setActiveId(screen.id)}>{screen.label}</button>)}
        </div>
      </div>

      <div className="book-gallery-stage" role="tabpanel" aria-label={activeScreen.title}>
        <div className="book-gallery-window">
          <div className="book-gallery-bar"><div aria-hidden="true"><span></span><span></span><span></span></div><strong>BOOK4TECH / {activeScreen.label.toUpperCase()}</strong><small>{activeScreen.platform.toUpperCase()} APPLICATION</small></div>
          <div className={`book-gallery-canvas ${activeScreen.platform} ${activeScreen.compact ? 'compact' : ''}`}>
            <button type="button" onClick={() => setLightboxOpen(true)} aria-label={`Enlarge ${activeScreen.title} screenshot`}>
              <img src={activeScreen.image} alt={`Book4Tech ${activeScreen.title} — real ${activeScreen.platform} application screen`} />
              <span>Click image to enlarge</span>
            </button>
          </div>
        </div>
        <div className="book-gallery-caption"><span>{String(activeIndex + 1).padStart(2, '0')} / {activeScreen.platform}</span><div><h3>{activeScreen.title}</h3><p>{activeScreen.description}</p></div></div>
      </div>

      <div className="book-thumbnails">
        {filteredScreens.map((screen, index) => <button className={activeScreen.id === screen.id ? 'active' : ''} key={screen.id} type="button" onClick={() => setActiveId(screen.id)} aria-label={`Show ${screen.title}`}><span className={screen.platform}><img src={screen.image} alt="" loading="lazy" /></span><strong>{String(index + 1).padStart(2, '0')} / {screen.label}</strong></button>)}
      </div>

      {lightboxOpen && <div className="book-lightbox" role="dialog" aria-modal="true" aria-label={`${activeScreen.title} full-screen preview`} onClick={() => setLightboxOpen(false)}>
        <button className="book-lightbox-close" type="button" onClick={() => setLightboxOpen(false)} aria-label="Close full-screen preview">Close <span>×</span></button>
        {filteredScreens.length > 1 && <button className="book-lightbox-arrow previous" type="button" onClick={event => { event.stopPropagation(); showRelativeScreen(-1) }} aria-label="Previous screenshot">←</button>}
        <div className={`book-lightbox-content ${activeScreen.platform}`} onClick={event => event.stopPropagation()}><img src={activeScreen.image} alt={`Book4Tech ${activeScreen.title}`} /><p>{activeScreen.title} <span>— {activeScreen.platform}</span></p></div>
        {filteredScreens.length > 1 && <button className="book-lightbox-arrow next" type="button" onClick={event => { event.stopPropagation(); showRelativeScreen(1) }} aria-label="Next screenshot">→</button>}
      </div>}
    </>
  )
}

function Book4TechCaseStudy({ project }) {
  const userRoles = [
    ['01', 'Customer', '“I need someone to solve a technology problem.”', 'Discover → Compare → Book → Chat → Pay → Receive Service → Review', 'Customers browse experts, select a service, choose a suitable date and time, submit booking details and communicate with the expert around that booking.'],
    ['02', 'Expert', '“I want to offer my technical skills.”', 'Profile → Services → Receive Booking → Manage → Chat → Deliver → Earnings Workflow', 'Experts present their services and manage customer bookings, communication and service progress.'],
    ['03', 'Admin', '“I need to keep the marketplace operating safely.”', 'Verify → Manage → Moderate → Review → Oversee', 'Administrators manage users, expert verification and the operational side of the marketplace.'],
  ]

  const marketplaceFlow = [
    ['Discover', 'Browse technology experts.'],
    ['Expert Profile', 'Understand skills, services and profile information.'],
    ['Choose Service', 'Select the service needed.'],
    ['Schedule', 'Choose a preferred date and time.'],
    ['Your Details', 'Enter contact and service information.'],
    ['Review', 'Check the booking before submission.'],
    ['Booking Created', 'The request becomes a structured booking.'],
    ['Chat', 'Coordinate in the context of the booking.'],
    ['Payment', 'Use the platform payment workflow where applicable.'],
    ['Service', 'The expert coordinates or performs the work.'],
    ['Complete', 'The booking reaches its completion state.'],
    ['Review', 'Review the service experience where applicable.'],
  ]

  const chatFeatures = [
    ['Messaging', 'Customer and expert conversations tied to an active service context.'],
    ['Attachments', 'Supporting files and references shared within the conversation workflow.'],
    ['Typing indicator', 'Lightweight feedback while the other participant is composing a reply.'],
    ['Presence', 'Availability context for marketplace communication.'],
    ['Booking summary', 'The relevant expert, service and schedule remain visible beside the chat.'],
    ['Booking-details drawer', 'A compact path to the wider booking record without leaving the conversation.'],
    ['Date grouping', 'Messages organized into readable chronological groups.'],
    ['Search', 'Conversation lookup for finding previous service context.'],
  ]

  const modules = [
    ['01', 'Expert Discovery', 'Browse and search technology experts by relevant service needs.'],
    ['02', 'Expert Profiles', 'Understand expertise, available services and the information needed to choose confidently.'],
    ['03', 'Booking', 'Create a structured request that connects customer, expert and service.'],
    ['04', 'Scheduling', 'Capture preferred dates and times for remote or on-site delivery.'],
    ['05', 'Customer Details', 'Collect the contact and service information needed for the booking.'],
    ['06', 'Chat', 'Keep customer and expert communication attached to the booking context.'],
    ['07', 'Payments', 'Payment workflow and integration work connected to the service journey.'],
    ['08', 'Reviews', 'Post-service feedback around the completed customer experience.'],
    ['09', 'Expert Dashboard', 'Booking, communication, service-status and earnings-related workflows.'],
    ['10', 'Admin Operations', 'Expert verification and marketplace user, booking and system oversight.'],
  ]

  const securityGroups = [
    ['Identity', ['Authentication', 'Account and session handling']],
    ['Authorization', ['Row Level Security and data access', 'Customer vs Expert vs Admin permissions', 'Admin access control']],
    ['Payments', ['Server-trusted validation', 'Webhook verification where applicable', 'Idempotency', 'Payment-state integrity']],
    ['Files & Content', ['Storage permissions', 'Upload validation', 'Safe content rendering and XSS considerations']],
    ['Application', ['Secrets and environment variables', 'Redirect validation', 'Dependency security', 'Logging and auditability']],
  ]

  const contributions = [
    'Designed Book4Tech as a connected web and mobile product experience.',
    'Developed the product concept and mapped the marketplace journey across customers, experts and administrators.',
    'Designed the discovery, expert-profile and structured booking experience.',
    'Built React frontend work and responsive behavior for the marketplace interface.',
    'Integrated application workflows around the shared Supabase backend.',
    'Worked with shared marketplace data across users, experts, bookings and service workflows.',
    'Developed and worked on the mobile application experience as part of the same Book4Tech platform.',
    'Designed chat UX around the booking context, including presence, typing, attachments and booking details.',
    'Worked on the payment workflow and integration path without treating client-side state as payment proof.',
    'Separated customer, expert and admin responsibilities while keeping their shared booking state connected.',
    'Reviewed security and production concerns including authorization, storage, uploads, redirects and secrets.',
    'Debugged integration, state-management and responsive UI issues throughout product development.',
  ]

  const developmentStages = [
    ['01', 'Marketplace Foundation', 'Expert discovery, profiles and customer, expert and administrator roles.'],
    ['02', 'Booking Experience', 'Service → schedule → details → review as one structured request flow.'],
    ['03', 'Communication', 'Booking-connected chat and service coordination work.'],
    ['04', 'Payments / Operations', 'Payment integration and wider marketplace workflows.'],
    ['05', 'Mobile Experience', 'Mobile application and responsive service-journey work without assuming a specific framework.'],
    ['06', 'Production Hardening', 'Security policies, payment verification, testing and deployment considerations.'],
  ]

  return (
    <div className="book-case book4tech-case">
      <section className="book-hero">
        <div className="book-orbit" aria-hidden="true"><span></span><span></span></div>
        <div className="case-breadcrumb">
          <Link to="/projects">Projects</Link><span>/</span><span>Book4Tech</span>
        </div>
        <div className="book-hero-grid">
          <div>
            <div className="product-status-pill"><span></span>PRODUCT DEVELOPMENT</div>
            <div className="case-kicker"><span>03</span> TECHNOLOGY SERVICES MARKETPLACE</div>
            <h1>BOOK<span>4</span><br/>TECH</h1>
            <p className="book-lead">Book4Tech connects people who need technology help with technology experts who can provide the service.</p>
            <p className="book-secondary">Customers can discover experts, choose a service, schedule a booking, communicate through contextual chat, follow the service workflow and use the platform’s payment flow.</p>
            <div className="book-hero-actions">
              <a className="button primary" href="https://book4tech.vercel.app/" target="_blank" rel="noreferrer">View product <span>↗</span></a>
              <a className="button ghost" href="#workflow">Explore flow <span>↓</span></a>
            </div>
            <div className="chips case-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          </div>
          <aside className="case-facts book-facts">
            <div><span>Project</span><strong>Book4Tech</strong></div>
            <div><span>Type</span><strong>Technology Services Marketplace</strong></div>
            <div><span>Role</span><strong>Product Designer / Developer</strong></div>
            <div><span>Platform</span><strong>Web Application + Mobile Application</strong></div>
            <div><span>Backend</span><strong>Shared Supabase Backend</strong></div>
            <div><span>Data</span><strong>Shared PostgreSQL Database</strong></div>
            <div><span>Web Stack</span><strong>React · Vite · Supabase</strong></div>
            <div><span>Users</span><strong>Customers · Experts · Administrators</strong></div>
            <div><span>Status</span><strong>Product Development</strong></div>
          </aside>
        </div>
      </section>

      <section className="case-metrics book-metrics">
        <div><strong>3 Roles</strong><span>Customer · Expert · Admin</span></div>
        <div><strong>Discovery → Service</strong><span>Connected marketplace journey</span></div>
        <div><strong>Booking Context</strong><span>Scheduling · chat · payment flow</span></div>
        <div><strong>One Platform</strong><span>Web + mobile · shared backend</span></div>
      </section>

      <nav className="case-subnav book-subnav" aria-label="Book4Tech case study sections">
        <a href="#overview">Overview</a><a href="#workflow">How It Works</a><a href="#interface">Interface</a>
        <a href="#web-mobile">Web + Mobile</a><a href="#booking">Booking</a><a href="#chat">Chat</a><a href="#architecture">Architecture</a>
        <a href="#security">Security</a><a href="#contribution">Contribution</a><a href="#b4t-status">Status</a>
      </nav>

      <section className="section book-problem case-anchor" id="overview">
        <div className="case-section-title"><Eyebrow>01 / WHAT IS BOOK4TECH?</Eyebrow><h2>Technology help, without the usual searching around.</h2></div>
        <div className="case-story-copy">
          <p className="case-big-copy">When someone needs help with a technical problem, finding the right person can involve Facebook posts, phone calls, recommendations and scattered conversations.</p>
          <p>Book4Tech brings that journey into one structured platform.</p>
          <div className="simple-service-flow" aria-label="Simple Book4Tech service journey">
            {['I need tech help', 'Find an expert', 'Book the service', 'Chat & coordinate', 'Get the work done', 'Complete / review'].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="section case-anchor" id="b4t-roles">
        <div className="section-heading"><div><Eyebrow>02 / WHO USES IT?</Eyebrow><h2>Different responsibilities. One connected service journey.</h2></div></div>
        <div className="book-role-grid">
          {userRoles.map(([number, title, need, flow, text]) => <article key={title}><span>{number} / {title}</span><h3>{title}</h3><blockquote>{need}</blockquote><strong>{flow}</strong><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section book-workflow-section case-anchor" id="workflow">
        <div className="section-heading">
          <div><Eyebrow>03 / END-TO-END JOURNEY</Eyebrow><h2>One service journey, from search to completion.</h2></div>
        </div>
        <ol className="marketplace-flow">
          {marketplaceFlow.map(([step, text], index) => <li key={`${step}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{step}</strong><p>{text}</p></div></li>)}
        </ol>
      </section>

      <section className="section book-interface case-anchor" id="interface">
        <div className="section-heading">
          <div><Eyebrow>04 / PRODUCT INTERFACE</Eyebrow><h2>The marketplace in practice.</h2><p className="gallery-intro">Real Book4Tech web and mobile application screens selected from the supplied project captures.</p></div>
          <span className="interface-badge book-interface-badge">REAL APPLICATION UI</span>
        </div>
        <Book4TechGallery />
      </section>

      <section className="section web-mobile-section case-anchor" id="web-mobile">
        <div className="section-heading"><div><Eyebrow>05 / WEB + MOBILE</Eyebrow><h2>One platform. Two experiences.</h2><p className="gallery-intro">Book4Tech was designed as one connected platform across web and mobile. The web application and mobile application use the same Supabase backend and shared PostgreSQL database, so core marketplace data belongs to one Book4Tech system rather than two separate applications.</p></div></div>
        <div className="experience-comparison">
          <article className="web-experience">
            <div className="experience-copy"><span>WEB APPLICATION</span><h3>Explore the wider marketplace.</h3><ul><li>Expert discovery</li><li>Profiles</li><li>Booking</li><li>Dashboards</li><li>Marketplace management</li></ul></div>
            <div className="web-device-frame"><div><span></span><span></span><span></span><small>book4tech.vercel.app</small></div><img src="/projects/book4tech/web-home.png" alt="Real Book4Tech web homepage" loading="lazy" /></div>
          </article>
          <article className="mobile-experience">
            <div className="experience-copy"><span>MOBILE APPLICATION</span><h3>Keep the service journey close.</h3><ul><li>Mobile expert discovery</li><li>Booking access</li><li>Customer interaction</li><li>Service and booking access</li><li>Mobile marketplace experience</li></ul></div>
            <div className="phone-device-frame"><div></div><img src="/projects/book4tech/mobile-welcome.jpg" alt="Real Book4Tech mobile welcome screen" loading="lazy" /></div>
          </article>
        </div>
        <aside className="shared-platform-card">
          <div><span>SHARED PLATFORM BACKEND</span><h3>One Book4Tech data layer</h3><p>Both application experiences connect to the same platform backend and database.</p></div>
          <ul><li>Supabase</li><li>Shared PostgreSQL Database</li><li>Shared Authentication / User Data</li><li>Shared Bookings</li><li>Shared Expert &amp; Service Data</li><li>Shared Marketplace Records</li></ul>
        </aside>
      </section>

      <section className="section booking-section case-anchor" id="booking">
        <div className="case-section-title"><Eyebrow>06 / BOOKING EXPERIENCE</Eyebrow><h2>Turn a conversation into a structured service request.</h2><p className="section-copy">A product-flow visualization using generic example information—not a real application screenshot.</p></div>
        <div className="booking-concept">
          <div className="booking-concept-bar"><span>PRODUCT FLOW VISUALIZATION</span><small>BOOK4TECH / NEW BOOKING</small></div>
          <div className="booking-stepper">{['Service', 'Schedule', 'Your details', 'Review'].map((step, index) => <div className={index === 0 ? 'active' : ''} key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div>
          <div className="booking-panel">
            <div className="booking-fields">
              <label><span>SELECTED EXPERT</span><strong>Technology expert</strong></label>
              <label><span>SERVICE CATEGORY</span><strong>Device support</strong></label>
              <label><span>PREFERRED DATE</span><strong>Select a date</strong></label>
              <label><span>PREFERRED TIME</span><strong>Select a time</strong></label>
              <label><span>CONTACT INFORMATION</span><strong>Add customer details</strong></label>
              <label><span>BUDGET RANGE</span><strong>Select a range</strong></label>
            </div>
            <aside><span>SERVICE DELIVERY</span><div><strong>Remote</strong><strong>On-site</strong></div><p>Review the expert, service, schedule, delivery method and contact details before creating the booking.</p><button type="button" disabled>Continue to schedule</button></aside>
          </div>
        </div>
      </section>

      <section className="section book-chat-section case-anchor" id="chat">
        <div className="case-section-title"><Eyebrow>07 / COMMUNICATION</Eyebrow><h2>The conversation stays connected to the booking.</h2><p className="section-copy">Book4Tech chat was designed around a real service context rather than being a standalone messenger. Privacy-sensitive supplied chat captures were intentionally excluded from the public gallery.</p></div>
        <div className="chat-feature-grid">{chatFeatures.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="section case-anchor" id="architecture">
        <div className="case-section-title"><Eyebrow>08 / ARCHITECTURE</Eyebrow><h2>One data layer connecting marketplace workflows.</h2></div>
        <div className="book-platform-architecture">
          <div className="platform-root"><span>PRODUCT</span><strong>Book4Tech</strong></div>
          <b aria-hidden="true">↓</b>
          <div className="client-pair">
            <article><span>WEB APPLICATION</span><strong>React + Vite</strong><small>Browser marketplace experience</small></article>
            <article><span>MOBILE APPLICATION</span><strong>Mobile Client</strong><small>Framework not stated</small></article>
          </div>
          <b aria-hidden="true">↓</b>
          <div className="supabase-cluster shared-supabase"><span>SHARED BACKEND / SHARED DATABASE</span><h3>Same Supabase Backend</h3><div><strong>Auth</strong><strong>Postgres<small>Shared database</small></strong><strong>Storage</strong></div></div>
          <b aria-hidden="true">↓</b>
          <article className="book-domain-node"><span>SHARED MARKETPLACE DATA</span><div className="shared-data-grid">{['Users', 'Experts', 'Services', 'Bookings', 'Messages', 'Reviews'].map(item => <strong key={item}>{item}</strong>)}</div></article>
        </div>
        <p className="architecture-explanation">Instead of maintaining separate databases for the website and mobile application, Book4Tech uses a shared backend architecture. Both client experiences interact with the same platform data layer, helping keep marketplace records consistent across the product.</p>
        <div className="payment-trust-flow"><span>PAYMENT WORKFLOW / VALIDATION DIRECTION</span><div><strong>Customer</strong><b>→</b><strong>Booking</strong><b>→</b><strong>Payment Flow</strong><b>→</b><strong>Validation</strong><b>→</b><strong>Booking / Payment State</strong></div><p>The production direction relies on trusted validation rather than client-controlled payment success. This diagram describes the intended validation boundary, not a claim that every hardening step is complete.</p></div>
      </section>

      <section className="section">
        <div className="section-heading"><div><Eyebrow>09 / CORE MODULES</Eyebrow><h2>The marketplace beyond a search page.</h2></div></div>
        <div className="book-module-grid">{modules.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section book-security case-anchor" id="security">
        <div className="case-section-title"><Eyebrow>10 / SECURITY & PRODUCTION</Eyebrow><h2>A marketplace has to protect more than the interface.</h2><p className="section-copy">Because Book4Tech handles different user roles, bookings, messages, files and payment-related workflows, production security depends on authorization and trusted backend controls—not just frontend validation.</p><span className="security-label">SECURITY / PRODUCTION CONSIDERATIONS</span></div>
        <div className="security-groups">{securityGroups.map(([title, items], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="section contribution-section case-anchor" id="contribution">
        <div className="case-section-title"><Eyebrow>11 / MY CONTRIBUTION</Eyebrow><h2>From marketplace idea to connected product workflows.</h2></div>
        <div className="contribution-layout"><div className="contribution-quote book-role"><span>ROLE ACROSS THE PRODUCT</span><strong>Product Design<br/>Frontend<br/>Full-stack Development</strong></div><div className="contribution-list">{contributions.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div></div>
      </section>

      <section className="section challenge-section">
        <Eyebrow>12 / ENGINEERING CHALLENGES</Eyebrow>
        <div className="challenge-grid book-challenges">
          <article><span>01 / MULTI-ROLE STATE</span><h3>Separate but connected</h3><p>Customer, expert and admin workflows need clear boundaries while operating on related marketplace records.</p></article>
          <article><span>02 / BOOKING CONTEXT</span><h3>Synchronizing the journey</h3><p>Scheduling, expert, service, customer and payment state have to remain synchronized.</p></article>
          <article><span>03 / CONTEXTUAL CHAT</span><h3>Beyond standard CRUD</h3><p>Conversation state, booking details, typing, presence and attachments add coordination and lifecycle complexity.</p></article>
          <article><span>04 / PAYMENT + AUTHORIZATION</span><h3>Server-trusted decisions</h3><p>Payment-related state and marketplace permissions require trusted validation and careful access control.</p></article>
        </div>
      </section>

      <section className="section book-status case-anchor" id="b4t-status">
        <div className="case-section-title"><Eyebrow>PRODUCT DEVELOPMENT</Eyebrow><h2>Substantial product work, with continued hardening ahead.</h2><p className="section-copy">The supplied application screens show working marketplace flows. Payment verification, policies, testing and production hardening remain areas that should be described carefully rather than treated as automatically complete.</p></div>
        <div className="book-development-grid">{developmentStages.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="case-outcome book-outcome">
        <Eyebrow>13 / OUTCOME</Eyebrow><h2>A service marketplace built around the whole job—not just finding an expert.</h2>
        <p>Book4Tech brings discovery, booking, communication and service-management workflows into one product concept. Building it required thinking across marketplace UX, multiple user roles, communication, data permissions, payment integration and responsive web/mobile experiences.</p>
        <div className="outcome-actions"><a className="button primary" href="https://book4tech.vercel.app/" target="_blank" rel="noreferrer">View Book4Tech <span>↗</span></a><Link className="button ghost" to="/projects/marketfusion">Next project <span>→</span></Link><Link className="button ghost" to="/projects">All projects</Link></div>
      </section>
    </div>
  )
}

function MarketFusionInterface() {
  return (
    <div className="mf-interface-withheld">
      <div className="mf-withheld-header"><span>MARKETFUSION / SYSTEM INTERFACE</span><strong>CAPTURE WITHHELD</strong></div>
      <div className="mf-withheld-body">
        <div className="mf-withheld-message">
          <span aria-hidden="true">◇</span>
          <div><small>PRIVATE PROJECT / PUBLIC-SAFE SUMMARY</small><h3>Original interface captures are intentionally not published.</h3><p>The supplied screenshots include local environment information and detailed private research output. They were reviewed but excluded without cropping, blurring or modifying the originals.</p></div>
        </div>
        <div className="mf-interface-summary">{['XAUUSD market view', 'Analysis-engine status', 'Confidence context', 'Risk-gated advisory', 'Validation workspace', 'System diagnostics'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}</div>
      </div>
    </div>
  )
}

function MarketFusionCaseStudy({ project }) {
  const analysisEngines = [
    ['01', 'Technical Analysis', ['Trend and indicator context', 'Moving-average and directional information']],
    ['02', 'Price Action', ['Candle behaviour', 'Price reaction context']],
    ['03', 'Market Structure', ['Swing structure', 'Direction, break and continuation context']],
    ['04', 'Liquidity', ['Liquidity conditions', 'Reaction context around market levels']],
    ['05', 'Volatility', ['Changing market speed', 'Rolling volatility context']],
    ['06', 'Session / Time', ['Asian, London and New York context', 'Time-aware market windows']],
    ['07', 'Market Regime', ['Trending or ranging context', 'Changing market-state classification']],
    ['08', 'Patterns & Levels', ['Chart-pattern observations', 'Support and resistance context']],
    ['09', 'AI Prediction', ['Proprietary model output', 'Confidence and probability context']],
  ]

  const riskChecks = [
    ['Volatility', 'Is the market unusually unstable?'],
    ['Signal Agreement', 'Do the independent analysis perspectives agree?'],
    ['Invalidation', 'What conditions would break the current setup?'],
    ['Timing', 'Is the current session and market window appropriate?'],
    ['Confidence', 'How strong is the combined evidence?'],
    ['No-Trade State', 'When should the system avoid an actionable setup?'],
  ]

  const privacyControls = [
    ['Model IP', 'Model internals and proprietary prediction logic remain private.'],
    ['Credentials', 'API keys and service credentials stay outside the public portfolio.'],
    ['Financial Data', 'Account details, balances and transaction information are not published.'],
    ['Data Sources', 'Private data-source configuration is not exposed.'],
    ['Environment', 'Secrets are managed outside frontend and public code.'],
    ['Public Portfolio', 'Only architecture, safe screenshots and non-sensitive functionality are shown.'],
  ]

  const contributions = [
    'Defined the MarketFusion product concept and XAUUSD research focus.',
    'Designed the multi-engine analysis architecture.',
    'Built and integrated market-analysis workflows.',
    'Developed my own private AI prediction model.',
    'Designed signal-fusion logic without exposing proprietary weighting.',
    'Built the prediction-output workflow.',
    'Designed risk-aware decision-support concepts.',
    'Worked on XAUUSD-focused analysis.',
    'Built and iterated the dashboard experience.',
    'Integrated market data sources where applicable.',
    'Designed the continuous-analysis architecture.',
    'Tested and iterated prediction behaviour as part of private research.',
  ]

  const validationAreas = [
    'Historical testing',
    'Walk-forward testing',
    'Out-of-sample validation',
    'False-signal analysis',
    'Changing volatility conditions',
    'Prediction calibration',
    'Drawdown and risk review',
    'Live paper-testing where applicable',
  ]

  const projectStages = [
    ['01', 'Data Pipeline', 'Implemented'],
    ['02', 'Analysis Engines', 'Implemented'],
    ['03', 'AI Model', 'Testing'],
    ['04', 'Signal Fusion', 'Testing'],
    ['05', 'Risk Layer', 'Testing'],
    ['06', 'Dashboard', 'Implemented'],
    ['07', 'Validation', 'Testing'],
  ]

  return (
    <div className="marketfusion-case">
      <section className="mf-hero">
        <div className="mf-grid-background" aria-hidden="true"></div>
        <svg className="mf-market-line" viewBox="0 0 760 260" aria-hidden="true"><path d="M4 214 L74 196 L128 202 L188 150 L248 168 L306 110 L365 132 L426 72 L478 94 L548 42 L615 66 L688 24 L756 38"/><g><circle cx="188" cy="150" r="4"/><circle cx="365" cy="132" r="4"/><circle cx="548" cy="42" r="4"/><circle cx="688" cy="24" r="4"/></g></svg>
        <div className="case-breadcrumb"><Link to="/projects">Projects</Link><span>/</span><span>MarketFusion</span></div>
        <div className="mf-hero-grid">
          <div className="mf-hero-copy">
            <div className="mf-status"><span></span>PRIVATE R&amp;D</div>
            <div className="case-kicker"><span>04</span> AI MARKET INTELLIGENCE</div>
            <h1>MARKET<br/><span>FUSION</span></h1>
            <p className="mf-lead">An AI-assisted market intelligence system I built for analyzing and predicting XAUUSD market conditions.</p>
            <p className="mf-supporting">MarketFusion combines multiple forms of market analysis with my own private AI prediction model to turn live market information into structured signals, confidence context and risk-aware decision support.</p>
            <div className="chips mf-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          </div>
          <aside className="case-facts mf-facts">
            <div><span>Project</span><strong>MarketFusion</strong></div>
            <div><span>Type</span><strong>AI Market Intelligence System</strong></div>
            <div><span>Market</span><strong>XAUUSD / Gold</strong></div>
            <div><span>Role</span><strong>Creator / Developer</strong></div>
            <div><span>Status</span><strong>Private Research &amp; Development</strong></div>
            <div><span>Model</span><strong>Proprietary AI Prediction Model</strong></div>
            <div><span>Focus</span><strong>Analysis · Prediction · Risk · Decision Support</strong></div>
          </aside>
        </div>
      </section>

      <section className="case-metrics mf-metrics">
        <div><strong>XAUUSD</strong><span>Focused market research</span></div>
        <div><strong>Multi-Engine</strong><span>Independent analysis perspectives</span></div>
        <div><strong>Risk-Aware</strong><span>Context before actionability</span></div>
        <div><strong>Private R&amp;D</strong><span>Decision support, not a promise</span></div>
      </section>

      <nav className="case-subnav mf-subnav" aria-label="MarketFusion case study sections">
        <a href="#mf-overview">Overview</a><a href="#mf-pipeline">Pipeline</a><a href="#mf-model">AI Model</a><a href="#mf-signals">Signals</a><a href="#mf-risk">Risk</a><a href="#mf-interface">Interface</a><a href="#mf-architecture">Architecture</a><a href="#mf-privacy">Privacy</a><a href="#mf-contribution">Contribution</a><a href="#mf-status">Status</a>
      </nav>

      <section className="section mf-overview case-anchor" id="mf-overview">
        <div className="case-section-title"><Eyebrow>01 / THE IDEA</Eyebrow><h2>Markets produce too much information for one chart to tell the whole story.</h2></div>
        <div className="mf-overview-layout">
          <div><p className="case-big-copy">A trader can look at trend, price action, volatility, market structure and other signals individually.</p><p>The problem is that those signals can conflict. MarketFusion explores whether multiple analysis engines can be combined into one structured decision-support system.</p></div>
          <div className="mf-simple-flow" aria-label="MarketFusion high-level process">{['Market Data', 'Multiple Analysis Engines', 'AI / Signal Fusion', 'Confidence Context', 'Risk Filter', 'Final Market View'].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < 5 && <b aria-hidden="true">↓</b>}</div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><Eyebrow>02 / ANALYSIS ENGINES</Eyebrow><h2>Different perspectives on the same market.</h2><p className="gallery-intro">Public-safe functional categories are shown here; exact formulas, thresholds and engine weighting remain private.</p></div></div>
        <div className="mf-engine-grid">{analysisEngines.map(([number, title, items]) => <article key={title}><span>{number}</span><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="section case-anchor mf-pipeline-section" id="mf-pipeline">
        <div className="case-section-title"><Eyebrow>03 / SYSTEM PIPELINE</Eyebrow><h2>From raw market data to one structured view.</h2></div>
        <div className="mf-pipeline">
          <div className="mf-pipeline-node primary"><span>INPUT</span><strong>XAUUSD Market Data</strong></div><b aria-hidden="true">↓</b>
          <div className="mf-pipeline-node"><span>PROCESSING</span><strong>Data Pipeline</strong></div><b aria-hidden="true">↓</b>
          <div className="mf-engine-bank">{['Technical', 'Structure', 'Volatility', 'Price Action', 'Liquidity', 'Time / Session'].map((engine, index) => <article key={engine}><span>ENGINE {String.fromCharCode(65 + index)}</span><strong>{engine}</strong></article>)}</div><b aria-hidden="true">↓</b>
          <div className="mf-pipeline-node fusion"><span>COMBINATION</span><strong>Signal Fusion</strong></div><b aria-hidden="true">↓</b>
          <div className="mf-model-blackbox"><span>PROPRIETARY AI MODEL</span><strong>PRIVATE MODEL</strong><p>Internal implementation not publicly disclosed.</p></div><b aria-hidden="true">↓</b>
          <div className="mf-pipeline-node"><span>CONSTRAINT</span><strong>Risk Filter</strong></div><b aria-hidden="true">↓</b>
          <div className="mf-pipeline-node"><span>OUTPUT</span><strong>Market Prediction</strong></div><b aria-hidden="true">↓</b>
          <div className="mf-pipeline-node primary"><span>INTERFACE</span><strong>Dashboard</strong></div>
        </div>
      </section>

      <section className="section case-anchor mf-model-section" id="mf-model">
        <div className="case-section-title"><Eyebrow>04 / PROPRIETARY MODEL</Eyebrow><h2>My own prediction layer sits at the center of the system.</h2><p className="section-copy">I developed a private AI prediction component for MarketFusion that takes structured market information and contributes to the final XAUUSD market assessment.</p></div>
        <div className="mf-model-layout">
          <div className="mf-model-facts">{[['Input', 'Structured market features'], ['Process', 'Private AI prediction layer'], ['Output', 'Market-direction and prediction context'], ['Integration', 'Combined with analysis engines and risk logic']].map(([title, text], index) => <article key={title}><span>0{index + 1} / {title}</span><strong>{text}</strong></article>)}</div>
          <div className="mf-protected-model"><span>PROPRIETARY AI MODEL</span><strong>PRIVATE IMPLEMENTATION</strong><p>Model internals intentionally<br/>not disclosed publicly.</p><small>Protected intellectual property</small></div>
        </div>
      </section>

      <section className="section case-anchor" id="mf-signals">
        <div className="case-section-title"><Eyebrow>05 / SIGNAL FUSION</Eyebrow><h2>One engine should not decide the trade.</h2><p className="section-copy">MarketFusion is designed around combining independent analysis perspectives rather than trusting one indicator. The public view shows the participating perspectives without revealing numerical weights or proprietary consensus rules.</p></div>
        <div className="mf-fusion-visual"><div className="mf-fusion-engines">{[['A', 'Technical'], ['B', 'Price Action'], ['C', 'Structure'], ['D', 'Liquidity'], ['E', 'Volatility'], ['F', 'AI Prediction']].map(([letter, title]) => <article key={letter}><span>ENGINE {letter}</span><strong>{title}</strong></article>)}</div><b aria-hidden="true">↓</b><div className="mf-fusion-core"><span>COMBINATION LAYER</span><strong>Fusion / Consensus</strong><small>Private weighting and thresholds</small></div><b aria-hidden="true">↓</b><div className="mf-market-view"><span>OUTPUT</span><strong>Market View</strong></div></div>
      </section>

      <section className="section mf-output-section">
        <div className="case-section-title"><Eyebrow>06 / PREDICTION OUTPUT</Eyebrow><h2>Structure the result without fabricating certainty.</h2><p className="section-copy">This is a product-flow visualization. It shows the kinds of context the interface can organize—not a live signal, price, win rate or trading recommendation.</p></div>
        <div className="mf-output-concept"><div className="mf-output-bar"><span>PRODUCT FLOW VISUALIZATION</span><small>NO LIVE SIGNAL</small></div><div className="mf-output-grid">{[['Market', 'XAUUSD'], ['Direction', 'Bullish / Bearish / Neutral'], ['Confidence', 'Confidence context'], ['Trend', 'Current directional context'], ['Volatility', 'Market condition'], ['Entry Context', 'Potential setup context'], ['Invalidation', 'Conditions that invalidate the view'], ['Risk State', 'Normal / Elevated / Avoid']].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div>
      </section>

      <section className="section case-anchor mf-risk-section" id="mf-risk">
        <div className="case-section-title"><Eyebrow>07 / RISK BEFORE PREDICTION</Eyebrow><h2>A prediction is incomplete without knowing when not to trust it.</h2><p className="section-copy">MarketFusion is not designed around simply outputting BUY or SELL. It also considers whether current market conditions make the prediction actionable or unreliable.</p></div>
        <div className="mf-risk-grid">{riskChecks.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section case-anchor mf-interface-section" id="mf-interface">
        <div className="section-heading"><div><Eyebrow>08 / SYSTEM INTERFACE</Eyebrow><h2>The prediction engine in practice.</h2><p className="gallery-intro">Sensitive environment, account and model information is intentionally excluded from this public case study.</p></div><span className="mf-interface-badge">PRIVATE PROJECT / CAPTURES WITHHELD</span></div>
        <MarketFusionInterface />
      </section>

      <section className="section case-anchor" id="mf-architecture">
        <div className="case-section-title"><Eyebrow>09 / PUBLIC-SAFE ARCHITECTURE</Eyebrow><h2>The system boundary—without the private model internals.</h2></div>
        <div className="mf-system-architecture">
          <article><span>INPUT</span><strong>Market Data APIs</strong></article><b>↓</b>
          <article><span>COLLECTION</span><strong>Data Collectors</strong></article><b>↓</b>
          <article><span>PROCESSING</span><strong>Python Feature Processing</strong></article><b>↓</b>
          <div className="mf-architecture-engines">{['Analysis Engine A', 'Analysis Engine B', 'Analysis Engine C'].map(engine => <article key={engine}><span>INDEPENDENT VIEW</span><strong>{engine}</strong></article>)}</div><b>↓</b>
          <article><span>COMBINATION</span><strong>Fusion Layer</strong></article><b>↓</b>
          <div className="mf-model-blackbox compact"><span>PROPRIETARY AI MODEL</span><strong>PRIVATE IMPLEMENTATION</strong></div><b>↓</b>
          <article><span>CONSTRAINT</span><strong>Risk Engine</strong></article><b>↓</b>
          <article><span>SERVICE</span><strong>Prediction Service</strong></article><b>↓</b>
          <article className="dashboard"><span>INTERFACE</span><strong>Dashboard</strong></article>
        </div>
      </section>

      <section className="section mf-continuous-section">
        <div className="case-section-title"><Eyebrow>10 / CONTINUOUS ANALYSIS</Eyebrow><h2>From one-time analysis to a continuous market engine.</h2><p className="section-copy">The architecture is being designed toward continuous market monitoring. This describes the system direction, not a claim that a production server is operating around the clock.</p></div>
        <div className="mf-continuous-flow">{['New Market Data', 'Update Analysis', 'Re-run Engines', 'Update Prediction', 'Update Risk', 'Refresh Dashboard'].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < 5 ? <b>→</b> : <b>↺</b>}</div>)}</div>
      </section>

      <section className="section mf-xau-section">
        <div><Eyebrow>11 / XAUUSD FOCUS</Eyebrow><h2>Built around one market first.</h2></div><p>Rather than immediately supporting dozens of assets, MarketFusion currently focuses on XAUUSD so the analysis pipeline, prediction logic and risk model can be refined around one market before broader expansion.</p>
      </section>

      <section className="section case-anchor mf-privacy-section" id="mf-privacy">
        <div className="case-section-title"><Eyebrow>12 / PRIVATE BY DESIGN</Eyebrow><h2>Some of the most important parts are intentionally not on this page.</h2></div>
        <div className="mf-privacy-grid">{privacyControls.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section case-anchor mf-contribution-section" id="mf-contribution">
        <div className="case-section-title"><Eyebrow>13 / MY CONTRIBUTION</Eyebrow><h2>Designed and built as my own market-intelligence system.</h2></div>
        <div className="contribution-layout"><div className="contribution-quote mf-role"><span>INDIVIDUAL PROJECT ROLE</span><strong>Creator<br/>System Designer<br/>Developer<br/>AI Model Development</strong></div><div className="contribution-list mf-contribution-list">{contributions.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div></div>
      </section>

      <section className="section mf-challenge-section">
        <Eyebrow>14 / ENGINEERING CHALLENGES</Eyebrow>
        <div className="challenge-grid mf-challenges">
          <article><span>01 / CONFLICTING SIGNALS</span><h3>Different methods disagree</h3><p>Different analysis methods can disagree about the same market.</p></article>
          <article><span>02 / NOISY MARKET DATA</span><h3>Separate information from noise</h3><p>Financial markets contain significant randomness and short-term noise.</p></article>
          <article><span>03 / MODEL GENERALIZATION</span><h3>Conditions keep changing</h3><p>A model can appear strong on historical data and behave differently under changing market conditions.</p></article>
          <article><span>04 / RISK VS PREDICTION</span><h3>Direction is not enough</h3><p>Even a correct directional view may be unusable if volatility, timing or risk is poor.</p></article>
        </div>
      </section>

      <section className="section mf-validation-section">
        <div className="case-section-title"><Eyebrow>15 / RESEARCH &amp; VALIDATION</Eyebrow><h2>Evaluation has to extend beyond one promising result.</h2><p className="section-copy">These are evaluation areas in the research and validation framework—not a claim that every stage is complete.</p><span className="mf-validation-label">RESEARCH / VALIDATION FRAMEWORK</span></div>
        <div className="mf-validation-grid">{validationAreas.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></article>)}</div>
      </section>

      <section className="section mf-limitations">
        <div><Eyebrow>16 / LIMITATIONS</Eyebrow><h2>Prediction is probability—not certainty.</h2></div><div><p>Financial markets can change because of unexpected economic, geopolitical and liquidity events. MarketFusion is a research and decision-support tool; its outputs are not guaranteed.</p><strong>It is not financial advice or a promise of trading performance.</strong></div>
      </section>

      <section className="section case-anchor mf-status-section" id="mf-status">
        <div className="case-section-title"><Eyebrow>17 / PRIVATE R&amp;D</Eyebrow><h2>A working research system that continues to be tested.</h2><p className="section-copy">Statuses reflect the public evidence and current private-research direction without assigning artificial completion percentages.</p></div>
        <div className="mf-status-grid">{projectStages.map(([number, title, status]) => <article key={title}><span>{number}</span><h3>{title}</h3><strong className={status === 'Implemented' ? 'implemented' : 'testing'}>{status}</strong></article>)}</div>
      </section>

      <section className="case-outcome mf-outcome">
        <Eyebrow>18 / DIRECTION</Eyebrow><h2>Turning many market signals into one structured decision-support system.</h2><p>MarketFusion is my private exploration of how market data, multiple forms of analysis, AI prediction and risk logic can be combined into a single XAUUSD intelligence platform.</p><p>Its most sensitive advantage—the internal prediction model and proprietary logic—remains private.</p>
        <div className="outcome-actions"><Link className="button primary" to="/projects">All Projects</Link><span className="mf-private-cta">PRIVATE PROJECT · SOURCE NOT PUBLIC</span></div>
      </section>
    </div>
  )
}

const tharangaScreens = [
  {
    id: 'load-plan',
    label: 'Load Plan',
    image: '/projects/tharanga-ref/warehouse-load-plan.jpeg',
    title: 'Lorry and load planning',
    description: 'A mobile staff view that groups confirmed shop orders into a delivery-date load plan and shop-by-shop preparation view.',
  },
  {
    id: 'preferences',
    label: 'Preferences',
    image: '/projects/tharanga-ref/mobile-preferences.jpeg',
    title: 'Mobile account preferences',
    description: 'A responsive account view for language, order, price and delivery-update preferences without exposing personal identity or client records.',
  },
]

function TharangaInterfaceGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const activeScreen = tharangaScreens[activeIndex]

  const showRelativeScreen = offset => {
    setActiveIndex(index => (index + offset + tharangaScreens.length) % tharangaScreens.length)
  }

  useEffect(() => {
    if (!lightboxOpen) return undefined
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = event => {
      if (event.key === 'Escape') setLightboxOpen(false)
      if (event.key === 'ArrowLeft') showRelativeScreen(-1)
      if (event.key === 'ArrowRight') showRelativeScreen(1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxOpen])

  return (
    <>
      <div className="ref-screen-tabs" role="tablist" aria-label="Tharanga Steel REF application screens">
        {tharangaScreens.map((screen, index) => <button className={index === activeIndex ? 'active' : ''} key={screen.id} type="button" role="tab" aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)}>{screen.label}</button>)}
      </div>
      <div className="ref-gallery-window">
        <div className="ref-gallery-bar"><div aria-hidden="true"><span></span><span></span><span></span></div><strong>THARANGA STEEL REF / {activeScreen.label.toUpperCase()}</strong><small>RESPONSIVE APPLICATION</small></div>
        <div className="ref-gallery-canvas"><button type="button" onClick={() => setLightboxOpen(true)} aria-label={`Enlarge ${activeScreen.title} screenshot`}><img src={activeScreen.image} alt={`Tharanga Steel REF ${activeScreen.title} interface`} /><span>Click image to enlarge</span></button></div>
      </div>
      <div className="ref-gallery-caption"><span>{String(activeIndex + 1).padStart(2, '0')} / APPLICATION UI</span><div><h3>{activeScreen.title}</h3><p>{activeScreen.description}</p></div></div>
      <div className="ref-thumbnails">
        {tharangaScreens.map((screen, index) => <button className={index === activeIndex ? 'active' : ''} key={screen.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show ${screen.title}`}><span><img src={screen.image} alt="" loading="lazy" /></span><strong>{screen.label}</strong></button>)}
      </div>

      {lightboxOpen && <div className="ref-lightbox" role="dialog" aria-modal="true" aria-label={`${activeScreen.title} full-screen preview`} onClick={() => setLightboxOpen(false)}>
        <button className="ref-lightbox-close" type="button" onClick={() => setLightboxOpen(false)} aria-label="Close full-screen preview">Close <span>×</span></button>
        <button className="ref-lightbox-arrow previous" type="button" onClick={event => { event.stopPropagation(); showRelativeScreen(-1) }} aria-label="Previous screenshot">←</button>
        <div className="ref-lightbox-content" onClick={event => event.stopPropagation()}><img src={activeScreen.image} alt={`Tharanga Steel REF ${activeScreen.title}`} /><p>{activeScreen.title}</p></div>
        <button className="ref-lightbox-arrow next" type="button" onClick={event => { event.stopPropagation(); showRelativeScreen(1) }} aria-label="Next screenshot">→</button>
      </div>}
    </>
  )
}

function TharangaRefCaseStudy({ project }) {
  const roleCards = [
    ['01', 'Sales Representative', 'Visit or manage assigned shops and create orders.', 'Route → Shop → Products → Price → Order'],
    ['02', 'Warehouse Staff', 'Prepare confirmed orders for dispatch.', 'Orders → Preparation → Loading → Vehicle Assignment'],
    ['03', 'Driver / Delivery', 'Receive assigned delivery work and move orders to shops.', 'Assigned Load → Delivery → Complete'],
    ['04', 'Admin / Management', 'Manage products, pricing, shops, users and operational visibility.', 'Products → Prices → Routes → Orders → Operations'],
  ]

  const orderJourney = [
    ['Sales Route', 'The representative works through an assigned route.'],
    ['Shop', 'Select the customer or shop context.'],
    ['Product Discovery', 'Search or browse steel products.'],
    ['Pricing', 'Apply the relevant product pricing.'],
    ['Order', 'Create the shop order.'],
    ['Order Confirmation', 'Move the request into operational processing.'],
    ['Warehouse', 'See what needs to be prepared.'],
    ['Loading', 'Prepare and load products for dispatch.'],
    ['Lorry Assignment', 'Assign the delivery load to a vehicle.'],
    ['Driver', 'Provide the assigned delivery work.'],
    ['Delivery', 'Move goods to the shop or customer.'],
    ['Complete', 'Update the delivery and order state.'],
  ]

  const securityGroups = [
    ['Identity', ['Authentication', 'Session handling']],
    ['Role Access', ['Sales representative permissions', 'Warehouse access', 'Driver access', 'Administrator controls']],
    ['Data Access', ['Shops', 'Orders', 'Prices', 'Operational records']],
    ['Database', ['Supabase policies and RLS where applicable', 'Backend-trusted operations']],
    ['Client Data', ['Keep private customer and shop details away from public views']],
    ['Secrets', ['Environment variables', 'Supabase credentials', 'Deployment configuration']],
    ['Auditability', ['Operational state and status tracking where implemented']],
  ]

  const modules = [
    ['01', 'Sales Routes', 'Organize field-sales work around assigned routes and shops.'],
    ['02', 'Shop Management', 'Maintain the shop context needed for sales and fulfilment.'],
    ['03', 'Product Catalogue', 'Manage steel products, categories, availability and visibility.'],
    ['04', 'Product Search', 'Find products through search and category navigation.'],
    ['05', 'Pricing', 'Support base pricing and configured shop-specific overrides.'],
    ['06', 'Order Management', 'Move shop requests through confirmation and operational states.'],
    ['07', 'Warehouse', 'Surface confirmed work for preparation.'],
    ['08', 'Load / Lorry Management', 'Group loads and connect preparation to a vehicle.'],
    ['09', 'Delivery', 'Carry assigned work through delivery and completion states.'],
    ['10', 'Admin Operations', 'Manage the product, user and operational foundation.'],
  ]

  const contributions = [
    'Understood and translated the requested company workflow into a product structure.',
    'Developed the product concept and overall system design.',
    'Designed the sales-representative, route and shop workflow.',
    'Built product catalogue, search and category experiences.',
    'Worked on base and shop-specific pricing behavior.',
    'Designed the order journey from field request to operational processing.',
    'Developed warehouse, loading, lorry and delivery workflow concepts.',
    'Built the responsive web interface for field and staff use.',
    'Integrated the Supabase-backed operational data layer.',
    'Worked on database changes and iterative application development.',
    'Reviewed role access, client privacy and production considerations.',
    'Debugged workflows and refined the product around operational feedback.',
  ]

  const developmentStages = [
    ['01', 'Sales Workflow', 'Implemented'],
    ['02', 'Product / Pricing', 'Implemented'],
    ['03', 'Order Management', 'In Development'],
    ['04', 'Warehouse', 'In Development'],
    ['05', 'Delivery', 'In Development'],
    ['06', 'Admin', 'Planned'],
    ['07', 'Production Hardening', 'In Development'],
  ]

  return (
    <div className="tharanga-case">
      <section className="ref-hero">
        <div className="ref-industrial-grid" aria-hidden="true"></div>
        <div className="ref-route-motif" aria-hidden="true"><span></span><b></b><span></span><b></b><span></span></div>
        <div className="case-breadcrumb"><Link to="/projects">Projects</Link><span>/</span><span>Tharanga Steel REF</span></div>
        <div className="ref-hero-grid">
          <div>
            <div className="ref-status"><span></span>CLIENT PROJECT / IN DEVELOPMENT</div>
            <div className="case-kicker"><span>05</span> CLIENT BUSINESS SYSTEM</div>
            <h1>THARANGA<br/><span>STEEL REF</span></h1>
            <p className="ref-lead">A sales, order, warehouse and delivery operations system designed around the workflow of Tharanga Steel Pvt Ltd.</p>
            <p className="ref-supporting">The system connects sales representatives, routes, shops, products, pricing, orders, warehouse preparation, lorry loading and delivery operations through one structured workflow.</p>
            <div className="chips ref-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          </div>
          <aside className="case-facts ref-facts">
            <div><span>Client</span><strong>Tharanga Steel Pvt Ltd</strong></div>
            <div><span>Project</span><strong>Tharanga Steel REF</strong></div>
            <div><span>Type</span><strong>Sales &amp; Distribution Operations System</strong></div>
            <div><span>Role</span><strong>Product Designer / Developer</strong></div>
            <div><span>Platform</span><strong>Responsive Web Application</strong></div>
            <div><span>Backend</span><strong>Supabase</strong></div>
            <div><span>Focus</span><strong>Sales · Orders · Warehouse · Delivery</strong></div>
            <div><span>Status</span><strong>Client Project / In Development</strong></div>
          </aside>
        </div>
      </section>

      <section className="case-metrics ref-metrics">
        <div><strong>Field Sales</strong><span>Routes · shops · order building</span></div>
        <div><strong>Flexible Pricing</strong><span>Base and shop context</span></div>
        <div><strong>Fulfilment</strong><span>Warehouse · load · vehicle</span></div>
        <div><strong>Delivery</strong><span>Assigned work to completion</span></div>
      </section>

      <nav className="case-subnav ref-subnav" aria-label="Tharanga Steel REF case study sections">
        <a href="#overview">Overview</a><a href="#workflow">Workflow</a><a href="#interface">Interface</a><a href="#ref-sales">Sales</a><a href="#ref-products">Products</a><a href="#warehouse">Warehouse</a><a href="#ref-delivery">Delivery</a><a href="#architecture">Architecture</a><a href="#ref-security">Security</a><a href="#contribution">Contribution</a><a href="#ref-status">Status</a>
      </nav>

      <section className="section ref-overview case-anchor" id="overview">
        <div className="case-section-title"><Eyebrow>01 / BUSINESS PROBLEM</Eyebrow><h2>One order moves through many people before it reaches the shop.</h2></div>
        <div className="ref-overview-layout">
          <div><p className="case-big-copy">A steel distribution workflow can involve a sales representative, customer or shop, pricing, order confirmation, warehouse preparation, vehicle loading and delivery.</p><p>When those stages are handled through disconnected calls, messages or records, it becomes difficult to understand what was ordered, which price applies, what needs to be loaded, which vehicle is responsible and whether delivery is complete.</p><p>Tharanga Steel REF brings those operational stages into one connected system.</p></div>
          <div className="ref-simple-flow">{['Sales Rep', 'Route', 'Shop', 'Products / Pricing', 'Order', 'Warehouse', 'Loading', 'Lorry', 'Driver', 'Delivery'].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < 9 && <b aria-hidden="true">↓</b>}</div>)}</div>
        </div>
      </section>

      <section className="section ref-roles-section">
        <div className="section-heading"><div><Eyebrow>02 / WHO USES IT?</Eyebrow><h2>Different roles. One shared order journey.</h2></div></div>
        <div className="ref-role-grid">{roleCards.map(([number, title, purpose, flow]) => <article key={title}><span>{number} / ROLE</span><h3>{title}</h3><p>{purpose}</p><strong>{flow}</strong></article>)}</div>
      </section>

      <section className="section ref-workflow-section case-anchor" id="workflow">
        <div className="case-section-title"><Eyebrow>03 / ORDER JOURNEY</Eyebrow><h2>From sales visit to completed delivery.</h2></div>
        <ol className="ref-order-journey">{orderJourney.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol>
      </section>

      <section className="section ref-interface-section case-anchor" id="interface">
        <div className="section-heading"><div><Eyebrow>04 / PRODUCT INTERFACE</Eyebrow><h2>The operational workflow in practice.</h2><p className="gallery-intro">Only public-safe interface captures are shown. Client-sensitive operational information is intentionally excluded.</p></div><span className="ref-interface-badge">REAL APPLICATION UI</span></div>
        <TharangaInterfaceGallery />
      </section>

      <section className="section case-anchor" id="ref-sales">
        <div className="case-section-title"><Eyebrow>05 / FIELD SALES WORKFLOW</Eyebrow><h2>Built around how a representative sells to shops.</h2><p className="section-copy">The field workflow keeps the active route and shop context connected to product discovery, pricing and order creation.</p></div>
        <div className="ref-sales-flow">{['My Route', 'Select Shop', 'Search Products', 'Check Price', 'Add Quantity', 'Review Order', 'Submit'].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>)}</div>
        <div className="ref-feature-grid">{[['Routes', 'Organize shops by sales route.'], ['Shop Context', 'Work with the selected shop or customer.'], ['Product Search', 'Use fuzzy discovery and product categories.'], ['Pricing', 'Use base or configured shop-specific pricing.'], ['Order Building', 'Build the customer’s requested product list.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section ref-products-section case-anchor" id="ref-products">
        <div className="case-section-title"><Eyebrow>06 / CATALOGUE &amp; PRICING</Eyebrow><h2>One catalogue, flexible pricing per shop.</h2><p className="section-copy">Product management connects names, categories, base pricing, stock and active or hidden visibility with the shop context used during order creation.</p></div>
        <div className="ref-product-layout">
          <div className="ref-product-concepts">{[['Products', ['Name', 'Category', 'Base price', 'Stock', 'Active / hidden status']], ['Shop Visibility', ['Control product availability for a shop where configured']], ['Custom Price', ['Use shop-specific price overrides where configured']], ['Price Update', ['Make updated pricing available through the shared data layer']], ['Search', ['Support product and category discovery']]].map(([title, items], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
          <div className="ref-pricing-visual"><div><span>CATALOGUE RECORD</span><strong>Product</strong></div><b>↓</b><div><span>DEFAULT CONTEXT</span><strong>Base Price</strong></div><b>↓</b><div className="ref-shop-prices">{['Shop A', 'Shop B', 'Shop C'].map((shop, index) => <article key={shop}><span>{shop}</span><strong>{index === 1 ? 'Custom?' : 'Default / Custom?'}</strong></article>)}</div><small>Conceptual pricing flow · no client prices shown</small></div>
        </div>
      </section>

      <section className="section ref-discovery-section">
        <div><Eyebrow>07 / PRODUCT DISCOVERY</Eyebrow><h2>Find products quickly while creating an order.</h2><p>A sales representative should not need to manually scroll through a large steel-product list while standing at a customer location.</p></div>
        <div><div className="ref-category-list">{['TOR / Bars', 'Angle Iron', 'Sheets / Roofing'].map(category => <span key={category}>{category}</span>)}</div><ul><li>Fuzzy search and typo tolerance</li><li>Instant suggestions</li><li>Category filtering</li><li>Direct product and category navigation</li></ul><small>Only categories visible in the reviewed application capture are named.</small></div>
      </section>

      <section className="section ref-warehouse-section case-anchor" id="warehouse">
        <div className="case-section-title"><Eyebrow>08 / FULFILMENT</Eyebrow><h2>The order does not stop when the salesperson presses submit.</h2><p className="section-copy">The system extends the order journey into preparation, load planning, vehicle assignment and dispatch-related work.</p></div>
        <div className="ref-fulfilment-flow">{['Confirmed Order', 'Warehouse', 'Prepare Items', 'Load', 'Lorry Assignment', 'Driver'].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < 5 && <b>→</b>}</div>)}</div>
        <div className="ref-feature-grid warehouse">{[['Order Queue', 'Bring confirmed operational work into one preparation view.'], ['Warehouse Preparation', 'Organize the items that need to be prepared.'], ['Load Management', 'Combine prepared order quantities into a load plan.'], ['Vehicle Assignment', 'Connect the delivery load to a lorry.'], ['Dispatch', 'Move prepared work into its delivery stage.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section ref-delivery-section case-anchor" id="ref-delivery">
        <div className="case-section-title"><Eyebrow>09 / LAST-MILE OPERATIONS</Eyebrow><h2>Connect the warehouse to the final delivery.</h2><p className="section-copy">The public workflow describes delivery states without claiming GPS or live-location tracking.</p></div>
        <div className="ref-delivery-flow">{['Assigned', 'Loaded', 'Out for Delivery', 'Delivered', 'Complete'].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < 4 && <b>↓</b>}</div>)}</div>
      </section>

      <section className="section case-anchor ref-architecture-section" id="architecture">
        <div className="case-section-title"><Eyebrow>10 / ARCHITECTURE</Eyebrow><h2>One shared operational data layer across the workflow.</h2></div>
        <div className="ref-architecture">
          <div className="ref-client-grid">{['Sales Rep Portal', 'Warehouse UI', 'Driver UI', 'Admin UI'].map(client => <article key={client}><span>ROLE EXPERIENCE</span><strong>{client}</strong></article>)}</div><b>↓</b>
          <article className="ref-architecture-node"><span>CLIENT</span><strong>Responsive Web Application</strong></article><b>↓</b>
          <article className="ref-supabase-node"><span>SHARED APPLICATION BACKEND</span><strong>Supabase</strong><div><i>Auth</i><i>PostgreSQL</i></div></article><b>↓</b>
          <div className="ref-data-grid">{['Users', 'Shops', 'Products', 'Orders', 'Routes', 'Prices', 'Stock', 'Delivery'].map(entity => <strong key={entity}>{entity}</strong>)}</div>
        </div>
      </section>

      <section className="section ref-shared-data-section">
        <div><Eyebrow>11 / SHARED OPERATIONAL DATA</Eyebrow><h2>When pricing changes, the workflow should not depend on yesterday’s spreadsheet.</h2></div><div><p>Product pricing and shop-specific pricing use the shared Supabase-backed data layer so application views can reflect current operational data.</p><p>This describes a connected data workflow without promising millisecond synchronization or exposing subscription and channel implementation.</p></div>
      </section>

      <section className="section ref-modules-section">
        <div className="section-heading"><div><Eyebrow>12 / CORE MODULES</Eyebrow><h2>The operation beyond a single order form.</h2></div></div>
        <div className="ref-module-grid">{modules.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section ref-security-section case-anchor" id="ref-security">
        <div className="case-section-title"><Eyebrow>13 / SECURITY &amp; ACCESS</Eyebrow><h2>Business operations need the right information shown to the right role.</h2><p className="section-copy">These are security and production considerations, not a claim of security certification, audit or penetration testing.</p><span className="ref-security-label">SECURITY / PRODUCTION CONSIDERATIONS</span></div>
        <div className="ref-security-groups">{securityGroups.map(([title, items], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="section ref-contribution-section case-anchor" id="contribution">
        <div className="case-section-title"><Eyebrow>14 / MY CONTRIBUTION</Eyebrow><h2>Turning a company workflow into a connected application.</h2><p className="section-copy">This is a project I built around the company’s requested operational workflow.</p></div>
        <div className="contribution-layout"><div className="contribution-quote ref-role"><span>ROLE ACROSS THE PROJECT</span><strong>Product Design<br/>Full-Stack Development<br/>Business Workflow Design</strong></div><div className="contribution-list ref-contribution-list">{contributions.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div></div>
      </section>

      <section className="section ref-challenge-section">
        <Eyebrow>15 / ENGINEERING CHALLENGES</Eyebrow>
        <div className="ref-challenge-grid">
          <article><span>01 / MULTI-ROLE WORKFLOW</span><h3>Different hands, shared order</h3><p>Sales, warehouse, driver and management users interact with the same order at different stages.</p></article>
          <article><span>02 / PRICE CONTEXT</span><h3>The selected shop matters</h3><p>The correct product price may depend on the selected shop or customer context.</p></article>
          <article><span>03 / ORDER STATE</span><h3>Maintain operational continuity</h3><p>One order moves from sales creation into warehouse and delivery operations.</p></article>
          <article><span>04 / FIELD USABILITY</span><h3>Fast away from a desk</h3><p>Sales representatives need quick product discovery and simple order creation in the field.</p></article>
          <article><span>05 / CLIENT PRIVACY</span><h3>Evidence needs boundaries</h3><p>Internal operational information must not leak into public interfaces or portfolio evidence.</p></article>
        </div>
      </section>

      <section className="section ref-purpose-section">
        <div><Eyebrow>16 / BUSINESS PURPOSE</Eyebrow><h2>Designed to connect the operation, not just digitize one form.</h2></div><div className="ref-purpose-list">{['Centralize the order flow', 'Reduce disconnected communication', 'Improve operational visibility', 'Connect field sales to warehouse', 'Connect warehouse to delivery', 'Keep product and pricing data consistent'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div>
      </section>

      <section className="section ref-status-section case-anchor" id="ref-status">
        <div className="case-section-title"><Eyebrow>17 / CLIENT PROJECT</Eyebrow><h2>Active development around a real operational workflow.</h2><p className="section-copy">The project status is presented without deployment claims or artificial completion percentages.</p></div>
        <div className="ref-development-grid">{developmentStages.map(([number, title, status]) => <article key={title}><span>{number}</span><h3>{title}</h3><strong className={status.toLowerCase().replaceAll(' ', '-')}>{status}</strong></article>)}</div>
      </section>

      <section className="case-outcome ref-outcome">
        <Eyebrow>18 / DIRECTION</Eyebrow><h2>From sales visit to delivery—one operational workflow.</h2><p>Tharanga Steel REF translates a real distribution workflow into a connected digital system. The project brings sales representatives, shops, products, pricing, orders, warehouse operations, vehicle loading and delivery into one structured application flow.</p>
        <div className="ref-client-mark"><span>CLIENT PROJECT</span><strong>Tharanga Steel Pvt Ltd</strong></div>
        <div className="outcome-actions"><Link className="button primary" to="/projects">All Projects</Link><span className="ref-next-note">NEXT · PORTFOLIO-WIDE FINAL POLISH</span></div>
      </section>
    </div>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <PageHero eyebrow="404" title="Project not found." text="That case study does not exist yet." />

  if (slug === 'vision-guard') return <VisionGuardCaseStudy project={project} />
  if (slug === 'shenvix-pos') return <ShenvixCaseStudy project={project} />
  if (slug === 'book4tech') return <Book4TechCaseStudy project={project} />
  if (slug === 'marketfusion') return <MarketFusionCaseStudy project={project} />
  if (slug === 'tharanga-ref') return <TharangaRefCaseStudy project={project} />

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
