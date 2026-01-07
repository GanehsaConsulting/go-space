"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { cn } from "@/lib/utils";

function Accordion(props) {
  return <AccordionPrimitive.Root {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      className={cn("overflow-hidden transition-shadow", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn(
          `
          group w-full flex items-center justify-between gap-4
          px-5 py-5 text-left font-medium
          text-base
          rounded-3xl
          transition-all
          hover:bg-purple-100 bg-white dark:bg-neutral-900
          `,
          className
        )}
        {...props}
      >
        <span className="max-w-[15rem] sm:max-w-sm">{children}</span>

        {/* ICON */}
        <span
          className="
    flex h-7 w-7 shrink-0 aspect-square
    items-center justify-center
    rounded-full
    bg-neutral-200 text-neutral-900
    dark:bg-neutral-900 dark:text-white
  "
        >
          <FaPlus className="group-data-[state=open]:hidden text-[12px]" />
          <FaMinus className="hidden group-data-[state=open]:block text-[12px]" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className="
        data-[state=open]:animate-accordion-down
        data-[state=closed]:animate-accordion-up
        overflow-hidden bg-white dark:bg-neutral-900 rounded-3xl mt-3
      "
      {...props}
    >
      <div
        className={cn("p-5 text-sm text-gray-600 dark:text-gray-50", className)}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
