import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECT_SLUGS, getProjectBySlug } from "../../lib/constants";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CaseStudyContent from "./CaseStudyContent";
import { BreadcrumbJsonLd, CaseStudyJsonLd } from "../../components/JsonLd";

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
    return { title: "Project Not Found" };
  }

  const pageUrl = `https://getgrade.tech/projects/${slug}`;

  return {
    title: `${project.title} | Case Study`,
    description: project.tagline,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | getgrade Case Study`,
      description: project.description,
      url: pageUrl,
      siteName: "getgrade",
      images: [
        {
          url: `https://getgrade.tech${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
      images: [`https://getgrade.tech${project.image}`],
    },
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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/#projects" },
          { name: project.title, href: `/projects/${project.slug}` },
        ]}
      />
      <CaseStudyJsonLd project={project} />
      <Navbar />
      <CaseStudyContent project={project} />
      <Footer />
    </>
  );
}
