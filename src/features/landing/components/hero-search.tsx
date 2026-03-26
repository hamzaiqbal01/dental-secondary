"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { schools } from "@/features/database/data/schools";
import styles from "./hero-search.module.css";

const MAX_RESULTS = 7;

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return schools
      .filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.abbr.toLowerCase().includes(q) ||
          s.state.toLowerCase().includes(q)
      )
      .slice(0, MAX_RESULTS);
  }, [query]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setHighlighted(-1);
    setOpen(true);
  };

  const goToDatabase = (q?: string) => {
    const params = q ? `?q=${encodeURIComponent(q)}` : "";
    router.push(`/database${params}`);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) {
      if (e.key === "Enter") goToDatabase(query);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlighted >= 0) goToDatabase(results[highlighted].abbr);
      else goToDatabase(query);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const showDropdown = open && query.trim().length > 0;

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <div className={`${styles.searchBar}${showDropdown && results.length > 0 ? ` ${styles.searchBarOpen}` : ""}`}>
        <span className={styles.icon}>📍</span>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search by state, school, or abbreviation…"
          value={query}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <button
          className={styles.btn}
          type="button"
          onClick={() => goToDatabase(query)}
        >
          Search Schools
        </button>
      </div>

      {showDropdown && (
        <div className={styles.dropdown}>
          {results.length === 0 ? (
            <div className={styles.empty}>No schools match &ldquo;{query}&rdquo;</div>
          ) : (
            <>
              {results.map((school, i) => (
                <button
                  key={school.abbr}
                  className={`${styles.item}${i === highlighted ? ` ${styles.itemHighlighted}` : ""}`}
                  onMouseEnter={() => setHighlighted(i)}
                  onMouseLeave={() => setHighlighted(-1)}
                  onClick={() => goToDatabase(school.abbr)}
                  type="button"
                >
                  <span className={styles.itemAbbr}>{school.abbr}</span>
                  <span className={styles.itemName}>{school.name}</span>
                  <span className={styles.itemState}>📍 {school.state}</span>
                </button>
              ))}
              <button
                className={styles.viewAll}
                type="button"
                onClick={() => goToDatabase(query)}
              >
                View all results for &ldquo;{query}&rdquo; →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
