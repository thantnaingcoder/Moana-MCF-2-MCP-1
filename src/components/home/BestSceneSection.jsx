"use client";
import Image from "next/image";
import PageLayout from "../PageLayout";
import Kakamora from "@/assets/home/sec-set-kakamora.png";
import VideoPlayer from "./VideoPlayer";
import MoanaSailBoat from "./MoanaSailBoat";

const BestSceneSection = () => {
  const scenes = [
    {
      id: 1,
      videoUrl: "/videos/best-scenes-1.mp4",
      title: "Benison from Godness",
    },
    {
      id: 2,
      videoUrl: "/videos/best-scenes-2.mp4",
      title: "Fight Scenes",
    },
    {
      id: 3,
      videoUrl: "/videos/best-scenes-3.mp4",
      title: "Moana's Sacrifice Moment",
    },
    {
      id: 4,
      videoUrl: "/videos/best-scenes-4.mp4",
      title: "Pleasure Moment",
    },
    {
      id: 5,
      videoUrl: "/videos/best-scenes-5.mp4",
      title: "Moana Demi God Moment",
    },
  ];

  return (
    <>
      <section className="px-5 xl:px-0 mb-10">
        <PageLayout>
          <div className="mb-5 flex items-center  lg:gap-4 relative">
            <h1 className="font-heading uppercase text-gradient text-xl md:text-4xl text-nowrap">
              Best Scenes of moana
            </h1>
            <Image
              src={Kakamora}
              width={500}
              height={500}
              alt="monkey"
              className="w-10 md:w-20 md:static absolute top-0 right-0 -translate-x-full md:-translate-x-0 md:-translate-y-0 -translate-y-1/2 max-[320px]:translate-x-3 "
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {scenes.map((scene, index) => (
              <VideoPlayer key={scene.id} index={index} scene={scene} />
            ))}
          </div>
        </PageLayout>
      </section>
      <MoanaSailBoat />
    </>
  );
};

export default BestSceneSection;
