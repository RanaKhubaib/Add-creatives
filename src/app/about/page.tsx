import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";

const values = [
  ["Curiosity", "We ask good questions before we reach for easy answers."],
  ["Clarity", "We make the complex easier to understand and act on."],
  ["Craft", "We care about the thinking and the details in equal measure."],
  ["Collaboration", "The best work happens when people build it together."],
  ["Purpose", "Every creative choice should have a reason behind it."],
  ["Momentum", "We focus on progress your team can carry forward."],
];

const disciplines = [
  {
    number: "01",
    title: "Strategy",
    text: "Research, direction, positioning, and the questions that shape a useful brief.",
  },
  {
    number: "02",
    title: "Design",
    text: "Brand identity, digital experiences, visual systems, and thoughtful creative.",
  },
  {
    number: "03",
    title: "Technology",
    text: "Responsive development, accessible foundations, and practical integrations.",
  },
  {
    number: "04",
    title: "Growth",
    text: "Search, social, content, and campaigns that give the work a way forward.",
  },
];

export const metadata: Metadata = {
  title: "About ADD Creatives",
  description:
    "Meet ADD Creatives, a Lahore-based creative and digital team helping businesses move forward online.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        description="We are a creative and digital team based in Lahore. We help businesses find a clear direction, show up with confidence, and move forward online."
        eyebrow="About us"
        title="We help brands grow in the digital world."
      />
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <SectionHeading
              description="ADD Creatives brings the people and disciplines behind a good digital idea together."
              eyebrow="Our story"
              title="Make the complicated feel clear."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Strong brands are built on more than a good-looking website.
                They need clear thinking, useful creative, and a consistent
                experience at every point where people meet the business.
              </p>
              <p>
                That is why ADD Creatives connects strategy, design,
                development, and marketing. We listen first, build a practical
                direction together, and make work your team can confidently
                put into the world.
              </p>
              <p>
                We are based in Lahore, Pakistan, and work with businesses
                looking for a thoughtful partner to take their next digital
                step.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
      <section className="bg-[#0d2648] py-16 text-white sm:py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {[
            {
              eyebrow: "Our mission",
              title: "Make good ideas easier to understand, choose, and grow.",
              text: "We bring sharp thinking and considered creative together so businesses can show up clearly and make their next move with confidence.",
            },
            {
              eyebrow: "Our vision",
              title: "A digital world with more useful, human experiences.",
              text: "We want to help build brands and products that respect people's time, answer real needs, and make a positive difference for the teams behind them.",
            },
          ].map((item, index) => (
            <FadeIn delay={index * 0.08} key={item.eyebrow}>
              <div className="h-full rounded-[1.5rem] border border-white/15 bg-white/5 p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                  {item.eyebrow}
                </p>
                <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-blue-100/70">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </Container>
      </section>
      <section className="py-20 sm:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              description="A few simple principles keep our work focused and our partnerships honest."
              eyebrow="What guides us"
              title="The values behind the work."
            />
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, text], index) => (
              <FadeIn delay={index * 0.04} key={title}>
                <div className="h-full rounded-2xl border border-slate-200 p-6">
                  <span className="font-display text-sm font-extrabold text-brand-blue">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-extrabold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-soft py-20 sm:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              description="The right mix of skills depends on the brief. Here are the disciplines we bring together."
              eyebrow="How we think"
              title="Different strengths. One shared direction."
            />
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((item, index) => (
              <FadeIn delay={index * 0.06} key={item.number}>
                <div className="h-full rounded-2xl bg-white p-5 shadow-sm">
                  <span className="font-display text-sm font-extrabold text-brand-blue">
                    {item.number}
                  </span>
                  <h3 className="mt-8 font-display text-xl font-extrabold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
              What it feels like to work together
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.05em] text-ink sm:text-4xl">
              A thoughtful partner, not another layer of process.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              We keep the work human: clear conversations, honest feedback, and
              enough structure to make good decisions without slowing ideas
              down.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="space-y-3">
              {[
                "You know what is happening and what comes next.",
                "The work connects back to the goal we agreed together.",
                "You leave with useful tools and a clear way forward.",
              ].map((text) => (
                <div
                  className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm font-semibold text-slate-700"
                  key={text}
                >
                  <Check aria-hidden="true" className="shrink-0 text-brand-blue" size={18} />
                  {text}
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <Container className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-gradient-to-br from-navy to-accent p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
              Let&apos;s make something meaningful
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Tell us what you want to move forward.
            </h2>
          </div>
          <Button
            href="/contact"
            variant="light"
            className="shrink-0"
          >
            Start a conversation <ArrowRight aria-hidden="true" size={17} />
          </Button>
        </Container>
      </section>
    </main>
  );
}
