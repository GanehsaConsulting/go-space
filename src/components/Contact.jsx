"use client";

import { GoArrowUpRight } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaCheck, FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { ArrowButton } from "./common/ArrowButton";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSuccess("Message sent successfully! ✓");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submit error:", err);
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return ( 
    <section id="contact" className="text-neutral-900 margin bg-neutral-50 dark:text-white dark:bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 items-start">
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Reach out <GoArrowUpRight className="inline-block mb-2" />
          </h2>

          <p className="mt-6 text-neutral-600 dark:text-gray-50 max-w-md leading-relaxed">
            Have a question or need assistance? Reach out to our dedicated
            support team. We&apos;re here to help with any inquiries you may have.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-neutral-900 dark:text-white">
            <li className="flex items-center gap-3">
              <span className="p-2 border border-black/30 bg-neutral-100 dark:bg-neutral-800 shadow rounded-md">
                <FaCheck />
              </span>
              Personalized assistance
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 border border-black/30 bg-neutral-100 dark:bg-neutral-800 shadow rounded-md">
                <FaCheck />
              </span>
              Timely response
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 border border-black/30 bg-neutral-100 dark:bg-neutral-800 shadow rounded-md">
                <FaCheck />
              </span>
              Comprehensive support
            </li>
          </ul>

          {/* Social */}
          <div className="flex items-center gap-3 mt-10">
            <Link
              href={"https://www.instagram.com/gospace.official/"}
              target="_blank"
              className="text-xl p-2 border border-black/30 bg-neutral-100 dark:bg-neutral-800 shadow rounded-md"
            >
              <FaInstagram />
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Go+Space%21&type=phone_number&app_absent=0"
              }
              target="_blank"
              className="text-xl p-2 border border-black/30 bg-neutral-100 dark:bg-neutral-800 shadow rounded-md"
            >
              <AiOutlineWhatsApp />
            </Link>
            <Link
              href={"mailto:ganeshamultikreatif@gmail.com"}
              target="_blank"
              className="text-xl p-2 border border-black/30 bg-neutral-100 dark:bg-neutral-800 shadow rounded-md"
            >
              <MdOutlineEmail />
            </Link>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 h-fit w-full bg-neutral-50 dark:bg-neutral-800 border border-black/20 rounded-3xl p-6 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="rounded-2xl bg-neutral-300 dark:bg-neutral-900 border border-neutral-200 px-4 py-3 
                         text-sm text-neutral-900 dark:text-white placeholder:text-neutral-700 dark:placeholder:text-neutral-400 
                         focus:outline-none focus:border-neutral-400 dark:border-neutral-700"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Email"
              className="rounded-2xl bg-neutral-300 dark:bg-neutral-900 border border-neutral-200 px-4 py-3 
                         text-sm text-neutral-900 dark:text-white placeholder:text-neutral-700 dark:placeholder:text-neutral-400 
                         focus:outline-none focus:border-neutral-400 dark:border-neutral-700"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Message"
            rows={6}
            className="mt-4 w-full rounded-2xl bg-neutral-300 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700
                       px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-700 dark:placeholder:text-neutral-400 
                       focus:outline-none focus:border-neutral-400 resize-none"
          />

              <ArrowButton
                label={loading ? "Sending..." : "Submit"}
                disabled={loading}
                type="submit"
                variant="dark"
                className="mt-6 w-full !important"
              />

          {success && (
            <p className="mt-4 text-sm text-green-600 font-medium">{success}</p>
          )}
          {error && (
            <p className="mt-4 text-xs text-red-600">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
};