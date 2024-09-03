"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const PhoneCallButton: React.FC = () => {
  const phoneNumbers = [
    process.env.NEXT_PUBLIC_PHONE_NUMBER_1 || "",
    process.env.NEXT_PUBLIC_PHONE_NUMBER_2 || "",
  ];

  const getRandomPhoneNumber = () => {
    const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
    return phoneNumbers[randomIndex];
  };

  const handleButtonClick = () => {
    const phoneNumber = getRandomPhoneNumber();
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      console.error("Phone number is not defined");
    }
  };

  return (
    <Button
      size="lg"
      className="gap-4"
      variant="outline"
      onClick={handleButtonClick}
    >
      Prendre rendez-vous
      <PhoneCall className="w-4 h-4" />
    </Button>
  );
};

export default PhoneCallButton;
