import StoryLine from "@/assets/home/storyline.png";
import BigWave from "@/assets/home/big-wave.png";
import Flower from "@/assets/home/flower.png";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import PageLayout from "../PageLayout";
import Link from "next/link";

const BriefMovieSection = () => {
  return (
    <section className="w-full px-5 xl:px-0 overflow-hidden mb-10 ">
      <PageLayout>
        <div className="flex lg:flex-row flex-col justify-start lg:justify-between">
          <div className="w-full mb-7 lg:w-1/2 ">
            <Image
              src={StoryLine}
              width={600}
              height={600}
              priority
              alt="brief moana movie"
              className="w-full md:w-1/2 mx-auto lg:mx-0 lg:w-3/4  object-cover object-center"
            />
          </div>
          <div className="justify-start lg:justify-center items-center lg:items-start flex flex-col gap-4 w-full lg:w-1/2 my-auto relative">
            <Image
              src={Flower}
              width={500}
              height={500}
              alt="flower"
              className="w-10 lg:w-20 absolute lg:top-0 right-16 md:right-28 lg:right-0 -translate-y-full translate-x-full xl:-translate-y-40 lg:translate-x-0 "
            />
            <div className="px-0 md:px-8 lg:px-0 ">
              <h2 className="text-center lg:text-left font-label text-2xl md:text-3xl text-gradient mb-5">
                Brief of Moana Movie
              </h2>
              <p className="text-center text-xs md:text-[16px] lg:text-left text-neutral-700 leading-7 md:leading-10 lg:leading-8 tracking-wide">
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
              className="absolute max-[320px]:top-24  max-[375px]:top-18 top-14 md:top-12   lg:top-0 right-5 lg:right-0 max-[320px]:w-full max-[375px]:w-4/5 max-[375px]:opacity-50 w-2/3 md:w-2/5 lg:w-2/3 -z-10 opacity-85"
            />
            <Link href="/about">
              <PrimaryButton> Read more </PrimaryButton>
            </Link>
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default BriefMovieSection;
