"use client";

import { LuMinus, LuPlus } from "react-icons/lu";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

const AccordionItem = ({
  faq: { id, question, answer, isOpen },

  updateFaq,
}) => {
  const handleToggleFaq = () => {
    updateFaq(id);
  };

  return (
    <div className="border-b border-neutral-200">
      <button
        className="w-full py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
        onClick={handleToggleFaq}
      >
        <span className="text-lg font-medium text-neutral-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? (
            <LuMinus className="size-5 text-neutral-500" />
          ) : (
            <LuPlus className="size-5 text-neutral-500" />
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="py-4 bg-white text-neutral-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
