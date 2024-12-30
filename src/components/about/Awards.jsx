import Image from "next/image";
import AchevementPhoto1 from "../../assets/about-images/achevement 1.png";
import AchevementPhoto2 from "../../assets/about-images/achievement.png";
import Ass from "../../assets/about-images/ass.png";
import PageLayout from "../PageLayout";
const Awards = () => {
  return <PageLayout>
  
  <div className=" grid grid-cols-1 md:grid-cols-2 mb-5 gap-5">

      <div className=" relative  px-2 md:px-0   md:pr-10">
         <Image className=" absolute bottom-5 h-[200px] md:h-auto max-h-[400px]  md:block  object-contain  opacity-25 " src={Ass} alt="achevement" />

         <div className=" space-y-4">
             <h1 className=" text-[20px] md:text-[30px] text-gradient font-label ">Commercial success</h1>

        <div className=" space-y-2">
            <h3 className=" md:text-[20px] font-semibold text-[#171717]">Worldwide box office</h3>
            <p className="text-[#404040] text-[13px] md:text-[15px] md:leading-[24px] text-justify">Over $643 million, with $248 million from domestic (U.S.) markets and $395 million internationally.Ranked as one of Disney’s highest-grossing animated films of all time</p>
        </div>

        <div className=" space-y-2">
            <h3 className=" md:text-[20px] font-semibold text-[#171717]">Streaming  popularity</h3>
            <p className="text-[#404040] text-[13px] md:text-[15px] md:leading-[24px] text-justify">One of Disney's most-watched films, accumulating over 1 billion hours of viewership from 2020 to 2023.Upon its release on Disney+, Moana quickly became one of the platform’s most-watched titles, attracting new audiences.</p>
        </div>

         </div>

      </div>
      <div><Image className=" w-full  object-contain  " src={AchevementPhoto1} alt="achevement" /></div>
  </div>

  <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className=" md:order-2 px-2 md:px-0   md:pr-10">

        <h1 className=" text-[20px] md:text-[30px] text-gradient font-label mb-2 ">Awards And nomination</h1>

        <div className=" space-y-1">
            <h3 className=" md:text-[20px] font-semibold text-[#171717]">Academy awards</h3>
            <p className="text-[#404040] text-[13px] md:text-[15px] md:leading-[24px] text-justify">Nominated for Best Animated Feature.<br/>
            Nominated for Best Original Song ("How Far I'll Go").</p>
        </div>

        <div className=" space-y-1">
            <h3 className=" md:text-[20px] font-semibold text-[#171717]">golden globes</h3>
            <p className="text-[#404040] text-[13px] md:text-[15px] md:leading-[24px] text-justify">Nominated for Best Motion Picture – Animated.<br/>
            Nominated for Best Original Song ("How Far I'll Go").</p>
        </div>

        <div className=" space-y-1">
            <h3 className=" md:text-[20px] font-semibold text-[#171717]">Annie awards</h3>
            <p className="text-[#404040] text-[13px] md:text-[15px] md:leading-[24px] text-justify">Received multiple nominations, including Outstanding Achievement in Animation.</p>
        </div>

        <div className=" space-y-1">
            <h3 className=" md:text-[20px] font-semibold text-[#171717]">Critics choice movie awards</h3>
            <p className="text-[#404040] text-[13px] md:text-[15px] md:leading-[24px] text-justify">Nominated for Best Animated Feature.</p>
        </div>



      </div>
      <div><Image  className=" w-full  object-contain  " src={AchevementPhoto2} alt="achevement" /></div>
  </div>

  </PageLayout>
};

export default Awards;
