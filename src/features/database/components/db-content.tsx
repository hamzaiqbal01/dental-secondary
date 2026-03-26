"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { schools as allSchools } from "../data/schools";
import { StateSection } from "./state-section";
import { DbSidebar } from "./db-sidebar";
import styles from "./database-page.module.css";

const allStates = [...new Set(allSchools.map((s) => s.state))].sort();

export function DbContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [stateFilter, setStateFilter] = useState("");

  // Keep query in sync if URL param changes (e.g. back/forward navigation)
  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null) setQuery(q);
  }, [searchParams]);
  const [savedSchools, setSavedSchools] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return allSchools.filter(
      (s) =>
        (!q ||
          s.name.toLowerCase().includes(q) ||
          s.abbr.toLowerCase().includes(q) ||
          s.state.toLowerCase().includes(q)) &&
        (!stateFilter || s.state === stateFilter)
    );
  }, [query, stateFilter]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof allSchools> = {};
    filtered.forEach((s) => {
      if (!map[s.state]) map[s.state] = [];
      map[s.state].push(s);
    });
    return map;
  }, [filtered]);

  const toggleSave = (abbr: string) => {
    setSavedSchools((prev) => {
      const next = new Set(prev);
      if (next.has(abbr)) next.delete(abbr);
      else next.add(abbr);
      return next;
    });
  };

  return (
    <>
      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search by school name or abbreviation…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <select className={styles.filterSelect} value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}>
          <option value="">All States</option>
          {allStates.map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>

        <div className={styles.resultsPill}>
          {filtered.length} school{filtered.length !== 1 ? "s" : ""} found
        </div>
      </div>

      {/* Main + Sidebar grid */}
      <div className={styles.dbLayout}>
        <div>
          {filtered.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3>No schools found</h3>
              <p>Try adjusting your search or filter.</p>
            </div>
          ) : (
            Object.keys(grouped)
              .sort()
              .map((state) => (
                <StateSection
                  key={state}
                  state={state}
                  short={grouped[state][0].short}
                  schools={grouped[state]}
                  savedSchools={savedSchools}
                  onToggleSave={toggleSave}
                />
              ))
          )}
        </div>

        <DbSidebar />
      </div>
    </>
  );
}
