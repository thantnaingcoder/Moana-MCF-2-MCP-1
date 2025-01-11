"use client";
import PageLayout from "../PageLayout";
import SelfCarePng from "../../assets/products-images/self-care/self-care-check.png";
import SelfCareBackgroundPng from "../../assets/products-images/self-care/bg-self.png";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
import PngToPdfDownloader from "./PngToPdfDownloader";
import { useRef } from "react";
const SelfCare = () => {
  const contentRef = useRef(null);
  return  <PageLayout>
  <div className=" mx-2 my-5 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className=" order-2  relative">
      <div className="  space-y-8">
        <h1 className=" text-3xl md:text-5xl font-heading text-gradient  ">
        Self-care
        </h1>

        <div className="space-y-5">
          <h3 className="text-3xl text-gradient font-label">
          Moana-Inspired Self-Care Checklist
          </h3>
          <p className="flex items-start text-sm md:text-base gap-2 text-justify">
          Take inspiration from the adventurous and serene vibes of Moana with this themed self-care checklist to nurture your body, mind, and spirit.
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="text-3xl text-gradient font-label">
          Tips
          </h3>
          <li className="flex items-start text-sm md:text-base gap-2 text-justify">
          Plan an "adventure day" where you try something new or explore a nearby place
          </li>
          <li className="flex items-start text-sm md:text-base gap-2 text-justify">
          Practice acts of kindness toward others, connecting like Moana did with her people
          </li>
          <li className="flex items-start text-sm md:text-base gap-2 text-justify">
          Treat yourself to something that feels luxurious, like a spa day or a self-made skincare routine.
          </li>
        </div>

        <PngToPdfDownloader  imageName="self-care" imageIdName="self-care-photo" ref={contentRef}/>
      </div>
      <Image
        className=" absolute bottom-5 scale-95 opacity-50"
        src={SelfCareBackgroundPng}
        alt="Ass2"
      />
    </div>

    <div ref={contentRef} className="md:relative order-1  w-full h-full flex justify-center md:justify-end">
      <Image
        id="self-care-photo"
        className="  max-w-[70%] md:max-w-full "
        src={SelfCarePng}
        alt="Weekly Planner"
      />
      
    </div>
  </div>
</PageLayout>
};

export default SelfCare;
