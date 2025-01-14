import React from "react";

import { BannerContainer } from "../components/banner-container";
import { BannerText } from "../components/banner-text";
import { BannerActions } from "../components/banner-actions";

import { useCookieConsent } from "@/hooks/useCookieConsent";

export default function CookieAlertTemplate() {
  const { visible, acceptConsent, declineConsent } = useCookieConsent();

  if (!visible) {
    return null; // Banner is hidden once consent is set
  }

  return (
    <BannerContainer>
      <BannerText />
      <BannerActions onAccept={acceptConsent} onDecline={declineConsent} />
    </BannerContainer>
  );
}
