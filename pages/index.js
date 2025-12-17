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