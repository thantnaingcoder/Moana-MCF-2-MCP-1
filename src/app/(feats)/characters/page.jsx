import CastCard from "@/components/characters/CastCard";
import CharacterProfile from "@/components/characters/CharacterProfile";
import Footer from "@/components/characters/Footer";
import Navbar from "@/components/characters/Navbar";
import NewsLetter from "@/components/characters/NewsLetter";
import WaveDivider from "@/components/characters/WaveDivider";

const CharactersPage = () => {
  const castMembers = [
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      imageUrl: "/cast-1.jpg",
    },
    {
      name: "Auli'i Cravalho",
      role: "MOANA",
      imageUrl: "/cast-1.jpg",
    },
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      imageUrl: "/cast-1.jpg",
    },
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      imageUrl: "/cast-1.jpg",
    },
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      imageUrl: "/cast-1.jpg",
    },
    {
      name: "AULI'I CRAVALHO",
      role: "MOANA",
      imageUrl: "/cast-1.jpg",
    },
    // Add more cast members...
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar/> */}

      <main>
        <section className="relative min-h-[400px] bg-gradient-to-b from-sky-100 to-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-center text-4xl font-bold text-sky-900">
              Home / Characters
            </h1>
          </div>
          <WaveDivider />
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-sky-900">
              CAST (VOICE ACTOR)
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {castMembers.map((cast, index) => (
                <CastCard key={index} {...cast} />
              ))}
            </div>
          </div>
        </section>

        <WaveDivider />
        <CharacterProfile
          name="MOANA"
          description="Moana is a determined, positive and energetic individual who is the daughter of a chief. She has always been drawn to the ocean. When her island is in danger from a sinister force, Moana leaves her familiar surroundings and ventures out beyond the reef to correct a wrong, protect her community, and discover the truth she has been seeking throughout her life."
          type="Human"
          role="Hero"
          gender="Female"
          imageUrl="/moana-character.png"
        />

        <NewsLetter />
      </main>

      <Footer />
    </div>
  );
};

export default CharactersPage;
