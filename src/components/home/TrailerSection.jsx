import PageLayout from "../PageLayout";
import TrailerBackground from "./TrailerBackground";

const TrailerSection = () => {
  return (
    <section className="px-5 xl:px-0 ">
      {/* <PageLayout> */}
      <h1 className="mb-5 text-center text-gradient uppercase text-3xl font-heading ">
        Watch Trailer
      </h1>

      <TrailerBackground />
      {/* </PageLayout> */}
    </section>
  );
};

export default TrailerSection;
