"use client";
import Image from "next/image";
import sunPhoto from "../../assets/moana character/sun.png";
import section from "../../assets/moana character/character bg.png";
import underwave from "../../assets/moana character/under wave.png";
import OutlineButton from "../OutlineButton";
import PrimaryButton from "../PrimaryButton";
import moana from "../../assets/moana character/characters/moana.png";
import mauwi from "../../assets/moana character/characters/mauwi.png";
import pig from "../../assets/moana character/characters/pig.png";
import han from "../../assets/moana character/characters/han.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const CharacterProfile = () => {
  const castMembers = [
    {
      id: 1,
      description:
        "Moana is a determined, positive, and energetic individual who is the daughter of the leader of the island of Motunui. She is content with her life on the island but feels a deep connection to the sea. When her island is endangered by a sinister force, Moana ventures beyond the reef to correct a wrong, protect her community, and discover the truth she has been seeking throughout her life.",
      name: "Auli'i Cravalho",
      role: "Moana",
      gender: "Female",
      img: moana, // Replace with the appropriate image file or URL
    },
    {
      id: 2,
      description:
        "Maui is a charismatic and larger-than-life demigod with the power to shape-shift and control the wind and sea. He initially comes across as selfish and egotistical but proves to have a deep sense of responsibility and courage. Maui joins Moana on her journey to restore the heart of Te Fiti and reclaim his place among the gods.",
      name: "Dwayne Johnson",
      role: "Maui",
      gender: "Male",
      img: mauwi, // Replace with the appropriate image file or URL
    },
    // {
    //   id: 3,
    //   description:
    //     "Gramma Tala is Moana's wise and eccentric grandmother who serves as her mentor and confidant. She is deeply connected to the ocean and encourages Moana to follow her heart and embrace her destiny. Gramma Tala's love and guidance inspire Moana to undertake her epic journey.",
    //   name: "Rachel House",
    //   role: "Gramma Tala",
    //   gender: "Female",
    //   img: pig, // Replace with the appropriate image file or URL
    // },
    // {
    //   id: 4,
    //   description:
    //     "Chief Tui is Moana’s protective father and the leader of Motunui. While he wants the best for his people, he discourages Moana’s longing to explore beyond the reef, believing it to be dangerous. Despite their differences, he loves Moana deeply and supports her in his own way.",
    //   name: "Temuera Morrison",
    //   role: "Chief Tui",
    //   gender: "Male",
    //   img: han, // Replace with the appropriate image file or URL
    // },

    // Add more cast members here...
  ];

  return (
    <div className="relative mb-10">
      <Image
        src={section}
        alt="Background Image"
        objectFit="cover"
        objectPosition="center"
        className=" h-[500px] w-full"
      />
      {/* Decorative Elements */}
      <div className="absolute left-8 top-8 w-24 h-24">
        <Image
          src={sunPhoto}
          alt="Sun decoration"
          width={96}
          height={96}
          className="text-yellow-400"
        />
      </div>

      <main className="container mx-auto px-4 py-12 absolute z-10 top-0 right-0">
        <div className="max-w-6xl">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={50}
            slidesPerView={1}
          >
            {castMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="flex gap-20">
                  {/* Character Photos */}
                  <div className="gap-10 ms-20">
                    <Image
                      src={member.img}
                      alt="character"
                      width={700}
                      height={100}
                    />
                    <Image
                      src={underwave}
                      alt="wave"
                      width={200}
                      height={10}
                      className="h-12 -mt-4"
                    />
                  </div>
                  {/* Character Info */}
                  <div className="mt-20">
                    <h1 className="text-6xl font-bold text-gradient tracking-wide font-heading">
                      {member.role.toUpperCase()}
                    </h1>
                    <p className="text-neutral-700 font-label line-clamp-4">
                      {member.description}
                    </p>
                    {/* Character Details */}
                    <div className="flex gap-10 mt-5">
                      <div>
                        <h2 className="text-2xl font-semibold font-san">
                          Type
                        </h2>
                        <p className="text-neutral-600">Human</p>
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold font-san">
                          Role
                        </h2>
                        <p className="text-neutral-600">{member.role}</p>
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold font-san">
                          Gender
                        </h2>
                        <p className="text-neutral-600">{member.gender}</p>
                      </div>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-4">
                      <button className="swiper-button-prev px-4 py-2 bg-gray-200 rounded-md">
                        Back
                      </button>
                      <button className="swiper-button-next px-4 py-2 bg-blue-500 text-white rounded-md">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default CharacterProfile;
