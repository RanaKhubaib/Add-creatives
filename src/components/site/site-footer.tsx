import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-deep-blue text-white">
      <div aria-hidden="true" className="hero-glow absolute -right-32 -top-40 h-80 w-80 rounded-full bg-brand-blue/20 blur-[90px]" />
      <div className="h-1 w-full bg-gradient-to-r from-accent via-brand-blue to-accent" />
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.2fr] lg:py-20">
        <div>
          <Link
            className="inline-flex items-center gap-2 font-display text-xl font-bold tracking-[-0.07em]"
            href="/"
          >
            <span>
              <span className="text-accent">ADD</span> CREATIVES
            </span>
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100/70">
            {siteConfig.company.tagline}. Thoughtful digital work for brands
            ready to move forward.
          </p>
          {siteConfig.socialLinks.some((link) => link.href) ? (
            <div className="mt-6 flex flex-wrap gap-2">
            {siteConfig.socialLinks
              .filter((link) => link.href)
              .map((link) => (
                <a
                  aria-label={link.label}
                  className="rounded-full border border-white/15 px-3 py-2 text-xs text-blue-100 transition hover:border-white/50 hover:bg-white/10"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {siteConfig.menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm text-blue-100/65 transition-colors hover:text-accent"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
            What we do
          </h2>
          <ul className="mt-5 space-y-3">
            {siteConfig.services.map((service) => (
              <li key={service.slug}>
                <Link
                  className="text-sm text-blue-100/65 transition-colors hover:text-accent"
                  href={`/services/${service.slug}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
            Say hello
          </h2>
          <ul className="mt-5 space-y-4">
            <li className="flex gap-3 text-sm leading-6 text-blue-100/70">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-blue-200" size={17} />
              {siteConfig.company.address}
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-sm text-blue-100/65 transition-colors hover:text-accent"
                href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
              >
                <Phone aria-hidden="true" className="text-blue-200" size={17} />
                {siteConfig.company.phone}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-sm text-blue-100/65 transition-colors hover:text-accent"
                href={`mailto:${siteConfig.company.email}`}
              >
                <Mail aria-hidden="true" className="text-blue-200" size={17} />
                {siteConfig.company.email}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-sm text-blue-100/65 transition-colors hover:text-accent"
                href={siteConfig.company.website}
              >
                {siteConfig.company.website.replace(/^https?:\/\//, "")}
              </a>
            </li>
            <li>
              <Link
                className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-white"
                href="/contact"
              >
                Start a project <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-blue-100/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} ADD Creatives. All rights reserved.</p>
        <p>Based in Lahore, Pakistan</p>
      </Container>
    </footer>
  );
}
