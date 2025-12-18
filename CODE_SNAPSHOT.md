# Next.js Portfolio - Complete Code Snapshot

All source code files compiled into a single markdown document.

## Complete Project Structure

```
nextjs-portafolio/
├── .git/                      (Git repository)
├── .gitignore                 (Git ignore rules)
├── .next/                     (Next.js build output)
├── .nvmrc                     (Node version file)
├── pages/
│   ├── index.js               (Main portfolio page)
│   ├── _app.js                (Next.js app wrapper)
│   ├── api/
│   │   └── hello.js           (Example API route)
│   └── posts/                 (Empty - blog posts removed)
├── styles/
│   ├── global.css             (Global styles and CSS variables)
│   ├── portfolio.module.css    (Portfolio-specific styles with animations)
│   ├── Home.module.css         (Legacy styles - unused)
│   └── portafolio.code-workspace  (VS Code workspace config)
├── components/                (Empty - blog components removed)
├── lib/                        (Empty - blog utilities removed)
├── posts/                      (Empty - blog markdown removed)
├── public/
│   ├── favicon.ico             (Website favicon)
│   └── images/                 (Image assets)
├── node_modules/              (Installed dependencies)
├── package.json               (Project dependencies and scripts)
├── package-lock.json          (Dependency lock file)
├── yarn.lock                  (Yarn lock file)
├── CODE_SNAPSHOT.md           (This file - complete code snapshot)
├── README.md                  (Project documentation)
└── .next/                     (Next.js build cache)
```

---

## `pages/index.js`

```javascript
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/portfolio.module.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    
    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section
      className={`${styles.section} ${styles.sectionHidden} ${isVisible ? styles.isVisible : ''}`}
      ref={domRef}
    >
      {props.children}
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Proce2 - Minimalist Portfolio</title>
        <meta name="description" content="Senior Developer specializing in React, Node.js, and high-performance dashboards. View my projects and experience." />
        <meta property="og:title" content="Proce2 - Full Stack Developer" />
        <meta property="og:description" content="Senior Developer specializing in React, Node.js, and high-performance dashboards. View my projects and experience." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <header className={styles.header}>
        <Image
          src="https://placehold.co/200x200/333/fff?text=P"
          alt="Profile"
          width={120}
          height={120}
          className={styles.profilePic}
          unoptimized
        />
        <div className={styles.fadeIn}>
          <h1 className={styles.name}>Proce2</h1>
          <div className={styles.title}>Full Stack Developer</div>
          <div className={styles.socialLinks}>
            <a href="mailto:email@example.com">Email</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Resume</a>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className={`${styles.section} ${styles.fadeInDelay}`}>
        <p style={{ color: '#444' }}>
          I build scalable web applications with a focus on data visualization and performance.
          Specialized in React, Node.js, and Cloud Infrastructure. Based in [City, Country].
        </p>
      </section>

      {/* EXPERIENCE */}
      <FadeInSection>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.experienceItem}>
          <div className={styles.expLogo}>FC</div>
          <div className={styles.expContent}>
            <h3 className={styles.expRole}>Senior Full Stack Developer</h3>
            <p className={styles.expCompany}>FinTech Corp • Full-time</p>
            <span className={styles.expDate}>Jan 2023 - Present • 1 yr 11 mos</span>
            <p className={styles.expDescription}>
              Leading the frontend migration to Next.js and optimizing high-frequency trading dashboards.
              Reduced initial load time by 40% and implemented real-time WebSocket data feeds.
            </p>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.expLogo}>L</div>
          <div className={styles.expContent}>
            <h3 className={styles.expRole}>Backend Developer</h3>
            <p className={styles.expCompany}>Logistics Inc.</p>
            <span className={styles.expDate}>Jun 2020 - Dec 2022 • 2 yrs 7 mos</span>
            <p className={styles.expDescription}>
              Designed and built the core inventory management API using Node.js and PostgreSQL.
              Scaled system to handle 50k daily transactions with 99.9% uptime.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* PROJECTS */}
      <FadeInSection>
        <h2 className={styles.sectionTitle}>Selected Projects</h2>

        <div className={styles.projectItem}>
          <h3 className={styles.projectTitle}>
            <a href="#">Real-Time Financial Dashboard ↗</a>
          </h3>
          <span className={styles.projectRole}>Lead Architect</span>
          <p className={styles.projectDescription}>
            A high-performance dashboard for visualizing market trends. Built to handle massive data throughput without UI lag.
          </p>
          <ul className={styles.metrics}>
            <li>Handles 10,000+ daily active users</li>
            <li>98% Google Lighthouse Accessibility score</li>
          </ul>
          <div className={styles.techStack}>
            <span className={styles.techPill}>React</span>
            <span className={styles.techPill}>TypeScript</span>
            <span className={styles.techPill}>D3.js</span>
            <span className={styles.techPill}>AWS</span>
          </div>
        </div>

        <div className={styles.projectItem}>
          <h3 className={styles.projectTitle}>
            <a href="#">Inventory Optimization Engine ↗</a>
          </h3>
          <span className={styles.projectRole}>Sole Contributor</span>
          <p className={styles.projectDescription}>
            Automated stock prediction system used by regional warehouses to prevent overstocking.
          </p>
          <ul className={styles.metrics}>
            <li>Saved logistics team ~5 hours/week of manual work</li>
            <li>Maintained 99.9% API Uptime</li>
          </ul>
          <div className={styles.techStack}>
            <span className={styles.techPill}>Node.js</span>
            <span className={styles.techPill}>PostgreSQL</span>
            <span className={styles.techPill}>Redis</span>
            <span className={styles.techPill}>Docker</span>
          </div>
        </div>
      </FadeInSection>

      <footer className={styles.footer}>
        © 2025 Proce2
      </footer>
    </div>
  );
}         
```

