/*
Design reminder: Edwardian sporting-estate aesthetic with practical clarity.
This page should balance premium atmosphere with straightforward booking information for visitors and societies.
*/

import { Clock3, Users, UtensilsCrossed, BadgePoundSterling } from "lucide-react";
import { ClubLayout } from "@/components/ClubLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { bookingSteps, clubhouseImage, site, visitorOffers } from "@/lib/siteContent";

export default function TeeTimes() {
  return (
    <ClubLayout>
      <section className="relative overflow-hidden bg-[color:var(--deep-forest)] py-18 text-white md:py-24">
        <div className="absolute inset-0 opacity-18">
          <img src={clubhouseImage} alt="Clubhouse exterior" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,35,27,0.94),rgba(11,35,27,0.74))]" />
        <div className="container relative max-w-4xl py-10">
          <p className="section-label text-[color:var(--gold-soft)]">Tee Times & Visitors</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">Visitor golf arranged with clarity, pace, and a warm first arrival.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
            The booking model is intentionally simple for the demo: weekday visitor play, society days for smaller groups, and a twilight offer in season. Enquiries are handled directly by the club office to keep the experience personal.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container grid gap-6 md:grid-cols-3">
          {visitorOffers.map((offer) => (
            <Card key={offer.label} className="border-[color:var(--line-soft)] bg-white shadow-[0_20px_60px_rgba(15,27,22,0.08)]">
              <CardContent className="p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold-strong)]">Offer</p>
                <h2 className="mt-4 font-display text-4xl text-[color:var(--deep-forest)]">{offer.label}</h2>
                <p className="mt-4 text-4xl text-[color:var(--deep-forest)]">{offer.price}</p>
                <p className="mt-5 text-sm leading-7 text-[color:var(--ink-soft)]">{offer.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--surface-soft)] py-20 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="section-label">How Booking Works</p>
            <h2 className="section-title mt-4">A direct booking route better suited to a club than a busy public tee-sheet.</h2>
            <p className="mt-6 text-base leading-8 text-[color:var(--ink-soft)] md:text-lg">
              Visitors can request preferred times, societies can discuss food and prize-table arrangements, and the office confirms availability with the small details that usually make a golf day feel properly hosted.
            </p>
            <Button asChild className="mt-8 rounded-full bg-[color:var(--deep-forest)] px-6 text-white hover:bg-[color:var(--forest-muted)]">
              <a href={`mailto:${site.email}`}>Email the club office</a>
            </Button>
          </div>

          <div className="space-y-4">
            {bookingSteps.map((step, index) => (
              <div key={step} className="flex gap-5 rounded-[1.7rem] border border-[color:var(--line-soft)] bg-white p-6 shadow-[0_16px_44px_rgba(15,27,22,0.06)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--deep-forest)] text-lg text-white">
                  {index + 1}
                </div>
                <p className="pt-2 text-sm leading-7 text-[color:var(--ink-soft)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Clock3,
              title: "Booking window",
              body: "Preferred tee times available up to 14 days in advance for visitors.",
            },
            {
              icon: Users,
              title: "Society size",
              body: "Best suited to smaller hosted groups seeking an organised, premium day.",
            },
            {
              icon: UtensilsCrossed,
              title: "Clubhouse service",
              body: "Breakfast rolls, lunch reservations, and terrace drinks may be arranged.",
            },
            {
              icon: BadgePoundSterling,
              title: "Payment",
              body: "Deposits for societies and card settlement on the day for individual visitors.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-[1.75rem] border border-[color:var(--line-soft)] bg-white p-6 shadow-[0_18px_48px_rgba(15,27,22,0.06)]">
              <div className="inline-flex rounded-full bg-[color:var(--deep-forest)]/8 p-3 text-[color:var(--deep-forest)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-3xl text-[color:var(--deep-forest)]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--ink-soft)]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--deep-forest)] py-20 text-white md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-label text-[color:var(--gold-soft)]">Practical Notes</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">What visitors should expect on the day.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Smart golf attire is expected on course and in the clubhouse after play.",
              "Practice putting green and warm-up net access are included with confirmed visitor rounds.",
              "Buggies and trolley requests should be mentioned when the booking is made.",
              "Society catering and nearest-the-pin arrangements can be added by the club office.",
            ].map((note) => (
              <div key={note} className="rounded-[1.65rem] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-white/74 backdrop-blur-sm">
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClubLayout>
  );
}
