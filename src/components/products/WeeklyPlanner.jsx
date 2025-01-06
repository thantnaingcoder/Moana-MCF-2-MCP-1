import Image from "next/image";
import PageLayout from "../PageLayout";
import Planner from "../../assets/products-images/planner.png"
import FlowerAss from "../../assets/products-images/flowerAss1.png"
import PrimaryButton from "../PrimaryButton";
import Ass2 from "./../../assets/products-images/ass2.png"
const WeeklyPlanner = () => {
  return <PageLayout>

    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" relative">
           <div className="  space-y-8">
       <h1 className=" text-3xl md:text-5xl font-heading text-gradient  ">weekly Planner</h1>

       <div className="space-y-5">
        <h3 className="text-3xl text-gradient font-label">Your Week with Adventure </h3>
        <p  className="flex items-start text-sm md:text-base gap-2 text-justify">Stay inspired and on track with the Moana Weekly Planner! Whether you’re conquering your to-do list or planning new adventures, this vibrant and motivational planner is perfect for adding a touch of Moana’s fearless spirit to your daily routine</p>
       </div>

       <div className="space-y-5">
        <h3 className="text-3xl text-gradient font-label">Your Week with Adventure </h3>
        <p  className="flex items-start text-sm md:text-base gap-2 text-justify">The Moana Weekly Planner isn’t just about staying organized – it’s about empowering you to chart your course, follow your heart, and make every week extraordinary. With space for creativity and reflection, it’s more than a planner – it’s a tool for self-discovery and inspiration!</p>
       </div>

       <PrimaryButton>Download pdf</PrimaryButton>
       </div> 
       <Image className=" absolute bottom-0 -left-48  scale-x-[-1]" src={Ass2} alt="Ass2" />
        </div>
       

       <div className="relative w-full h-full flex justify-end">
        <Image className=" absolute max-h-[500px] " src={Planner} alt="Weekly Planner"  />
        <Image className=" absolute -top-20 -right-20" src={FlowerAss} alt="flower"  />
       </div>
    </div>


  </PageLayout>;
};

export default WeeklyPlanner;
