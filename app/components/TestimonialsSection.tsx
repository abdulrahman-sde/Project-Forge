"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khurram",
    university: "Ripah University",
    rating: 5,
    text: "They built my entire e-commerce FYP in 3 weeks — React frontend, Node backend, and full documentation. My supervisor was genuinely impressed with the SRS quality. Got an A without a single revision.",
    initials: "AK",
    color: "var(--color-amber-light)",
  },
  {
    name: "Fatima Noor",
    university: "TUF University",
    rating: 5,
    text: "I was desperate with my AI project deadline approaching. getgrade delivered a complete sentiment analysis system with TensorFlow, plus a 60-page report and presentation deck. Lifesaver!",
    initials: "FN",
    color: "var(--color-sage-light)",
  },
  {
    name: "Hassan Ali",
    university: "Agriculture University",
    rating: 5,
    text: "The documentation quality alone was worth it. My project had proper UML diagrams, ER diagrams, test cases — everything my university demanded. The code was clean and well-commented too.",
    initials: "HA",
    color: "var(--color-blush-light)",
  },
  {
    name: "Sara Malik",
    university: "LUMS",
    rating: 5,
    text: "I was juggling an internship and couldn't handle my FYP. They took my requirements and delivered a fully working Learning Management System. The viva prep sessions gave me all the confidence I needed.",
    initials: "SM",
    color: "var(--color-amber-light)",
  },
  {
    name: "Bilal Tariq",
    university: "UET Lahore",
    rating: 5,
    text: "Clean code, proper documentation, timely delivery. They communicated every step of the way and incorporated my supervisor's feedback seamlessly. Highly professional team.",
    initials: "BT",
    color: "var(--color-sage-light)",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const visibleCount = 3;
  const maxIndex = testimonials.length - visibleCount;

  const next = () => setCurrent((p) => Math.min(p + 1, maxIndex));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  return (
    <section className="section-padding bg-silk" ref={ref}>
      <div className="section-wrapper">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-125">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label block mb-4"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-heading-1"
            >
              Trusted by Students Across Top Universities
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-3"
          >
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-border-strong flex items-center justify-center hover:bg-(--color-ink) hover:text-(--color-ivory) hover:border-(--color-ink) transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-(--color-ink) disabled:hover:border-border-strong"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-border-strong flex items-center justify-center hover:bg-(--color-ink) hover:text-(--color-ivory) hover:border-(--color-ink) transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-(--color-ink) disabled:hover:border-border-strong"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Testimonial cards — desktop sliding row */}
        <div className="hidden md:block overflow-hidden">
          <motion.div
            animate={{ x: `-${current * (100 / visibleCount)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6"
            style={{ width: `${(testimonials.length / visibleCount) * 100}%` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card bg-white"
                style={{
                  width: `calc(${100 / testimonials.length}% - ${((testimonials.length - 1) * 24) / testimonials.length}px)`,
                  flexShrink: 0,
                }}
              >
                <Quote size={28} className="text-amber opacity-30 mb-4" />
                <p className="text-(--color-ink) text-[0.95rem] leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="var(--color-amber)"
                      className="text-amber"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-(--color-ink)">
                      {t.name}
                    </p>
                    <p className="text-xs text-stone">{t.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile — stacked cards */}
        <div className="md:hidden flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="card bg-white"
            >
              <Quote size={28} className="text-amber opacity-30 mb-4" />
              <p className="text-(--color-ink) text-[0.95rem] leading-relaxed mb-6">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="var(--color-amber)"
                      className="text-amber"
                    />
                  ),
                )}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: testimonials[current].color }}
                >
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-(--color-ink)">
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs text-stone">
                    {testimonials[current].university}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm text-stone">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              disabled={current >= testimonials.length - 1}
              className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
