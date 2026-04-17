/*
Design reminder: Edwardian sporting-estate aesthetic with asymmetrical editorial sections, textured surfaces, refined serif display typography, and quiet premium pacing.
This page should feel like a high-end club brochure brought to life, not a generic landing page.
*/

import { ArrowUpRight, Trees, CalendarClock, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { ClubLayout } from "@/components/ClubLayout";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { clubhouseImage, homeHighlights, site, slideshowImages } from "@/lib/siteContent";

export default function Home() {
  return (
    <ClubLayout>
      <HeroSlideshow />

      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="grain-overlay absolute inset-0 opacity-60" />
        <div className="container relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <p className="section-label">The Club</p>
            <h2 className="section-title mt-4">A calm golf-club identity shaped around course, clubhouse, and considered hospitality.</h2>
          </div>

          <div className="space-y-7 text-base leading-8 text-[color:var(--ink-soft)] md:text-lg">
            <p>
              Set as a fictional club in <strong>{site.location}</strong>, Larchmount Links is conceived as an elegant Warwickshire destination with the visual tone of England's most established golf houses and a more modern, approachable welcome for guests.
            </p>
            <p>
              The demo focuses on three essentials: a richly visual home page, a clear route into visitor bookings and tee times, and a members area that suggests the private rhythm of club life beyond the fairways.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="rounded-full bg-[color:var(--deep-forest)] px-6 text-white hover:bg-[color:var(--forest-muted)]">
                <Link href="/tee-times">View tee times</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[color:var(--deep-forest)]/12 bg-transparent px-6 text-[color:var(--deep-forest)] hover:bg-[color:var(--sand-warm)]">
                <Link href="/members">See members' page</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface-soft)] py-20 md:py-24">
        <div className="container grid gap-6 md:grid-cols-3">
          {homeHighlights.map((item, index) => {
            const Icon = [Trees, CalendarClock, ShieldCheck][index];

            return (
              <Card key={item.title} className="border-[color:var(--line-soft)] bg-white/80 shadow-[0_24px_70px_rgba(15,27,22,0.08)] backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="inline-flex rounded-full bg-[color:var(--deep-forest)]/8 p-3 text-[color:var(--deep-forest)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-[color:var(--deep-forest)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--ink-soft)]">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line-soft)] bg-[color:var(--deep-forest)] p-3 shadow-[0_30px_80px_rgba(8,18,13,0.18)]">
            <img
              src={clubhouseImage}
              alt="Larchmount Links clubhouse exterior"
              className="h-full min-h-[26rem] w-full rounded-[1.35rem] object-cover"
            />
          </div>

          <div className="lg:pl-8">
            <p className="section-label">Clubhouse Life</p>
            <h2 className="section-title mt-4">A terrace-first clubhouse concept with room for both formal occasions and unhurried post-round conversation.</h2>
            <p className="mt-6 text-base leading-8 text-[color:var(--ink-soft)] md:text-lg">
              The visual language borrows from carved stone entrances, mullioned windows, dark timber interiors, and the unspoken confidence associated with established British clubs. It is less about nostalgia and more about continuity.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-[color:var(--line-soft)] bg-[color:var(--surface-soft)] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold-strong)]">Dining</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">Seasonal lunch menus, terrace coffee, and relaxed post-match service.</p>
              </div>
              <div className="rounded-[1.6rem] border border-[color:var(--line-soft)] bg-[color:var(--surface-soft)] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold-strong)]">Events</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">Member fixtures, visiting societies, and intimate hospitality-led golf days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--deep-forest)] py-20 text-white md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label text-[color:var(--gold-soft)]">At a Glance</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Three pages, one coherent club identity.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Home",
                body: "A cinematic slideshow, club story, and premium first impression.",
              },
              {
                title: "Tee Times",
                body: "Simple visitor offers, booking guidance, and practical club information.",
              },
              {
                title: "Members",
                body: "Benefits, lounge atmosphere, and a clearer sense of club rhythm.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                <p className="font-display text-2xl">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.86fr]">
          <div className="rounded-[2rem] border border-[color:var(--line-soft)] bg-[linear-gradient(180deg,rgba(251,247,239,0.82),rgba(255,255,255,0.96))] p-8 md:p-10">
            <p className="section-label">Editorial Framing</p>
            <h2 className="section-title mt-4">Built as a polished demo, but grounded in the cues golfers expect from a real club site.</h2>
            <p className="mt-6 text-base leading-8 text-[color:var(--ink-soft)] md:text-lg">
              The imagery is fully custom generated for the project, and the tone is informed by the atmosphere of prestigious English clubs without duplicating a specific venue, crest, or photograph.
            </p>
            <Button asChild variant="outline" className="mt-8 rounded-full border-[color:var(--deep-forest)]/12 bg-transparent px-6 text-[color:var(--deep-forest)] hover:bg-[color:var(--surface-soft)]">
              <Link href="/tee-times">
                Continue to visitor bookings
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {slideshowImages.map((slide) => (
              <div key={slide.src} className="group overflow-hidden rounded-[1.75rem] border border-[color:var(--line-soft)] bg-[color:var(--surface-soft)]">
                <img src={slide.src} alt={slide.title} className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold-strong)]">{slide.eyebrow}</p>
                  <p className="mt-3 font-display text-2xl text-[color:var(--deep-forest)]">{slide.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClubLayout>
  );
}
