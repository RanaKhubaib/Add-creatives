import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { BlogCard, CaseStudyCard } from "@/components/site/content-cards";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { getBlogPosts, getCaseStudies } from "@/lib/content";
import { siteConfig } from "@/data/site-config";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We listen, ask better questions, and get clear on the people and goals behind your brief.",
  },
  {
    number: "02",
    title: "Find the focus",
    description:
      "A practical strategy gives the creative work a clear direction and a reason to exist.",
  },
  {
    number: "03",
    title: "Make it real",
    description:
      "Design, content, and technology come together in a thoughtful, useful experience.",
  },
  {
    number: "04",
    title: "Keep it growing",
    description:
      "We learn from what happens next and help you decide where to go from there.",
  },
];

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with ambitious teams who want a clearer brand, stronger digital presence, or more focused marketing. Tell us where you are and what you want to improve, and we can see if we are a good fit.",
  },
  {
    question: "Can I hire you for just one service?",
    answer:
      "Yes. You can start with one focused project, such as a website, brand identity, SEO review, or campaign. We will recommend connected services only when they genuinely support your goals.",
  },
  {
    question: "How do projects usually begin?",
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
    question: "Can you help after the website or campaign launches?",
    answer:
      "Yes. We can discuss ongoing updates, content, optimisation, and campaign support. The right plan depends on what your team needs once the first project is live.",
  },
];

