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
            <h3 className="text-neutral-900  text-xl max-[320px]:text-wrap  text-nowrap md:text-2xl mb-3">
              What is the main message of Moana?
            </h3>
            <p className=" sm:text-lg  text-neutral-700  leading-7 mb-5">
              Moana isn't suitable for children under the age of 8 years. We
              recommend parental guidance for children aged up to 10 years
              because of the movie's violent and scary scenes. The main messages
              from this movie are to follow your dreams and be true to yourself.
            </p>
            <Accordion />
          </div>
        </PageLayout>
      </section>
      <MoanaSailBoat />
    </>
  );
};

export default FAQSection;
