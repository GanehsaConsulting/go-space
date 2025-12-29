import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeaderSection } from "./common/HeaderSection";

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
    question: "Mau sewa VO, namun bisnis belum memiliki legalitas. Apakah bisa sekaligus urus legalitas?",
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
    question: "Saya punya sisa kuota jam meeting, tapi masa sewa berakhir, apakah tetap bisa digunakan?",
    answer:
      "Jika masa sewa berakhir, sisa kuota jam meeting tidak dapat digunakan lagi. Pastikan untuk memperbarui sewa Anda untuk terus menikmati layanan kami.",
  },
];

export const FAQ = () => {
  return (
    <section className=" bg-neutral-200 margin">
      <HeaderSection
        title="Frequently Asked Questions"
        desc="Punya pertanyaan? Berikut pertanyaan yang sering ditanyakan klien seputar Go Space"
      />

      <div className="flex items-start gap-4">
        <div className="flex-1 space-y-4" >
          {faqData1.map((faq) => (
            <Accordion
              key={faq.id}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value={faq.id}>
                <AccordionTrigger className="bg-white px-5 rounded-4xl text-left font-semibold text-lg hover:no-underline py-6 hover:drop-shadow-xl hover:bg-purple-100">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white text-gray-600 px-5 py-4 rounded-4xl mt-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="flex-1 space-y-4" >
          {faqData2.map((faq) => (
            <Accordion
              key={faq.id}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value={faq.id}>
                <AccordionTrigger className="bg-white px-5 rounded-4xl text-left font-semibold text-lg hover:no-underline py-6 hover:drop-shadow-xl hover:bg-purple-100">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white text-gray-600 px-5 py-4 rounded-4xl mt-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};
