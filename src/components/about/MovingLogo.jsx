"use client";
import Espn from "../../assets/about-images/logo/espn700 1.png";
import Huhu from "../../assets/about-images/logo/Hulu-footer700 1.png";
import Marvel from "../../assets/about-images/logo/marvel700 1.png";
import Fx from "../../assets/about-images/logo/FX_BrandQuilt_Logo_700.2 1.png";
import StarWar from "../../assets/about-images/logo/StarWars700 1.png";
import Abc from "../../assets/about-images/logo/abc-logo-v2-gray700 1.png";
import Ng from "../../assets/about-images/logo/NG_logo_greyscale700 1.png";


import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import PageLayout from "../PageLayout";

const MovingLogo = () => {
  const containerRef = useRef(null);

  const Logos = [
    {
      icon: Espn,
    },
    {
      icon: Huhu,
    },
    {
      icon: Marvel,
    },
    {
      icon: Fx,
    },
    {
      icon: StarWar,
    },

    {
      icon: Abc,
    },
    {
      icon: Ng,
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    // const containerWidth = container.offsetWidth

    let distance = 0;
    let animationId;

    const animate = () => {
      distance += 0.5;
      if (distance >= scrollWidth / 3) {
        distance = 0;
      }
      container.style.transform = `translateX(-${distance}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <PageLayout>
    <div className="relative w-full overflow-hidden py-3 md:py-6  ">
      <div ref={containerRef} className="flex w-max">
        {[...Logos, ...Logos, ...Logos].map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className=" flex min-w-[100px] border-1 dark:bg-inherit backdrop-blur-lg  dark:border-[#1b2c68a0] dark:md:border-none bg-inherit  flex-col items-center justify-center rounded-xl  p-3 md:p-6  dark:shadow-xl duration-200 transition-colors dark:md:hover:shadow-blue-800 mx-1 "
          >
            <div className="  md:w-32  w-12 ">
              <Image src={tech.icon} alt={`${tech.name} icon`} />
            </div>
          </div>
        ))}
      </div>

      {/* Add a gradient overlay to soften the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#f7f7f7] hidden md:block  dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#f7f7f7] hidden md:block   dark:from-black" />
    </div>
    </PageLayout>
  );
};

export default memo(MovingLogo); 