"use client";

import { useState, type FormEvent } from "react";

const interests = [
  "Accent Walls",
  "Floating Shelves",
  "Mud Benches",
  "Shiplap",
  "Custom Closets",
  "Crown Molding",
  "Ceiling Beams",
  "Barn Doors",
  "Fireplace Mantels",
  "Bookshelves",
  "Baseboard Upgrades",
  "Storage Solutions",
  "Hardware Installation",
];

export default function ContactForm() {
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
          Name
        </label>
        <input
          className={inputClassName}
          id="contact-name"
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="name"
          maxLength={100}
          required
        />
        <label className="sr-only" htmlFor="contact-email">
          Email
        </label>
        <input
          className={inputClassName}
          id="contact-email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          maxLength={254}
          required
        />
        <label className="sr-only" htmlFor="contact-phone">
          Phone
        </label>
        <input
          className={inputClassName}
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          autoComplete="tel"
          maxLength={40}
        />
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-bold text-white">
          I&apos;m Interested In <span aria-hidden="true">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-x-6">
          {interests.map((interest) => (
            <label
              key={interest}
              className="flex items-start gap-2 text-sm text-white/90"
            >
              <input
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#C5A262]"
                type="checkbox"
                name="interests"
                value={interest}
              />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="sr-only" htmlFor="contact-message">
        Message
      </label>
      <textarea
        className={`${inputClassName} min-h-36 resize-y`}
        id="contact-message"
        name="message"
        placeholder="Message"
        maxLength={5000}
        required
      />

      <div aria-live="polite" className="min-h-5 text-sm">
        {errorMessage && <p className="text-red-300">{errorMessage}</p>}
        {isSubmitted && (
          <p className="text-emerald-300">
            Thanks for reaching out. Your quote request has been sent.
          </p>
        )}
      </div>

      <button
        className="inline-flex min-w-44 items-center justify-center rounded-full bg-[#C5A262] px-8 py-3.5 text-sm font-bold uppercase text-white transition-colors hover:bg-[#b59253] disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Request Quote"}
      </button>
    </form>
  );
}
