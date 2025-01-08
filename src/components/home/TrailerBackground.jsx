import Trailer from "@/assets/home/trailer.jpg";
import Image from "next/image";
import Pig from "@/assets/home/pig.png";
import PageLayout from "../PageLayout";
import MovieTrailer from "@/assets/home/moana-trailer-1.jpg";
import Heihei from "@/assets/home/heihei.png";

const TrailerBackground = () => {
  return (
    <>
      <div className="w-full h-[700px] relative flex flex-col ">
        <Image
          className=" w-full h-full object-cover object-center absolute top-0 left-0 -z-10 "
          src={MovieTrailer}
          width={3840}
          height={2160}
          alt="trailer"
        />

        <div className=" flex flex-col pr-5 items-end ">
          <div className=" max-w-xs py-3 bg-gradient text-white mt-16 rounded-lg shadow-md">
            <h2 className="px-4 text-xl font-label"> Trailer Concept </h2>
            <div className="flex items-center">
              <p className="px-4 text-sm leading-7">
                Moana journeys with Maui to restore Te Fiti's heart and save her
                island
              </p>
              <Image
                src={Pig}
                width={500}
                height={500}
                alt="pig"
                className="size-24"
              />
            </div>
          </div>
        </div>

        <PageLayout>
          <div className="grid grid-cols-2 gap-40 mt-20 ">
            <div className="col-span-1 bg-red-500 ">
              <div className="max-w-md border border-blue-500">hello</div>
            </div>
            <div className="col-span-1  ">
              <div className="max-w-md border border-blue-500">hello</div>
            </div>
          </div>
        </PageLayout>
        <div className="mt-auto flex justify-end mr-40 mb-4">
          <h1 className="text-clip text-transparent text-gradient text-5xl font-heading">
            Moana
          </h1>
          {/* <Image
            src={Heihei}
            width={500}
            height={500}
            alt="Heihei"
            className="w-20 opacity-90"
          /> */}
        </div>
      </div>
    </>
  );
};

export default TrailerBackground;
