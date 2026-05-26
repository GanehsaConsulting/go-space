// ini juga adjust responsiveness dan fix ketika accordion expand + nya jadi minnus

import React from "react";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeaderSection } from "./common/HeaderSection";
import { bgNeutralGradient, bgNeutralGradientReverse } from "@/lib/reuseClass";

export const FAQ = () => {
  const t = useTranslations("faq");
  const faqData1 = t.raw("left");
  const faqData2 = t.raw("right");

  return (
    <section id="faq" className="bg-neutral-200/60 dark:bg-neutral-800 margin">
      <HeaderSection
        title={t("title")}
        desc={t("description")}
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
