# Temporary password gate for the live site

Goal: visitors to the public site must type a password before seeing NOERA. The Lovable Preview stays fully open while you keep working.

## How Preview stays unlocked

The gate checks the hostname at runtime and only activates on your public hosts:

```text
noerabeforeitfades.com / www.noerabeforeitfades.com  -> locked
*.github.io                                          -> locked
forever-heirloom-pages.lovable.app (published)       -> locked
*-preview--*.lovable.app (Lovable Preview)           -> open
localhost                                            -> open
```

So nothing changes for you inside Lovable — no password, no extra click.

## Important limitation (because the custom domain is included)

Your custom domain is served as a static site from GitHub Pages. There is no server there, so the password can only be checked in the browser. That means:

- It stops casual visitors, search-engine indexing of content, and people you share the link with — good enough for a "coming soon" curtain.
- It is not real security. Someone technical could read the page source and find the password.
- If you need a password that cannot be bypassed, the site must be served from the Lovable published URL instead of GitHub Pages, and I can implement a proper server-side gate there.

Proceeding with the browser-side curtain, since you asked for the custom domain to be covered.

## What gets built

1. A full-screen lock overlay in the NOERA visual language: deep mocha background, Cormorant Garamond wordmark, "before it fades" tagline, a single password field and an "Enter" button, with a quiet error line on a wrong password.
2. The landing page content is not rendered until unlocked, so nothing leaks visually and the page cannot be scrolled behind the overlay.
3. Unlocking is remembered in `sessionStorage`, so a visitor is not re-prompted on every navigation. Closing the browser re-locks.
4. `public/robots.txt` set to disallow crawling while the site is gated, so the locked page is not indexed.
5. Removing the gate later is a one-line switch — I can turn it off whenever you say.

## Technical notes

- New component `src/components/SiteGate.tsx` plus a small `src/lib/site-gate.ts` holding the host allowlist, the password constant, and the `sessionStorage` key.
- `SiteGate` wraps `<Outlet />` in `src/routes/__root.tsx`. The host/session check runs in `useEffect` (not at module scope or render) so SSR and hydration stay consistent; until the check resolves, a plain mocha screen renders — no flash of the real page.
- No secrets tooling is used: a static GitHub Pages build has no server to read a secret from, so the password lives in the client bundle by necessity. This is the limitation described above.

## Still needed from you

The password you want visitors to type.
