import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/site/content-cards";
import { PageHero } from "@/components/site/page-hero";
import { ReadingProgress } from "@/components/site/reading-progress";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";

export const revalidate = 60;

export function generateStaticParams() {
  return getBlogPosts().then((posts) => posts.map((post) => ({ slug: post.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ADD Creatives Journal`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const posts = await getBlogPosts();
  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleUrl = `${siteConfig.company.website}/blog/${post.slug}`;

  return (
    <main>
      <ReadingProgress />
      <PageHero
        actionLabel="All articles"
        actionHref="/blog"
        description={post.excerpt}
        eyebrow={post.category}
        title={post.title}
      />
      <article className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div className="mx-auto w-full max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
              <span>ADD Creatives Editorial</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
              <time dateTime={post.date}>
                {new Date(`${post.date}T12:00:00`).toLocaleDateString("en", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="inline-flex items-center gap-1">
                <Clock3 aria-hidden="true" size={13} />
                {post.readTime}
              </span>
            </div>
            <div
              aria-label={post.category}
              className={`relative isolate mt-7 flex aspect-[1.9] items-end overflow-hidden rounded-3xl bg-gradient-to-br ${post.coverStyle} p-6 sm:p-10`}
              role="img"
            >
              <div className="absolute -right-8 -top-28 -z-10 h-72 w-72 rounded-full border border-white/25" />
              <div className="absolute -right-2 -top-16 -z-10 h-56 w-56 rounded-full border border-white/25" />
              <span className="font-display text-3xl font-extrabold tracking-[-0.06em] text-white sm:text-5xl">
                ADD<span className="text-blue-200">/</span>IDEAS
              </span>
            </div>
            <div className="article-content mt-8">
              <p className="text-xl font-medium leading-8 text-ink">
                {post.excerpt}
              </p>
              {post.sections.map((section, index) => (
                <section className="mt-10 scroll-mt-32" id={`section-${index + 1}`} key={section.heading}>
                  <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                    {section.heading}
                  </h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <Link
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue"
                href="/blog"
              >
                <ArrowLeft aria-hidden="true" size={16} />
                Back to the journal
              </Link>
              <a
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-blue"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                rel="noreferrer"
                target="_blank"
              >
                Share article <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-slate-200 p-5 lg:sticky lg:top-32">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              In this article
            </p>
            <nav aria-label="Article contents" className="mt-4 space-y-3">
              {post.sections.map((section, index) => (
                <a
                  className="block text-sm leading-5 text-slate-600 transition hover:text-brand-blue"
                  href={`#section-${index + 1}`}
                  key={section.heading}
                >
                  {section.heading}
                </a>
              ))}
            </nav>
            <div className="mt-7 border-t border-slate-200 pt-5">
              <p className="text-sm font-bold text-ink">Have a question?</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Talk to our team about a challenge you are working through.
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-brand-blue"
                href="/contact"
              >
                Get in touch <ArrowUpRight aria-hidden="true" size={14} />
              </Link>
            </div>
          </aside>
        </Container>
      </article>
      {relatedPosts.length ? (
        <section className="bg-soft py-16 sm:py-20">
          <Container>
            <h2 className="mb-8 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Keep exploring
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
