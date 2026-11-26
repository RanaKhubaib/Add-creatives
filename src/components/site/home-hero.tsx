"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as const },
  },
};

const capabilities = ["Brand", "Digital", "Content", "Growth"];

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-banner-bg relative isolate overflow-hidden text-white">
      <div aria-hidden="true" className="hero-grid absolute inset-0 z-0 opacity-70" />
      <div
        aria-hidden="true"
        className="hero-glow absolute -right-40 top-[8%] z-0 h-[38rem] w-[38rem] rounded-full bg-brand-blue/40 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-64 left-[34%] z-0 h-[38rem] w-[38rem] rounded-full border border-white/10"
      />
      <Container className="relative z-10 grid items-center gap-12 pb-12 pt-16 sm:pt-20 lg:min-h-[calc(100svh-124px)] lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:pb-8 lg:pt-14">
        <motion.div
          animate="show"
          className="max-w-2xl"
          initial={reduceMotion ? false : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100 sm:text-xs"
            variants={reveal}
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            Independent creative studio · Lahore
          </motion.p>
          <motion.h1
            className="mt-7 max-w-[11ch] font-display text-[clamp(3.4rem,7.4vw,7.2rem)] font-semibold leading-[0.93] tracking-[-0.078em] text-white"
            variants={reveal}
          >
            Make your brand{" "}
            <span className="text-accent underline decoration-accent/70 decoration-2 underline-offset-8">
              impossible to ignore.
            </span>
          </motion.h1>
          <motion.p
            className="mt-7 max-w-xl text-base leading-7 text-blue-100/75 sm:text-lg sm:leading-8"
            variants={reveal}
          >
            We bring strategy, design, technology, and marketing together to
            make ambitious ideas easier to see, use, and grow.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            variants={reveal}
          >
            <Button href="/contact">
              Start a project <ArrowRight aria-hidden="true" size={17} />
            </Button>
            <Link
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
              href="/case-studies"
            >
              Explore our work
              <ArrowUpRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={16}
              />
            </Link>
          </motion.div>
          <motion.div
            className="mt-10 flex items-center gap-3 text-xs text-blue-100/55"
            variants={reveal}
          >
            <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full border border-white/15">
              <ArrowDown aria-hidden="true" size={14} />
            </span>
            Scroll to explore
          </motion.div>
        </motion.div>

        <motion.div
          animate={
            reduceMotion
              ? {}
              : { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
          }
          className="relative mx-auto w-full max-w-[36rem]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -12, 0] }}
            aria-hidden="true"
            className="absolute -right-5 top-6 z-20 hidden h-24 w-24 rounded-full border border-accent/50 sm:block"
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="absolute -bottom-7 -left-7 z-0 h-36 w-36 rounded-[2.25rem] bg-accent shadow-[0_0_70px_-20px_rgba(215,255,112,0.55)]" />
          <figure className="image-frame group relative z-10 rotate-1 overflow-hidden rounded-[2.25rem] border border-white/20 bg-[#26314a] p-2.5 shadow-[0_40px_120px_-38px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:rotate-0">
            <div className="relative aspect-[0.9] overflow-hidden rounded-[1.75rem]">
              <Image
                alt="Creative collaborators sharing ideas around a laptop; illustrative stock photography, not ADD Creatives staff."
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                src="/images/creative-collaboration.jpg"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-transparent to-accent/5" />
            </div>
            <figcaption className="mt-4 text-left text-[10px] text-blue-100/55">
              Illustrative stock image—not client work or agency staff.
            </figcaption>
          </figure>
        </motion.div>
      </Container>

      <div className="relative z-10 border-t border-white/15">
        <Container className="grid grid-cols-2 divide-x divide-white/15 sm:grid-cols-4">
          {capabilities.map((item, index) => (
            <div
              className="flex items-center gap-3 py-5 text-xs font-medium uppercase tracking-[0.12em] text-blue-100/75 sm:py-6"
              key={item}
            >
              <span className="font-mono text-[10px] text-accent">0{index + 1}</span>
              {item}
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
