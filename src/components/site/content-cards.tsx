import { ArrowUpRight, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { BlogPost, CaseStudy } from "@/data/sample-content";

function Artwork({
  className,
  imageSrc,
  label,
}: {
  className: string;
  imageSrc?: string;
  label: string;
}) {
  return (
    <div
      aria-label={label}
      className={`relative isolate flex aspect-[1.65] items-end overflow-hidden rounded-xl bg-gradient-to-br ${className} p-5`}
      role="img"
    >
      {imageSrc ? (
        <Image
          alt=""
          className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={imageSrc}
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b2444]/80 via-[#0b2444]/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-7 -top-14 -z-10 h-48 w-48 rounded-full border border-white/30"
      />
      <div
        aria-hidden="true"
        className="absolute -right-2 -top-9 -z-10 h-36 w-36 rounded-full border border-white/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div className="relative flex items-end justify-between gap-4 text-white">
        <span className="max-w-[16rem] font-display text-2xl font-extrabold leading-tight tracking-[-0.06em] sm:text-3xl">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="mb-1 h-10 w-10 shrink-0 skew-x-[-24deg] bg-white/80"
        />
      </div>
    </div>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link className="group block" href={`/case-studies/${study.slug}`}>
      <Card className="h-full overflow-hidden border border-slate-100 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-35px_rgba(10,15,28,0.3)]">
        <Artwork
          className={study.coverStyle}
          imageSrc={study.coverImage}
          label={study.industry}
        />
        <div className="p-3 pb-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              {study.category}
            </span>
            {study.isSample ? (
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800">
                Sample concept
              </span>
            ) : null}
          </div>
          <h3 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight text-ink">
            {study.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{study.excerpt}</p>
          <span className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-slate-500">
            {study.result}
            <ArrowUpRight
              aria-hidden="true"
              className="shrink-0 text-brand-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              size={17}
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link className="group block" href={`/blog/${post.slug}`}>
      <Card className="h-full overflow-hidden border border-slate-100 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-35px_rgba(10,15,28,0.3)]">
        <Artwork
          className={post.coverStyle}
          imageSrc={post.coverImage}
          label={post.category}
        />
        <div className="p-3 pb-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-slate-500">
            <span className="text-brand-blue">{post.category}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
            <time dateTime={post.date}>
              {new Date(`${post.date}T12:00:00`).toLocaleDateString("en", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="inline-flex items-center gap-1">
              <Clock3 aria-hidden="true" size={13} />
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight text-ink">
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-brand-blue">
            Read article <ArrowUpRight aria-hidden="true" size={15} />
          </span>
        </div>
      </Card>
    </Link>
  );
}
