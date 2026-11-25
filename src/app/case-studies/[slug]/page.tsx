import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CaseStudyCard } from "@/components/site/content-cards";
import { PageHero } from "@/components/site/page-hero";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/content";

export const revalidate = 60;

export function generateStaticParams() {
  return getCaseStudies().then((studies) =>
    studies.map((study) => ({ slug: study.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.title} | ADD Creatives`,
    description: study.excerpt,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  const studies = await getCaseStudies();
  const relatedStudies = studies.filter((item) => item.slug !== study.slug);

  return (
    <main>
      <PageHero
        description={study.excerpt}
        eyebrow={study.isSample ? "Sample concept" : "Case study"}
        title={study.title}
      />
      <article>
        <Container className="py-10 sm:py-14">
          {study.isSample ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              This is an illustrative concept created for the website. It is not
              a completed client project or a verified performance result.
            </div>
          ) : null}
          <div
            aria-label={study.industry}
            className={`relative mt-8 flex aspect-[1.9] items-end overflow-hidden rounded-[2rem] bg-gradient-to-br ${study.coverStyle} p-7 sm:p-12`}
            role="img"
          >
            <div className="absolute -right-10 -top-32 h-[28rem] w-[28rem] rounded-full border border-white/30" />
            <div className="absolute -right-2 -top-24 h-[22rem] w-[22rem] rounded-full border border-white/30" />
            <p className="relative max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-[-0.06em] text-white sm:text-6xl">
              {study.industry}
              <span className="mt-3 block text-base font-semibold tracking-normal text-white/75 sm:text-lg">
                {study.category}
                {study.isSample ? " · Sample concept" : ""}
              </span>
            </p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <FadeIn>
              <div className="sticky top-28 space-y-6 rounded-2xl border border-slate-200 p-5">
                <Info label="Project" value={study.client} />
                <Info label="Industry" value={study.industry} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Disciplines
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        className="rounded-full bg-soft px-3 py-1.5 text-xs font-semibold text-navy"
                        key={service}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                    Intended outcome
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-navy">
                    {study.result}
                  </p>
                </div>
              </div>
            </FadeIn>
            <div className="max-w-3xl">
              {study.sections.map((section, index) => (
                <FadeIn className="mb-10" delay={index * 0.06} key={section.heading}>
                  <p className="font-display text-xs font-extrabold uppercase tracking-[0.15em] text-brand-blue">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    {section.body}
                  </p>
                </FadeIn>
              ))}
              <div className="rounded-2xl bg-[#0d2648] p-6 text-white sm:p-8">
                <h2 className="font-display text-2xl font-extrabold">
                  Have a challenge like this?
                </h2>
                <p className="mt-2 text-sm leading-6 text-blue-100/70">
                  Tell us what you are trying to change. We can help you find a
                  useful direction.
                </p>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white"
                  href="/contact"
                >
                  Talk to us <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </article>
      {relatedStudies.length ? (
        <section className="bg-soft py-16 sm:py-20">
          <Container>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                Explore more sample concepts
              </h2>
              <Link
                className="hidden items-center gap-2 text-sm font-bold text-brand-blue sm:inline-flex"
                href="/case-studies"
              >
                All concepts <ArrowLeft aria-hidden="true" size={15} />
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {relatedStudies.slice(0, 2).map((related) => (
                <CaseStudyCard key={related.slug} study={related} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}
