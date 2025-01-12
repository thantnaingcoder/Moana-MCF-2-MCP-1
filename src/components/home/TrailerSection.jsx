import MoanaSailBoat from "./MoanaSailBoat";
import TrailerBackground from "./TrailerBackground";

const TrailerSection = () => {
  return (
    <section>
      <h1 className="mb-5 text-center text-gradient uppercase text-3xl font-heading ">
        Watch Trailer
      </h1>

      <TrailerBackground />
      <MoanaSailBoat />
    </section>
  );
};

export default TrailerSection;
