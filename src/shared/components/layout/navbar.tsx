"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Secondary Database", href: "/database" },
  { label: "Application Services", href: "/services" },
  { label: "Other Resources", href: "/resources" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}>🦷</div>
        Dental School Secondary
      </Link>

      {/* Desktop nav */}
      <ul className={styles.navList}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${styles.navLink}${pathname === href ? ` ${styles.active}` : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="#contact" className={`${styles.navLink} ${styles.navCta}`}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Hamburger button — mobile / tablet only */}
      <button
        className={`${styles.hamburger}${menuOpen ? ` ${styles.hamburgerOpen}` : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileList}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.mobileLink}${pathname === href ? ` ${styles.active}` : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className={`${styles.mobileLink} ${styles.mobileCta}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
