import React from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const PhoneCallButton: React.FC = () => {
  const phoneNumbers = [
    import.meta.env.VITE_PHONE_NUMBER_1 || "",
    import.meta.env.VITE_PHONE_NUMBER_2 || "",
  ];

  useEffect(() => {
    // Vérifiez que les numéros de téléphone sont bien définis
    console.log("VITE_PHONE_NUMBER_1:", import.meta.env.VITE_PHONE_NUMBER_1);
    console.log("VITE_PHONE_NUMBER_2:", import.meta.env.VITE_PHONE_NUMBER_2);
    console.log("Phone numbers:", phoneNumbers);
  }, [phoneNumbers]);

  const getRandomPhoneNumber = () => {
    const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
    return phoneNumbers[randomIndex];
  };

  const handleButtonClick = () => {
    const phoneNumber = getRandomPhoneNumber();
    if (phoneNumber) {
      console.log("Calling phone number:", phoneNumber);
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
