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
    <section className="relative isolate overflow-hidden bg-deep-blue text-white">
      <div aria-hidden="true" className="hero-grid absolute inset-0 z-0 opacity-70" />
      <motion.div
        animate={reduceMotion ? {} : { y: [0, -16, 0], rotate: [0, 4, 0] }}
        aria-hidden="true"
        className="hero-glow absolute -right-36 top-8 z-0 h-[30rem] w-[30rem] rounded-full bg-brand-blue/30 blur-[100px]"
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 left-[36%] z-0 h-[27rem] w-[27rem] rounded-full border border-white/10"
      />
      <Container className="relative z-10 grid items-center gap-12 pb-9 pt-14 sm:pt-20 lg:min-h-[690px] lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:pb-0 lg:pt-12">
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
            className="mt-7 max-w-[11ch] font-display text-[clamp(3.2rem,7.2vw,6.6rem)] font-semibold leading-[0.96] tracking-[-0.075em] text-white"
            variants={reveal}
          >
            Make your next move{" "}
            <span className="relative inline-block text-accent">
              matter.
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-[0.1em] w-[88%] -rotate-2 rounded-full bg-accent/70"
              />
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
          className="relative mx-auto w-full max-w-[33rem]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -12, 0] }}
            aria-hidden="true"
            className="absolute -right-5 top-6 z-20 hidden h-24 w-24 rounded-full border border-accent/50 sm:block"
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="absolute -bottom-5 -left-5 z-0 h-28 w-28 rounded-[2rem] bg-accent" />
          <figure className="image-frame group relative z-10 rotate-1 overflow-hidden rounded-[2rem] border border-white/15 bg-[#26314a] p-2 shadow-[0_35px_100px_-40px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:rotate-0">
            <div className="relative aspect-[0.98] overflow-hidden rounded-[1.5rem]">
              <Image
                alt="Creative collaborators sharing ideas around a laptop; illustrative stock photography, not ADD Creatives staff."
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                src="/images/creative-collaboration.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/85 via-transparent to-deep-blue/10" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 sm:inset-x-7 sm:bottom-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    From first thought to final detail
                  </p>
                  <p className="mt-2 max-w-xs font-display text-xl font-medium leading-tight text-white sm:text-2xl">
                    Built around what matters to you.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md">
                  <ArrowUpRight aria-hidden="true" size={19} />
                </span>
              </div>
            </div>
          </figure>
          <div className="absolute -left-4 top-[18%] z-20 hidden rounded-2xl border border-white/15 bg-[#17243a]/90 p-4 shadow-xl backdrop-blur-md sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100/60">
              The right mix
            </p>
            <div className="mt-3 flex gap-1.5">
              {capabilities.map((item, index) => (
                <span
                  className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${
                    index === 0
                      ? "bg-accent text-deep-blue"
                      : "bg-white/10 text-white"
                  }`}
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <figcaption className="relative z-10 mt-3 text-right text-[10px] text-blue-100/45">
            Illustrative stock image—not client work or agency staff.
          </figcaption>
        </motion.div>
      </Container>

      <div className="relative z-10 border-t border-white/15">
        <Container className="grid grid-cols-2 divide-x divide-white/15 sm:grid-cols-4">
          {capabilities.map((item, index) => (
            <div
              className="flex items-center gap-3 py-4 text-xs font-medium text-blue-100/70 sm:py-5"
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
