/*
Preston Golf Club — single-page sales showcase.
This page intentionally does NOT use the repo's Larchmount components or palette.
It recreates the look and feel of prestongolfclub.com (warm Lancashire parkland,
deep heritage green + cream/gold) so the club can see "their own site" with the
GolfVox chat widget embedded on it. Fully self-contained — Tailwind only.
*/

import { useEffect } from "react";

// Real Preston Golf Club imagery, hot-linked from their Wix static CDN.
// Each <img> carries an onError fallback to a tasteful golf placeholder so a
// blocked hotlink never leaves a broken image.
const HERO_IMAGE =
  "https://static.wixstatic.com/media/34f9e1_eb51e5dc83894cb9afe99667402aa483f000.jpg";
const COURSE_IMAGE =
  "https://static.wixstatic.com/media/34f9e1_456ec513731444768ce307d0fbed837a~mv2.jpg";
const MEMBERSHIP_IMAGE =
  "https://static.wixstatic.com/media/34f9e1_3f74241fecad47aea8b3c2672578a629~mv2.jpg";
const VISITORS_IMAGE =
  "https://static.wixstatic.com/media/34f9e1_ecd65b06306f45a194095fe70625e4e7~mv2.jpg";
const EVENTS_IMAGE =
  "https://static.wixstatic.com/media/34f9e1_33acfa5babbd4868b0770531aa89c84b~mv2.jpg";

// Tasteful parkland / golf fallbacks (Unsplash) used only if a hot-link fails.
const FALLBACKS: Record<string, string> = {
  hero: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=80",
  course:
    "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80",
  membership:
    "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1200&q=80",
  visitors:
    "https://images.unsplash.com/photo-1530028828-25e8270793c5?auto=format&fit=crop&w=1200&q=80",
  events:
    "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80",
};

function withFallback(key: keyof typeof FALLBACKS) {
  return (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (img.dataset.fellBack === "true") return;
    img.dataset.fellBack = "true";
    img.src = FALLBACKS[key];
  };
}

const NAV_ITEMS = [
  "Home",
  "The Club",
  "The Course",
  "Golf",
  "Membership",
  "Driving Range",
  "Academy",
  "Events",
  "Contact Us",
];

