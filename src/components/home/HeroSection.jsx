"use client";

import Image from "next/image";
import PageLayout from "../PageLayout";
import PrimaryButton from "../PrimaryButton";
import OutlineButton from "../OutlineButton";
import MoanaSailBoat from "./MoanaSailBoat";
import BgFrame from "@/assets/home/home-hero-bg.png";
import Maui from "@/assets/home/maui.png";
import StarFish from "@/assets/home/starfish.png";
import Sun from "@/assets/home/sun.png";
import Grandma from "@/assets/home/grandma.png";
import Moana from "@/assets/home/moana.png";
import Kakamora from "@/assets/home/kakamora.png";
import Shell from "@/assets/home/shell.png";
import MoanaDetail from "./MoanaDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import { useState } from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const details = [
    {
      id: 1,
      status: "Release Date",
      description: "November 23, 2016 (USA)",
    },
    {
      id: 2,
      status: "Genre",
      description: "Family , Adventure",
    },
    {
      id: 3,
      status: "Sequel",
      description: "Moana2",
    },
    {
      id: 4,
      status: "Runtime",
      description: "1h 47m",
    },
    {
      id: 5,
      status: "IMDB Rating",
      description: "7.6/10",
    },
  ];

  const handleBackBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? details.length - 1 : prevIndex - 1
    );

    setRotation((prev) => prev - 180);
  };

  const handleNextBtn = () => {
    setCurrentIndex((prev) => prev + 1);
    setRotation((prev) => prev + 180);
  };

  return (
    <>
      <section className="xl:px-0   px-5 py-10">
        <PageLayout>
          <div className="relative">
            <div className="absolute -top-6 md:top-8 left-0 -translate-x-1/4  lg:-translate-y-full ">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "linear" }}
              >
                <Image
                  src={Sun}
                  width={500}
                  height={500}
                  alt="sun"
                  className="animate-spin size-14 object-cover object-center  "
                />
              </motion.div>
            </div>
          </div>
          <div className="mx-auto flex lg:flex-row flex-col-reverse  md:max-w-6xl  max-w-full items-center justify-center  ">
            <div className="-mt-0 lg:-mt-16 w-full  lg:w-1/2  ">
              <div className=" w-full flex justify-center lg:justify-start items-center gap-5 relative">
                <h1 className="lg:mt-0 mt-14 mb-14 lg:mb-5 text-gradient uppercase font-heading text-4xl  lg:text-6xl">
                  <Typewriter
                    words={["MOANA"]}
                    loop={1}
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    cursor={false}
                    cursorStyle="|"
                  />
                </h1>

                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "linear" }}
                  className="mt-4 lg:-mt-20 absolute lg:static top-0 right-0"
                >
                  <Image
                    src={StarFish}
                    width={500}
                    height={500}
                    alt="starfish"
                    className={`size-14  transition-transform duration-500`}
                    style={{ transform: `rotate(${rotation}deg)` }}
                  />
                </motion.div>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop
                allowTouchMove={false}
                navigation={{
                  prevEl: ".prevEl",
                  nextEl: ".nextEl",
                  clickable: true,
                }}
                modules={[Navigation]}
              >
                <div className=" mb-5 last:mb-0 flex flex-col gap-3 leading-8 text-lg">
                  <SwiperSlide>
                    {details.map((detail, index) => (
                      <MoanaDetail
                        key={detail.id}
                        detail={detail}
                        index={index}
                        currentIndex={currentIndex}
                      />
                    ))}
                  </SwiperSlide>

                  <SwiperSlide>
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "linear",
                      }}
                      className=" max-w-md lg:max-w-sm mx-auto lg:mx-0 flex flex-col  items-center lg:items-start "
                    >
                      <h2 className="font-heading text-neutral-700 font-bold text-xl mb-3">
                        Summaries
                      </h2>
                      <p className=" text-neutral-600 leading-8">
                        Moana, daughter of chief Tui, embarks on a journey to
                        return the heart of goddess Te Fitti from Maui, a
                        demigod, after the plants and the fish on her island
                        start dying due to a blight
                      </p>
                    </motion.div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "linear",
                      }}
                      className="max-w-md lg:max-w-sm mx-auto lg:mx-0 flex flex-col  items-center lg:items-start space-y-8 lg:space-y-5"
                    >
                      <div className="flex flex-col  items-center lg:items-start">
                        <h2 className="font-heading text-neutral-700 font-bold text-xl">
                          Directed By
                        </h2>
                        <p className="text-neutral-600 leading-8">
                           John Musker, Ron Clements
                        </p>
                      </div>

                      <div className="flex flex-col  items-center lg:items-start">
                        <h2 className="font-heading text-neutral-700 font-bold text-xl">
                          Story By
                        </h2>
                        <p className="  text-center lg:text-start text-neutral-600 leading-8">
                          John Musker, Ron Clements, Don Hall, Chris
                          Williams, Pamela Ribon, Aaron Kandell, Jordan Kandell
                        </p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "linear",
                      }}
                      className="max-w-md lg:max-w-sm mx-auto lg:mx-0 flex flex-col  items-center lg:items-start space-y-8 lg:space-y-5"
                    >
                      <div className="flex flex-col  items-center lg:items-start">
                        <h2 className="font-heading text-neutral-700 font-bold text-xl">
                          Produced By
                        </h2>
                        <p className="text-neutral-600 leading-8">
                           Osnat Shurer, Nicole P. Hearon
                        </p>
                      </div>

                      <div className="flex flex-col  items-center lg:items-start">
                        <h2 className="font-heading text-neutral-700 font-bold text-xl">
                          Cast
                        </h2>
                        <p className="text-center lg:text-start text-neutral-600 leading-8">
                          Auli'i Cravalho, Dwayne "The Rock" Johnson, Rachel
                          House, Temuera Morrison, Nicole Scherzinger, Jemaine
                          Clement, Alan Tudyk
                        </p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="relative w-full md:w-1/2">
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "linear",
                }}
                className="flex justify-center items-center relative max-w-xs md:max-w-sm mx-auto lg:max-w-lg  h-[320px] md:h-[384px] lg:h-[500px] "
              >
                <Image
                  src={BgFrame}
                  width={1000}
                  height={1000}
                  alt="frame"
                  className=" h-full 
                absolute top-0 left-0  
                w-full "
                />
                <Swiper
                  slidesPerView={1}
                  spaceBetween={50}
                  loop
                  allowTouchMove={false}
                  navigation={{
                    prevEl: ".prevEl",
                    nextEl: ".nextEl",
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  effect="fade"
                  className=" max-w-sm right-1 lg:right-8 absolute -bottom-8 md:-bottom-12   "
                >
                  <SwiperSlide>
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "linear",
                      }}
                    >
                      <Image
                        className="w-3/4 md:w-4/5 lg:w-full mt-5 md:mt-2 lg:mt-0 mx-auto md:mx-5 lg:mx-0 "
                        src={Maui}
                        width={500}
                        height={500}
                        alt="Maui"
                      />
                    </motion.div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "linear",
                      }}
                    >
                      <Image
                        className="w-1/2 lg:w-3/5 mx-auto md:mx-28 "
                        src={Moana}
                        width={500}
                        height={500}
                        alt="Moana"
                      />
                    </motion.div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "linear",
                      }}
                    >
                      <Image
                        className="w-3/5 lg:w-2/3 mx-auto "
                        src={Grandma}
                        width={500}
                        height={500}
                        alt="Grandma"
                      />
                    </motion.div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "linear",
                      }}
                    >
                      <Image
                        className="w-4/5 md:w-full mt-14 lg:mt-24  mx-8 md:mx-auto"
                        src={Kakamora}
                        width={500}
                        height={500}
                        alt="Kakamora"
                      />
                    </motion.div>
                  </SwiperSlide>
                </Swiper>
              </motion.div>
              <div className="absolute bottom-0 max-[375px]:-left-2 left-0 md:-left-5 lg:right-0">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "linear" }}
                >
                  <Image
                    src={Shell}
                    width={500}
                    height={500}
                    alt="shell"
                    className="size-14"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="xl:px-16 px-0 flex items-center  overflow-hidden  gap-2  mt-8 lg:-mt-24 justify-center lg:justify-start ">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "linear" }}
              className="prevEl"
            >
              <OutlineButton onClick={handleBackBtn}>Back </OutlineButton>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "linear" }}
              className="nextEl"
            >
              <PrimaryButton onClick={handleNextBtn}> Next </PrimaryButton>
            </motion.div>
          </div>
        </PageLayout>
      </section>

      <MoanaSailBoat />
    </>
  );
};

export default HeroSection;
