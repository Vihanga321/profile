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
    ['01', 'Brute-force attempts', 'Repeated authentication attempts against CCTV, DVR/NVR or related management interfaces.'],
    ['02', 'Unauthorized access', 'Unexpected logins, access attempts or account activity outside the expected operator flow.'],
    ['03', 'Port scanning', 'Discovery-style probing that can indicate an attacker is mapping exposed services.'],
    ['04', 'RTSP / stream abuse', 'Suspicious access patterns around camera-stream services and unauthorized viewing attempts.'],
    ['05', 'Traffic spikes & DoS', 'Abnormal network-volume changes that may indicate disruption, flooding or denial-of-service behavior.'],
    ['06', 'Botnet-like behavior', 'Unusual repeated connections or network activity inconsistent with normal CCTV operation.'],
    ['07', 'Default / weak credentials', 'Identifying the risk created by unchanged or insecure camera and recorder credentials.'],
    ['08', 'Firmware / config changes', 'Unexpected configuration or device-state changes that may affect security or recording.'],
    ['09', 'Unusual login times', 'Access activity occurring outside the expected operating pattern.'],
    ['10', 'Data exfiltration signals', 'Unexpected outbound or transfer behavior that may indicate footage or data leaving the trusted environment.'],
    ['11', 'Camera tampering', 'Covering, moving, damaging, powering off or disconnecting a camera or its cable.'],
    ['12', 'Recorder / storage tampering', 'DVR theft, HDD removal, recording deletion or misuse of recorder credentials.'],
  ]

  const features = [
    ['Network monitoring', 'Observe CCTV-related network activity and surface suspicious patterns around devices and services.'],
    ['Device discovery', 'Identify cameras and related devices present on the monitored LAN.'],
    ['Access monitoring', 'Track suspicious login behavior, brute-force attempts and unauthorized-access indicators.'],
    ['Physical tamper awareness', 'Model non-network threats such as camera movement, cable cuts, power loss and recorder/storage interference.'],
    ['Security dashboard', 'Present devices, alerts and security events in one interface for faster operator awareness.'],
    ['Alert delivery', 'Send a high-priority notification through a separate SIM-based notification unit when an event requires attention.'],
  ]

  const contributions = [
    'Helped define the system around both cyber threats and physical CCTV tampering rather than treating camera security as a network-only problem.',
    'Worked on the threat model covering unauthorized access, brute force, port scanning, RTSP misuse, traffic anomalies and physical interference.',
    'Helped shape the isolated-LAN architecture so CCTV monitoring can continue without depending on normal Internet connectivity.',
    'Contributed to the SIM-based notification-unit concept, designed to activate briefly to send an alert and then power down again.',
    'Worked with the React frontend and Node.js / Express backend architecture used for monitoring, alerting and device data flows.',
    'Contributed to database and integrity ideas for protecting or validating recorded evidence, including hash-based integrity checks.',
    'Prepared system architecture, workflow and presentation material explaining how the monitoring and alert flow works.',
    'Tested and documented security scenarios in a controlled academic environment as part of the project work.',
  ]

  return (
    <div className="vision-case">
      <section className="vision-hero">
        <div className="case-breadcrumb">
          <Link to="/projects">Projects</Link><span>/</span><span>Vision Guard</span>
        </div>

        <div className="vision-hero-grid">
          <div>
            <div className="case-kicker"><span>01</span> CYBERSECURITY / SMART SURVEILLANCE</div>
            <h1>VISION<br/><span>GUARD</span></h1>
            <p className="vision-lead">
              A smart CCTV security-monitoring project designed to detect unauthorized access, network threats and
              physical tampering around surveillance systems instead of watching only the video feed.
            </p>
            <div className="chips case-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          </div>

          <aside className="case-facts">
            <div><span>Project</span><strong>Vision Guard</strong></div>
            <div><span>Type</span><strong>Academic Cybersecurity / Smart CCTV Project</strong></div>
            <div><span>Focus</span><strong>Unauthorized Access · Network Threats · Physical Tampering</strong></div>
            <div><span>Environment</span><strong>Isolated CCTV LAN + Independent Alert Path</strong></div>
            <div><span>Application Stack</span><strong>React · Node.js · Express · MySQL</strong></div>
            <div><span>Portfolio Note</span><strong>Group project — this page focuses on the areas I contributed to</strong></div>
          </aside>
        </div>
      </section>

      <section className="case-metrics vision-metrics">
        <div><strong>Cyber + Physical</strong><span>Combined threat model</span></div>
        <div><strong>12</strong><span>Threat categories represented</span></div>
        <div><strong>Isolated LAN</strong><span>Local monitoring design</span></div>
        <div><strong>SIM Alert Path</strong><span>Independent notification concept</span></div>
      </section>

      <section className="section vision-story">
        <div className="case-section-title">
          <Eyebrow>01 / THE PROBLEM</Eyebrow>
          <h2>A CCTV system can record an incident and still miss the attack on itself.</h2>
        </div>
        <div className="case-story-copy">
          <p className="case-big-copy">
            Cameras and recorders are security devices, but they are also networked computers. If an attacker compromises
            the CCTV infrastructure, disables a camera, steals a recorder or removes storage, the surveillance system itself
            becomes part of the incident.
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
            <Eyebrow>02 / SECURITY FLOW</Eyebrow>
            <h2>Detect locally. Escalate independently.</h2>
          </div>
          <p className="screenshot-note">Architecture visualization based on the project design.</p>
        </div>

        <div className="vision-flow">
          <div className="vision-flow-node primary">
            <span>01</span>
            <strong>CCTV Devices</strong>
            <small>Cameras · DVR/NVR · recorder storage</small>
          </div>
          <div className="vision-flow-arrow">→</div>
          <div className="vision-flow-node">
            <span>02</span>
            <strong>Isolated LAN</strong>
            <small>Router / local surveillance network</small>
          </div>
          <div className="vision-flow-arrow">→</div>
          <div className="vision-flow-node accent">
            <span>03</span>
            <strong>Monitoring Engine</strong>
            <small>Device state · access · traffic · alerts</small>
          </div>
          <div className="vision-flow-arrow">→</div>
          <div className="vision-flow-stack">
            <div className="vision-flow-node">
              <span>04A</span>
              <strong>Dashboard</strong>
              <small>React operator interface</small>
            </div>
            <div className="vision-flow-node alert">
              <span>04B</span>
              <strong>SIM Alert Unit</strong>
              <small>Independent high-priority notification path</small>
            </div>
          </div>
        </div>

        <div className="vision-flow-notes">
          <article><span>LOCAL FIRST</span><p>Core monitoring is designed around the CCTV LAN rather than assuming normal Internet connectivity is always available.</p></article>
          <article><span>SEPARATE ALERT PATH</span><p>The notification-unit concept gives critical alerts a path that is separate from the normal CCTV network.</p></article>
          <article><span>EVIDENCE INTEGRITY</span><p>The project also explored hash-based integrity and distributed storage concepts for validating recorded evidence.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><Eyebrow>03 / MONITORED THREATS</Eyebrow><h2>The attack surface is bigger than the camera lens.</h2></div>
        </div>
        <div className="vision-threat-grid">
          {monitoredThreats.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section vision-capabilities">
        <div className="case-section-title">
          <Eyebrow>04 / CAPABILITIES</Eyebrow>
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

      <section className="section architecture-section">
        <div className="case-section-title">
          <Eyebrow>05 / APPLICATION ARCHITECTURE</Eyebrow>
          <h2>A dashboard on top of monitoring and alert services.</h2>
        </div>

        <div className="architecture-map vision-architecture-map">
          <div className="arch-column">
            <span className="arch-label">INTERFACE</span>
            <div className="arch-node primary"><small>01</small><strong>React Dashboard</strong><span>Devices · alerts · security state</span></div>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-column">
            <span className="arch-label">API / LOGIC</span>
            <div className="arch-node"><small>02</small><strong>Node.js + Express</strong><span>API · monitoring logic · event handling</span></div>
            <div className="arch-node"><small>03</small><strong>Alert Service</strong><span>Event classification · notification flow</span></div>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-column">
            <span className="arch-label">DATA</span>
            <div className="arch-node"><small>04</small><strong>MySQL</strong><span>Devices · events · application data</span></div>
            <div className="arch-node"><small>05</small><strong>Integrity Layer</strong><span>Hash / evidence-integrity concepts</span></div>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-column">
            <span className="arch-label">PHYSICAL SYSTEM</span>
            <div className="arch-node accent"><small>06</small><strong>CCTV LAN</strong><span>Camera · router · recorder environment</span></div>
            <div className="arch-node"><small>07</small><strong>Notification Unit</strong><span>SIM-based alert concept</span></div>
          </div>
        </div>
      </section>

      <section className="section vision-evidence">
        <div className="section-heading">
          <div>
            <Eyebrow>06 / PROJECT EVIDENCE</Eyebrow>
            <h2>Real screenshots will live here.</h2>
            <p className="gallery-intro">
              The portfolio repo does not contain Vision Guard UI captures yet, so this section is intentionally honest
              rather than using mock product screenshots.
            </p>
          </div>
          <span className="interface-badge pending">SCREENSHOTS TO ADD</span>
        </div>

        <div className="vision-evidence-grid">
          <article><span>01</span><strong>Monitoring Dashboard</strong><p>Add the real device / threat overview screen.</p></article>
          <article><span>02</span><strong>Alert / Event View</strong><p>Add a real detected-event or alert-management screen.</p></article>
          <article><span>03</span><strong>Device Discovery</strong><p>Add a real camera / device-discovery or status view.</p></article>
        </div>
      </section>

      <section className="section contribution-section">
        <div className="case-section-title">
          <Eyebrow>07 / MY CONTRIBUTION</Eyebrow>
          <h2>My work focused on the security model, architecture and system behavior.</h2>
        </div>
        <div className="contribution-layout">
          <div className="contribution-quote vision-role">
            <span>PROJECT ROLE</span>
            <strong>Cybersecurity<br/>Architecture<br/>Development</strong>
          </div>
          <div className="contribution-list">
            {contributions.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section challenge-section">
        <Eyebrow>08 / ENGINEERING CHALLENGES</Eyebrow>
        <div className="challenge-grid">
          <article><span>01</span><h3>Cyber + physical threats</h3><p>The design had to model network attacks and physical interference as one surveillance-security problem.</p></article>
          <article><span>02</span><h3>Offline resilience</h3><p>An isolated CCTV network changes how monitoring, storage and alerting services can communicate.</p></article>
          <article><span>03</span><h3>Independent notification</h3><p>Critical alerts need a path that still makes sense when normal network connectivity is unavailable or compromised.</p></article>
          <article><span>04</span><h3>Evidence trust</h3><p>Recorded footage is only useful as evidence if unauthorized deletion, replacement or modification can be detected.</p></article>
        </div>
      </section>

      <section className="case-outcome">
        <Eyebrow>09 / OUTCOME</Eyebrow>
        <h2>Security monitoring for the security system itself.</h2>
        <p>
          Vision Guard reframed CCTV from a passive recording tool into a monitored cyber-physical environment. The
          project brought together threat modeling, network monitoring, device state, physical tamper scenarios,
          application development and alert design in one cybersecurity-focused surveillance concept.
        </p>
        <div className="outcome-actions">
          <Link className="button primary" to="/projects/shenvix-pos">Next project <span>→</span></Link>
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

  if (slug === 'vision-guard') return <VisionGuardCaseStudy project={project} />
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
