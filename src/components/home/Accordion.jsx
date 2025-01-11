"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What is the main message of Moana?",
      answer:
        " Moana isn't suitable for children under the age of 8 years. We recommend parental guidance for children aged up to 10 years because of the movie's violent and scary scenes. The main messages from this movie are to follow your dreams and be true to yourself.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is Moana's weakness?",
      answer:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius itaque, eveniet recusandae pariatur quod veniam aut porro est earum ad neque magnam sapiente culpa, magni quos, tenetur repellendus quas quisquam.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Did Moana fall in love?",
      answer:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius itaque, eveniet recusandae pariatur quod veniam aut porro est earum ad neque magnam sapiente culpa, magni quos, tenetur repellendus quas quisquam.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What is Moana's main goal?",
      answer:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius itaque, eveniet recusandae pariatur quod veniam aut porro est earum ad neque magnam sapiente culpa, magni quos, tenetur repellendus quas quisquam.",
      isOpen: false,
    },
    {
      id: 5,
      question: "What makes Moana special?",
      answer:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius itaque, eveniet recusandae pariatur quod veniam aut porro est earum ad neque magnam sapiente culpa, magni quos, tenetur repellendus quas quisquam.",
      isOpen: false,
    },
    {
      id: 6,
      question: "Why did Moana's mom help her?",
      answer:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius itaque, eveniet recusandae pariatur quod veniam aut porro est earum ad neque magnam sapiente culpa, magni quos, tenetur repellendus quas quisquam.",
      isOpen: false,
    },
  ]);

  const updateFaq = (id) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      )
    );
  };

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} faq={faq} updateFaq={updateFaq} />
      ))}
    </div>
  );
};

export default Accordion;
