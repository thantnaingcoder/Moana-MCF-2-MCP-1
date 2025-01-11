import Trailer from "@/assets/home/trailer.jpg";
import Image from "next/image";
import Pig from "@/assets/home/pig.png";
import PageLayout from "../PageLayout";
import MovieTrailer from "@/assets/home/moana-trailer-1.jpg";
import Heihei from "@/assets/home/heihei.png";
import TrailerPlayer from "./TrailerPlayer";

const TrailerBackground = () => {
  const trailers = [
    {
      id: 1,
      thumbnail: "/thumbnails/thumbnail.jpg",
      videoUrl: "/videos/moana-trailer.mp4",
    },
    {
      id: 2,
      thumbnail: "/thumbnails/thumbnail-1.jpg",
      videoUrl: "/videos/moana-trailer-1.mp4",
    },
  ];

  return (
    <>
      <div className="px-5 xl:px-0 w-full h-[500px] min-[426px]:h-[600px] md:h-[720px] relative flex flex-col ">
        <Image
          className=" w-full h-full object-cover object-center absolute top-0 left-0 -z-10 "
          src={MovieTrailer}
          width={3840}
          height={2160}
          alt="trailer"
        />

        <div className=" flex flex-col pr-5 items-start lg:items-end ">
          <div className="max-w-[250px] sm:max-w-xs py-3 bg-gradient text-white mt-16 rounded-lg shadow-md">
            <h2 className="px-4 md:text-xl font-label"> Trailer Concept </h2>
            <div className="flex items-start md:items-center">
              <p className="px-4 text-xs md:text-sm leading-7">
                Moana journeys with Maui to restore Te Fiti's heart and save her
                island
              </p>
              <Image
                src={Pig}
                width={500}
                height={500}
                alt="pig"
                className="size-14 md:size-24"
              />
            </div>
          </div>
        </div>

        <PageLayout>
          <div className="w-full gap-5 md:gap-24 flex   mt-20   ">
            {trailers.map((trailer) => (
              <TrailerPlayer key={trailer.id} trailer={trailer} />
            ))}
          </div>
        </PageLayout>
        <div className=" flex justify-end lg:pr-20 mb-4 mt-auto w-full ">
          <h1 className="text-clip text-transparent text-gradient text-3xl md:text-5xl font-heading">
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
