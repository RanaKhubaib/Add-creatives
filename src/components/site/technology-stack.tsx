import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Container } from "@/components/ui/container";

const toolkit = [
  { mark: "LO", name: "Lovable", category: "Rapid prototyping" },
  { mark: "GIT", name: "Git + GitHub", category: "Version control" },
  { mark: "N", name: "Next.js", category: "Web framework" },
  { mark: "R", name: "React", category: "Interfaces" },
  { mark: "TS", name: "TypeScript", category: "Reliable code" },
  { mark: "TW", name: "Tailwind CSS", category: "Design systems" },
  { mark: "FB", name: "Firebase", category: "App services" },
  { mark: "V", name: "Vercel", category: "Deployment" },
  { mark: "F", name: "Figma", category: "Product design" },
  { mark: "FM", name: "Framer Motion", category: "Motion design" },
];

export function TechnologyStack() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                Technologies &amp; tools we use
              </p>
              <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight tracking-[-0.05em] text-ink sm:text-4xl">
                Good thinking, powered by the right tools.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">
              A considered mix of design, development, and collaboration tools
              helps us turn a strong brief into a useful digital experience.
            </p>
          </div>
        </FadeIn>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {toolkit.map((tool, index) => (
            <FadeIn delay={(index % 5) * 0.045} key={tool.name}>
              <article className="group relative flex h-full min-h-32 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-brand-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_18px_40px_-28px_rgba(19,29,46,0.55)] sm:p-5">
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-light-blue font-mono text-xs font-bold text-navy transition-colors group-hover:bg-accent">
                    {tool.mark}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                    size={16}
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-ink">{tool.name}</h3>
                  <p className="mt-1 text-[11px] text-muted">{tool.category}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
