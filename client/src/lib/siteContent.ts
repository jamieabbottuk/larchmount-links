/*
Design reminder: Edwardian sporting-estate aesthetic with restrained prestige, warm greens, parchment neutrals, editorial asymmetry, and heritage-led copy.
Use imagery and language that feel storied, calm, and quietly premium rather than flashy.
*/

export const site = {
  name: "Larchmount Links",
  location: "Stratford-upon-Avon, Warwickshire",
  tagline: "A fictional Warwickshire club with a heritage spirit and a modern welcome.",
  description:
    "Larchmount Links is a fictional golf club concept created as a premium demo experience, blending classic British clubhouse character with approachable visitor golf and polished member hospitality.",
  email: "club@larchmountlinks.co.uk",
  phone: "+44 (0)1789 555 240",
  address: "Larchmount Road, Stratford-upon-Avon CV37 8LL",
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663341563393/jzZ2c36u5dqGeqUW2JMPqc/larchmount-logo-UWBppLSLcHUzcuFWieBBkx.png",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/tee-times", label: "Tee Times & Visitors" },
  { href: "/members", label: "Members" },
] as const;

export const slideshowImages = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663341563393/TWlHLMMgYQIIfoNO.png",
    eyebrow: "Stratford-upon-Avon",
    title: "Course views shaped by morning light and measured pace.",
    body:
      "A calm, heritage-led golf club concept inspired by the quiet authority of England's most distinguished sporting estates.",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663341563393/jzZ2c36u5dqGeqUW2JMPqc/larchmount-clubhouse-exterior-Lzmn4VcQzqdqQNPxSB5b5Y.webp",
    eyebrow: "The Clubhouse",
    title: "Terraces, mullioned windows, and a clubhouse built for long afternoons.",
    body:
      "Designed to suggest old-world hospitality without feeling remote, formal, or inaccessible to visitors.",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663341563393/ctUnSTClyrQKWpsQ.png",
    eyebrow: "Visitor Golf",
    title: "Straightforward booking, generous tee sheets, and an easy first impression.",
    body:
      "From society days to individual rounds, the experience is intended to feel polished, welcoming, and unhurried.",
  },
] as const;

export const homeHighlights = [
  {
    title: "Heritage character",
    text: "Brick, stone, oak and soft brass details shape a club identity that feels established without becoming museum-like.",
  },
  {
    title: "Visitor-friendly golf",
    text: "Clear booking windows, weekday availability, and tailored golf-day support make the site suitable for guests and societies.",
  },
  {
    title: "Members' rhythm",
    text: "Competition mornings, winter roll-ups, and lounge-led hospitality give the club a social cadence beyond the course itself.",
  },
] as const;

export const visitorOffers = [
  {
    label: "Weekday Visitor",
    price: "£95",
    note: "18 holes, practice access, and clubhouse dining reservation support.",
  },
  {
    label: "Twilight Round",
    price: "£65",
    note: "Selected summer evenings after 3.30pm, ideal for local guests.",
  },
  {
    label: "Society Day",
    price: "From £125",
    note: "Coffee, bacon roll, 18 holes, and one-course lunch for small groups.",
  },
] as const;

export const bookingSteps = [
  "Choose a preferred day and tee window up to 14 days ahead.",
  "Contact the club team for individual, fourball, or society arrangements.",
  "Receive confirmation together with arrival guidance and clubhouse dress notes.",
] as const;

export const memberBenefits = [
  "Reserved competition tee blocks and priority access to major club fixtures.",
  "Use of the members' lounge, locker facilities, and guest-hosting privileges.",
  "Preferential guest green fees and seasonal dining events in the clubhouse.",
  "Reciprocal introductions to selected partner clubs across the Midlands and South East.",
] as const;

export const membersLoungeImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663341563393/jzZ2c36u5dqGeqUW2JMPqc/larchmount-members-lounge-hR96rkMxgeqnEYtUbs23Bt.webp";

export const clubhouseImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663341563393/jzZ2c36u5dqGeqUW2JMPqc/larchmount-clubhouse-exterior-Lzmn4VcQzqdqQNPxSB5b5Y.webp";

export const footerLinks = {
  club: [
    { label: "Home", href: "/" },
    { label: "Tee Times & Visitors", href: "/tee-times" },
    { label: "Members", href: "/members" },
  ],
  practical: [
    { label: "Dress Guidance", href: "/members" },
    { label: "Visitor Enquiries", href: "/tee-times" },
    { label: "Clubhouse Hours", href: "/tee-times" },
  ],
  contact: [
    { label: site.phone, href: `tel:${site.phone.replace(/\s|\(|\)|-/g, "")}` },
    { label: site.email, href: `mailto:${site.email}` },
    { label: site.address, href: "https://maps.google.com/?q=Stratford-upon-Avon" },
  ],
} as const;

export const upcomingEvents = [
  { date: "Saturday", title: "Members' Medal", detail: "18-hole stroke play followed by lunch in the lounge." },
  { date: "Wednesday", title: "Ladies' Gathering", detail: "Morning tee block with coffee from 8.00am." },
  { date: "Sunday", title: "Family Foursomes", detail: "Relaxed afternoon format open to all member categories." },
] as const;
