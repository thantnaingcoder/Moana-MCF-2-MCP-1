import { motion } from "motion/react";

import "swiper/css";

const MoanaDetail = ({ detail: { status, description }, index,currentIndex }) => {
 
  return (
  
    <>
      <motion.div
      key={currentIndex}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "linear",
          delay:
            index === 0 ? 0.1 : index === 1 ? 0.2 : index === 3 ? 0.3 : 0.4,
        }}
        className="flex justify-center lg:justify-start items-center gap-2 mb-4"
      >
        <p className="text-nowrap max-[320px]:text-sm text-base md:text-lg font-bold text-neutral-700 ">

          {status}:
        </p>
        <p className=" max-[320px]:text-sm text-nowrap text-neutral-600"> {description} </p>
      </motion.div>
    </>
  );
};

export default MoanaDetail;
