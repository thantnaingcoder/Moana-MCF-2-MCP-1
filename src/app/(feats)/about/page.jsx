import AboutHeroSession from "@/components/about/AboutHeroSession";
import Awards from "@/components/about/Awards";
import Journey from "@/components/about/Journey";
import MakingOfTheMovie from "@/components/about/MakingOfTheMovie";
import MovingLogo from "@/components/about/MovingLogo";
import Review from "@/components/about/Review";
import Wave from "@/components/Wave";

const AboutPage = () => {
  return (
    <>
    <AboutHeroSession/>
    <MovingLogo/>
    <Awards/>
    <Wave className={"my-10"}/>
    <MakingOfTheMovie/>
    <Journey/>
    <Review/>
    </>

  )
          
  
         
};

export default AboutPage;
