import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Star, Phone, MapPin, ArrowUpRight, Menu as MenuIcon, X } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Aragorn's Cafe — Vegetarian Cafe in Nagpur" },
      {
        name: "description",
        content:
          "The Aragorn's Cafe, Lakadganj, Nagpur. 100% vegetarian. Dine-in, drive-through and delivery. Rated 4.8★ by 50 guests.",
      },
      { property: "og:title", content: "The Aragorn's Cafe — Vegetarian Cafe in Nagpur" },
      {
        property: "og:description",
        content:
          "100% vegetarian cafe at Chhapru Square, Central Ave, Nagpur. Dine-in, drive-through and delivery.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ADDRESS_LINES = [
  "Chhapru Square, PN 274, Central Ave",
  "Rajmahal, Queta Colony",
  "Lakadganj, Nagpur, Maharashtra 440008",
];
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "The Aragorn's Cafe, Chhapru Square, PN 274, Central Ave, Rajmahal, Queta Colony, Lakadganj, Nagpur, Maharashtra 440008",
  );
const PHONE_DISPLAY = "091759 96079";
const PHONE_HREF = "tel:+919175996079";
/** Owner's existing ordering platform — drop the URL here to activate every ORDER CTA. */
const ORDER_URL = "";

const NAV = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#visit" },
];

