import CharacterProfile from "@/components/characters/CharacterProfile";
import Footer from "@/components/characters/Footer";
import NewsLetter from "@/components/characters/NewsLetter";
import heroSection from "../../../assets/moana character/heroCharacter.png";
import Image from "next/image";
import vone from "../../../assets/moana character/Voice actor/v1.png";
import vtwo from "../../../assets/moana character/Voice actor/v2.png";
import vthree from "../../../assets/moana character/Voice actor/v3.png";
import vfour from "../../../assets/moana character/Voice actor/v4.png";
import vfive from "../../../assets/moana character/Voice actor/v5.png";
import vsix from "../../../assets/moana character/Voice actor/v6.png";
import Wave from "@/components/Wave";
import Link from "next/link";
import wave from "../../../assets/moana character/wave.png"
import AnimateSection from "@/components/characters/AnimateSection";


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
    <div className="">
      <main>
        <section className=" relative w-full">
          <Image
            className="w-full object-contain   "
            src={heroSection}
            alt="character Hero"
          />

          <div className="absolute flex gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px]  md:text-2xl font-label  ">
            <Link className=" text-gradient" href="/">
              Home
            </Link>
            /<p className=" cursor-pointer text-gradient opacity-50"> Character </p>
          </div>

          <div className=" absolute -bottom-10">
             <Image className="w-[100%] object-contain" src={wave} alt="wave" />
          </div>
        </section>

        <section className="bg-white py-10 mt-5">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-gradient font-heading mb-8">
              Cast (Voice Actor)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {castMembers.map((actor, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center rounded-lg hover:shadow-lg transition-shadow duration-300"
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
        <Wave />
        </section>

        <CharacterProfile />
        {/* <AnimateSection /> */}

        <NewsLetter />
      </main>

      <Footer />
    </div>
  );
};

export default CharactersPage;
