type EventParams = Record<string, string>;

/**
 * Sends a Google Analytics event when gtag is loaded (production only, see _document.tsx).
 * Safe to call during development or before gtag loads: it does nothing.
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

/** Events used across the site, kept in one place so reports stay consistent. */
export const events = {
  workana: (location: string) => trackEvent("click_workana", { location }),
  email: (location: string) => trackEvent("click_email", { location }),
  linkedin: (location: string) => trackEvent("click_linkedin", { location }),
  contactForm: (projectType: string) => trackEvent("contact_form_submit", { project_type: projectType }),
};
