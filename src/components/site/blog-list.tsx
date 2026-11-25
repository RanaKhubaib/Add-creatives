"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { BlogCard } from "@/components/site/content-cards";
import type { BlogPost } from "@/data/sample-content";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const visiblePosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return posts;
    return posts.filter((post) =>
      `${post.title} ${post.excerpt} ${post.category}`
        .toLowerCase()
        .includes(normalized),
    );
  }, [posts, query]);

  return (
    <>
      <label className="mb-8 flex max-w-lg items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3.5 shadow-sm focus-within:border-brand-blue">
        <Search aria-hidden="true" className="text-slate-400" size={18} />
        <span className="sr-only">Search articles</span>
        <input
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search ideas and insights"
          type="search"
          value={query}
        />
      </label>
      {visiblePosts.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-600">
          No articles match that search. Try another topic.
        </p>
      )}
    </>
  );
}
