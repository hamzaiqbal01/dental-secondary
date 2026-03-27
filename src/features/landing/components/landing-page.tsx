import Image from "next/image";
import Link from "next/link";
import styles from "./landing-page.module.css";
import { ToothCanvas } from "./tooth-canvas";
import { Navbar } from "@/shared/components/layout/navbar";
import { HeroSearch } from "./hero-search";
import { NewsletterSection } from "@/shared/components/newsletter/newsletter-section";

const serviceCards = [
  {
    emoji: "🗂️",
    title: "Secondary Database",
    description:
      "Access our comprehensive database of dental school secondary prompts, deadlines, and requirements - organized and easy to navigate.",
    link: "View Database ->",
    href: "/database",
    external: false,
  },
  {
    emoji: "📝",
    title: "Admissions Application",
    description:
      "Expert review and coaching for your personal statements, secondary essays, and application materials from dentists and admissions insiders.",
    link: "Get Started ->",
    href: "https://www.bootcamp.com/dat/application-services",
    external: true,
  },
  {
    emoji: "🗺️",
    title: "School Search by Location",
    description:
      "Filter dental schools by state, program length, in-state vs. out-of-state costs, and acceptance rates to find your best fit.",
    link: "Explore Schools ->",
    href: "/database",
    external: false,
  },
  {
    emoji: "💬",
    title: "Expert Advice",
    description: "One-on-one consultations with current dental students and admissions experts who've been where you are now.",
    link: "Book a Session ->",
    href: "/contact",
    external: false,
  },
];

const stats = [
  { value: "200+", label: "Schools Listed" },
  { value: "98%+", label: "Acceptance Rate" },
  { value: "12k+", label: "Pre-Dents Helped" },
];

export function LandingPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              <span>✦</span> #1 Pre-Dental Resource
            </div>
            <h1 className={styles.heroTitle}>
              Your Path to
              <br />
              <em>Dental School</em>
              <br />
              Starts Here
            </h1>
            <p className={styles.heroSub}>
              Expert guidance, comprehensive secondary databases, and tailored application services - everything you need
              to navigate dental school admissions with confidence.
            </p>
            <HeroSearch />
            <div className={styles.heroStats}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className={styles.statNum}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.toothWrapper}>
              <div className={styles.toothGlowRing} />
              <ToothCanvas className={styles.toothCanvas} />

              <div className={`${styles.floatCard} ${styles.card1}`}>
                <div className={styles.cardIcon}>🎓</div>
                <div className={styles.cardLabel}>Success Rate</div>
                <div className={styles.cardVal}>98%+</div>
              </div>

              <div className={`${styles.floatCard} ${styles.card2}`}>
                <div className={styles.cardIcon}>📋</div>
                <div className={styles.cardLabel}>Secondaries</div>
                <div className={styles.cardVal}>200+ Schools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>What We Offer</div>
        <h2 className={styles.sectionTitle}>
          Services Built for
          <br />
          Pre-Dental Success
        </h2>
        <p className={styles.sectionSub}>
          From secondary databases to personalized application coaching, we&apos;ve got every step of your journey
          covered.
        </p>

        <div className={styles.cardsGrid}>
          {serviceCards.map((card) =>
            card.external ? (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className={styles.cardEmoji}>{card.emoji}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
                <span className={styles.cardLink}>{card.link}</span>
              </a>
            ) : (
              <Link
                key={card.title}
                href={card.href}
                className={styles.card}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className={styles.cardEmoji}>{card.emoji}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
                <span className={styles.cardLink}>{card.link}</span>
              </Link>
            )
          )}
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutVisual}>
          <div className={styles.aboutImg}>
            <Image
              src="/dentisdt-image.png"
              alt="Dentist at work"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>
          <div className={styles.aboutBadge}>
            <strong>2022</strong>
            <span>Est. Trusted Resource</span>
          </div>
        </div>

        <div className={styles.aboutText}>
          <div className={styles.sectionLabel}>About Us</div>
          <h2 className={styles.sectionTitle}>
            Making Dental School
            <br />
            Applications <em className={styles.tealText}>Easy</em>
          </h2>
          <p>
            Dental School Secondary was founded by pre-dental students who experienced firsthand how overwhelming and
            opaque the application process can be. We built the resource we wished we&apos;d had.
          </p>
          <p>
            Our mission is to demystify every step - from your AADSAS application to school-specific secondaries - so
            you can focus on putting your best self forward.
          </p>
          <a className={styles.ctaBtn} href="#">
            Learn More About Us &rarr;
          </a>
        </div>
      </section>

      <NewsletterSection />

      <footer className={styles.footer} id="contact">
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>🦷</div>
            Dental School Secondary
          </div>
          <p>The #1 platform helping pre-dental students navigate applications with confidence and clarity.</p>
          <p className={styles.footerMini}>📧 dentalschoolsecondary@gmail.com</p>
        </div>

        <div className={styles.footerCol}>
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Secondary Databases</a>
            </li>
            <li>
              <a href="#">Application Services</a>
            </li>
            <li>
              <a href="#">Other Resources</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">DAT Prep</a>
            </li>
            <li>
              <a href="#">Interview Tips</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </footer>

      <div className={styles.footerBottom}>© Dental School Secondary 2022 — All Rights Reserved</div>
    </div>
  );
}

