/*
Design reminder: Edwardian sporting-estate aesthetic translated into a cinematic homepage hero.
Motion should feel slow, stately, and brochure-like, with dark overlays that preserve readable white text over imagery.
*/

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { slideshowImages } from "@/lib/siteContent";

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slideshowImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slideshowImages[activeIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--deep-forest)] text-white">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide.src}
            src={activeSlide.src}
            alt={activeSlide.title}
            className="h-full w-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,35,27,0.78)_0%,rgba(11,35,27,0.58)_38%,rgba(11,35,27,0.26)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,188,125,0.24),transparent_28%)]" />
      </div>

      <div className="container relative flex min-h-[82vh] items-end py-16 md:py-24">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            key={activeSlide.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              {activeSlide.eyebrow}
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl leading-[0.9] md:text-7xl">
              {activeSlide.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/76 md:text-lg">
              {activeSlide.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[color:var(--gold-soft)] px-7 text-[color:var(--deep-forest)] hover:bg-[color:var(--gold-strong)]"
              >
                <Link href="/tee-times">
                  Plan a round
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/18 bg-white/8 px-7 text-white hover:bg-white/14 hover:text-white"
              >
                <Link href="/members">Explore membership</Link>
              </Button>
            </div>
          </motion.div>

          <div className="self-end justify-self-end rounded-[2rem] border border-white/12 bg-white/8 p-5 backdrop-blur-md md:max-w-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">Club Notes</p>
            <div className="mt-5 grid gap-4 text-sm text-white/78">
              <div>
                <p className="text-[color:var(--gold-soft)]">Visitor bookings</p>
                <p className="mt-1 leading-7">Weekday tee sheets and curated society enquiries handled directly by the club office.</p>
              </div>
              <div>
                <p className="text-[color:var(--gold-soft)]">Club atmosphere</p>
                <p className="mt-1 leading-7">Relaxed formal hospitality with a course-first pace and an elegant post-round lounge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative pb-10">
        <div className="flex items-center gap-3">
          {slideshowImages.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-16 bg-[color:var(--gold-soft)]" : "w-7 bg-white/28 hover:bg-white/48"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
