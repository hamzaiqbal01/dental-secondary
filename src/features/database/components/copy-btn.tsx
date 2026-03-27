"use client";

import { useState } from "react";
import styles from "./school-detail-page.module.css";

type CopyBtnProps = {
  text: string;
};

export function CopyBtn({ text }: CopyBtnProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        background: copied ? "rgba(0,191,165,0.1)" : "rgba(255,255,255,0.05)",
        border: copied
          ? "1px solid var(--teal)"
          : "1px solid rgba(255,255,255,0.1)",
        color: copied ? "var(--teal)" : "var(--muted)",
        borderRadius: "7px",
        padding: "5px 12px",
        fontSize: "0.72rem",
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "all 0.2s",
        letterSpacing: "0.04em",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (!copied) {
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            "var(--teal)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--teal)";
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(0,191,165,0.08)";
        }
      }}
      onMouseLeave={(e) => {
        if (!copied) {
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            "rgba(255,255,255,0.1)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(255,255,255,0.05)";
        }
      }}
    >
      {copied ? "✓ Copied" : "📋 Copy"}
    </button>
  );
}

type CopyAllBtnProps = {
  questions: string[];
  className?: string;
};

export function CopyAllBtn({ questions, className }: CopyAllBtnProps) {
  const [copied, setCopied] = useState(false);

  function handleCopyAll() {
    const text = questions
      .map((q, i) => `${i + 1}. ${q}`)
      .join("\n\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <button onClick={handleCopyAll} className={className}>
      {copied ? "✓ All Questions Copied!" : "📋 Copy All Questions"}
    </button>
  );
}
