// components/ContactForm.tsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm("SERVICE_ID", "TEMPLATE_ID", form.current, "USER_ID")
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto bg-white rounded shadow">
      <h2 className="mb-4 text-2xl font-semibold">Contactez-nous</h2>
      {success && (
        <p className="mb-4 text-green-500">
          Votre message a été envoyé avec succès!
        </p>
      )}
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nom
          </label>
          <Input type="text" id="name" name="user_name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input type="email" id="email" name="user_email" required />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            Sujet
          </label>
          <Input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <Textarea id="message" name="message" rows={5} required />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Envoi en cours..." : "Envoyer"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
