/*
Design reminder: Edwardian sporting-estate aesthetic with restrained prestige, warm greens, parchment neutrals, subtle linework, and generous whitespace.
The header and footer should feel like club stationery translated into a polished modern website.
*/

import { Link, useLocation } from "wouter";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { site, navigation, footerLinks } from "@/lib/siteContent";
import { cn } from "@/lib/utils";

type ClubLayoutProps = {
  children: React.ReactNode;
};

export function ClubLayout({ children }: ClubLayoutProps) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--deep-forest)]/88 text-white backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <Link href="/" className="group flex items-center gap-4 min-w-0">
            <img
              src={site.logo}
              alt="Larchmount Links crest"
              className="h-14 w-14 shrink-0 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
            />
            <div className="min-w-0">
              <p className="font-display text-2xl tracking-[0.16em] text-white uppercase leading-none">
                Larchmount Links
              </p>
              <p className="mt-1 text-sm text-white/68">{site.location}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => {
              const active = location === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm tracking-[0.18em] uppercase transition-colors duration-300",
                    active
                      ? "bg-white/12 text-white"
                      : "text-white/72 hover:bg-white/8 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              asChild
              variant="outline"
              className="border-white/18 bg-white/6 text-white hover:bg-white/14 hover:text-white"
            >
              <a href={`mailto:${site.email}`}>Visitor Enquiry</a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/10 lg:hidden"
            >
              <div className="container flex flex-col gap-2 py-4">
                {navigation.map((item) => {
                  const active = location === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm tracking-[0.16em] uppercase transition-colors duration-300",
                        active
                          ? "bg-white/12 text-white"
                          : "text-white/72 hover:bg-white/8 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 rounded-2xl border border-white/14 px-4 py-3 text-sm tracking-[0.16em] uppercase text-white/88"
                >
                  Visitor Enquiry
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main>{children}</main>

      <footer className="relative overflow-hidden bg-[color:var(--deep-forest)] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,188,125,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)]" />
        <div className="container relative py-16">
          <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
            <div className="max-w-md">
              <div className="flex items-center gap-4">
                <img
                  src={site.logo}
                  alt="Larchmount Links crest"
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <p className="font-display text-2xl uppercase tracking-[0.14em]">Larchmount Links</p>
                  <p className="text-sm text-white/68">Stratford-upon-Avon, Warwickshire</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/72">{site.description}</p>
            </div>

            <FooterColumn title="The Club" items={footerLinks.club} />
            <FooterColumn title="Practical" items={footerLinks.practical} />

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold-soft)]">Contact</p>
              <div className="mt-5 space-y-4 text-sm text-white/74">
                <FooterContact icon={Phone} href={footerLinks.contact[0].href} label={footerLinks.contact[0].label} />
                <FooterContact icon={Mail} href={footerLinks.contact[1].href} label={footerLinks.contact[1].label} />
                <FooterContact icon={MapPin} href={footerLinks.contact[2].href} label={footerLinks.contact[2].label} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
            <p>Demo concept website for a fictional golf club. All imagery on this site is custom generated for the demo.</p>
            <p>© 2026 Larchmount Links</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

type FooterColumnProps = {
  title: string;
  items: readonly { label: string; href: string }[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold-soft)]">{title}</p>
      <div className="mt-5 space-y-4 text-sm text-white/74">
        {items.map((item) => (
          <a key={item.label} href={item.href} className="block transition-colors duration-300 hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

type FooterContactProps = {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
};

function FooterContact({ icon: Icon, href, label }: FooterContactProps) {
  return (
    <a href={href} className="flex items-start gap-3 transition-colors duration-300 hover:text-white">
      <span className="mt-0.5 rounded-full border border-white/12 bg-white/6 p-2 text-[color:var(--gold-soft)]">
        <Icon className="h-4 w-4" />
      </span>
      <span className="leading-6">{label}</span>
    </a>
  );
}