function OrderLink({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={ORDER_URL || "#visit"}
      {...(ORDER_URL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      title={ORDER_URL ? "Order online" : "Demo: connect your ordering platform link here"}
      className={className}
    >
      {children}
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 py-3 backdrop-blur-md"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className={`font-display leading-none tracking-tight transition-all duration-500 ${
            scrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
          }`}
        >
          The Aragorn&rsquo;s Cafe
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <OrderLink className="eyebrow border border-foreground px-5 py-3 transition-colors duration-300 hover:bg-foreground hover:text-background">
            Order Now
          </OrderLink>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl"
              >
                {n.label}
              </a>
            ))}
            <OrderLink className="eyebrow mt-2 bg-foreground px-5 py-4 text-center text-background">
              Order Now
            </OrderLink>
          </div>
        </div>
      )}
    </header>
  );
}

function DemoTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-block bg-foreground/85 px-2.5 py-1.5 text-[0.6rem] text-background">
      {children}
    </span>
  );
}

function Placeholder({
  label,
  note,
  className = "",
}: {
  label: string;
  note?: string;
  className?: string;
}) {
  return (
    <div className={`demo-surface relative flex items-end p-5 ${className}`}>
      <div className="absolute left-5 top-5">
        <DemoTag>Replace with real photo</DemoTag>
      </div>
      <div>
        <p className="font-display text-xl leading-tight md:text-2xl">{label}</p>
        {note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-paper/55">Lakadganj &middot; Nagpur &middot; Since day one</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[13vw] font-normal leading-[0.88] tracking-[-0.03em] sm:text-[9vw] lg:text-[6.4vw]">
              The Aragorn&rsquo;s
              <br />
              <span className="italic">Cafe</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-md font-display text-2xl leading-snug text-paper/85 md:text-3xl">
              Nagpur&rsquo;s Vegetarian Cafe
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
              Good food. Good people. A place worth coming back to.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="eyebrow group inline-flex items-center gap-3 bg-paper px-7 py-4 text-ink transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Explore Menu
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow inline-flex items-center gap-3 border border-paper/35 px-7 py-4 text-paper transition-colors duration-300 hover:border-paper hover:bg-paper/10"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-12 flex items-center gap-5 border-t border-paper/15 pt-6">
              <span className="font-display text-3xl leading-none">4.8</span>
              <div className="flex gap-0.5 text-saffron">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-paper/55">50 Google reviews</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={heroFood}
              alt="Vegetarian cafe spread — demo visual, to be replaced with The Aragorn's Cafe photography"
              width={1408}
              height={1760}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <DemoTag>Demo visual &mdash; swap for cafe photography</DemoTag>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-paper/12">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-10 gap-y-3 px-6 py-5 text-xs text-paper/55 md:px-10">
          <span>100% Vegetarian</span>
          <span className="hidden sm:inline">&mdash;</span>
          <span>Dine-in &middot; Drive-through &middot; No-contact delivery</span>
          <span className="hidden sm:inline">&mdash;</span>
          <span>Open until 11 PM</span>
          <span className="hidden sm:inline">&mdash;</span>
          <span>&#8377;1&ndash;200 per person</span>
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = ["Breakfast", "Snacks", "Main Course", "Beverages"];

function MenuSection() {
  const [active, setActive] = useState(CATEGORIES[0]);
  return (
    <section id="menu" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow text-primary">The Menu</p>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
              Something for
              <br />
              <span className="italic">Every Craving</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Four sections, one kitchen, entirely vegetarian. The dishes and prices below are
              structured placeholders &mdash; your actual menu drops straight into this layout.
            </p>
            <OrderLink className="eyebrow mt-8 inline-flex items-center gap-3 bg-foreground px-7 py-4 text-background transition-opacity duration-300 hover:opacity-85">
              View Full Menu
              <ArrowUpRight className="size-4" />
            </OrderLink>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="flex flex-wrap gap-2 border-b border-border pb-5">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`eyebrow px-4 py-2.5 transition-colors duration-300 ${
                    active === c
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <ul className="mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Reveal as="li" key={`${active}-${i}`} delay={i * 60}>
                <div className="group flex items-baseline gap-5 border-b border-border py-7 transition-colors duration-300 hover:border-foreground">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                        Menu Item
                      </h3>
                      <span className="eyebrow border border-dashed border-foreground/30 px-2 py-1 text-[0.6rem] text-muted-foreground">
                        {active} placeholder
                      </span>
                    </div>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">
                      Short description of the dish goes here.
                    </p>
                  </div>
                  <div className="font-display text-xl text-muted-foreground">&#8377;XX</div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    n: "01",
    title: "100% Vegetarian",
    body: "Every plate that leaves the kitchen is fully vegetarian. No exceptions, no separate menu.",
  },
  {
    n: "02",
    title: "Affordable Dining",
    body: "\u20B91\u2013200 per person. A full sit-down meal that doesn't ask much of your day.",
  },
  {
    n: "03",
    title: "Multiple Ways to Enjoy",
    body: "Dine-in at Shendre Complex, drive-through on Central Ave, or no-contact delivery.",
  },
];

function About() {
  return (
    <section id="about" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow text-paper/50">Why Aragorn&rsquo;s</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] md:text-6xl">
            A vegetarian cafe built around
            <span className="italic"> the everyday.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px border-t border-paper/15 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.n} delay={i * 100}>
              <div className="h-full border-b border-paper/15 py-10 pr-8 md:border-b-0 md:border-r md:pl-8 md:first:pl-0">
                <span className="eyebrow text-primary">{v.n}</span>
                <h3 className="mt-5 font-display text-2xl md:text-3xl">{v.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-primary">Social Proof</p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
            Loved by
            <br />
            <span className="italic">Nagpur</span>
          </h2>
          <div className="mt-10 flex items-end gap-6">
            <span className="font-display text-7xl leading-none">4.8</span>
            <div className="pb-2">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">50 reviews on Google</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="demo-surface h-full p-7">
                <DemoTag>Google review placeholder</DemoTag>
                <blockquote className="mt-6 font-display text-xl leading-snug text-muted-foreground">
                  Guest review text will be pulled in from the cafe&rsquo;s Google profile.
                </blockquote>
                <figcaption className="mt-6 text-xs text-muted-foreground">
                  Reviewer name &middot; Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-36">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-10">
          <h2 className="font-display text-4xl leading-none md:text-5xl">
            Inside <span className="italic">Aragorn&rsquo;s</span>
          </h2>
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            Every frame below is a labelled slot. Send your photographs and they drop in without
            touching the layout.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <Placeholder
            label="Signature dish"
            note="Hero food frame &middot; portrait or landscape"
            className="h-[340px] md:h-[520px]"
          />
        </Reveal>
        <div className="grid gap-4 md:col-span-5">
          <Reveal delay={80}>
            <Placeholder label="Cafe interior" note="Wide seating view" className="h-[240px]" />
          </Reveal>
          <Reveal delay={160}>
            <Placeholder
              label="Exterior"
              note="Shendre Complex frontage"
              className="h-[240px] md:h-[264px]"
            />
          </Reveal>
        </div>
        <Reveal delay={80} className="md:col-span-5">
          <Placeholder
            label="Guests enjoying the space"
            note="Candid, natural light"
            className="h-[280px] md:h-[360px]"
          />
        </Reveal>
        <Reveal delay={160} className="md:col-span-7">
          <Placeholder
            label="Best-selling dishes"
            note="Two or three plates, overhead"
            className="h-[280px] md:h-[360px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-paper/50">Visit Us</p>
          <h2 className="mt-5 font-display text-4xl leading-[1] md:text-5xl">
            The Aragorn&rsquo;s Cafe
          </h2>
          <address className="mt-8 not-italic font-display text-2xl leading-snug text-paper/80 md:text-3xl">
            {ADDRESS_LINES.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <div className="mt-8 space-y-2 text-sm text-paper/55">
            <p>Located in Shendre Complex</p>
            <p>Open until approximately 11 PM</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex items-center gap-2 bg-paper px-6 py-4 text-ink transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <MapPin className="size-4" /> Get Directions
            </a>
            <a
              href={PHONE_HREF}
              className="eyebrow inline-flex items-center gap-2 border border-paper/35 px-6 py-4 transition-colors duration-300 hover:bg-paper/10"
            >
              <Phone className="size-4" /> Call Now
            </a>
            <OrderLink className="eyebrow inline-flex items-center gap-2 border border-paper/35 px-6 py-4 transition-colors duration-300 hover:bg-paper/10">
              Order Online
            </OrderLink>
          </div>
          <p className="mt-5 text-xs text-paper/40">
            Demo note: the ordering button is link-ready &mdash; connect your existing ordering
            platform and every &ldquo;Order&rdquo; CTA goes live.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[380px] w-full overflow-hidden border border-paper/20 lg:h-full"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,color-mix(in_oklab,var(--paper)_10%,transparent),transparent_60%)]" />
            <svg
              className="absolute inset-0 size-full opacity-30"
              aria-hidden="true"
              preserveAspectRatio="none"
              viewBox="0 0 400 400"
            >
              <g stroke="currentColor" strokeWidth="0.6" className="text-paper">
                {[40, 96, 152, 208, 264, 320, 376].map((y) => (
                  <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} />
                ))}
                {[36, 92, 148, 204, 260, 316, 372].map((x) => (
                  <line key={`v${x}`} x1={x} y1="0" x2={x} y2="400" />
                ))}
              </g>
              <path
                d="M0 208 L400 190"
                stroke="currentColor"
                className="text-paper"
                strokeWidth="6"
                opacity="0.5"
              />
              <path
                d="M204 0 L204 400"
                stroke="currentColor"
                className="text-paper"
                strokeWidth="4"
                opacity="0.35"
              />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="relative flex size-4 items-center justify-center">
                <span className="absolute size-4 animate-ping rounded-full bg-primary/60" />
                <span className="size-2.5 rounded-full bg-primary" />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-paper/15 bg-ink/70 px-5 py-4 backdrop-blur-sm">
              <span className="text-xs text-paper/70">Chhapru Square, Central Ave, Nagpur</span>
              <span className="eyebrow inline-flex items-center gap-1.5 text-paper transition-transform duration-300 group-hover:translate-x-0.5">
                Open in Maps <ArrowUpRight className="size-3.5" />
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[1400px] px-6 py-14 md:px-10">
      <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-[1.2fr_1fr_auto]">
        <div>
          <p className="font-display text-2xl">The Aragorn&rsquo;s Cafe</p>
          <p className="mt-2 text-sm text-muted-foreground">Best Vegetarian Cafe in Nagpur</p>
          <p className="mt-1 text-xs text-muted-foreground/70">थे अरगोर्न&rsquo;s कैफे</p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Chhapru Square, Nagpur</p>
          <a href={PHONE_HREF} className="link-underline inline-block hover:text-foreground">
            {PHONE_DISPLAY}
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-3 text-xs">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="link-underline hover:text-foreground">
                {n.label}
              </a>
            ))}
          </div>
        </div>
        <OrderLink className="eyebrow inline-flex h-fit items-center gap-2 border border-foreground px-6 py-4 transition-colors duration-300 hover:bg-foreground hover:text-background">
          Order Online <ArrowUpRight className="size-4" />
        </OrderLink>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <OrderLink className="eyebrow flex items-center justify-center bg-foreground py-4 text-background">
        Order Now
      </OrderLink>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="eyebrow flex items-center justify-center gap-2 py-4"
      >
        <MapPin className="size-4" /> Directions
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="pb-14 md:pb-0">
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Reviews />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
