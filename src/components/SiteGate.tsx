import { useEffect, useState, type ReactNode } from "react";

import {
  GATE_ENABLED,
  GATE_STORAGE_KEY,
  SITE_PASSWORD,
  isGatedHost,
} from "../lib/site-gate";

type GateState = "checking" | "locked" | "open";

export function SiteGate({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GateState>(GATE_ENABLED ? "checking" : "open");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!GATE_ENABLED) return;
    if (!isGatedHost(window.location.hostname)) {
      setState("open");
      return;
    }
    let unlocked = false;
    try {
      unlocked = window.sessionStorage.getItem(GATE_STORAGE_KEY) === "1";
    } catch {
      unlocked = false;
    }
    setState(unlocked ? "open" : "locked");
  }, []);

  if (state === "open") return <>{children}</>;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (value.trim() === SITE_PASSWORD) {
      try {
        window.sessionStorage.setItem(GATE_STORAGE_KEY, "1");
      } catch {
        /* private browsing — unlock for this render only */
      }
      setState("open");
      return;
    }
    setError(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-mocha px-6">
      {state === "locked" ? (
        <div className="w-full max-w-sm text-center">
          <h1 className="font-display text-5xl font-light tracking-[0.2em] text-cream sm:text-6xl">
            NOERA
          </h1>
          <p className="mt-3 font-serif text-sm italic leading-relaxed text-cream/60">
            before it fades
          </p>

          <form onSubmit={handleSubmit} className="mt-12">
            <label htmlFor="site-gate-password" className="sr-only">
              Password
            </label>
            <input
              id="site-gate-password"
              type="password"
              autoComplete="current-password"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              className="w-full border-b border-cream/25 bg-transparent px-1 pb-3 text-center font-serif text-lg text-cream placeholder:text-cream/35 focus:border-cream/60 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-8 w-full border border-cream/30 px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-cream transition-colors hover:bg-cream hover:text-mocha"
            >
              Enter
            </button>
            <p
              aria-live="polite"
              className="mt-5 h-5 font-serif text-sm italic text-peach/80"
            >
              {error ? "That isn't the word. Try again." : ""}
            </p>
          </form>
        </div>
      ) : null}
    </div>
  );
}
