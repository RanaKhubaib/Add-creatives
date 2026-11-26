import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/site/section-heading";
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
    alternates: {
      canonical: `/services/${service.slug}`,
    },
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
  const isDark = service.imageLayout === "dark";
  const isWide = service.imageLayout === "wide";
  const imageOnLeft =
    service.imageLayout === "left" || service.imageLayout === "portrait";
  const imageAspect =
    service.imageLayout === "portrait"
      ? "aspect-[0.92]"
      : service.imageLayout === "wide"
        ? "aspect-[2.05]"
        : "aspect-[1.2]";

  const heroCopy = (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          isDark ? "text-blue-200" : "text-brand-blue"
        }`}
      >
        ADD Creatives <span aria-hidden="true">/</span> {service.title}
      </p>
      <h1
        className={`mt-4 font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.055em] ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {service.heroTitle}
      </h1>
      <p
        className={`mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${
          isDark ? "text-blue-100/80" : "text-muted"
        }`}
      >
        {service.shortDescription}
      </p>
      <Button
        className="mt-7"
        href="/contact"
        variant={isDark ? "light" : "primary"}
      >
        Talk to us about this service
        <ArrowRight aria-hidden="true" size={16} />
      </Button>
    </div>
  );

  const heroImage = (
    <figure className="min-w-0">
      <div className={`relative ${imageAspect} overflow-hidden bg-light-blue`}>
        <Image
          alt={service.imageAlt}
          className="object-cover"
          fill
          priority
          sizes={isWide ? "100vw" : "(max-width: 1024px) 100vw, 48vw"}
          src={service.image}
        />
      </div>
      <figcaption
        className={`mt-2 text-xs ${
          isDark ? "text-blue-100/70" : "text-muted"
        }`}
      >
        Illustrative stock image—not ADD Creatives client work.
      </figcaption>
    </figure>
  );

  return (
    <main>
      <section
        className={`border-b ${
          isDark
            ? "border-deep-blue bg-deep-blue text-white"
            : service.imageLayout === "left"
              ? "border-slate-200 bg-soft"
              : "border-slate-200 bg-white"
        } py-12 sm:py-16 lg:py-20`}
      >
        <Container>
          <div
            className={`mb-8 flex items-center gap-2 text-xs ${
              isDark ? "text-blue-100/70" : "text-muted"
            }`}
          >
            <Link className="transition-colors hover:text-brand-blue" href="/">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              className="transition-colors hover:text-brand-blue"
              href="/services"
            >
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span>{service.title}</span>
          </div>
          {isWide ? (
            <div className="space-y-9">
              {heroCopy}
              {heroImage}
            </div>
          ) : (
            <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
              {imageOnLeft ? heroImage : null}
              {heroCopy}
              {!imageOnLeft ? heroImage : null}
            </div>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              A clear plan, carefully delivered
            </p>
            <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
              {service.title}, shaped around the brief.
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {service.introduction}
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-soft py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Capabilities
            </p>
            <h2 className="mt-4 max-w-sm font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
              The parts that make the whole work.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              We agree the right scope together, based on your goals, audience,
              timing, and available resources.
            </p>
          </FadeIn>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {service.features.map((feature, index) => (
              <li className="border-t border-slate-300 py-4" key={feature}>
                <FadeIn delay={index * 0.025}>
                  <span className="flex items-start gap-3 text-sm font-medium leading-6 text-ink">
                    <span className="mt-0.5 text-xs font-semibold text-brand-blue">
                      0{index + 1}
                    </span>
                    {feature}
                  </span>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              description="The right scope depends on the brief. These are practical areas the work can support, not guaranteed business outcomes."
              eyebrow="What this supports"
              title="Useful foundations for what comes next."
            />
          </FadeIn>
          <div className="mt-9 grid gap-8 md:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <FadeIn delay={index * 0.04} key={benefit}>
                <div className="border-t border-slate-300 pt-5">
                  <span className="text-xs font-semibold text-brand-blue">
                    0{index + 1}
                  </span>
                  <p className="mt-3 max-w-sm font-display text-lg font-medium leading-7 text-ink">
                    {benefit}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-deep-blue py-16 text-white sm:py-20 lg:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              description="The details change with every brief, but the way we work stays clear and collaborative."
              eyebrow="Our process"
              title="A thoughtful process from day one."
            />
          </FadeIn>
          <ol className="mt-9 grid gap-x-8 md:grid-cols-3">
            {service.process.map((step, index) => (
              <li className="border-t border-white/30 pt-5" key={step}>
                <FadeIn delay={index * 0.04}>
                  <span className="text-xs font-semibold text-blue-200">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">
                    {step}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-blue-100/80">
                    {service.processDetails[index]}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Good to know
            </p>
            <h2 className="mt-4 max-w-sm font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
              Questions before you get started.
            </h2>
          </FadeIn>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {[
              {
                question: `Is ${service.title.toLowerCase()} right for my business?`,
                answer:
                  "It can be a good fit when the work supports a clear audience need or business goal. We start with a conversation to understand your priorities and whether the scope makes sense.",
              },
              {
                question: "Can I combine this with another service?",
                answer:
                  "Yes. We can connect services when they support the same direction. You can also begin with one focused project.",
              },
              {
                question: "How do you decide what to include?",
                answer:
                  "We build a clear scope around your needs, priorities, and budget, then explain the recommended work before you commit.",
              },
              {
                question: "What happens after delivery?",
                answer:
                  "We review the work with you and discuss ongoing support or the next useful improvement if you need it.",
              },
            ].map((item) => (
              <details className="group py-4" key={item.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink marker:hidden">
                  {item.question}
                  <ChevronRight
                    aria-hidden="true"
                    className="shrink-0 text-brand-blue transition-transform group-open:rotate-90"
                    size={18}
                  />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-soft py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                Related capabilities
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
                More ways we can help
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand-blue"
              href="/services"
            >
              All services <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-6 grid gap-0 border-y border-slate-300 md:grid-cols-3 md:divide-x md:divide-slate-300">
            {relatedServices.map((related) => (
              <Link
                className="flex items-center justify-between gap-4 border-b border-slate-300 py-4 text-sm font-semibold text-ink transition-colors hover:text-brand-blue last:border-b-0 md:border-b-0 md:px-4 first:md:pl-0"
                href={`/services/${related.slug}`}
                key={related.slug}
              >
                {related.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-brand-blue"
                  size={16}
                />
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/contact">
              Discuss your project <Check aria-hidden="true" size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
