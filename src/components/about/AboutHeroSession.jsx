import AboutHeroImage from "../../assets/about-images/about-hero.png";
import Image158 from "../../assets/about-images/image 158.png";
import Oak from "../../assets/about-images/oak.png";
import Oak1 from "../../assets/about-images/oak1.png";
import Sun from "../../assets/about-images/sun.png";
import Vector from "../../assets/about-images/Vector (1).png";

import Image from "next/image";
const AboutHeroSession = () => {
  return <div>
        <div className=" relative w-full">
            
           <Image className=" w-full object-cover  " src={AboutHeroImage} alt="about hero image" />
           
            <div className="absolute bottom-0  w-full"><Image className="   w-full object-contain   " src={Vector} alt="wave" /></div>
           
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px]  md:text-2xl text-moana-500 font-label  ">Home / About</div>
         
        </div>
  </div>;
};

export default AboutHeroSession;
