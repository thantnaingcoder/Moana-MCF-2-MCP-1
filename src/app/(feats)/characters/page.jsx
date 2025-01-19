import CharacterProfile from "@/components/characters/CharacterProfile";

import NewsLetter from "@/components/characters/NewsLetter";
import WaveDivider from "@/components/characters/WaveDivider";
import heroSection from "../../../assets/moana character/heroCharacter.png";
import Image from "next/image";
import vone from "../../../assets/moana character/Voice actor/v1.png";
import vtwo from "../../../assets/moana character/Voice actor/v2.png";
import vthree from "../../../assets/moana character/Voice actor/v3.png";
import vfour from "../../../assets/moana character/Voice actor/v4.png";
import vfive from "../../../assets/moana character/Voice actor/v5.png";
import vsix from "../../../assets/moana character/Voice actor/v6.png";
import AboutHeroSession from "@/components/about/AboutHeroSession";
import PageLayout from "@/components/PageLayout";

const CharactersPage = () => {
  const castMembers = [
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      image: vone,
    },
    {
      name: "Auli'i Cravalho",
      role: "MOANA",
      image: vtwo,
    },
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      image: vthree,
    },
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      image: vfour,
    },
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      image: vfive,
    },
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      image: vsix,
    },
    // Add more cast members...
  ];
  return (
    <>
      <AboutHeroSession photo={heroSection} page="Characters" />
      {/* <WaveDivider /> */}

      <PageLayout>
        <div className=" relative mx-auto py-4">
          <h2 className="text-center text-2xl font-bold text-moana-700 font-heading mb-8">
            Cast (Voice Actor)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {castMembers.map((actor, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-lg transition-shadow duration-300"
              >
                <Image
                  src={actor.image}
                  alt={actor.name}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-md"
                />

                <h3 className="text-lg font-bold text-neutral-800 font-heading">
                  {actor.name}
                </h3>
                <p className="text-sm text-neutral-600 font-heading">
                  {actor.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <WaveDivider /> */}
        <CharacterProfile />

        <NewsLetter />
      </PageLayout>
    </>
  );
};

export default CharactersPage;
