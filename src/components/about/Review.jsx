import PageLayout from "../PageLayout";
import User1 from "../../assets/about-images/review-image/Ellipse 13.png"
import Image from "next/image";
import LeftComma from "../../assets/about-images/review-image/“.png"
import { Star } from "lucide-react";


const Review = () => {
  return (
    <PageLayout>
      <div>
        <div className="mb-20">
          <h1 className="text-4xl text-start font-heading  md:text-5xl font-bold text-gradient tracking-wide">
            Critics Review
          </h1>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/> 

          
        </div>
      </div>
    </PageLayout>
  );
};

export default Review;



const ReviewCard = () => {
  return (
    <div className=" border border-[#C9C4C4] rounded-xl px-5">
    <div className=" flex justify-center -translate-y-[50%]"><Image className=" w-1/3  object-contain  " src={User1} alt="user" /></div>

    <div className=" space-y-5 -translate-y-5">
        <div><Image className="  object-contain  " src={LeftComma} alt="user" /></div>
        <div className="  px-7">
            <h1 className=" font-label text-gradient text-center mb-2 text-2xl">Victoria Luxford</h1>
            <p className=" text-[#737373] leading-[24px] text-justify">Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery.</p>
        </div>
        <div className=" flex justify-end"><Image className="  object-contain rotate-180  " src={LeftComma} alt="user" /></div>
        <div className=" flex justify-between px-5 py-5"> 
            <div>
                May 4 , 2023
            </div>

            <div className=" flex gap-2">
                <Star color="#FDA520"/>
                <p>4/5</p>
            </div>
            
        </div>
    </div>

  </div>

  )
}
