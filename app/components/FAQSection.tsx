"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this completely confidential?",
    answer:
      "Absolutely. We never share your project details, personal information, or any deliverables with anyone. Every project is built from scratch exclusively for you, and we sign NDAs upon request. Your privacy is our top priority.",
  },
  {
    question: "Will the project pass plagiarism checks?",
    answer:
      "Yes. Every project is developed original from the ground up — no templates, no recycled code. Documentation is written fresh for each client. We can provide plagiarism reports (Turnitin-compatible) upon request before final delivery.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "This depends on your package. The Starter plan includes 1 revision round, Professional includes 3 rounds, and Premium comes with unlimited revisions. We work with you until your supervisor approves the deliverables.",
  },
  {
    question: "Can you match my university's specific format?",
    answer:
      "Yes — we've worked with 150+ universities and are familiar with various documentation formats, citation styles, and submission guidelines. Just share your university's template or guidelines, and we'll follow them precisely.",
  },
  {
    question: "What if my supervisor asks for changes?",
    answer:
      "That's covered under your revision rounds. Share the feedback, and we'll implement the changes quickly. For Premium clients, we offer direct coordination where we can respond to supervisor comments within 24 hours.",
  },
  {
    question: "How do payments work?",
    answer:
      "We work on a milestone-based payment system: 50% upfront to begin work, and 50% upon delivery and your approval. We accept bank transfers, JazzCash, EasyPaisa, and international payments. No hidden fees.",
  },
  {
    question: "Can I see progress during development?",
    answer:
      "Absolutely. You receive regular progress updates with screenshots, demo links, and milestone check-ins. Professional and Premium clients get access to a shared project board where you can track every task in real-time.",
  },
  {
    question: "Do you provide defense/viva preparation?",
    answer:
      "Yes. All packages include documentation that prepares you for common questions. The Premium package includes dedicated 1-on-1 viva coaching sessions, a list of expected questions with answers, and a mock defense walkthrough.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-[var(--color-border)]"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-[var(--font-display)] font-semibold text-[0.95rem] text-[var(--color-ink)] pr-8 group-hover:text-[var(--color-amber)] transition-colors duration-300">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className="text-[var(--color-stone)]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[var(--color-graphite)] leading-relaxed max-w-[700px]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding bg-[var(--color-silk)]"
      ref={ref}
    >
      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left column — heading */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label block mb-4"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-heading-1 mb-4"
            >
              Common Questions, Direct Answers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body"
            >
              Everything you need to know before getting started. Can&apos;t
              find what you&apos;re looking for? Reach out directly.
            </motion.p>
          </div>

          {/* Right column — accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
