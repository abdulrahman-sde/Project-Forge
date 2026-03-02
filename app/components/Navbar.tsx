"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (pathname.startsWith("/projects/")) {
    return (
      <div className="section-wrapper  flex items-center">
        <Link
          href={"/"}
          className="inline-flex items-center gap-2 px-6 py-3 mt-10 text-sm font-semibold text-(--color-ink) bg-(--color-ivory) border border-border rounded-lg shadow-md hover:bg-amber hover:text-white transition-all duration-300"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Previous Page
        </Link>
      </div>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(250,250,247,0.85)] backdrop-blur-xl shadow-[0_1px_0_var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-wrapper">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/") {
                  window.location.href = "/#hero";
                } else {
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label="getgrade — go to landing hero"
            >
              <Image
                src={"/logos/getgrade-icon.svg"}
                width={35}
                height={35}
                alt="Logo"
              />
              <span className="font-semibold text-lg tracking-tight text-(--color-ink)">
                GetGrade
              </span>
            </Link>

            {/* Desktop Links */}
            {pathname === "/" && (
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-[0.9rem] font-medium text-graphite hover:text-(--color-ink) transition-colors duration-300 group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-amber transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            )}

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className="btn-primary text-sm py-2.5 px-5"
                onClick={(e) => {
                  e.preventDefault();
                  if (pathname !== "/") {
                    window.location.href = "/#contact";
                  } else {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={22} className="text-(--color-ink)" />
              ) : (
                <Menu size={22} className="text-(--color-ink)" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[rgba(27,27,24,0.3)] backdrop-blur-sm md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-70 bg-(--color-ivory) shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-24 px-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="block py-3 text-lg font-medium text-(--color-ink) border-b border-border hover:text-amber transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <a
                    href="#contact"
                    className="btn-primary w-full text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                    <ArrowRight size={15} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
