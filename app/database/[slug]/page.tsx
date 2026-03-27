import { SchoolDetailPage } from "@/features/database/components/school-detail-page";
import { schoolDetails } from "@/features/database/data/school-details";

export async function generateStaticParams() {
  return schoolDetails.map((s) => ({ slug: s.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <SchoolDetailPage slug={slug} />;
}
