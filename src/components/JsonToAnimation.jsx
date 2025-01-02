"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import jsonData from "../assets/about-images/ass-json/test.json";

const JsonToAnimation = () => {
  return <Lottie animationData={jsonData} loop={true} />;
};

export default JsonToAnimation;
