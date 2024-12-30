import BriefMoana from "@/assets/home/brief-moana.png";
import BigWave from "@/assets/home/big-wave.png";
import BriefFlower from "@/assets/home/brief-flower.png";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import PageLayout from "../PageLayout";

const BriefMovieSection = () => {
  return (
    <section className="w-full px-5 xl:px-0 overflow-hidden ">
      <div className="flex justify-end relative">
        <Image
          src={BriefFlower}
          width={500}
          height={500}
          alt="flower"
          className="w-20 absolute top-0 translate-x-1/2"
        />
      </div>
      <PageLayout>
        <div className="flex justify-between">
          <div className="w-1/2 lg:block hidden ">
            <Image
              src={BriefMoana}
              width={600}
              height={600}
              priority
              alt="brief moana movie"
              className="w-3/4  object-cover object-center"
            />
          </div>
          <div className=" space-y-4 w-full lg:w-1/2 my-auto relative">
            <div>
              <h2 className="font-label text-2xl md:text-3xl text-gradient mb-5">
                Brief of Moana Movie
              </h2>
              <p className="text-neutral-700 leading-7">
                Inspired by Polynesian mythology, Moana is depicted as the
                strong-willed daughter of a chief of a Polynesian village, who
                is chosen by the ocean itself to reunite a mystical relic with
                the goddess Te Fiti. Teaming up with the demigod Maui, Moana
                faces challenges, discovers her true identity as a wayfinder,
                and saves her island from a spreading darkness. It's a tale of
                courage, self-discovery, and connection to heritage.
              </p>
            </div>
            <Image
              src={BigWave}
              width={600}
              height={600}
              alt="wave"
              className="absolute top-0 right-0 w-1/3 lg:w-2/3 -z-10 opacity-85"
            />
            <PrimaryButton> Read more </PrimaryButton>
          </div>
        </div>{" "}
      </PageLayout>
    </section>
  );
};

export default BriefMovieSection;
