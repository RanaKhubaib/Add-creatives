import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/site-config";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ index = 0, service }: ServiceCardProps) {
  const aspect = index % 3 === 0 ? "aspect-[1.3]" : "aspect-[1.55]";

  return (
    <Link className="group block h-full" href={`/services/${service.slug}`}>
      <article className="flex h-full flex-col">
        <div className={`relative ${aspect} overflow-hidden bg-light-blue`}>
          <Image
            alt={service.imageAlt}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={service.image}
          />
          <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy">
            0{index + 1} / Service
          </span>
        </div>
        <div className="editorial-rule mt-4 flex flex-1 flex-col pt-4">
          <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.025em] text-ink transition-colors group-hover:text-brand-blue sm:text-xl">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            {service.shortDescription}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-semibold text-navy">
            Explore service
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
