"use client";
import { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ scene: { videoUrl, title }, index }) => {
  const videoRef = useRef();
  const [controls, setControls] = useState(false);

  const handleMouseEnter = () => {
    setControls(true);
  };

  const handleMouseLeave = () => {
    setControls(false);
  };

  useEffect(() => {
    videoRef.current.play().catch((error) => {
      console.log("Autoplay failed:", error);
    });
  }, [videoRef.current]);

  return (
    <div
      className={`${
        index === 2 || index === 3 || index === 4
          ? "col-span-1 md:col-span-2"
          : "col-span-1 md:col-span-3"
      } `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="w-full rounded-lg "
        controls={controls}
        muted
        loop
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="text-center py-2 font-label text-neutral-700">{title}</h3>
    </div>
  );
};

export default VideoPlayer;
