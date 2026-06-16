import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

import heroImg from "@/assets/hero.jpg";
import journalImg from "@/assets/journal.jpg";
import inside1 from "@/assets/inside-1.jpg";
import inside2 from "@/assets/inside-2.jpg";
import inside3 from "@/assets/inside-3.jpg";
import storyImg from "@/assets/story.jpg";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import archive1 from "@/assets/archive-1.jpg";
import archive2 from "@/assets/archive-2.jpg";
import finalCta from "@/assets/final-cta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOERA — A Memory Journal. Before It Fades." },
      {
        name: "description",
        content:
          "NOERA is an heirloom memory journal for photographs, reflections and the moments that deserve to stay. Keep what matters, before it fades.",
      },
      { property: "og:title", content: "NOERA — A Memory Journal. Before It Fades." },
      {
        property: "og:description",
        content: "A journal for photographs, reflections and memories that deserve to stay.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const INSTAGRAM_URL = "https://www.instagram.com/noera_beforeitfades/?utm_source=ig_web_button_share_sheet";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdavpbjd";
const STRIPE_URL = "https://buy.stripe.com/5kQeV68Q3eD9eTL7zK7kc00";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`inline-flex flex-col items-center font-display text-[1.75rem] leading-none tracking-[0.42em] text-mocha ${className}`}
      aria-label="NOERA — home"
    >
      <span className="inline-flex items-baseline gap-[0.18em]">
        <span>N</span>
        <span>O</span>
        <span>E</span>
        <span>R</span>
        <span>A</span>
      </span>
      <span className="mt-2 font-serif text-sm italic leading-relaxed opacity-70">
        before it fades
      </span>
    </a>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 1400ms ease ${delay}ms, transform 1400ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <EmotionalStatement />
      <TheJournal />
      <GlimpseInside />
      <Storytelling />
      <InspirationArchive />
      <FromInstagram />
      <Contact />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-7 md:px-12 md:py-9">
        <Logo className="text-cream md:text-cream" />
        <nav className="hidden items-center gap-10 text-[0.7rem] uppercase tracking-[0.3em] text-cream md:flex">
          <a href="#journal" className="transition-opacity hover:opacity-70">The Journal</a>
          <a href="#inside" className="transition-opacity hover:opacity-70">Inside</a>
          <a href="#archive" className="transition-opacity hover:opacity-70">Inspiration</a>
          <a href="#contact" className="transition-opacity hover:opacity-70">Contact</a>
        </nav>
        <a
          href={STRIPE_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden border border-cream/60 px-5 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-cream transition hover:bg-cream hover:text-mocha md:inline-block"
        >
          Shop the Journal
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="A vintage leather journal, fountain pen and printed photographs on a wooden desk in morning light"
        width={1792}
        height={1120}
        className="img-reveal absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mocha/55 via-mocha/30 to-mocha/70" />
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-44">
        <div className="max-w-3xl fade-in-slow">
          <h1 className="font-display text-[2.7rem] leading-[1.05] text-cream md:text-[5rem] lg:text-[6.25rem]">
            Keep the moments
            <span className="block italic text-peach">worth remembering.</span>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-cream/85 md:text-xl">
            A journal for photographs, reflections and memories that deserve to stay —
            quietly bound, slowly written, made to outlast the scroll.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a href={STRIPE_URL} target="_blank" rel="noreferrer" className="btn-primary bg-cream! text-mocha! border-cream!">
              Shop the Journal
            </a>
            <a href="#story" className="text-[0.72rem] uppercase tracking-[0.32em] text-cream/85 underline-offset-8 hover:underline">
              Read the story
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.4em] text-cream/60">
        Vol. I
      </div>
    </section>
  );
}

