import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { Service } from "@/data/site-config";
import { ServiceIcon } from "@/components/site/service-icon";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ index = 0, service }: ServiceCardProps) {
  return (
    <Link
      className="group block h-full"
      href={`/services/${service.slug}`}
    >
      <Card className="relative flex h-full min-h-[17rem] flex-col overflow-hidden border border-slate-200/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-navy hover:bg-gradient-to-br hover:from-navy hover:to-accent hover:text-white hover:shadow-[0_24px_55px_-30px_rgba(20,63,122,0.8)] sm:p-7">
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue transition group-hover:bg-white/15 group-hover:text-white">
            <ServiceIcon name={service.icon} />
          </span>
          <span className="font-display text-sm font-bold text-slate-400 transition group-hover:text-blue-100">
            0{index + 1}
          </span>
        </div>
        <h3 className="mt-7 font-display text-xl font-extrabold tracking-tight text-ink transition group-hover:text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 transition group-hover:text-blue-100/80">
          {service.shortDescription}
        </p>
        <span className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-xs font-bold text-slate-500 transition group-hover:border-white/20 group-hover:text-white">
          Discover this service
          <ArrowUpRight
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            size={18}
          />
        </span>
      </Card>
    </Link>
  );
}
