import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { PageHero } from "@/components/site/page-hero";
import { siteConfig } from "@/data/site-config";
import type { ReactNode } from "react";

const mapQuery = encodeURIComponent(
  "405 E Block PIA Main Boulevard, PIA Housing Scheme, Lahore",
);

export const metadata: Metadata = {
  title: "Contact ADD Creatives",
  description:
    "Start a project with ADD Creatives. Tell us what you are building, changing, or trying to solve.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        actionLabel="Message on WhatsApp"
        actionHref={`https://wa.me/${siteConfig.company.whatsapp}`}
        description="Tell us what you are working on, what you would like to change, or where you need a hand. We will help you find a clear next step."
        eyebrow="Contact"
        title="Let’s talk about what comes next."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid items-start gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <FadeIn>
            <div className="rounded-[1.75rem] bg-[#0d2648] p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                Get in touch
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight">
                A good conversation is a good place to start.
              </h2>
              <p className="mt-3 text-sm leading-6 text-blue-100/70">
                Reach out in the way that works for you. We are based in Lahore
                and happy to talk through your project.
              </p>
              <div className="mt-7 space-y-3">
                <ContactLink
                  href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
                  icon={<Phone aria-hidden="true" size={18} />}
                  label="Call us"
                  value={siteConfig.company.phone}
                />
                <ContactLink
                  href={`https://wa.me/${siteConfig.company.whatsapp}`}
                  icon={<MessageCircle aria-hidden="true" size={18} />}
                  label="WhatsApp"
                  value="Chat with our team"
                />
                <ContactLink
                  href={`mailto:${siteConfig.company.email}`}
                  icon={<Mail aria-hidden="true" size={18} />}
                  label="Email"
                  value={siteConfig.company.email}
                />
                <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-blue-200"
                    size={18}
                  />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200">
                      Visit us
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white">
                      {siteConfig.company.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                  Working hours
                </p>
                <p className="mt-2 text-sm text-blue-100/80">
                  Monday to Saturday · 10:00–19:00 PKT
                </p>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-slate-200">
              <iframe
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                title="Map showing ADD Creatives in Lahore"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-45px_rgba(10,15,28,0.3)] sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                Project enquiry
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                Tell us a little about it.
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share the essentials and we&apos;ll get back to you with a useful
                next step.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
      href={href}
      rel={href.startsWith("https://") ? "noreferrer" : undefined}
      target={href.startsWith("https://") ? "_blank" : undefined}
    >
      <span className="mt-0.5 shrink-0 text-blue-200">{icon}</span>
      <span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200">
          {label}
        </span>
        <span className="mt-1 block text-sm font-semibold text-white">{value}</span>
      </span>
    </a>
  );
}
