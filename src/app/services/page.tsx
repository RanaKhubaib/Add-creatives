import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { siteConfig } from "@/data/site-config";

const benefits = [
  "A plan shaped around your audience and business goals",
  "Creative and technical work that feel like one experience",
  "Clear communication from first conversation to handover",
  "A practical next step, whether the brief is big or small",
];

export const metadata: Metadata = {
  title: "Digital Services | ADD Creatives",
  description:
    "Explore web design, SEO, social media, branding, paid ads, and content services from ADD Creatives.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        description="Build a stronger digital presence with a team that connects strategy, creative, and technology around your goals."
        eyebrow="Services"
        title="The right support for your next stage of growth."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => (
              <FadeIn delay={index * 0.05} key={service.slug}>
                <ServiceCard index={index} service={service} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-soft py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionHeading
              description="Great work starts by understanding the people you want to reach and the change you want to make. We keep the process clear and collaborative."
              eyebrow="Why work with ADD Creatives"
              title="One clear direction. The right people around it."
            />
          </FadeIn>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <FadeIn delay={index * 0.05} key={benefit}>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                    <Check aria-hidden="true" size={16} />
                  </span>
                  <p className="text-sm font-semibold leading-6 text-ink">
                    {benefit}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-navy p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
              Have a project in mind?
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Let&apos;s find the right place to start.
            </h2>
          </div>
          <Button
            className="shrink-0 bg-white text-navy hover:bg-blue-50"
            href="/contact"
          >
            Tell us about it <ArrowRight aria-hidden="true" size={17} />
          </Button>
        </Container>
      </section>
    </main>
  );
}
