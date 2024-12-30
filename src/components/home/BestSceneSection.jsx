import Image from "next/image";
import PageLayout from "../PageLayout";
import BestSceneMonkey from "@/assets/home/best-scene-monkey.png";
const BestSceneSection = () => {
  return (
    <section className="px-5 xl:px-0">
      <PageLayout>
        <div className="flex items-center gap-5">
          <h1 className="font-heading uppercase text-gradient text-2xl md:text-4xl">
            Best Scenes of moana
          </h1>
          <Image
            src={BestSceneMonkey}
            width={500}
            height={500}
            alt="monkey"
            className="w-20"
          />
        </div>
      </PageLayout>
    </section>
  );
};

export default BestSceneSection;
