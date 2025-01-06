import BestSceneSection from "@/components/home/BestSceneSection";
import BriefMovieSection from "@/components/home/BriefMovieSection";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import TrailerSection from "@/components/home/TrailerSection";

export default function HomePage() {
  return (
    <div>

      <HeroSection />
      <BestSceneSection />
      <BriefMovieSection />
      <TrailerSection />
      <FAQSection />
    </div>
  );
}
