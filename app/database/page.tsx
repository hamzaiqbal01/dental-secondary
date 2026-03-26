import type { Metadata } from "next";
import { DatabasePage } from "@/features/database/components/database-page";

export const metadata: Metadata = {
  title: "Secondary Database — Dental School Secondary",
  description: "Browse secondary prompts, deadlines, and requirements for all 66 accredited U.S. dental schools.",
};

export default function DatabaseRoute() {
  return <DatabasePage />;
}
