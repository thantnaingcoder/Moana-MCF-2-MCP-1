import PenWavePng from "../../assets/products-images/pencil/penWave.png";
import PenGamePng from "../../assets/products-images/pencil/maze.png";
import PageLayout from "../PageLayout";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";

const PencilGame = () => {
  return (
    <PageLayout>
      <div className=" mx-2 md:my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" z-20 order-2 md:order-1 relative">
          <div className="  space-y-8">
            <h1 className=" text-3xl md:text-5xl font-heading text-gradient  ">
              pencil game
            </h1>

            <div className="space-y-5">
              <h3 className="text-3xl text-gradient font-label">
                Moana's Path to Discovery
              </h3>
              <p className="flex items-start text-sm md:text-base gap-2 text-justify">
                Help Moana navigate the vast ocean to find her way back to
                Motunui by tracing the path with your pencil! This fun and
                engaging game challenges players to stay on course while
                improving hand-eye coordination and focus.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-3xl text-gradient font-label">
                How to play
              </h3>
              <p className="flex items-start text-sm md:text-base gap-2 text-justify">
                Start up: Players must start green arrow point Trace the Path:
                Players must carefully trace along the path Avoid Obstacles:
                Stay within the lines and can’t pass object line Time Challenge
                (Optional): Add a timer to race against the clock
              </p>
            </div>

            <PrimaryButton>Download pdf</PrimaryButton>
          </div>
          <Image
            className=" absolute bottom-10 -right-5 opacity-30  "
            src={PenWavePng}
            alt="Ass2"
          />
        </div>

        <div className="md:relative order-1 md:order-2 w-full h-full flex justify-center md:justify-end">
          <Image
            className="  max-w-[70%] md:max-w-full "
            src={PenGamePng}
            alt="gamer"
          />
          {/* <Image className=" hidden md:block md:absolute -top-20 -right-20" src={FlowerAss} alt="flower"  /> */}
        </div>
      </div>
    </PageLayout>
  );
};

export default PencilGame;
