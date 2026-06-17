// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Build for GitHub Pages when GITHUB_PAGES=1 (set in the deploy workflow).
// In that mode we disable nitro/SSR and emit a static SPA shell so GitHub
// Pages can serve plain index.html + client assets under the repo subpath.
const isGithubPages = process.env.GITHUB_PAGES === "1";

export default defineConfig({
  vite: {
    base: "/",
  },
  nitro: isGithubPages ? false : undefined,
  tanstackStart: isGithubPages
    ? {
        spa: { enabled: true },
        server: { entry: "server" },
      }
    : {
        // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
        // nitro/vite builds from this
        server: { entry: "server" },
      },
});
