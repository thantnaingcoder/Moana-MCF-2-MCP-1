import Image from "next/image";
import PageLayout from "../PageLayout";
import Accordion from "./Accordion";
import Plant from "@/assets/home/plant.png";
import MoanaSailBoat from "./MoanaSailBoat";

const FAQSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      "https://lottie.host/embed/8cf8cea8-fac5-4a97-be9c-2f55a7847f32/jWm5P6QWWe.lottie",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className="px-5 xl:px-0 overflow-x-hidden">
        <div className="flex justify-end relative ">
          <Image
            src={Plant}
            width={500}
            height={500}
            alt="faq leaf"
            className="w-20 translate-x-2/3 xl:translate-x-1/2"
          />
        </div>
        <PageLayout>
          <h1 className="font-heading  text-xl md:text-3xl text-gradient text-center mb-3">
            Frequently Asked Questions
          </h1>
          <div className=" w-full sm:max-w-5xl mx-0 sm:mx-auto  ">
           
            <Accordion />
          </div>
        </PageLayout>
      </section>
      <MoanaSailBoat />
    </>
  );
};

export default FAQSection;
