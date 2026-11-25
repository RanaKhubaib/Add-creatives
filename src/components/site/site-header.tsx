"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ServiceIcon } from "@/components/site/service-icon";
import { siteConfig } from "@/data/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl"
      onBlur={(event) => {
        const nextFocused = event.relatedTarget;
        if (!(nextFocused instanceof Node) || !event.currentTarget.contains(nextFocused)) {
          setServicesOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setServicesOpen(false);
          setMobileOpen(false);
        }
      }}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Link
          aria-label={`${siteConfig.company.name} home`}
          className="shrink-0 font-display text-[1.15rem] font-extrabold tracking-[-0.07em] text-navy"
          href="/"
          onClick={closeMenu}
        >
          <span className="text-brand-blue">ADD</span> CREATIVES
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {siteConfig.menuItems.map((item) =>
            item.href === "/services" ? (
              <div className="group" key={item.href}>
                <button
                  aria-expanded={servicesOpen}
                  aria-controls="services-mega-menu"
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-soft hover:text-brand-blue ${
                    pathname.startsWith("/services")
                      ? "text-brand-blue"
                      : "text-slate-600"
                  }`}
                  onClick={() => setServicesOpen((open) => !open)}
                  onFocus={(event) => {
                    if (event.currentTarget.matches(":focus-visible")) {
                      setServicesOpen(true);
                    }
                  }}
                  onMouseEnter={() => setServicesOpen(true)}
                  type="button"
                >
                  {item.label}
                  <ArrowDown
                    aria-hidden="true"
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    size={14}
                  />
                </button>
              </div>
            ) : (
              <Link
                className={`rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-soft hover:text-brand-blue ${
                  pathname === item.href ? "text-brand-blue" : "text-slate-600"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button className="min-h-10 px-4 py-2 text-xs" href="/contact">
            Get a free quote
          </Button>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-navy lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {servicesOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 top-full z-30 border-y border-slate-100 bg-white/95 shadow-[0_28px_70px_-35px_rgba(10,15,28,0.35)] backdrop-blur-xl"
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            aria-label="Services menu"
            role="region"
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
          >
            <Container className="grid gap-8 py-8 lg:grid-cols-[0.8fr_1.7fr_0.85fr] lg:py-9">
              <div className="max-w-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  What we do
                </p>
                <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.05em] text-ink">
                  One connected team. Every next step.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Strategy, creative, and technology come together around the
                  growth your business needs.
                </p>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition hover:gap-3"
                  href="/services"
                  onClick={closeMenu}
                >
                  Explore all services <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>

              <nav
                aria-label="Services"
                className="grid gap-2 sm:grid-cols-2"
                id="services-mega-menu"
              >
                {siteConfig.services.map((service, index) => (
                  <Link
                    className="group/service flex items-start gap-3 rounded-2xl border border-transparent p-3 transition hover:border-blue-100 hover:bg-[#f5f8fd]"
                    href={`/services/${service.slug}`}
                    key={service.slug}
                    onClick={closeMenu}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue transition group-hover/service:bg-navy group-hover/service:text-white">
                      <ServiceIcon name={service.icon} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-display text-sm font-extrabold text-ink">
                          {service.title}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          0{index + 1}
                        </span>
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {service.shortDescription}
                      </span>
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d2648] to-[#245d9c] p-5 text-white">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-14 -z-10 h-40 w-40 rounded-full border border-white/20"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-2 -top-6 -z-10 h-28 w-28 rounded-full border border-white/15"
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
                  A good place to start
                </p>
                <h3 className="mt-4 font-display text-xl font-extrabold leading-tight">
                  Tell us what you want to move forward.
                </h3>
                <Link
                  className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy transition hover:bg-blue-50"
                  href="/contact"
                  onClick={closeMenu}
                >
                  Start a conversation <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full max-h-[calc(100vh-76px)] overflow-y-auto border-t border-slate-100 bg-white px-5 pb-8 pt-4 shadow-xl lg:hidden"
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
          >
            {siteConfig.menuItems.map((item) => (
              <div className="border-b border-slate-100" key={item.href}>
                <Link
                  className="block py-4 font-semibold text-ink"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                {item.href === "/services" ? (
                  <div className="grid grid-cols-2 gap-x-3 pb-4">
                    {siteConfig.services.map((service) => (
                      <Link
                        className="py-2 text-sm text-slate-500"
                        href={`/services/${service.slug}`}
                        key={service.slug}
                        onClick={closeMenu}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Button className="mt-5 w-full" href="/contact" onClick={closeMenu}>
              Get a free quote
            </Button>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
