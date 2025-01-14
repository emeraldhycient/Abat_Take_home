import { Button } from "@nextui-org/react";
import React from "react";

type BannerActionsProps = {
  onAccept: () => void;
  onDecline: () => void;
};

export function BannerActions({ onAccept, onDecline }: BannerActionsProps) {
  return (
    <div className="flex flex-row justify-end gap-2">
      <Button
        aria-label="Accept cookies"
        className="
          rounded bg-blue-600 px-4 py-2 text-white
          hover:bg-blue-700 focus:outline-none focus:ring
        "
        onPress={onAccept}
      >
        Accept
      </Button>
      <Button
        aria-label="Decline cookies"
        className="
          rounded border border-gray-500 px-4 py-2 text-gray-200
          hover:bg-gray-700 focus:outline-none focus:ring
        "
        variant="bordered"
        onPress={onDecline}
      >
        Decline
      </Button>
    </div>
  );
}
