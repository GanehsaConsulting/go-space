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
    question: "How to manage your Account.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...",
  },
  {
    id: "item-2",
    question: "How to get a refund if applicable.",
    answer:
      "Our refund policy allows you to request a full refund within 30 days of purchase. Simply contact our support team with your order details and reason for the refund request.",
  },
  {
    id: "item-3",
    question: "How to manage your Transit app.",
    answer:
      "You can manage your Transit app settings by navigating to the settings menu in the app. From there, you can customize notifications, payment methods, and travel preferences.",
  },
];

const faqData2 = [
  {
    id: "item-1",
    question: "How to manage your Account.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...",
  },
  {
    id: "item-2",
    question: "How to get a refund if applicable.",
    answer:
      "Our refund policy allows you to request a full refund within 30 days of purchase. Simply contact our support team with your order details and reason for the refund request.",
  },
  {
    id: "item-3",
    question: "How to manage your Transit app.",
    answer:
      "You can manage your Transit app settings by navigating to the settings menu in the app. From there, you can customize notifications, payment methods, and travel preferences.",
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