function EmotionalStatement() {
  return (
    <section className="bg-background py-32 md:py-56">
      <Reveal>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rule mb-10 text-plum" />
          <p className="font-display text-3xl leading-[1.25] text-mocha md:text-5xl lg:text-6xl">
            Some moments deserve
            <span className="italic text-plum"> more than a camera roll.</span>
          </p>
          <div className="mt-12">
            <a href={STRIPE_URL} target="_blank" rel="noreferrer" className="btn-plum">
              Shop the Journal
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function TheJournal() {
  return (
    <section id="journal" className="bg-secondary py-24 md:py-40">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-12">
        <Reveal>
          <div className="relative">
            <img
              src={journalImg}
              alt="NOERA heirloom memory journal in deep mocha linen with gold emblem"
              width={1200}
              height={1500}
              loading="lazy"
              className="w-full object-cover shadow-[0_30px_60px_-30px_rgba(71,45,48,0.35)]"
            />
            <span className="absolute -left-4 -top-4 hidden font-script text-7xl text-plum md:block">
              n°
            </span>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="max-w-lg">
            <p className="eyebrow mb-6 text-plum">
              <span className="rule mr-4" />
              The Journal
            </p>
            <h2 className="font-display text-4xl leading-[1.1] text-mocha md:text-6xl">
              A quiet place for the things <span className="italic">you do not want to forget.</span>
            </h2>
            <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-mocha/85">
              <p>
                NOERA is not a planner. It is not a productivity tool. It is a slow,
                deliberate object — a linen-bound archive made to hold photographs,
                handwritten thoughts, ticket stubs and afternoons that would otherwise
                slip away.
              </p>
              <p>
                Designed to feel like an heirloom from the first time you open it. Built
                to be passed on.
              </p>
            </div>
            <div className="mt-10">
              <a href={STRIPE_URL} target="_blank" rel="noreferrer" className="btn-plum">Shop the Journal</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GlimpseInside() {
  // Faint handwritten whispers drifting across the paper — felt, not labelled.
  const whispers = [
    { text: "what stayed?", top: "8%", left: "4%", rotate: "-7deg", size: "1.6rem", opacity: 0.06 },
    { text: "before it fades", top: "78%", left: "10%", rotate: "-3deg", size: "1.4rem", opacity: 0.05 },
    { text: "this mattered", top: "6%", left: "72%", rotate: "5deg", size: "1.5rem", opacity: 0.05 },
    { text: "keep this", top: "86%", left: "70%", rotate: "-2deg", size: "1.3rem", opacity: 0.06 },
  ];

  return (
    <section id="inside" className="relative overflow-hidden bg-background py-28 md:py-44">
      {/* Soft cinematic vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(71,45,48,0.10) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Quiet, almost private opening */}
        <Reveal>
          <div className="mx-auto mb-20 max-w-2xl text-center md:mb-28">
            <p className="eyebrow mb-6 text-plum/70">
              <span className="rule mr-4" /> found, years later <span className="rule ml-4" />
            </p>
            <h2 className="font-display text-4xl leading-[1.15] text-mocha md:text-6xl">
              One day,{" "}
              <span className="italic">someone will open this</span>
              <br className="hidden md:block" />
              and meet you.
            </h2>
            <p className="mt-8 font-display text-xl italic leading-relaxed text-mocha/70 md:text-2xl">
              Not the version of you online.
              <br />
              The one only paper remembers.
            </p>
          </div>
        </Reveal>

        {/* The open journal — cinematic, used, personal */}
        <Reveal delay={140}>
          <div className="relative mx-auto w-full max-w-[1080px]">
            {/* Deep beneath-book shadow */}
            <div
              aria-hidden
              className="absolute -inset-x-8 -bottom-10 top-8 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(71,45,48,0.35), transparent 70%)",
                filter: "blur(36px)",
              }}
            />

            {/* The spread */}
            <div
              className="relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(178deg, #f4e8cf 0%, #efdfbf 40%, #e8d3aa 75%, #ddc294 100%)",
                boxShadow:
                  "0 40px 80px -30px rgba(71,45,48,0.55), inset 0 0 120px rgba(114,61,70,0.10), inset 0 0 0 1px rgba(71,45,48,0.08)",
                borderRadius: "2px",
                transform: "rotate(-0.4deg)",
              }}
            >
              {/* Aged paper grain + stains */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-multiply"
                style={{
                  opacity: 0.55,
                  backgroundImage:
                    "radial-gradient(circle at 18% 22%, rgba(120,80,40,0.18), transparent 35%), radial-gradient(circle at 82% 78%, rgba(71,45,48,0.20), transparent 40%), radial-gradient(circle at 55% 12%, rgba(180,120,70,0.10), transparent 25%), radial-gradient(circle at 30% 88%, rgba(226,109,92,0.08), transparent 30%), radial-gradient(circle at 90% 35%, rgba(120,80,40,0.12), transparent 30%)",
                }}
              />
              {/* Fine paper fibre noise */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-overlay"
                style={{
                  opacity: 0.35,
                  backgroundImage:
                    "repeating-linear-gradient(92deg, rgba(71,45,48,0.05) 0 1px, transparent 1px 3px), repeating-linear-gradient(2deg, rgba(71,45,48,0.04) 0 1px, transparent 1px 4px)",
                }}
              />

              {/* Foxing — age spots */}
              {[
                { top: "14%", left: "8%", size: 14, o: 0.18 },
                { top: "72%", left: "22%", size: 9, o: 0.22 },
                { top: "30%", left: "88%", size: 11, o: 0.16 },
                { top: "84%", left: "78%", size: 7, o: 0.20 },
              ].map((s, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    top: s.top,
                    left: s.left,
                    width: s.size,
                    height: s.size,
                    background: "rgba(120,70,40,0.55)",
                    opacity: s.o,
                    filter: "blur(2px)",
                  }}
                />
              ))}

              {/* Center binding crease */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[2px] -translate-x-1/2 md:block"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, rgba(71,45,48,0.18) 8%, rgba(71,45,48,0.32) 50%, rgba(71,45,48,0.18) 92%, transparent)",
                  boxShadow:
                    "-8px 0 18px -8px rgba(71,45,48,0.30), 8px 0 18px -8px rgba(71,45,48,0.30)",
                }}
              />

              {/* Drifting whispers */}
              {whispers.map((w, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="pointer-events-none absolute font-display italic text-mocha select-none"
                  style={{
                    top: w.top,
                    left: w.left,
                    transform: `rotate(${w.rotate})`,
                    fontSize: w.size,
                    opacity: w.opacity,
                    letterSpacing: "0.01em",
                  }}
                >
                  {w.text}
                </span>
              ))}

              <div className="relative grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">
                {/* LEFT PAGE — photograph held with vintage corners */}
                <div className="relative px-8 pt-12 pb-10 md:px-14 md:pt-20 md:pb-16">
                  <div
                    className="relative mx-auto"
                    style={{ width: "min(100%, 380px)", transform: "rotate(-2.2deg)" }}
                  >
                    {/* The print */}
                    <div
                      className="relative"
                      style={{
                        background: "#fbf4e4",
                        padding: "12px 12px 14px 12px",
                        boxShadow:
                          "0 22px 38px -22px rgba(71,45,48,0.65), 0 2px 0 rgba(71,45,48,0.08), inset 0 0 0 1px rgba(71,45,48,0.06)",
                      }}
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <img
                          src={inside1}
                          alt="A printed photograph tucked into the journal with vintage paper corners"
                          className="h-full w-full object-cover"
                          style={{ filter: "sepia(0.18) contrast(0.95) saturate(0.9)" }}
                          loading="lazy"
                        />
                        {/* Photo aging overlay */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(ellipse at center, transparent 55%, rgba(71,45,48,0.28) 100%)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Vintage photo corners — only two, the others fallen away */}
                    {[
                      { top: -8, left: -8, rot: 0 },
                      { bottom: -8, right: -8, rot: 180 },
                      { top: -8, right: -8, rot: 90 },
                    ].map((c, i) => (
                      <span
                        key={i}
                        aria-hidden
                        className="absolute block"
                        style={{
                          width: 30,
                          height: 30,
                          top: c.top,
                          left: c.left,
                          right: c.right,
                          bottom: c.bottom,
                          background:
                            "linear-gradient(135deg, #5a3a1f 0%, #3d2614 70%, #2a1a0d 100%)",
                          clipPath: "polygon(0 0, 100% 0, 0 100%)",
                          transform: `rotate(${c.rot}deg)`,
                          opacity: 0.78,
                          boxShadow: "0 2px 3px rgba(0,0,0,0.30)",
                        }}
                      />
                    ))}
                  </div>

                  {/* Handwritten caption beneath the photograph */}
                  <p
                    className="mx-auto mt-10 max-w-[320px] text-center font-display italic text-mocha/80"
                    style={{ fontSize: "1.15rem", transform: "rotate(-1deg)" }}
                  >
                    the afternoon light,
                    <br />
                    before it left.
                  </p>
                </div>

                {/* RIGHT PAGE — date and handwritten thoughts, no labels */}
                <div className="relative px-8 pt-10 pb-14 md:px-14 md:pt-20 md:pb-20">
                  {/* Handwritten date */}
                  <p
                    className="font-display italic text-mocha/85"
                    style={{ fontSize: "1.25rem", transform: "rotate(-0.8deg)" }}
                  >
                    Sunday — 14 June, half past four
                  </p>

                  {/* The thoughts */}
                  <div
                    className="mt-8 space-y-6 font-display italic text-mocha"
                    style={{ fontSize: "1.25rem", lineHeight: 1.6 }}
                  >
                    <p style={{ transform: "rotate(-0.3deg)" }}>
                      We walked the long way home today.
                    </p>
                    <p style={{ transform: "rotate(0.2deg)" }}>
                      You stopped to point at the figs —
                      <br />
                      the ones that always ripen too early.
                    </p>
                    <p style={{ transform: "rotate(-0.2deg)" }}>
                      I wanted to remember your face then.
                      <br />
                      Not the photograph.{" "}
                      <span className="text-plum/90">The looking.</span>
                    </p>
                    <p
                      className="pt-4 text-mocha/70"
                      style={{ fontSize: "1.1rem", transform: "rotate(0.4deg)" }}
                    >
                      Some afternoons just stay.
                    </p>
                  </div>

                  {/* Subtle stamp — quiet, not a logo wall */}
                  <div
                    aria-hidden
                    className="absolute bottom-8 right-8 md:bottom-12 md:right-14"
                    style={{ transform: "rotate(-12deg)", opacity: 0.42 }}
                  >
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full"
                      style={{
                        border: "1.2px solid #723d46",
                        color: "#723d46",
                        boxShadow: "inset 0 0 8px rgba(114,61,70,0.25)",
                      }}
                    >
                      <div className="text-center leading-tight">
                        <p className="font-display text-[1.1rem] italic">N</p>
                        <p
                          className="font-sans uppercase"
                          style={{ fontSize: "0.42rem", letterSpacing: "0.28em" }}
                        >
                          Noera
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* A small dried pressed-flower mark — tactile detail */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute"
                    style={{
                      top: "6%",
                      right: "10%",
                      width: 10,
                      height: 10,
                      background: "#8a6a3b",
                      borderRadius: "50%",
                      opacity: 0.35,
                      boxShadow:
                        "0 0 0 3px rgba(138,106,59,0.10), 0 0 8px rgba(138,106,59,0.20)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Quiet caption beneath the spread */}
            <p className="mt-10 text-center font-display italic text-mocha/55 md:mt-14" style={{ fontSize: "1.05rem" }}>
              A page someone wrote on a Sunday they almost forgot.
            </p>
          </div>
        </Reveal>

        {/* Three emotional thoughts — flowing prose, not cards */}
        <Reveal delay={220}>
          <div className="mx-auto mt-28 max-w-3xl space-y-14 text-center md:mt-36 md:space-y-20">
            <p className="font-display text-2xl leading-[1.55] text-mocha md:text-3xl">
              A home for the photographs that{" "}
              <span className="italic text-plum">never made it into an album</span> —
              the ones still asleep in a camera roll, waiting to mean something again.
            </p>

            <p className="font-display text-2xl leading-[1.55] text-mocha md:text-3xl">
              A photograph remembers <span className="italic">what happened.</span>
              <br />
              Words remember <span className="italic text-plum">what it felt like.</span>
              <br />
              NOERA is where the two meet.
            </p>

            <p className="font-display text-2xl leading-[1.55] text-mocha md:text-3xl">
              One day, your children — or your future self —
              <br />
              may want to know who you were{" "}
              <span className="italic text-plum">on an ordinary Sunday.</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-20 text-center md:mt-28">
            <a href={STRIPE_URL} target="_blank" rel="noreferrer" className="btn-plum">
              Shop the Journal
            </a>
            <p className="mt-6 font-display italic text-mocha/55" style={{ fontSize: "0.95rem" }}>
              Begin the page someone will find one day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Storytelling() {
  return (
    <section id="story" className="relative overflow-hidden bg-mocha py-28 text-cream md:py-44">
      <img
        src={storyImg}
        alt="Rainy window with vintage train ticket and old photograph on a dark wooden sill"
        width={1600}
        height={1000}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mocha/80 via-mocha/70 to-mocha" />
      <Reveal>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow mb-10 text-peach/80">
            <span className="rule mr-4 text-peach/60" />
            Chapter II
          </p>
          <p className="font-display text-3xl leading-[1.35] text-cream md:text-5xl">
            A rainy afternoon.
            <span className="block italic text-peach">A train ticket.</span>
            A photograph.
            <span className="block italic text-peach">A thought you never</span>
            wanted to forget.
          </p>
          <p className="mt-12 font-serif text-lg leading-relaxed text-cream/75 md:text-xl">
            NOERA is built for the in-between moments — the ones that don't make it to
            the feed, but stay with you for years.
          </p>
          <div className="mt-12">
            <a href={STRIPE_URL} target="_blank" rel="noreferrer" className="btn-plum">Shop the Journal</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function InspirationArchive() {
  const cards = [
    {
      img: archive1,
      eyebrow: "Reflection no. 04",
      title: "On the things we almost lost.",
      body: "A short reflection on attention, slowness, and the photographs we never printed.",
    },
    {
      img: archive2,
      eyebrow: "Prompt no. 11",
      title: "Write the afternoon you almost forgot.",
      body: "A gentle prompt for your next journal page — a memory worth returning to.",
    },
  ];
  return (
    <section id="archive" className="bg-secondary py-24 md:py-40">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <Reveal>
          <div className="mb-20 flex flex-col items-start gap-8 md:mb-28 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow mb-5 text-plum">
                <span className="rule mr-4" />
                Inspiration Archive
              </p>
              <h2 className="font-display text-4xl leading-[1.1] text-mocha md:text-6xl">
                Quiet notes <span className="italic">from the journal.</span>
              </h2>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              Read on Instagram →
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 180}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="pt-8">
                  <p className="eyebrow mb-4 text-plum">{c.eyebrow}</p>
                  <h3 className="font-display text-2xl italic leading-snug text-mocha md:text-3xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 font-serif text-base leading-relaxed text-mocha/75 md:text-lg">
                    {c.body}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-16 text-center md:mt-20">
            <a href={STRIPE_URL} target="_blank" rel="noreferrer" className="btn-plum">Shop the Journal</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const BEHOLD_FEED_ID = "SAyLMD04qEOMgac0lE8p";

type BeholdPost = {
  id: string;
  permalink: string;
  mediaType: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  caption?: string;
  timestamp?: string;
  sizes?: {
    medium?: { mediaUrl: string };
    large?: { mediaUrl: string };
    full?: { mediaUrl: string };
  };
};

const fallbackReels = [
  { src: reel1, alt: "Stack of vintage letters tied with twine beside dried lavender" },
  { src: reel2, alt: "Hands writing in an open journal in warm window light" },
  { src: reel3, alt: "Old family photograph against a ceramic vase with dried flowers" },
];

function formatDate(ts?: string) {
  if (!ts) return "";
  try {
    return new Date(ts).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function FromInstagram() {
  const [posts, setPosts] = useState<BeholdPost[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        if (cancelled) return;
        const list: BeholdPost[] = Array.isArray(data) ? data : data.posts ?? [];
        setPosts(list.slice(0, 3));
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const items =
    posts && posts.length > 0
      ? posts.map((p) => {
          const img =
            p.sizes?.large?.mediaUrl ??
            p.sizes?.medium?.mediaUrl ??
            (p.mediaType === "VIDEO" ? p.thumbnailUrl ?? p.mediaUrl : p.mediaUrl);
          const caption = (p.caption ?? "").split("\n")[0].slice(0, 140);
          const href =
            p.permalink && /^https?:\/\//.test(p.permalink)
              ? p.permalink
              : `https://www.instagram.com/p/${p.id}/`;
          return {
            key: p.id,
            href,
            img,
            alt: caption || "Instagram post from @noera_beforeitfades",
            caption,
            date: formatDate(p.timestamp),
          };
        })
      : fallbackReels.map((r, i) => ({
          key: `fb-${i}`,
          href: INSTAGRAM_URL,
          img: r.src,
          alt: r.alt,
          caption: "",
          date: "",
        }));


  return (
    <section className="bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div className="mb-20 max-w-2xl text-center md:mx-auto md:mb-28">
            <p className="eyebrow mb-5 text-plum">
              <span className="rule mr-4" />
              From Instagram
            </p>
            <h2 className="font-display text-4xl leading-[1.1] text-mocha md:text-6xl">
              The slow life, <span className="italic">in passing.</span>
            </h2>
            <p className="mt-6 font-serif text-base italic leading-relaxed text-mocha/60 md:text-lg">
              A quiet, living archive — the latest from{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-plum/40 underline-offset-4 hover:text-plum"
              >
                @noera_beforeitfades
              </a>
              .
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          {items.map((it, i) => (
            <Reveal key={it.key} delay={i * 150}>
              <a
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
                aria-label={it.alt}
              >
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={it.img}
                    alt={it.alt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 px-1">
                  {it.date && (
                    <p className="eyebrow text-mocha/50">{it.date}</p>
                  )}
                  {it.caption && (
                    <p className="mt-3 font-serif text-sm italic leading-relaxed text-mocha/75 md:text-base">
                      {it.caption}
                    </p>
                  )}
                  <span className="mt-4 inline-block font-serif text-xs uppercase tracking-[0.3em] text-plum/70 transition-opacity group-hover:opacity-100 md:opacity-60">
                    Read on Instagram →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-6 md:mt-28">
            <a href={STRIPE_URL} target="_blank" rel="noreferrer" className="btn-plum">
              Shop the Journal
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              Follow on Instagram →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || name.length > 100) return setStatus("error");
    if (!email || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setStatus("error");
    if (!message || message.length > 2000) return setStatus("error");

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-background py-24 md:py-40">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:gap-24 md:px-12">
        <Reveal>
          <div className="max-w-md">
            <p className="eyebrow mb-5 text-plum">
              <span className="rule mr-4" />
              Correspondence
            </p>
            <h2 className="font-display text-4xl leading-[1.1] text-mocha md:text-5xl">
              Write to us <span className="italic">— we read every letter.</span>
            </h2>
            <p className="mt-6 font-serif text-lg leading-relaxed text-mocha/75">
              Questions, collaborations, or a memory you'd like to share. NOERA is a small studio;
              replies arrive slowly, but thoughtfully.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <form onSubmit={onSubmit} className="space-y-8">
            <Field label="Name" name="name" type="text" required maxLength={100} />
            <Field label="Email" name="email" type="email" required maxLength={255} />
            <Field label="Message" name="message" textarea required maxLength={2000} />
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send Letter"}
              </button>
              {status === "sent" && (
                <span className="font-serif italic text-plum">Thank you — your letter is on its way.</span>
              )}
              {status === "error" && (
                <span className="font-serif italic text-coral">Something went wrong. Please try again.</span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  maxLength?: number;
}) {
  const common =
    "w-full bg-transparent border-0 border-b border-mocha/30 py-3 font-serif text-lg text-mocha placeholder:text-mocha/40 focus:border-plum focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="eyebrow mb-3 block text-mocha/70">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} maxLength={maxLength} rows={4} className={common} />
      ) : (
        <input name={name} type={type} required={required} maxLength={maxLength} className={common} />
      )}
    </label>
  );
}

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={finalCta}
        alt="An open antique journal lit by candlelight on linen and wine plum velvet"
        width={1792}
        height={1000}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mocha/70 via-mocha/60 to-mocha/85" />
      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center text-cream md:py-56">
        <Reveal>
          <p className="eyebrow mb-10 text-peach/80">
            <span className="rule mr-4 text-peach/60" />
            Before it fades
          </p>
          <h2 className="font-display text-4xl leading-[1.1] md:text-7xl">
            One day these pages
            <span className="block italic text-peach">will tell your story.</span>
          </h2>
          <div className="mt-14">
            <a href={STRIPE_URL} target="_blank" rel="noreferrer" className="btn-primary bg-cream! text-mocha! border-cream!">
              Shop the Journal
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-16 md:py-24">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 px-6 text-center md:px-12">
        <Logo />
        <p className="font-display text-xl italic text-plum">before it fades</p>
        <div className="flex items-center gap-10 text-[0.7rem] uppercase tracking-[0.3em] text-mocha/70">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-plum">Instagram</a>
          <a href="#contact" className="hover:text-plum">Contact</a>
        </div>
        <p className="pt-6 text-[0.65rem] uppercase tracking-[0.32em] text-mocha/50">
          © {new Date().getFullYear()} NOERA — All moments reserved.
        </p>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onScroll() {
      // Show once the user has scrolled past most of the hero (one viewport).
      setVisible(window.scrollY > window.innerHeight * 0.85);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={STRIPE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Shop the Journal"
      className="btn-plum fixed bottom-6 right-6 z-50 shadow-[0_18px_40px_-18px_rgba(71,45,48,0.55)] md:bottom-10 md:right-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 400ms ease, transform 400ms ease",
      }}
    >
      Shop the Journal
    </a>
  );
}

