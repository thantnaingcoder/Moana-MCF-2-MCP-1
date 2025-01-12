"use client";
import { useRef, useState } from "react";
import { LuCirclePlay } from "react-icons/lu";

const TrailerPlayer = ({ trailer: { id,thumbnail, videoUrl } }) => {
  const [controls, setControls] = useState(false);
  const videoRef = useRef();

  const handleClickTrailer = () => {
    setControls(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay failed:", error);
      });
    }
  };

  return (
    <div className={`w-1/2 cursor-pointer ${ id === 1 ? "mt-10" : "-mt-10 "} `} onClick={handleClickTrailer}>
      <div className="relative w-full ">
        <div className="absolute w-full h-full flex flex-col justify-center items-center ">
          {!controls && <LuCirclePlay className="size-7 text-white" />}
        </div>
        <video
          ref={videoRef}
          className="w-full rounded-lg"
          controls={controls}
          loop
          poster={thumbnail}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default TrailerPlayer;
