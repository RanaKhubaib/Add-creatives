import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/site/page-hero";
import { CaseStudyFilter } from "@/components/site/case-study-filter";
import { SectionHeading } from "@/components/site/section-heading";
import { getCaseStudies } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Case Studies | ADD Creatives",
  description:
    "Explore the thinking behind ADD Creatives projects and illustrative concepts.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <main>
      <PageHero
        description="A look at how clear strategy and thoughtful creative can shape stronger digital experiences. Sample concepts are labelled while client work is being prepared."
        eyebrow="Case studies"
        title="The thinking behind the work."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          {caseStudies.some((study) => study.isSample) ? (
            <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
              Items marked as sample concepts are illustrative, not completed
              client projects or verified results.
            </div>
          ) : null}
          <SectionHeading
            description="Filter by discipline to explore the kind of challenge and direction we like to work on."
            eyebrow="Selected work"
            title="A few ways to make an idea real."
          />
          <div className="mt-8">
            <CaseStudyFilter studies={caseStudies} />
          </div>
        </Container>
      </section>
    </main>
  );
}
