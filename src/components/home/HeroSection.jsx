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

import MoanaDetail from "./MoanaDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/effect-fade";

const HeroSection = () => {
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

  return (
    <>
      <section className="px-5 xl:px-0 py-10">
        <PageLayout>
          <div className="flex max-w-6xl mx-auto items-center">
            <div className="w-1/2 relative px-4">
              <div className="absolute top-0  left-0 -translate-y-full -translate-x-full">
                <Image
                  src={Sun}
                  width={500}
                  height={500}
                  alt="starfish"
                  className="size-14 object-cover object-center  "
                />
              </div>
              <div className="flex items-center gap-5">
                <h1 className="mb-5 text-gradient uppercase font-heading text-6xl">
                  Moana
                </h1>
                <Image
                  src={StarFish}
                  width={500}
                  height={500}
                  alt="starfish"
                  className="size-14 -mt-20 "
                />
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop
                navigation={{
                  prevEl: ".prevEl",
                  nextEl: ".nextEl",
                  clickable: true,
                }}
                modules={[Navigation]}
                effect="fade"
                className="space-y-5"
              >
                <ul className=" mb-5 flex flex-col gap-3  leading-8 text-lg">
                  <SwiperSlide>
                    {details.map((detail) => (
                      <MoanaDetail key={detail.id} {...detail} />
                    ))}
                  </SwiperSlide>
                  <SwiperSlide>
                    <MoanaDetail status="Release" description="November" />
                    <MoanaDetail status="Genre" description="Family " />
                    <MoanaDetail status="gg" description="ff" />
                    <MoanaDetail status="cc" description="1h dd" />
                    <MoanaDetail status="ee" description="ggg" />
                  </SwiperSlide>
                </ul>
              </Swiper>
            </div>
            <div className="w-1/2  flex justify-center">
              <div className="relative w-full h-[500px]">
                <Image
                  src={BgFrame}
                  width={1000}
                  height={1000}
                  alt="frame"
                  className="w-[500px] h-full rounded-full absolute top-0 left-0 "
                />
                <Swiper
                  slidesPerView={1}
                  spaceBetween={50}
                  loop
                  navigation={{
                    prevEl: ".prevEl",
                    nextEl: ".nextEl",
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  effect="fade"
                  className="w-2/3 right-8   absolute -bottom-12   "
                >
                  {/* className="absolute bottom-4  w-2/3 right-28 " */}

                  <SwiperSlide>
                    <Image
                      className="w-2/3 mx-auto "
                      src={Grandma}
                      width={500}
                      height={500}
                      alt="Maui"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      className="w-full "
                      src={Maui}
                      width={500}
                      height={500}
                      alt="Maui"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      className="w-3/5 mx-auto"
                      src={Moana}
                      width={500}
                      height={500}
                      alt="Maui"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="prevEl">
              <OutlineButton>Back </OutlineButton>
            </div>
            <div className="nextEl">
              <PrimaryButton> Next </PrimaryButton>
            </div>
          </div>
        </PageLayout>
      </section>
      <MoanaSailBoat />
    </>
  );
};

export default HeroSection;
