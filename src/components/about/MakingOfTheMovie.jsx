"use client";

import { useState, useRef, useEffect } from "react";
import Wave from "../../assets/about-images/wave.png";
import PageLayout from "../PageLayout";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    id: "behind-scenes-1",
    title: "Behind The Scenes with ",
    videoId: "rB5MpMDMpas",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    id: "recording-session",
    title: "Voice Recording Session - You're Welcome",
    videoId: "kmv2lYQ-Pck",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    id: "animation-process",
    title: "The Animation Process",
    videoId: "d_ttuEySXTc",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    id: "behind-scenes-2",
    title: "Behind The Scenes with ",
    videoId: "4fRdwJch6uo",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
];

const YouTubeEmbed = ({ videoid, height, playing, onEnded, muted }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (playing) {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      } else {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    }
  }, [playing]);

  return (
    <iframe
      ref={iframeRef}
      width="100%"
      height={height}
      src={`https://www.youtube.com/embed/${videoid}?enablejsapi=1&autoplay=0&mute=${
        muted ? 1 : 0
      }`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default function MakingOfTheMovie() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const handleVideoClick = (index) => {
    setCurrentVideo(currentVideo === index ? null : index);
  };

  const handleVideoEnd = () => {
    setCurrentVideo(null);
  };

  return (
    <PageLayout>
      <div className=" select-none md:my-10  ">
        <div className="mb-10  flex justify-center ">
          <div className="text-3xl relative block font-heading  md:text-5xl font-bold text-gradient tracking-wide">
            MAKING OF THE MOVIE
            <div className=" absolute -right-5 -translate-y-6 ">
              {" "}
              <Image
                className="  object-contain size-20 md:size-auto  "
                src={Wave}
                alt="wave"
              />
            </div>
          </div>
        </div>

        <div className="">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem
                  key={video.id}
                  className="  md:basis-1/2 lg:basis-1/3"
                >
                  <CardContent className="h-full !p-0 flex flex-col justify-between">
                    <div key={video.videoId} className=" w-full h-full">
                      <div className="relative w-full h-[300px] md:h-[400px]">
                        <YouTubeEmbed
                          videoid={video.videoId}
                          height={"100%"}
                          playing={currentVideo === index}
                          onEnded={handleVideoEnd}
                          muted={false}
                        />
                        {currentVideo !== index && (
                          <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
                            onClick={() => handleVideoClick(index)}
                          >
                            <svg
                              className="w-20 hidden h-20 text-white"
                              fill="red"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className=" flex md:hidden  justify-center mt-6 md:mt-10 gap-5">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </PageLayout>
  );
}
