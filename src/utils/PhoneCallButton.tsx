import React from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const PhoneCallButton: React.FC = () => {
  const phoneNumbers = [
    process.env.REACT_APP_PHONE_NUMBER_1 || "",
    process.env.REACT_APP_PHONE_NUMBER_2 || "",
  ];

  useEffect(() => {
    console.log("Phone numbers:", phoneNumbers);
  }, [phoneNumbers]);

  const getRandomPhoneNumber = () => {
    const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
    return phoneNumbers[randomIndex];
  };

  const handleButtonClick = () => {
    const phoneNumber = getRandomPhoneNumber();
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
      console.log(`Calling ${phoneNumber}`);
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
