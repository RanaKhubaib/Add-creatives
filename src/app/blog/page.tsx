import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BlogList } from "@/components/site/blog-list";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { getBlogPosts } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Journal | ADD Creatives",
  description:
    "Practical ideas on brand strategy, websites, and digital marketing from ADD Creatives.",
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const featuredPost = blogPosts[0];

  return (
    <main>
      <PageHero
        description="Straightforward ideas and practical notes on building brands, improving websites, and making digital marketing work harder."
        eyebrow="Journal"
        title="Good ideas are better when shared."
      />
      <section className="py-14 sm:py-18">
        <Container>
          <Link
            className="group grid overflow-hidden rounded-[2rem] bg-[#0d2648] text-white md:grid-cols-[1.1fr_0.9fr]"
            href={`/blog/${featuredPost.slug}`}
          >
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                Featured article · {featuredPost.category}
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.055em] sm:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/75">
                {featuredPost.excerpt}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
                Read the article
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                  size={17}
                />
              </span>
            </div>
            <div
              aria-label={featuredPost.category}
              className={`relative isolate flex min-h-64 items-end overflow-hidden bg-gradient-to-br ${featuredPost.coverStyle} p-7 sm:p-10`}
              role="img"
            >
              <div className="absolute -right-16 -top-24 -z-10 h-80 w-80 rounded-full border border-white/25" />
              <div className="absolute -right-4 -top-12 -z-10 h-64 w-64 rounded-full border border-white/25" />
              <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:30px_30px]" />
              <span className="font-display text-4xl font-extrabold tracking-[-0.06em] text-white sm:text-5xl">
                ADD<span className="text-blue-200">/</span>NOTES
              </span>
            </div>
          </Link>
        </Container>
      </section>
      <section className="bg-[#f7f9fd] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                The journal
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Ideas to put to work.
              </h2>
            </div>
            <ArrowUpRight aria-hidden="true" className="hidden text-brand-blue sm:block" size={28} />
          </div>
          <BlogList posts={blogPosts} />
        </Container>
      </section>
    </main>
  );
}
