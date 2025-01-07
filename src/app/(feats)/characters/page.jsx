
import CharacterProfile from "@/components/characters/CharacterProfile";
import Footer from "@/components/characters/Footer";
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
    <div className="min-h-screen">
      <main>
        <section className="relative min-h-[400px]">
          {/* Background Image */}
          <Image
            src={heroSection} // Replace with the actual image path
            alt="Hero Background"
            objectPosition="center"
            className="z-0"
            priority // Optional: Preloads image for better performance
          />
          <div className="container mx-auto px-4 py-16 absolute top-36 font-label right-0">
            <h1 className="text-center text-4xl font-bold text-moana-700">
              Home / Characters
            </h1>
          </div>
        </section>
        {/* <WaveDivider /> */}

        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-bold text-moana-700 font-heading mb-8">
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
                  <p className="text-sm text-neutral-600 font-heading">{actor.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <WaveDivider /> */}
        <CharacterProfile/>

        <NewsLetter />
      </main>

      <Footer />
    </div>
  );
};

export default CharactersPage;
