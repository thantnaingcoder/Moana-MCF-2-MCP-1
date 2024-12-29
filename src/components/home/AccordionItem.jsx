"use client";

import { LuChevronDown } from "react-icons/lu";
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
    <div
      onClick={handleToggleFaq}
      className="border-b cursor-pointer hover:bg-neutral-50 border-neutral-200 mt-6 flex flex-col  justify-center"
    >
      <div className="flex justify-between items-center mb-5">
        <h3 className="sm:text-lg"> {question} </h3>

        <button>
          <LuChevronDown
            className={`size-5 ${isOpen ? "rotate-180  " : ""} duration-500`}
          />
        </button>
      </div>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mb-5"
          >
            <p className="sm:text-base text-sm text-neutral-700"> {answer} </p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default AccordionItem;
