"use client";

import React, { type ReactNode } from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionDemo = () => (
  <Accordion.Root className="" type="single" defaultValue="item-1" collapsible>
    <AccordionItem value="item-1" className="mb-5">
      <AccordionTrigger>
        <div className="flex gap-[22px] py-1 items-center cursor-pointer">
          <div className="flex items-center justify-center bg-gray rounded-[9px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[42px] h-[42px]">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8759 9.175H8.52588V13.625H4.47588V9.175H0.125879V5.35H4.47588V0.875H8.52588V5.35H12.8759V9.175Z"
                fill="#3C3C3C"
              />
            </svg>
          </div>

          <div className="font-bold text-[20px]">What is iFlux?</div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="ps-[62px]">
        iFlux is a bank onchain that provides all the services similar to
        traditional banks but exclusively for cryptocurrencies.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2" className="mb-5">
      <AccordionTrigger>
        <div className="flex gap-[22px] py-1 items-center cursor-pointer">
          <div className="flex items-center justify-center bg-gray rounded-[9px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[42px] h-[42px]">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8759 9.175H8.52588V13.625H4.47588V9.175H0.125879V5.35H4.47588V0.875H8.52588V5.35H12.8759V9.175Z"
                fill="#3C3C3C"
              />
            </svg>
          </div>

          <div className="font-bold text-[20px]">What services does iFlux provide?</div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="ps-[62px]">
        Currently, iFlux offers savings, loan, transfer, and exchange services
        for cryptocurrencies. And we are working on additionl features to
        cryptocurrencies.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3" className="mb-5">
      <AccordionTrigger>
        <div className="flex gap-[22px] py-1 items-center cursor-pointer">
          <div className="flex items-center justify-center bg-gray rounded-[9px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[42px] h-[42px]">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8759 9.175H8.52588V13.625H4.47588V9.175H0.125879V5.35H4.47588V0.875H8.52588V5.35H12.8759V9.175Z"
                fill="#3C3C3C"
              />
            </svg>
          </div>

          <div className="font-bold text-[20px]">Is iFlux safe?</div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="ps-[62px]">
        iFlux is built with state-of-the-art security technologies, ensuring the
        safety and security of your account and assets.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>
        <div className="flex gap-[22px] py-1 items-center cursor-pointer">
          <div className="flex items-center justify-center bg-gray rounded-[9px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[42px] h-[42px]">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8759 9.175H8.52588V13.625H4.47588V9.175H0.125879V5.35H4.47588V0.875H8.52588V5.35H12.8759V9.175Z"
                fill="#3C3C3C"
              />
            </svg>
          </div>

          <div className="font-bold text-[20px]">How do I contact iFlux's customer support?</div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="ps-[62px]">
        <div>Please contact us via email at</div>
        <div><span className="font-bold text-blue">support@iflux.com</span> or fill out the form here.</div>
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

interface AccordionItemProps {
  children: ReactNode;
  value?: string;
  className?: string;
}

const AccordionItem = React.forwardRef<
  HTMLDivElement | null,
  AccordionItemProps
>(({ children, className, value, ...props }, forwardedRef) => (
  <Accordion.Item
    value={value ? value : ""}
    className={classNames("", className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement | null,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        "text-left group flex flex-1 cursor-default items-center justify-between bg-white outline-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="flex">{children}</div>
    </Accordion.Trigger>
  </Accordion.Header>
));

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement | null,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Content>
));

export default AccordionDemo;
