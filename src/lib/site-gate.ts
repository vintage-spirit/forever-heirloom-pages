// Temporary "coming soon" curtain for the public site.
//
// NOTE: the public site is served as a static build (GitHub Pages / custom
// domain), so there is no server to verify the password against — the check
// happens in the browser. This stops casual visitors and crawlers, but it is
// not real security. Flip GATE_ENABLED to false to remove the curtain.

export const GATE_ENABLED = true;

/** Password visitors must type to enter the public site. */
export const SITE_PASSWORD = "beforeitfades";

export const GATE_STORAGE_KEY = "noera_gate_unlocked";

/**
 * Hosts that are NEVER gated: Lovable Preview and local development.
 * Everything else (custom domain, github.io, the published lovable.app URL)
 * is gated while GATE_ENABLED is true.
 */
export function isGatedHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".local")) {
    return false;
  }
  // Lovable Preview hosts look like: id-preview--<uuid>.lovable.app
  if (host.includes("-preview--") && host.endsWith(".lovable.app")) {
    return false;
  }
  return true;
}
