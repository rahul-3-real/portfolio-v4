"use client";

import React, { useState, createContext, useContext } from "react";

import { Star } from "@/static/images";
import Image from "next/image";

// Accordion State
const AccordionContext = createContext();

export const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggleItem }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ children, index }) => {
  const { openIndex, toggleItem } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, toggleItem, index })
      )}
    </div>
  );
};

export const AccordionTitle = ({ children, index, toggleItem }) => (
  <div className="accordion-title" onClick={() => toggleItem(index)}>
    <Image src={Star} alt="Star Pattern" priority />
    <span>{children}</span>
  </div>
);

export const AccordionContent = ({ children, isOpen }) => (
  <div className={`accordion-content ${isOpen ? "open" : ""}`}>
    {isOpen && (
      <div className="text">
        <p>{children}</p>
      </div>
    )}
  </div>
);
