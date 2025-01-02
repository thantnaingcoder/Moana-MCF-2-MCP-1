import WavePng from "../../assets/about-images/Vector (1).png";

import Image from "next/image";

import Link from "next/link";
const AboutHeroSession = ({ photo, page }) => {
  return (
    <div className=" relative w-full">
      <Image
        className="w-full object-contain   "
        src={photo}
        alt="about hero image"
      />

      <div className="absolute flex gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px]  md:text-2xl text-moana-500 font-label  ">
        <Link className="" href="/">
          
          Home
        </Link>
        /<p className=" cursor-pointer !text-moana-300"> {page} </p>
      </div>

      <div className=" absolute bottom-0 w-full  ">
        
        <Image
          className="w-[100%] object-contain  "
          src={WavePng}
          alt="wave"
        />
      </div>
    </div>
  );
};

export default AboutHeroSession;
