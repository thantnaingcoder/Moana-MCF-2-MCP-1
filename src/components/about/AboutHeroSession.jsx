import AboutHeroImage from "../../assets/about-images/about-hero.png";


import Image from "next/image";
import Wave from "../Wave";
const AboutHeroSession = () => {
  return <div>
        <div className=" relative w-full">
            
           <Image className="w-full object-contain   " src={AboutHeroImage}  alt="about hero image" />
           
            <div className="absolute bottom-0  w-full"><Wave/></div>
           
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px]  md:text-2xl text-moana-500 font-label  ">Home / About</div>
         
        </div>
  </div>;
};

export default AboutHeroSession;
