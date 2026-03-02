import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SOCIAL_LINKS,
  canonicalUrl,
} from "../lib/seo";
import type { ProjectData } from "../lib/constants";

/* ═══════════════════════════════════════════
   JSON-LD STRUCTURED DATA COMPONENTS

   Each component renders a <script type="application/ld+json">
   tag. They are server components — zero client JS.
   ═══════════════════════════════════════════ */

/* ─── Helper ──────────────────────────────── */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─── Organization ────────────────────────── */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.svg`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/og-image.png`,
    description: SITE_DESCRIPTION,
    sameAs: Object.values(SOCIAL_LINKS),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
    foundingDate: "2024",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 31.4504,
        longitude: 73.135,
      },
      geoRadius: "50000",
    },
    knowsAbout: [
      "Final Year Project Development",
      "FYP Documentation",
      "Software Development",
      "AI/ML Development",
      "Mobile App Development",
      "Web Application Development",
      "SRS Document Writing",
      "University Project Help",
    ],
    slogan: "Complete FYP Development & Documentation Agency",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return <JsonLd data={data} />;
}

/* ─── WebSite (enables sitelinks search box) ─ */
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={data} />;
}

/* ─── WebPage (for specific pages) ──────────── */
export function WebPageJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    name: title,
    description,
    url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    dateModified: new Date().toISOString(),
  };

  return <JsonLd data={data} />;
}

/* ─── Service (for homepage services section) ─ */
export function ServicesJsonLd() {
  const services = [
    {
      name: "Web-Based FYP Development",
      description:
        "Full-stack web applications using React, Next.js, MERN, Django, Laravel with complete database design, API integration, and deployment-ready code.",
    },
    {
      name: "Mobile Application Development",
      description:
        "Cross-platform mobile apps built with React Native, Expo, or native frameworks including design, development, testing, and deployment.",
    },
    {
      name: "AI & Machine Learning Projects",
      description:
        "Machine learning models, NLP systems, computer vision, recommendation engines, and data science projects powered by Python, TensorFlow, and PyTorch.",
    },
    {
      name: "Complete FYP Documentation",
      description:
        "Professional SRS, SDD, project reports, UML diagrams, test plans, and literature reviews written to university standards.",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FYP Development Services",
    description:
      "Complete Final Year Project development and documentation services by getgrade.",
    numberOfItems: services.length,
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: "Worldwide",
        serviceType: "FYP Development",
      },
    })),
  };

  return <JsonLd data={data} />;
}

/* ─── FAQ Page (for FAQ section) ───────────── */
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

/* ─── BreadcrumbList ──────────────────────── */
interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.href),
    })),
  };

  return <JsonLd data={data} />;
}

/* ─── Case Study / Project ────────────────── */
export function CaseStudyJsonLd({ project }: { project: ProjectData }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": canonicalUrl(`/projects/${project.slug}`),
    name: project.title,
    description: project.tagline,
    url: canonicalUrl(`/projects/${project.slug}`),
    image: `${SITE_URL}${project.image}`,
    author: {
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),
    genre: project.category,
    keywords: project.tags.join(", "),
    about: {
      "@type": "Thing",
      name: project.category,
      description: project.description,
    },
    review: {
      "@type": "Review",
      reviewBody: project.testimonial.text,
      author: {
        "@type": "Person",
        name: project.testimonial.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: project.grade === "A+" ? 5 : 4,
        bestRating: 5,
      },
    },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return <JsonLd data={data} />;
}

/* ─── Pricing / Offers ────────────────────── */
export function PricingJsonLd() {
  const offers = [
    {
      name: "Starter Package",
      description: "Basic FYP development with essential documentation",
      price: "Contact for pricing",
    },
    {
      name: "Professional Package",
      description:
        "Complete FYP with comprehensive documentation and revisions",
      price: "Contact for pricing",
    },
    {
      name: "Premium Package",
      description:
        "Full-service FYP with unlimited revisions and viva preparation",
      price: "Contact for pricing",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "getgrade FYP Development Packages",
    description: "Final Year Project development and documentation packages",
    itemListElement: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    })),
  };

  return <JsonLd data={data} />;
}