export default function Preston() {
  // Inject Preston's GolfVox web-chat widget on mount (production endpoint).
  useEffect(() => {
    const id = "golfvox-webchat-embed-preston";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.defer = true;
    script.src = "https://clubvox-prod-web.fly.dev/webchatembed.js";
    script.dataset.club = "preston-golf-club";
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f4ec] font-sans text-[#1f2a24] antialiased">
      {/* Top utility bar */}
      <div className="bg-[#0b3d2e] text-[#e9e2cf]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:text-sm">
          <span className="hidden sm:inline">Fulwood Hall Lane, Preston, PR2 8DD</span>
          <div className="flex items-center gap-4">
            <a href="tel:01772700011" className="hover:text-white">
              01772 700011
            </a>
            <a
              href="mailto:customerservices@prestongolfclub.com"
              className="hidden hover:text-white md:inline"
            >
              customerservices@prestongolfclub.com
            </a>
            <a
              href="#"
              className="rounded-sm border border-[#caa94a] px-3 py-1 font-semibold uppercase tracking-wide text-[#caa94a] hover:bg-[#caa94a] hover:text-[#0b3d2e]"
            >
              Members Login
            </a>
          </div>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="sticky top-0 z-40 border-b border-[#0b3d2e]/10 bg-[#f7f4ec]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b3d2e] text-[#caa94a] ring-2 ring-[#caa94a]">
              <span className="font-serif text-xl font-bold">PG</span>
            </div>
            <div className="leading-tight">
              <p className="font-serif text-xl font-bold tracking-wide text-[#0b3d2e]">
                Preston Golf Club
              </p>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a7a3d]">
                Est. 1892
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded px-3 py-2 text-sm font-semibold uppercase tracking-wide text-[#1f2a24] transition-colors hover:bg-[#0b3d2e] hover:text-[#caa94a]"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#book"
            className="hidden rounded-sm bg-[#caa94a] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#0b3d2e] shadow-sm transition-colors hover:bg-[#b8973b] sm:inline-block"
          >
            Book a Tee Time
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-[78vh] items-center justify-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          onError={withFallback("hero")}
          alt="Preston Golf Club parkland fairway"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b3d2e]/70 via-[#0b3d2e]/45 to-[#0b3d2e]/75" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#e9d9a3]">
            Founded 1892 &middot; Lancashire
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight drop-shadow-md sm:text-5xl md:text-6xl">
            A Warm Lancashire Welcome
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            A friendly, mature 18-hole parkland course set across 120 acres of
            classic Lancashire countryside — shaped over the years by Braid,
            Vardon, MacKenzie and Herd, with USGA-standard greens and easy access
            from the M6 and M55.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              id="book"
              href="#visitors"
              className="rounded-sm bg-[#caa94a] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0b3d2e] shadow-lg transition-colors hover:bg-[#b8973b]"
            >
              Book a Tee Time
            </a>
            <a
              href="#membership"
              className="rounded-sm border-2 border-white/80 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#0b3d2e]"
            >
              Join the Club
            </a>
          </div>
        </div>
      </section>

      {/* Quick stat strip */}
      <section className="border-y border-[#0b3d2e]/10 bg-[#0b3d2e] text-[#e9e2cf]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-10 text-center md:grid-cols-4">
          {[
            { stat: "18", label: "Holes" },
            { stat: "6,278", label: "Yards" },
            { stat: "Par 71", label: "Parkland" },
            { stat: "1892", label: "Established" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl font-bold text-[#caa94a]">
                {s.stat}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#e9e2cf]/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Course */}
      <section id="course" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src={COURSE_IMAGE}
              onError={withFallback("course")}
              alt="Preston Golf Club fairway and green"
              className="h-full max-h-[28rem] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8a7a3d]">
              The Course
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#0b3d2e] md:text-4xl">
              Mature parkland, played for over 130 years
            </h2>
            <p className="mt-5 leading-relaxed text-[#3a443d]">
              Our 18-hole, 6,278-yard par-71 course winds through 120 acres of
              established parkland. Refined over the decades by some of golf's
              greatest architects — James Braid, Harry Vardon, Alister MacKenzie
              and Sandy Herd — it rewards thoughtful play across every ability.
            </p>
            <p className="mt-4 leading-relaxed text-[#3a443d]">
              USGA-standard greens give a true, consistent putting surface all
              year round, while tree-lined fairways and subtle contours keep the
              round enjoyable yet genuinely challenging.
            </p>
            <a
              href="#"
              className="mt-7 inline-block rounded-sm border-2 border-[#0b3d2e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#0b3d2e] transition-colors hover:bg-[#0b3d2e] hover:text-[#caa94a]"
            >
              Explore the Course
            </a>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="bg-[#eee8d8]">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8a7a3d]">
                Membership
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[#0b3d2e] md:text-4xl">
                A friendly, welcoming home for your golf
              </h2>
              <p className="mt-5 leading-relaxed text-[#3a443d]">
                From full and intermediate categories to flexible and country
                options — plus a thriving junior section — Preston Golf Club has a
                membership to suit every stage of your game. Members enjoy a busy
                fixture calendar, open competitions and a warm clubhouse welcome.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Full & 7-day membership",
                  "Intermediate & flexible",
                  "Country & social",
                  "Junior academy",
                ].map((c) => (
                  <li key={c} className="flex items-center gap-3 text-[#1f2a24]">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#caa94a]" />
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 inline-block rounded-sm bg-[#0b3d2e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#caa94a] transition-colors hover:bg-[#0a3325]"
              >
                Membership Options
              </a>
            </div>
            <div className="order-1 overflow-hidden rounded-lg shadow-xl lg:order-2">
              <img
                src={MEMBERSHIP_IMAGE}
                onError={withFallback("membership")}
                alt="Preston Golf Club members on the course"
                className="h-full max-h-[28rem] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visitors / Green Fees */}
      <section id="visitors" className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8a7a3d]">
            Visitors &amp; Green Fees
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#0b3d2e] md:text-4xl">
            Visiting golfers and societies always welcome
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#3a443d]">
            Individuals, groups and corporate days are warmly received. Book your
            tee time online, by phone, or right here through our chat — and enjoy
            a true Lancashire welcome on and off the course.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Tee Times",
              body: "Reserve weekday and weekend slots in advance for a relaxed, well-paced round.",
              cta: "Book Now",
            },
            {
              title: "Societies & Corporate",
              body: "Tailored packages with catering, prizes and a dedicated organiser welcome.",
              cta: "Enquire",
            },
            {
              title: "Open Competitions",
              body: "A full calendar of open events to test your game against visiting players.",
              cta: "View Diary",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border border-[#0b3d2e]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h3 className="font-serif text-2xl font-bold text-[#0b3d2e]">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-[#3a443d]">
                {card.body}
              </p>
              <a
                href="#"
                className="mt-6 inline-block self-start rounded-sm bg-[#caa94a] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#0b3d2e] transition-colors hover:bg-[#b8973b]"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section
        id="events"
        className="relative isolate overflow-hidden bg-[#0b3d2e] text-white"
      >
        <img
          src={EVENTS_IMAGE}
          onError={withFallback("events")}
          alt="Preston Golf Club clubhouse and events"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e9d9a3]">
            Events
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
            Weddings, conferences &amp; celebrations
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/90">
            Our clubhouse is a relaxed and characterful venue for weddings,
            corporate conferences, private parties and post-round dining. Our
            catering team will help you plan every detail.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-block rounded-sm bg-[#caa94a] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0b3d2e] transition-colors hover:bg-[#b8973b]"
          >
            Enquire About Your Event
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#082a1f] text-[#cfd6cf]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b3d2e] text-[#caa94a] ring-2 ring-[#caa94a]">
                <span className="font-serif text-xl font-bold">PG</span>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-white">
                  Preston Golf Club
                </p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#caa94a]">
                  Established 1892
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#cfd6cf]/80">
              A warm Lancashire welcome — 18 holes of mature parkland golf in the
              heart of Preston.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#caa94a]">
              Visit Us
            </p>
            <address className="mt-5 space-y-2 text-sm not-italic leading-relaxed text-[#cfd6cf]/90">
              <p>Fulwood Hall Lane</p>
              <p>Preston, Lancashire</p>
              <p>PR2 8DD</p>
              <p className="text-[#cfd6cf]/70">Easy access from the M6 &amp; M55</p>
            </address>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#caa94a]">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <a href="tel:01772700011" className="block hover:text-white">
                01772 700011
              </a>
              <a
                href="mailto:customerservices@prestongolfclub.com"
                className="block break-all hover:text-white"
              >
                customerservices@prestongolfclub.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-[#cfd6cf]/60 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Preston Golf Club. All rights reserved.</p>
            <p>Founded 1892 &middot; A Warm Lancashire Welcome</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
