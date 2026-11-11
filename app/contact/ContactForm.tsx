"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const interests = [
  { english: "Accent Walls", spanish: "Paredes decorativas" },
  { english: "Floating Shelves", spanish: "Estantes flotantes" },
  { english: "Mud Benches", spanish: "Bancas para recibidor" },
  { english: "Shiplap", spanish: "Revestimiento de madera" },
  { english: "Custom Closets", spanish: "Closets a medida" },
  { english: "Crown Molding", spanish: "Molduras de corona" },
  { english: "Ceiling Beams", spanish: "Vigas de techo" },
  { english: "Barn Doors", spanish: "Puertas corredizas estilo granero" },
  { english: "Fireplace Mantels", spanish: "Repisas para chimenea" },
  { english: "Bookshelves", spanish: "Libreros" },
  { english: "Baseboard Upgrades", spanish: "Instalación de zoclos" },
  { english: "Storage Solutions", spanish: "Soluciones de almacenamiento" },
  { english: "Hardware Installation", spanish: "Instalación de herrajes" },
];

const spanishErrors: Record<string, string> = {
  "Please select at least one service you are interested in.":
    "Seleccione al menos un servicio de su interés.",
  "Request body must be valid JSON.":
    "No se pudo procesar la solicitud. Inténtelo de nuevo.",
  "Request body must be a JSON object.":
    "No se pudo procesar la solicitud. Inténtelo de nuevo.",
  "Please check your details and select at least one service.":
    "Revise sus datos y seleccione al menos un servicio.",
  "The quote form is temporarily unavailable. Please call us instead.":
    "El formulario no está disponible por el momento. Llámenos, por favor.",
  "We couldn't send your request. Please try again or call us.":
    "No pudimos enviar su solicitud. Inténtelo de nuevo o llámenos.",
  "Your request could not be sent.": "No se pudo enviar su solicitud.",
  "Something went wrong. Please try again.":
    "Ocurrió un error. Inténtelo de nuevo.",
};

export default function ContactForm() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitted(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.getAll("interests").length === 0) {
      setErrorMessage("Please select at least one service you are interested in.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          interests: formData.getAll("interests"),
          message: formData.get("message"),
        }),
      });

      const result: { error?: string; success?: boolean } =
        await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your request could not be sent.");
      }

      form.reset();
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    "w-full border border-white/10 bg-white px-3 py-3 text-sm text-[#181818] placeholder:text-neutral-500 focus:border-[#C5A262] focus:outline-none focus:ring-2 focus:ring-[#C5A262]/30";

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <label className="sr-only" htmlFor="contact-name">
          {isSpanish ? "Nombre" : "Name"}
        </label>
        <input
          className={inputClassName}
          id="contact-name"
          name="name"
          type="text"
          placeholder={isSpanish ? "Nombre" : "Name"}
          autoComplete="name"
          maxLength={100}
          required
        />
        <label className="sr-only" htmlFor="contact-email">
          {isSpanish ? "Correo electrónico" : "Email"}
        </label>
        <input
          className={inputClassName}
          id="contact-email"
          name="email"
          type="email"
          placeholder={isSpanish ? "Correo electrónico" : "Email"}
          autoComplete="email"
          maxLength={254}
          required
        />
        <label className="sr-only" htmlFor="contact-phone">
          {isSpanish ? "Teléfono" : "Phone"}
        </label>
        <input
          className={inputClassName}
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder={isSpanish ? "Teléfono" : "Phone"}
          autoComplete="tel"
          maxLength={40}
        />
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-bold text-white">
          {isSpanish ? "Me Interesa" : "I'm Interested In"}{" "}
          <span aria-hidden="true">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-x-6">
          {interests.map((interest) => (
            <label
              key={interest.english}
              className="flex items-start gap-2 text-sm text-white/90"
            >
              <input
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#C5A262]"
                type="checkbox"
                name="interests"
                value={interest.english}
              />
              {isSpanish ? interest.spanish : interest.english}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="sr-only" htmlFor="contact-message">
        {isSpanish ? "Mensaje" : "Message"}
      </label>
      <textarea
        className={`${inputClassName} min-h-36 resize-y`}
        id="contact-message"
        name="message"
        placeholder={isSpanish ? "Mensaje" : "Message"}
        maxLength={5000}
        required
      />

      <div aria-live="polite" className="min-h-5 text-sm">
        {errorMessage && (
          <p className="text-red-300">
            {isSpanish ? spanishErrors[errorMessage] || errorMessage : errorMessage}
          </p>
        )}
        {isSubmitted && (
          <p className="text-emerald-300">
            {isSpanish
              ? "Gracias por comunicarse con nosotros. Recibimos su solicitud de cotización."
              : "Thanks for reaching out. Your quote request has been sent."}
          </p>
        )}
      </div>

      <button
        className="inline-flex min-w-44 items-center justify-center rounded-full bg-[#C5A262] px-8 py-3.5 text-sm font-bold uppercase text-white transition-colors hover:bg-[#b59253] disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? isSpanish
            ? "Enviando..."
            : "Sending..."
          : isSpanish
            ? "Solicitar cotización"
            : "Request Quote"}
      </button>
    </form>
  );
}