---

## `pages/_app.js`

```javascript
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
```

---

## `pages/api/hello.js`

```javascript
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }
```

---

## `styles/global.css`

```css
:root {
  --bg-color: #ffffff;
  --text-primary: #111;
  --text-secondary: #666;
  --accent-color: #0070f3;
  --border-color: #eaeaea;
  --font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: var(--font-stack);
  background-color: var(--bg-color);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}

a {
  color: var(--accent-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}

@media print {
  body { background: white; color: black; }
  a { text-decoration: none; color: black; }
  a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.8em; color: #666; }
}
```

---

## `styles/portfolio.module.css`

```css
.container {
    max-width: 672px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
}

.header {
    text-align: center;
    margin-bottom: 3rem;
}

.profilePic {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1rem auto;
    border: 1px solid var(--border-color);
}

.name {
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 0 0 0.5rem 0;
}

/* --- ANIMATIONS --- */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.fadeIn {
    animation: fadeIn 0.8s ease-out forwards;
}

.fadeInDelay {
    animation: fadeIn 0.8s ease-out 0.2s forwards;
    opacity: 0; /* Start invisible */
}

/* Scroll Animation Classes */
.sectionHidden .sectionTitle,
.sectionHidden .expLogo,
.sectionHidden .expRole,
.sectionHidden .expCompany,
.sectionHidden .expDate,
.sectionHidden .expDescription,
.sectionHidden .projectTitle,
.sectionHidden .projectRole,
.sectionHidden .projectDescription,
.sectionHidden .metrics,
.sectionHidden .techStack {
    opacity: 0;
    transform: translateY(20px);
}

.isVisible .sectionTitle {
    animation: fadeIn 0.5s ease-out 0s forwards;
}

/* Experience Stagger */
.isVisible .expLogo { animation: fadeIn 0.5s ease-out 0.1s forwards; }
.isVisible .expRole { animation: fadeIn 0.5s ease-out 0.2s forwards; }
.isVisible .expCompany { animation: fadeIn 0.5s ease-out 0.3s forwards; }
.isVisible .expDate { animation: fadeIn 0.5s ease-out 0.4s forwards; }
.isVisible .expDescription { animation: fadeIn 0.5s ease-out 0.5s forwards; }

/* Project Stagger */
.isVisible .projectTitle { animation: fadeIn 0.5s ease-out 0.1s forwards; }
.isVisible .projectRole { animation: fadeIn 0.5s ease-out 0.2s forwards; }
.isVisible .projectDescription { animation: fadeIn 0.5s ease-out 0.3s forwards; }
.isVisible .metrics { animation: fadeIn 0.5s ease-out 0.4s forwards; }
.isVisible .techStack { animation: fadeIn 0.5s ease-out 0.5s forwards; }

.title {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
}

.socialLinks {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 0.9rem;
}

.socialLinks a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
}

.socialLinks a:hover {
    border-bottom-color: var(--text-primary);
}

.section {
    margin-bottom: 4rem;
}

.sectionTitle {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02rem;
}

.experienceItem {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
}

.experienceItem:last-child {
    border-bottom: none;
}

.expLogo {
    width: 48px;
    height: 48px;
    background-color: #f4f4f4;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #888;
    font-size: 0.8rem;
}

.expContent {
    flex-grow: 1;
}

.expRole {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
}

.expCompany {
    font-size: 0.95rem;
    color: var(--text-primary);
    margin: 0;
}

.expDate {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    display: block;
}

.expDescription {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0;
}

.projectItem {
    margin-bottom: 2.5rem;
}

.projectTitle {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
}

.projectTitle a {
    color: var(--text-primary);
    text-decoration: none;
}

.projectTitle a:hover {
    text-decoration: underline;
}

.projectRole {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    display: block;
}

.projectDescription {
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
}

.techStack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: var(--text-secondary);
    font-family: monospace;
}

.techPill {
    background: #f4f4f4;
    padding: 2px 6px;
    border-radius: 4px;
}

.metrics {
    margin-top: 0.5rem;
    list-style: none;
    padding: 0;
}

.metrics li {
    font-size: 0.9rem;
    color: var(--text-primary);
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.25rem;
}

.metrics li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--text-secondary);
}

.footer {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-top: 4rem;
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
}

@media print {
    .container { max-width: 100%; padding: 0; margin: 0; }
    .socialLinks { display: none; }
    .projectItem, .experienceItem { break-inside: avoid; }
}
```

---

## `package.json`

```json
{
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "engines": {
    "node": ">=18"
  }
}
```

---

## Summary

**Project:** Next.js Minimalist Portfolio  
**Technologies:** Next.js, React, CSS Modules  
**Main Files:**
- `pages/index.js` - Main portfolio page with experience and projects sections
- `pages/_app.js` - Next.js app wrapper
- `pages/api/hello.js` - Example API route
- `styles/global.css` - Global styles and CSS variables
- `styles/portfolio.module.css` - Portfolio-specific styles with animations

All blog-related files have been removed. The project now focuses on a clean, minimalist portfolio display.
