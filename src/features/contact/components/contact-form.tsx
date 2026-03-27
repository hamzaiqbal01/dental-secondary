"use client";

import { useState } from "react";
import styles from "./contact-page.module.css";

const SHEETDB_URL = "https://sheetdb.io/api/v1/oykcpy8fcfsmz";

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(val: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email address.";
    else if (!isValidEmail(email)) e.email = "Please enter a valid email address.";
    if (!message.trim()) e.message = "Please enter a message.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const payload = {
        data: [
          {
            Name: name.trim(),
            Email: email.trim(),
            Subject: subject.trim() || "—",
            Message: message.trim(),
          },
        ],
      };

      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`SheetDB error: ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successBox}>
        <div className={styles.successIcon}>✓</div>
        <div className={styles.successTitle}>Message Sent!</div>
        <p className={styles.successText}>
          Thanks for reaching out. We&apos;ll get back to you within 1–2 business
          days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Name *</label>
          <input
            className={`${styles.formInput}${errors.name ? ` ${styles.formInputError}` : ""}`}
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((p) => ({ ...p, name: "" }));
            }}
            disabled={status === "loading"}
          />
          {errors.name && <span className={styles.formError}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email *</label>
          <input
            className={`${styles.formInput}${errors.email ? ` ${styles.formInputError}` : ""}`}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((p) => ({ ...p, email: "" }));
            }}
            disabled={status === "loading"}
          />
          {errors.email && <span className={styles.formError}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Subject</label>
        <input
          className={styles.formInput}
          type="text"
          placeholder="What is this regarding? (optional)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={status === "loading"}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Message *</label>
        <textarea
          className={`${styles.formTextarea}${errors.message ? ` ${styles.formInputError}` : ""}`}
          placeholder="Tell us how we can help…"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((p) => ({ ...p, message: "" }));
          }}
          disabled={status === "loading"}
        />
        {errors.message && <span className={styles.formError}>{errors.message}</span>}
      </div>

      {status === "error" && (
        <p className={styles.formError} style={{ marginTop: 8 }}>
          Something went wrong. Please try again.
        </p>
      )}

      <button className={styles.submitBtn} type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
