import React from "react";

export function BannerText() {
  return (
    <div className="text-white">
      <h3 className="mb-1 text-lg font-bold">We use cookies</h3>
      <p className="max-w-xl text-sm leading-relaxed text-gray-300">
        We use cookies to improve your browsing experience. Read more in our{" "}
        <a
          aria-label="Read more about our cookie policy"
          className="text-blue-400 underline"
          href="/cookie-policy"
          rel="noopener noreferrer"
          target="_blank"
        >
          cookie policy
        </a>
        .
      </p>
    </div>
  );
}
