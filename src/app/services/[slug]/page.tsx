import { ArrowRight, Check, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceIcon } from "@/components/site/service-icon";
import { siteConfig } from "@/data/site-config";

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ADD Creatives`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((item) => item.slug === slug);
  if (!service) notFound();

  const relatedServices = siteConfig.services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main>
      <PageHero
        description={service.shortDescription}
        eyebrow="Our services"
        title={service.title}
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <FadeIn>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
              <ServiceIcon name={service.icon} className="h-8 w-8" />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
              A clear plan, carefully delivered
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-0.05em] text-ink">
              Turn the right idea into work people can act on.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We start with the people you want to reach and the change you want
              to make. Then we bring the right skills together to create work
              that is considered, useful, and ready to grow with your business.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-[2rem] bg-[#0e2d55] p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                What we can help with
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                    key={feature}
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#9cc0f2]"
                      size={17}
                    />
                    <span className="text-sm leading-6 text-blue-50">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
      <section className="bg-soft py-20 sm:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              description="The details change with every brief, but the way we work stays clear and collaborative."
              eyebrow="Our process"
              title="A thoughtful process from day one."
            />
          </FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {service.process.map((step, index) => (
              <FadeIn delay={index * 0.07} key={step}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="font-display text-sm font-extrabold text-brand-blue">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-extrabold text-ink">
                    {step}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {[
                      "We align on your goals, audience, and the best way to define success.",
                      "We create the right strategy and develop work that makes the plan tangible.",
                      "We launch with care, share what we learn, and identify practical next steps.",
                    ][index]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              description={`A few common questions about ${service.title.toLowerCase()}. If your brief is different, just ask.`}
              eyebrow="Good to know"
              title="Questions before you get started."
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                q: `Is this service right for my business?`,
                a: `It can be a good fit if ${service.shortDescription.toLowerCase()} We start with a conversation to understand your audience, goals, and timing.`,
              },
              {
                q: "Can this be combined with other services?",
                a: "Yes. We can bring connected services together when they support the same goal. You can also begin with one focused project.",
              },
              {
                q: "How do you decide what to include?",
                a: "We build a clear scope around your needs, priorities, and budget, then explain the recommended work before you commit.",
              },
              {
                q: "What happens after launch?",
                a: "We can review the work with you and discuss ongoing support or the next useful improvement, if you need it.",
              },
            ].map((item) => (
              <details
                className="group rounded-2xl border border-slate-200 p-5 open:border-blue-200"
                key={item.q}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {item.q}
                  <ChevronRight
                    aria-hidden="true"
                    className="shrink-0 text-brand-blue transition-transform group-open:rotate-90"
                    size={18}
                  />
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-slate-100 bg-[#f7f9fd] py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            More ways we can help
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-ink transition hover:border-brand-blue"
                href={`/services/${related.slug}`}
                key={related.slug}
              >
                {related.title}
                <ChevronRight aria-hidden="true" className="text-brand-blue" size={17} />
              </Link>
            ))}
          </div>
          <Button className="mt-7" href="/contact">
            Talk to us about {service.title}{" "}
            <ArrowRight aria-hidden="true" size={16} />
          </Button>
        </Container>
      </section>
    </main>
  );
}
