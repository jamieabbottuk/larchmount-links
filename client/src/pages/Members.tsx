/*
Design reminder: Edwardian sporting-estate aesthetic with a private-club tone, warm interiors, and quiet confidence.
The page should suggest belonging and routine rather than sales-heavy marketing.
*/

import { Trophy, Coffee, Users2, Shield } from "lucide-react";
import { ClubLayout } from "@/components/ClubLayout";
import { Card, CardContent } from "@/components/ui/card";
import { memberBenefits, membersLoungeImage, upcomingEvents } from "@/lib/siteContent";

export default function Members() {
  return (
    <ClubLayout>
      <section className="bg-background py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="section-label">Members</p>
            <h1 className="section-title mt-4">Membership imagined as rhythm, familiarity, and a club you want to stay in after the round.</h1>
            <p className="mt-6 text-base leading-8 text-[color:var(--ink-soft)] md:text-lg">
              This page is designed to suggest the internal life of a club: medal mornings, reciprocal introductions, comfortable lounge space, and the sense that the golf is only one part of belonging.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line-soft)] bg-[color:var(--deep-forest)] p-3 shadow-[0_30px_80px_rgba(8,18,13,0.16)]">
            <img
              src={membersLoungeImage}
              alt="Members lounge at Larchmount Links"
              className="h-full min-h-[28rem] w-full rounded-[1.35rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface-soft)] py-20 md:py-24">
        <div className="container grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Trophy, title: "Competition calendar", body: "A steady fixture list built around weekly medals, mixed events, and summer honours boards." },
            { icon: Coffee, title: "Lounge life", body: "Morning coffee, late lunch, and a post-round room that rewards staying a little longer." },
            { icon: Users2, title: "Guest hosting", body: "Member-led visitor rounds with preferential guest rates and easy dining reservations." },
            { icon: Shield, title: "Club continuity", body: "An atmosphere of stewardship, with tradition carried through in service and surroundings." },
          ].map(({ icon: Icon, title, body }) => (
            <Card key={title} className="border-[color:var(--line-soft)] bg-white shadow-[0_18px_48px_rgba(15,27,22,0.06)]">
              <CardContent className="p-8">
                <div className="inline-flex rounded-full bg-[color:var(--deep-forest)]/8 p-3 text-[color:var(--deep-forest)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-6 font-display text-3xl text-[color:var(--deep-forest)]">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--ink-soft)]">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-[color:var(--line-soft)] bg-[linear-gradient(180deg,rgba(251,247,239,0.82),rgba(255,255,255,0.96))] p-8 md:p-10">
            <p className="section-label">Included in Membership</p>
            <h2 className="section-title mt-4">A package framed less as access and more as belonging.</h2>
            <div className="mt-8 grid gap-4">
              {memberBenefits.map((benefit) => (
                <div key={benefit} className="rounded-[1.4rem] border border-[color:var(--line-soft)] bg-white/88 px-5 py-4 text-sm leading-7 text-[color:var(--ink-soft)] shadow-[0_10px_30px_rgba(15,27,22,0.04)]">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[color:var(--deep-forest)] p-8 text-white md:p-10">
            <p className="section-label text-[color:var(--gold-soft)]">This Week at the Club</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">A fixture list that gives the club its cadence.</h2>
            <div className="mt-8 space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.title} className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold-soft)]">{event.date}</p>
                  <p className="mt-2 font-display text-2xl">{event.title}</p>
                  <p className="mt-2 text-sm leading-7 text-white/72">{event.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--deep-forest)] py-20 text-white md:py-24">
        <div className="container grid gap-6 lg:grid-cols-3">
          {[
            "Prospective members would typically be introduced through the club office and invited to experience the course and lounge before applying.",
            "Locker rooms, bar credit, and guest-hosting practices are framed as part of everyday use rather than add-on perks.",
            "Dress, behaviour, and pace-of-play expectations are communicated gently, preserving standards without feeling severe.",
          ].map((text) => (
            <div key={text} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 text-sm leading-7 text-white/74 backdrop-blur-sm">
              {text}
            </div>
          ))}
        </div>
      </section>
    </ClubLayout>
  );
}
