import PageLayout from "../PageLayout";
import SelfCarePng from "../../assets/products-images/self-care/self-care-check.png";
import SelfCareBackgroundPng from "../../assets/products-images/self-care/bg-self.png";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
const SelfCare = () => {
  return  <PageLayout>
  <div className=" mx-2 my-10 md:my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className=" order-2  relative">
      <div className="  space-y-8">
        <h1 className=" text-3xl md:text-5xl font-heading text-gradient  ">
          weekly Planner
        </h1>

        <div className="space-y-5">
          <h3 className="text-3xl text-gradient font-label">
            Your Week with Adventure
          </h3>
          <p className="flex items-start text-sm md:text-base gap-2 text-justify">
            Stay inspired and on track with the Moana Weekly Planner!
            Whether you’re conquering your to-do list or planning new
            adventures, this vibrant and motivational planner is perfect for
            adding a touch of Moana’s fearless spirit to your daily routine
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="text-3xl text-gradient font-label">
            Your Week with Adventure
          </h3>
          <p className="flex items-start text-sm md:text-base gap-2 text-justify">
            The Moana Weekly Planner isn’t just about staying organized –
            it’s about empowering you to chart your course, follow your
            heart, and make every week extraordinary. With space for
            creativity and reflection, it’s more than a planner – it’s a
            tool for self-discovery and inspiration!
          </p>
        </div>

        <PrimaryButton>Download pdf</PrimaryButton>
      </div>
      <Image
        className=" absolute bottom-5 scale-95 opacity-50"
        src={SelfCareBackgroundPng}
        alt="Ass2"
      />
    </div>

    <div className="md:relative order-1  w-full h-full flex justify-center md:justify-end">
      <Image
        className="  max-w-[70%] md:max-w-full "
        src={SelfCarePng}
        alt="Weekly Planner"
      />
      
    </div>
  </div>
</PageLayout>
};

export default SelfCare;
