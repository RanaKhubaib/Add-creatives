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
    <Link
      className="service-card group block h-full"
      href={`/services/${service.slug}`}
    >
      <article className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_24px_50px_-36px_rgba(19,29,46,0.65)]">
        <div className={`image-frame relative ${aspect} overflow-hidden rounded-[1.15rem] bg-light-blue`}>
          <Image
            alt={service.imageAlt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={service.image}
          />
          <span aria-hidden="true" className="service-number service-number--overlay">
            0{index + 1}
          </span>
        </div>
        <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
          <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.025em] text-ink transition-colors group-hover:text-brand-blue sm:text-xl">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            {service.shortDescription}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold text-navy">
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
