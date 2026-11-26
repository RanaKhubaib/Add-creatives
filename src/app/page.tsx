import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BlogCard, CaseStudyCard } from "@/components/site/content-cards";
import { HomeHero } from "@/components/site/home-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { TechnologyStack } from "@/components/site/technology-stack";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/data/site-config";
import { getBlogPosts, getCaseStudies } from "@/lib/content";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, audience, and goals behind the brief.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Set the strategy and creative direction before making the work.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Bring the right creative, technical, and marketing skills together.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "Launch with care, review what happens, and identify useful next steps.",
  },
];

const principles = [
  {
    number: "01",
    title: "Straight answers",
    copy: "We explain the thinking, the trade-offs, and what happens next in plain language.",
  },
  {
    number: "02",
    title: "Creative with a purpose",
    copy: "Every visual, message, and interaction has a job to do for your audience.",
  },
  {
    number: "03",
    title: "A team in your corner",
    copy: "We work collaboratively, listen carefully, and stay focused on your goals.",
  },
];

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with teams looking for a clearer brand, stronger digital presence, or more focused marketing. Tell us where you are and what you want to improve, and we can see if we are a good fit.",
  },
  {
    question: "Can I hire ADD Creatives for a single service?",
    answer:
      "Yes. You can start with one focused project, such as a website, brand identity, SEO review, or campaign. We recommend connected services only when they genuinely support your goals.",
  },
  {
    question: "How does a project begin?",
    answer:
      "Start with the enquiry form or WhatsApp. We will learn about your goals, timing, and priorities, then suggest a practical next step and a clear scope.",
  },
  {
    question: "Do you work with clients outside Lahore?",
    answer:
      "Yes. ADD Creatives is based in Lahore and can work with teams in other cities and markets through remote workshops and regular project check-ins.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on the scope, schedule, and level of support. Share a little about your needs and budget range, and we will help shape a suitable plan before any work begins.",
  },
  {
    question: "Can you provide support after launch?",
    answer:
      "Yes. We can discuss ongoing updates, content, optimisation, and campaign support. The right plan depends on what your team needs once the first project is live.",
  },
];

