import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, PROJECT_SLUGS, getProjectBySlug } from "../../lib/constants";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CaseStudyContent from "./CaseStudyContent";

/* ═══════════════════════════════════════════
   STATIC GENERATION
   ═══════════════════════════════════════════ */

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

/* ═══════════════════════════════════════════
   DYNAMIC METADATA
   ═══════════════════════════════════════════ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found — ProjectForge" };
  }

  return {
    title: `${project.title} — ProjectForge Case Study`,
    description: project.tagline,
  };
}

/* ═══════════════════════════════════════════
   SERVER PAGE COMPONENT
   ═══════════════════════════════════════════ */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <CaseStudyContent project={project} />
      <Footer />
    </>
  );
}
