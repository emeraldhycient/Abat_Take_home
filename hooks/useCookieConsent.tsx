"use client";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

/**
 * Custom hook to manage whether the user has given consent.
 * It checks a "cookie-consent" cookie. If it's not set or "undefined",
 * the banner is shown.
 */
export function useCookieConsent() {
  const [cookies, setCookie] = useCookies(["cookie-consent"]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // If there's no 'cookie-consent' cookie, show the banner
    if (!cookies["cookie-consent"]) {
      setVisible(true);
    }
  }, [cookies]);

  const acceptConsent = () => {
    // Store "true" in the 'cookie-consent' cookie
    setCookie("cookie-consent", "true", { path: "/" });
    setVisible(false);
  };

  const declineConsent = () => {
    // Or removeCookie('cookie-consent') if you prefer
    setCookie("cookie-consent", "false", { path: "/" });
    setVisible(false);
  };

  return { visible, acceptConsent, declineConsent };
}