export const metadata: Metadata = {
  title: "ADD Creatives | Creative Solutions. Digital Growth.",
  description:
    "ADD Creatives brings strategy, design, technology, and digital marketing together to help brands build stronger digital experiences and grow with confidence.",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const [blogPosts, caseStudies] = await Promise.all([
    getBlogPosts(),
    getCaseStudies(),
  ]);
  const featuredPost = blogPosts[0];

  return (
    <main>
      <HomeHero />

      <section className="border-b border-slate-200 py-16 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Digital Solutions That Drive Growth
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
              Bring the right disciplines around one clear direction.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              We connect creative thinking, technology, and marketing to make
              digital work easier to understand, use, and improve. Every
              engagement begins with the needs behind the brief—not a
              one-size-fits-all playbook.
            </p>
            <Link
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand-blue"
              href="/about"
            >
              Get to know ADD Creatives
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.08}>
            <figure>
              <div className="image-frame group relative aspect-[1.48] overflow-hidden rounded-[1.75rem] bg-light-blue">
                <Image
                  alt="A group of people collaborating around a laptop; illustrative stock photography, not a photograph of ADD Creatives staff."
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src="/images/creative-collaboration.jpg"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                Illustrative stock image—not a photograph of the ADD Creatives
                team.
              </figcaption>
            </figure>
          </FadeIn>
        </Container>
      </section>

      <TechnologyStack />

      <section className="border-b border-slate-200 bg-soft py-16 sm:py-20 lg:py-24">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                description="From a single focused project to a connected digital presence, choose the capabilities that fit your goals."
                eyebrow="What we do"
                title="Everything your brand needs to move forward."
              />
              <Link
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand-blue"
                href="/services"
              >
                Explore all services <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => (
              <FadeIn
                delay={index * 0.04}
                key={service.slug}
              >
                <ServiceCard index={index} service={service} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 py-16 sm:py-20 lg:py-24">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                description={
                  caseStudies.some((study) => study.isSample)
                    ? "The concepts below are clearly labelled and show an illustrative approach—not completed client projects or verified results."
                    : "A selection of ideas and outcomes shaped around the people and goals behind each brief."
                }
                eyebrow="Selected work"
                title="Turning ideas into digital experiences."
              />
              <Link
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand-blue"
                href="/case-studies"
              >
                Explore all work <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="mt-9 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study, index) => (
              <FadeIn delay={index * 0.05} key={study.slug}>
                <CaseStudyCard study={study} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-deep-blue py-16 text-white sm:py-20 lg:py-24">
        <Container>
          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                  Why ADD Creatives
                </p>
                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Creative thinking. Clear direction. Meaningful work.
                </h2>
              </div>
              <div className="divide-y divide-white/20 border-y border-white/20">
                {principles.map((item) => (
                  <div
                    className="group grid gap-3 py-5 transition-colors hover:bg-white/[0.035] sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-5"
                    key={item.number}
                  >
                    <span className="text-xs font-semibold text-blue-200">
                      {item.number}
                    </span>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="max-w-lg text-sm leading-6 text-blue-100/75">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-b border-slate-200 py-16 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <FadeIn>
            <figure>
              <div className="image-frame group relative aspect-[1.3] overflow-hidden rounded-[1.75rem] bg-light-blue">
                <Image
                  alt="A close view of design sketches and notes on a notebook, used as illustrative stock photography."
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  src="/images/digital-studio.jpg"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                Illustrative stock image; no team or client work is represented.
              </figcaption>
            </figure>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              About the agency
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
              A thoughtful partner from the first question to the next step.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              Based in Lahore, ADD Creatives helps businesses make their
              digital presence clearer and more useful. We listen first, agree
              on what matters, and bring together the skills needed to move the
              work forward.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Curiosity before assumptions",
                "Clear communication and purposeful craft",
                "Collaborative work shaped around your goals",
              ].map((value) => (
                <li className="flex items-start gap-3 text-sm text-ink" key={value}>
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand-blue"
                    size={17}
                  />
                  {value}
                </li>
              ))}
            </ul>
            <Button className="mt-7" href="/about" variant="secondary">
              More about us <ArrowRight aria-hidden="true" size={16} />
            </Button>
          </FadeIn>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              description="Good work gets better when the path is clear. We keep the process collaborative, focused, and built around the outcome."
              eyebrow="How we work"
              title="From first conversation to final delivery."
            />
          </FadeIn>
          <ol className="mt-10 grid gap-0 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <li
                className="border-t border-slate-300 pt-5 md:pr-6"
                key={step.number}
              >
                <FadeIn delay={index * 0.04}>
                  <span className="text-xs font-semibold text-brand-blue">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {featuredPost ? (
        <section className="border-y border-slate-200 bg-soft py-16 sm:py-20 lg:py-24">
          <Container>
            <FadeIn>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <SectionHeading
                  description="Practical ideas and perspectives on building brands, improving websites, and making digital marketing work harder."
                  eyebrow="From the journal"
                  title="Insights, ideas, and perspectives."
                />
                <Link
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand-blue"
                  href="/blog"
                >
                  Visit the journal <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </FadeIn>
            <div className="mt-9 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <FadeIn>
                <Link className="group block" href={`/blog/${featuredPost.slug}`}>
                  <figure>
                    <div className="image-frame group relative aspect-[1.5] overflow-hidden rounded-[1.5rem] bg-light-blue">
                      <Image
                        alt={featuredPost.coverImageAlt}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        src={featuredPost.coverImage}
                      />
                    </div>
                    <figcaption className="mt-2 text-xs text-muted">
                      {featuredPost.category} · {featuredPost.readTime}
                    </figcaption>
                  </figure>
                  <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink transition-colors group-hover:text-brand-blue sm:text-3xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                    {featuredPost.excerpt}
                  </p>
                </Link>
              </FadeIn>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                {blogPosts.slice(1, 3).map((post, index) => (
                  <FadeIn delay={index * 0.05} key={post.slug}>
                    <BlogCard post={post} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <FadeIn>
            <SectionHeading
              description="A few quick answers to help you decide whether we are the right team for your next project."
              eyebrow="Questions, answered"
              title="Before we get started."
            />
            <Button className="mt-7" href="/contact" variant="secondary">
              Ask us directly <ArrowRight aria-hidden="true" size={16} />
            </Button>
          </FadeIn>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => (
              <FadeIn delay={index * 0.025} key={faq.question}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-ink marker:hidden">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-slate-300 text-brand-blue transition-transform group-open:rotate-45">
                      <span aria-hidden="true" className="text-xl leading-none">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                    {faq.answer}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-14 text-white sm:py-18 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
              Your next move starts here
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              Let&apos;s build something that moves your brand forward.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100/80 sm:text-base">
              Have a project in mind? Tell us what you want to achieve and
              let&apos;s discuss how we can help.
            </p>
          </FadeIn>
          <FadeIn className="flex flex-wrap gap-3" delay={0.08}>
            <Button href="/contact" variant="light">
              Start a project <ArrowRight aria-hidden="true" size={16} />
            </Button>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/50 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              href={`https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent("Hi ADD Creatives, I'd like to discuss a project.")}`}
              rel="noreferrer"
              target="_blank"
            >
              Contact us <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