export default async function Home() {
  const [blogPosts, caseStudies] = await Promise.all([
    getBlogPosts(),
    getCaseStudies(),
  ]);

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#f7f9fd]">
        <div
          aria-hidden="true"
          className="hero-grid absolute inset-0 -z-10 opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute -right-36 -top-56 -z-10 h-[52rem] w-[52rem] rounded-full bg-[radial-gradient(circle,_#dbe8fb_0%,_rgba(219,232,251,0)_68%)]"
        />
        <Container className="grid min-h-[680px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <FadeIn>
              <Badge>
                <Sparkles aria-hidden="true" size={14} />
                Strategy · creativity · digital growth
              </Badge>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h1 className="mt-7 font-display text-[clamp(3.2rem,7.3vw,6.7rem)] font-extrabold leading-[0.91] tracking-[-0.075em] text-ink">
                Make your
                <br />
                next move
                <br />
                <span className="relative inline-block text-brand-blue">
                  count.
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-2 w-[82%] -skew-x-[28deg] bg-[#bdd3f4]"
                  />
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                We bring bold creative and clear digital thinking together to
                help brands turn good ideas into meaningful growth.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact">
                  Start a project <ArrowRight aria-hidden="true" size={17} />
                </Button>
                <Button href="/case-studies" variant="secondary">
                  See how we think <ArrowUpRight aria-hidden="true" size={17} />
                </Button>
              </div>
              <p className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Lahore based. Open to good ideas everywhere.
              </p>
            </FadeIn>
          </div>

          <FadeIn className="relative mx-auto w-full max-w-[36rem]" delay={0.1}>
            <div className="relative aspect-[0.95] sm:aspect-[1.08]">
              <div className="absolute inset-5 rotate-[-5deg] rounded-[2rem] bg-[#d7e5f7]" />
              <div className="absolute inset-1 rotate-[3deg] rounded-[2rem] bg-[#17467f] shadow-[0_35px_80px_-40px_rgba(14,44,82,0.75)]" />
              <div className="group absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f2c52] via-[#174b86] to-[#648cce] p-6 text-white sm:p-8">
                <Image
                  alt=""
                  className="hero-photo object-cover opacity-90"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  src="/images/digital-studio.jpg"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-[#0f2c52]/75 via-[#174b86]/65 to-[#648cce]/50"
                />
                <div
                  aria-hidden="true"
                  className="hero-orbit absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/20"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-64 w-64 rounded-full border border-white/15"
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-extrabold tracking-[-0.05em]">
                      <span className="text-[#93b9f1]">ADD</span> / STUDIO
                    </span>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-100">
                      Digital direction
                    </span>
                  </div>
                  <div className="my-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                      From insight to impact
                    </p>
                    <p className="mt-3 max-w-sm font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.06em] sm:text-5xl">
                      Better ideas.
                      <br />
                      Better together.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-2">
                      {[
                        ["01", "Strategy"],
                        ["02", "Creative"],
                        ["03", "Growth"],
                      ].map(([number, label]) => (
                        <div
                          className="border-t border-white/25 pt-3"
                          key={number}
                        >
                          <span className="block text-xs font-bold text-blue-200">
                            {number}
                          </span>
                          <span className="mt-1 block text-xs font-semibold">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end justify-between border-t border-white/20 pt-4">
                    <span className="text-xs text-blue-100/70">
                      Digital Solutions That drive Growth
                    </span>
                    <ArrowDownRight aria-hidden="true" size={20} />
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 top-[10%] hidden max-w-48 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/80 bg-white/95 p-4 text-ink shadow-[0_24px_65px_-35px_rgba(10,15,28,0.5)] sm:block">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  A joined-up team
                </span>
                <div className="mt-3 flex -space-x-2">
                  {["bg-[#98b7e5]", "bg-[#f0c5a5]", "bg-[#9bc8b1]"].map(
                    (color, index) => (
                      <span
                        aria-hidden="true"
                        className={`h-8 w-8 rounded-full border-2 border-white ${color}`}
                        key={index}
                      />
                    ),
                  )}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-navy text-[9px] font-bold text-white">
                    +
                  </span>
                </div>
                <p className="mt-2 text-xs font-semibold">
                  Strategy to launch
                </p>
              </div>
              <div className="absolute -bottom-4 right-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_20px_50px_-25px_rgba(10,15,28,0.4)] sm:right-[-1.2rem]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7effc] text-brand-blue">
                  <MoveUpRight aria-hidden="true" size={19} />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    One clear brief
                  </span>
                  <span className="mt-1 block text-sm font-bold text-ink">
                    Many ways forward
                  </span>
                </span>
              </div>
            </div>
          </FadeIn>
        </Container>
        <div className="overflow-hidden border-t border-slate-200/80 bg-white/60 py-5">
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
            {[...Array(2)].flatMap((_, copy) =>
              [
                "BRAND STRATEGY",
                "WEB DESIGN",
                "SEARCH",
                "SOCIAL",
                "PAID MEDIA",
                "CONTENT",
              ].map((item, index) => (
                <span
                  className="flex items-center gap-10 font-display text-xs font-bold tracking-[0.18em] text-slate-400"
                  key={`${copy}-${index}`}
                >
                  {item}
                  <span className="h-1.5 w-1.5 rotate-45 bg-brand-blue/50" />
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                description="From the first big question to the final detail, we bring the right creative disciplines together around what your business needs next."
                eyebrow="What we do"
                title="A good idea deserves a team that can take it further."
              />
              <Link
                className="inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-bold text-brand-blue transition hover:gap-3"
                href="/services"
              >
                Explore all services <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => (
              <FadeIn delay={index * 0.05} key={service.slug}>
                <ServiceCard index={index} service={service} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-soft py-20 sm:py-24 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[1.12] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0d2648] via-[#1d5b9b] to-[#7da8df] p-6 sm:p-9">
              <Image
                alt=""
                className="hero-photo object-cover opacity-80"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                src="/images/team-strategy.jpg"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-[#0d2648]/75 via-[#1d5b9b]/60 to-[#7da8df]/45"
              />
              <div
                aria-hidden="true"
                className="hero-orbit absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/20"
              />
              <div
                aria-hidden="true"
                className="absolute -right-2 -top-6 h-52 w-52 rounded-full border border-white/20"
              />
              <div className="relative flex h-full flex-col justify-between">
                <p className="max-w-[13rem] font-display text-3xl font-extrabold leading-tight tracking-[-0.06em] text-white sm:text-4xl">
                  Clarity is a creative advantage.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-blue-100">
                      Start with
                    </span>
                    <span className="mt-2 block font-display text-xl font-bold text-white">
                      A good question
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white p-4 text-ink shadow-xl">
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-blue">
                      Build toward
                    </span>
                    <span className="mt-2 block font-display text-xl font-bold">
                      A clear next step
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-2 rounded-2xl bg-[#f2c9a7] px-5 py-4 font-display text-sm font-extrabold text-ink shadow-lg sm:right-[-1.25rem]">
              Ideas with intention
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              About ADD Creatives
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.055em] text-ink sm:text-4xl lg:text-5xl">
              Creative work should move your business forward.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              We are a Lahore-based creative and digital agency built around a
              simple idea: thoughtful strategy and strong creative do their
              best work together. We make the complicated feel clear, then
              create useful work that helps your brand take its next step.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "One connected approach from strategy to execution",
                "Clear communication and purposeful creative",
                "A practical plan shaped around your goals",
              ].map((strength) => (
                <li
                  className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700"
                  key={strength}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-blue">
                    <Check aria-hidden="true" size={13} />
                  </span>
                  {strength}
                </li>
              ))}
            </ul>
            <Button className="mt-8" href="/about" variant="secondary">
              Meet the studio <ArrowUpRight aria-hidden="true" size={17} />
            </Button>
          </FadeIn>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#0c2343] py-16 text-white sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_78%_10%,#4a6fb5_0,transparent_35%),linear-gradient(110deg,transparent_45%,rgba(255,255,255,.1)_45.2%,transparent_45.5%)]"
        />
        <Container className="grid gap-8 sm:grid-cols-3">
          {[
            { label: "Creative disciplines", value: 6 },
            { label: "Stages from brief to launch", value: 4 },
            { label: "Connected approach", value: 1 },
          ].map((item, index) => (
            <FadeIn delay={index * 0.08} key={item.label}>
              <div className="border-l border-white/20 pl-5 sm:pl-7">
                <p className="font-display text-5xl font-extrabold tracking-[-0.06em] text-white sm:text-6xl">
                  <AnimatedCounter value={item.value} />
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-100/70">
                  {item.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              description="Good work gets better when the path is clear. We keep the process collaborative, focused, and built around the outcome."
              eyebrow="How we work"
              title="From the first conversation to the next chapter."
            />
          </FadeIn>
          <div className="relative mt-12 grid gap-4 md:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-7 hidden border-t border-dashed border-blue-200 md:block"
            />
            {processSteps.map((step, index) => (
              <FadeIn delay={index * 0.08} key={step.number}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white font-display text-sm font-extrabold text-brand-blue shadow-sm">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-extrabold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-soft py-20 sm:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                description={
                  caseStudies.some((study) => study.isSample)
                    ? "Our portfolio is growing. These clearly labelled sample concepts show the kind of thinking we bring to a brief."
                    : "A selection of ideas and outcomes shaped around the people and goals behind each brief."
                }
                eyebrow="Selected thinking"
                title="Ideas made visible."
              />
              <Link
                className="inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-bold text-brand-blue transition hover:gap-3"
                href="/case-studies"
              >
                Browse sample concepts <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <FadeIn delay={index * 0.06} key={study.slug}>
                <CaseStudyCard study={study} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              description="No made-up promises or one-size-fits-all playbooks. Just a few principles we bring to every project."
              eyebrow="What you can expect"
              title="Good work starts with a good partnership."
            />
          </FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
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
            ].map((item, index) => (
              <FadeIn delay={index * 0.07} key={item.number}>
                <Card className="h-full border border-slate-100 p-6 sm:p-7">
                  <span className="font-display text-sm font-extrabold text-brand-blue">
                    {item.number}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-extrabold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.copy}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f9fd] py-20 sm:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                description="Useful notes on brand, websites, and digital marketing from the ADD Creatives team."
                eyebrow="From the journal"
                title="Ideas for what comes next."
              />
              <Link
                className="inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-bold text-brand-blue transition hover:gap-3"
                href="/blog"
              >
                View all articles <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <FadeIn delay={index * 0.06} key={post.slug}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <SectionHeading
              description="A few quick answers to help you figure out whether we are the right team for your next project."
              eyebrow="Questions, answered"
              title="Before we get started."
            />
            <Button className="mt-7" href="/contact" variant="secondary">
              Ask us directly <ArrowRight aria-hidden="true" size={16} />
            </Button>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FadeIn delay={index * 0.035} key={faq.question}>
                <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-[0_18px_42px_-32px_rgba(20,63,122,0.4)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base font-bold text-ink marker:hidden">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-brand-blue transition group-open:rotate-45">
                      <span aria-hidden="true" className="text-xl leading-none">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:pb-28">
        <Container className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b2444] via-navy to-[#456eae] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-36 -z-10 h-[30rem] w-[30rem] rounded-full border border-white/15"
          />
          <div
            aria-hidden="true"
            className="absolute -right-2 -top-24 -z-10 h-[22rem] w-[22rem] rounded-full border border-white/15"
          />
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Your next move starts here
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                Have a good idea?
                <br />
                Let&apos;s make it happen.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100/75 sm:text-base">
                Tell us what you are building, changing, or trying to solve.
                We&apos;ll help you find a clear place to start.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-white text-navy hover:bg-blue-50"
                href="/contact"
              >
                Get a free quote <ArrowRight aria-hidden="true" size={17} />
              </Button>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                href={`https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent("Hi ADD Creatives, I'd like to discuss a project.")}`}
                rel="noreferrer"
                target="_blank"
              >
                Chat on WhatsApp <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
