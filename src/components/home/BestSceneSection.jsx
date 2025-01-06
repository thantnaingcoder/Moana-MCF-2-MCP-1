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
    },
    {
      id: 2,
      videoUrl: "/videos/best-scenes.mp4",
    },
    {
      id: 3,
      videoUrl: "/videos/best-scenes-1.mp4",
    },
    {
      id: 4,
      videoUrl: "/videos/best-scenes-1.mp4",
    },
    {
      id: 5,
      videoUrl: "/videos/best-scenes-1.mp4",
    },
  ];

  return (
    <>
      <section className="px-5 xl:px-0 mb-10">
        <PageLayout>
          <div className="flex items-center gap-4">
            <h1 className="font-heading uppercase text-gradient text-2xl md:text-4xl">
              Best Scenes of moana
            </h1>
            <Image
              src={Kakamora}
              width={500}
              height={500}
              alt="monkey"
              className="w-20"
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
