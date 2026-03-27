"use client";

import { useState } from "react";
import styles from "./sidebar-newsletter-form.module.css";

const SHEETDB_URL = "https://sheetdb.io/api/v1/oykcpy8fcfsmz";

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(val: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
}

export function SidebarNewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [emailError, setEmailError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email.");
      return;
    }
    setEmailError("");
    setStatus("loading");

    try {
      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{ Name: name.trim() || "—", Email: email.trim() }],
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>✓</span>
        <span>You&apos;re subscribed!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        className={styles.input}
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={status === "loading"}
      />
      <input
        className={`${styles.input}${emailError ? ` ${styles.inputError}` : ""}`}
        type="email"
        placeholder="Your email address…"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (emailError) setEmailError("");
        }}
        disabled={status === "loading"}
      />
      {emailError && <p className={styles.error}>{emailError}</p>}
      {status === "error" && (
        <p className={styles.error}>Something went wrong.</p>
      )}
      <button className={styles.btn} type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Subscribe Free"}
      </button>
    </form>
  );
}
