"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

export default function BookingForm() {
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get("interest");
    const item = params.get("item");
    if (interest === "product") {
      setService("Product enquiry");
    } else if (interest === "style") {
      setService(item?.toLowerCase().includes("wedding") ? "Wedding Braids" : "Custom styling");
    } else if (interest === "supply") {
      setService("Product enquiry");
    } else if (interest === "service") {
      const requestedService = params.get("service");
      const validServices = [
        "Braids & Protective Styles",
        "Wig Installation",
        "Custom Styling",
        "Wedding Braids",
        "Bridal & Event Hair",
        "Hair Consultation",
      ];
      setService(
        requestedService && validServices.includes(requestedService)
          ? requestedService
          : ""
      );
      if (requestedService) setNotes(`I'm interested in: ${requestedService}`);
    } else {
      return;
    }

    if (item) {
      setNotes(
        interest === "product"
          ? `I'm asking about: ${item}`
          : `I'm interested in this style: ${item}`
      );
    } else if (interest === "supply") {
      setNotes("I'm asking about products used for braiding.");
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!whatsappNumber) return;

    const formData = new FormData(event.currentTarget);
    const message = [
      formData.get("service") === "Product enquiry"
        ? "Hello Aurelia Hair Studio, I have a product enquiry."
        : "Hello Aurelia Hair Studio, I would like to request an appointment.",
      `Name: ${formData.get("name")}`,
      `Contact: ${formData.get("contact")}`,
      `Service: ${formData.get("service")}`,
      `Preferred date: ${formData.get("date") || "Flexible"}`,
      `Notes: ${formData.get("notes") || "None"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Your name</label>
      <input id="name" name="name" autoComplete="name" required />

      <label htmlFor="contact">Email or phone</label>
      <input id="contact" name="contact" autoComplete="email" required />

      <label htmlFor="service">What are you interested in?</label>
      <select
        id="service"
        name="service"
        value={service}
        onChange={(event) => setService(event.target.value)}
        required
      >
        <option value="" disabled>Select a service or enquiry</option>
        <option>Braids & Protective Styles</option>
        <option>Wig Installation</option>
        <option>Custom Styling</option>
        <option>Wedding Braids</option>
        <option>Bridal & Event Hair</option>
        <option>Hair Consultation</option>
        <option>Product enquiry</option>
      </select>

      <label htmlFor="date">Preferred date</label>
      <input id="date" name="date" type="date" />

      <label htmlFor="notes">Anything else?</label>
      <textarea
        id="notes"
        name="notes"
        rows={4}
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
      />

      {!whatsappNumber && (
        <p className="booking-note" role="status">
          Enquiries will be enabled when the studio adds its verified WhatsApp number.
        </p>
      )}
      <button className="button button-dark" type="submit" disabled={!whatsappNumber}>
        {service === "Product enquiry" ? "SEND PRODUCT ENQUIRY" : "SEND APPOINTMENT REQUEST"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}