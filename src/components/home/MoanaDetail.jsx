import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

const MoanaDetail = ({ status, description }) => {
  return (
    <>
      <motion.li
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <span className="text-neutral-700 font-bold"> {status}: </span>
        <span className="text-neutral-600"> {description} </span>
      </motion.li>
    </>
  );
};

export default MoanaDetail;
