"use client";

import { useState } from "react";
import styles from "./landing-page.module.css";

const SHEETDB_URL = "https://sheetdb.io/api/v1/oykcpy8fcfsmz";

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(val: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
}

export function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [emailError, setEmailError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate email client-side with visible feedback
    if (!email.trim()) {
      setEmailError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setStatus("loading");

    try {
      const payload = {
        data: [{ Name: name.trim() || "—", Email: email.trim() }],
      };

      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`SheetDB error: ${res.status}`);

      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.nlSuccess}>
        <span className={styles.nlSuccessIcon}>✓</span>
        <div>
          <strong>You&apos;re subscribed!</strong>
          <p>We&apos;ll send you the latest updates straight to your inbox.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={styles.nlRow}>
        <input
          className={styles.nlInput}
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "loading"}
        />
      </div>
      <div className={`${styles.nlForm}${emailError ? ` ${styles.nlFormError}` : ""}`}>
        <input
          className={styles.nlInput}
          type="email"
          placeholder="Enter your email address…"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError("");
          }}
          disabled={status === "loading"}
        />
        <button
          className={styles.nlBtn}
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      {emailError && <p className={styles.nlError}>{emailError}</p>}
      {status === "error" && (
        <p className={styles.nlError}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
