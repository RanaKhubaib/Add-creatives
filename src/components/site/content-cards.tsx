import { ArrowUpRight, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost, CaseStudy } from "@/data/sample-content";

function Artwork({
  imageAlt,
  imageSrc,
}: {
  imageAlt: string;
  imageSrc: string;
}) {
  return (
    <div className="relative aspect-[1.55] overflow-hidden bg-light-blue">
      <Image
        alt={imageAlt}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={imageSrc}
      />
    </div>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link className="group block" href={`/case-studies/${study.slug}`}>
      <article className="h-full">
        <Artwork imageAlt={study.coverImageAlt} imageSrc={study.coverImage} />
        <div className="editorial-rule mt-4 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
              {study.category}
            </span>
            {study.isSample ? (
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                Illustrative concept
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-ink transition-colors group-hover:text-brand-blue">
            {study.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{study.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-navy">
            Read concept
            <ArrowUpRight
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              size={16}
            />
          </span>
        </div>
      </article>
    </Link>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link className="group block" href={`/blog/${post.slug}`}>
      <article className="h-full">
        <Artwork imageAlt={post.coverImageAlt} imageSrc={post.coverImage} />
        <div className="editorial-rule mt-4 pt-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-muted">
            <span className="font-semibold text-brand-blue">{post.category}</span>
            <span aria-hidden="true" className="h-1 w-1 bg-slate-300" />
            <time dateTime={post.date}>
              {new Date(`${post.date}T12:00:00`).toLocaleDateString("en", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <span aria-hidden="true" className="h-1 w-1 bg-slate-300" />
            <span className="inline-flex items-center gap-1">
              <Clock3 aria-hidden="true" size={13} />
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-ink transition-colors group-hover:text-brand-blue">
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-navy">
            Read article <ArrowUpRight aria-hidden="true" size={15} />
          </span>
        </div>
      </article>
    </Link>
  );
}
