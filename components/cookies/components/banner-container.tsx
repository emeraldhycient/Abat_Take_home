import React, { ReactNode } from "react";

/**
 * A11y Container for the cookie banner, ensuring good contrast,
 * a fixed position at the bottom, and responsive styling.
 */
export function BannerContainer({ children }: { children: ReactNode }) {
  return (
    <section
      aria-label="Cookie consent banner"
      className="
        fixed bottom-0 left-0 right-0 z-50
        flex flex-col gap-4
        bg-gray-800 p-4
        md:flex-row md:items-center md:justify-between
      "
    >
      {children}
    </section>
  );
}
