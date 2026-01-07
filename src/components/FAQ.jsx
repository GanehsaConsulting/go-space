// ini juga adjust responsiveness dan fix ketika accordion expand + nya jadi minnus

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeaderSection } from "./common/HeaderSection";
import { bgNeutralGradient, bgNeutralGradientReverse } from "@/lib/reuseClass";

const faqData1 = [
  {
    id: "item-1",
    question: "Apa itu Go Space?",
    answer:
      "Go Space adalah layanan kantor virtual yang membantu bisnis tampil profesional dengan alamat strategis untuk legalitas, branding, dan kebutuhan operasional.",
  },
  {
    id: "item-2",
    question: "Apakah tersedia ruang meeting?",
    answer:
      "Tersedia! Kamu bisa booking ruang meeting kapan saja sesuai kebutuhan, lengkap dengan fasilitas pendukung.",
  },
  {
    id: "item-3",
    question:
      "VO tapi bisnis belum memiliki legalitas?",
    answer:
      "Go Space by Ganesha Consulting menyediakan layanan pendirian legalitas bisnis seperti CV, PT, dan lainnya bersamaan dengan penyewaan Virtual Office.",
  },
];

const faqData2 = [
  {
    id: "item-1",
    question: "Bagaimana cara booking?",
    answer:
      "Booking dapat dilakukan melalui website kami dengan memilih paket yang sesuai, mengisi formulir pendaftaran, dan melakukan pembayaran secara online.",
  },
  {
    id: "item-2",
    question: "Apa bisa sewa lebih dari 1 tahun?",
    answer:
      "Tentu saja! Kami menawarkan paket sewa tahunan, termasuk opsi sewa lebih dari 1 tahun dengan harga khusus.",
  },
  {
    id: "item-3",
    question:
      "Kuota jam meeting sisa, tapi masa sewa berakhir?",
    answer:
      "Jika masa sewa berakhir, sisa kuota jam meeting tidak dapat digunakan lagi. Pastikan untuk memperbarui sewa Anda untuk terus menikmati layanan kami.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="bg-neutral-200/60 dark:bg-neutral-800 margin">
      <HeaderSection
        title="Frequently Asked Questions"
        desc="Punya pertanyaan? Berikut pertanyaan yang sering ditanyakan klien seputar Go Space"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LEFT */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData1.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className={`transition-colors duration-500 text-white dark:text-neutral-900 ${bgNeutralGradientReverse}`} >{faq.question}</AccordionTrigger>
              <AccordionContent className={`transition-colors duration-500 text-white dark:text-neutral-900 ${bgNeutralGradientReverse}`} >{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* RIGHT */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData2.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className={` transition-colors duration-500 text-white dark:text-neutral-900 ${bgNeutralGradientReverse}`} > {faq.question}</AccordionTrigger>
              <AccordionContent className={`transition-colors duration-500 text-white dark:text-neutral-900 ${bgNeutralGradientReverse}`} >{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
