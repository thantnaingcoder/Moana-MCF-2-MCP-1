"use client";

import { useState, useRef, useEffect } from "react";

import PageLayout from "../PageLayout";

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

export default function MoanaGallery() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const handleVideoClick = (index) => {
    setCurrentVideo(currentVideo === index ? null : index);
  };

  const handleVideoEnd = () => {
    setCurrentVideo(null);
  };

  return (
    <PageLayout>
        <div className=" ">
        <div className="mb-8">
          <h1 className="text-4xl text-center font-heading  md:text-5xl font-bold text-gradient tracking-wide">
            MAKING OF THE MOVIE
          </h1>
        </div>
    

      <div className="">
        <div className="flex overflow-x-scroll   gap-6 ">
          {videos.map((video, index) => (
            <div key={video.videoId} className=" w-full h-full">
              <div className="relative w-[600px]  h-80">
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
          ))}
        </div>
      </div>

    </div>
      </PageLayout>
  );
}
