"use client";
import PageLayout from "../PageLayout";
import CalendarPng from "../../assets/products-images/calendar.png";
import Ass1 from "../../assets/products-images/add1.png";
import Ass2 from "../../assets/products-images/ass2.png";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
import PngToPdfDownloader from "./PngToPdfDownloader";
import { useRef } from "react";

const Calendar = () => {
  const contentRef = useRef(null);
  return (
    <PageLayout>
      <div className=" mx-2 my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="  order-2  relative">
          <div className="  space-y-8">
            <h1 className=" text-3xl md:text-5xl font-heading text-gradient  ">
            2025 Calendar
            </h1>

            <div className="space-y-5">
              <h3 className="text-3xl text-gradient font-label">
              A Year of Courage and Adventure
              </h3>
              <p className="flex items-start text-sm md:text-base gap-2 text-justify">
              Start your year inspired by the fearless spirit of Moana! The Moana 2025 Calendar is a perfect way to add a splash of tropical charm and motivation to every month. Featuring vibrant artwork and iconic moments from the beloved Disney movie, this calendar will help you stay organized while reminding you to chase your dreams
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-3xl text-gradient font-label">
              Why It’s Special
              </h3>
              <p className="flex items-start text-sm md:text-base gap-2 text-justify">
              Let Moana guide you through 2025 with her unwavering determination and adventurous spirit! This calendar isn’t just about keeping track of days – it’s about celebrating the courage to dream big and the magic of discovery
              </p>
            </div>

            <PngToPdfDownloader  imageName="calender" imageIdName="calender-png-photo"  ref={contentRef} />
          </div>
          {/* <Image className=" absolute bottom-0 -right-52  " src={Ass2} alt="Ass2" /> */}
        </div>

        <div ref={contentRef} className=" order-1 md:order-1  md:relative w-full h-full flex justify-center md:justify-start">
          <Image
            id="calender-png-photo"
            className=" max-w-[70%] md:max-w-full "
            src={CalendarPng}
            alt="calender"
          />
          <Image
            className=" hidden md:block md:absolute -top-10 -left-36"
            src={Ass1}
            alt="flower"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Calendar;
