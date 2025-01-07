import Image from "next/image";
import sunPhoto from "../../assets/moana character/sun.png";
import section from "../../assets/moana character/character bg.png";
import actorone from "../../assets/moana character/characters/moana.png";
import underwave from "../../assets/moana character/under wave.png";
import OutlineButton from "../OutlineButton";
import PrimaryButton from "../PrimaryButton";

const CharacterProfile = () => {
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 absolute z-10 top-0 right-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-28">
          {/* Character Image */}
          <div className=" ms-24">
            <div className="">
              <Image
                src={actorone}
                alt="Moana character"
                width={200}
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
          </div>

          {/* Character Info */}
          <div className="">
            <h1 className="text-6xl font-bold text-moana-900 tracking-wide font-heading">
              MOANA
            </h1>

            <p className="text-neutral-700 font-label text-nowrap">
              Moana is a determined, positive and energetic individual who is
              the <br /> daughter of the leader of the island of Motunui. She is
              content with her <br /> life on the island but is drawn to the sea. When
              her island is in danger <br /> from a sinister force, Moana leaves her
              familiar surroundings and <br /> ventures out beyond the reef to correct
              a wrong, protect her community, <br /> and discover the truth she has
              been seeking throughout her life.
            </p>

            {/* Character Attributes */}
            <div className="flex gap-10 mt-5">
              <div>
                <h2 className="text-2xl font-semibold font-san">Type</h2>
                <p className="text-neutral-600">Human</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold font-san">Role</h2>
                <p className="text-neutral-600">Hero</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold font-san">Gender</h2>
                <p className="text-neutral-600">Female</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 pt-4">
              <OutlineButton>Back</OutlineButton>
              <PrimaryButton>Next</PrimaryButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CharacterProfile;
