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

const INSTAGRAM_URL = "https://instagram.com/noera";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdavpbjd";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-baseline gap-[0.18em] font-display text-[1.75rem] leading-none tracking-[0.42em] text-mocha ${className}`}
      aria-label="NOERA — home"
    >
      <span>N</span>
      <span>O</span>
      <span>E</span>
      <span>R</span>
      <span>A</span>
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
          <a href="#archive" className="transition-opacity hover:opacity-70">Archive</a>
          <a href="#contact" className="transition-opacity hover:opacity-70">Contact</a>
        </nav>
        <a
          href="#journal"
          className="hidden border border-cream/60 px-5 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-cream transition hover:bg-cream hover:text-mocha md:inline-block"
        >
          Shop
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
            <a href="#journal" className="btn-primary bg-cream! text-mocha! border-cream!">
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
              <a href="#contact" className="btn-ghost">Discover the Journal →</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GlimpseInside() {
  const items = [
    { src: inside1, alt: "Open journal page with vintage polaroid photographs taped down and handwritten notes", caption: "Photographs, kept." },
    { src: inside2, alt: "Close up of fountain pen on handwritten cursive journal page", caption: "Thoughts, in ink." },
    { src: inside3, alt: "Vintage train ticket, postcard and pressed leaves on journal paper", caption: "Keepsakes, archived." },
  ];
  return (
    <section id="inside" className="bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div className="mb-20 max-w-2xl md:mb-28">
            <p className="eyebrow mb-5 text-plum">
              <span className="rule mr-4" />
              A glimpse inside
            </p>
            <h2 className="font-display text-4xl leading-[1.1] text-mocha md:text-6xl">
              Pages that remember <span className="italic">the small things.</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {items.map((it, i) => (
            <Reveal key={it.caption} delay={i * 180}>
              <figure className="space-y-5">
                <div className="overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.alt}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="font-display text-xl italic text-plum">— {it.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
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
      </div>
    </section>
  );
}

function FromInstagram() {
  const reels = [
    { src: reel1, alt: "Stack of vintage letters tied with twine beside dried lavender" },
    { src: reel2, alt: "Hands writing in an open journal in warm window light" },
    { src: reel3, alt: "Old family photograph against a ceramic vase with dried flowers" },
  ];
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
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {reels.map((r, i) => (
            <Reveal key={r.alt} delay={i * 150}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden"
              >
                <img
                  src={r.src}
                  alt={r.alt}
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-16 text-center md:mt-20">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Follow Along
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
            <a href="#journal" className="btn-primary bg-cream! text-mocha! border-cream!">
              Start Your Journal
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
