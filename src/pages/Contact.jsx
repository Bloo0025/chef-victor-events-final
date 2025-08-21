// src/pages/Contact.jsx
import { useEffect } from "react";

export default function Contact() {
  // Optional: set the browser tab title for this page
  useEffect(() => {
    document.title = "Contact Us | Chef Victor Events";
  }, []);

  return (
    <section className="container-xl py-12 space-y-10">
      <header className="text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-6xl md:text-7xl font-display text-[#263B50]">
          Contact Us
        </h2>
        <p className="opacity-80 text-lg md:text-xl">
          We’d love to hear from you. Please fill out the form below and we’ll be in touch.
        </p>
      </header>

      <form
        action="https://formspree.io/f/yourformid" // ← replace with your Formspree endpoint
        method="POST"
        className="max-w-2xl mx-auto space-y-6"
      >
        {/* Email subject shown in your inbox */}
        <input type="hidden" name="_subject" value="New Inquiry — Chef Victor Events" />
        {/* Optional redirect after success (uncomment and set your deployed URL) */}
        {/*
        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
        */}

        {/* Full Name (required) */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        {/* Email (required) */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        {/* What is your event */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="eventType">
            What is your event?
          </label>
          <input
            type="text"
            id="eventType"
            name="eventType"
            placeholder="Wedding, Corporate, Quinceañera, etc."
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        {/* Date of event (required) */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="eventDate">
            Date of Event
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        {/* Location of event */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="eventLocation">
            Where is the location of the event?
          </label>
          <input
            type="text"
            id="eventLocation"
            name="eventLocation"
            placeholder="Venue name & city"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        {/* Number of guests */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="guests">
            How many guests?
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            inputMode="numeric"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        {/* Additional comments */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="comments">
            Additional Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            placeholder="Tell us anything else we should know about your event."
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-navy text-cream rounded-xl shadow hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}