import AboutHeroSession from "@/components/about/AboutHeroSession";
import Awards from "@/components/about/Awards";
import Journey from "@/components/about/Journey";
import MakingOfTheMovie from "@/components/about/MakingOfTheMovie";
import MovingLogo from "@/components/about/MovingLogo";
import Review from "@/components/about/Review";
import Wave from "@/components/Wave";
import AboutHeroImage from "../../../assets/about-images/about-hero.png";
const AboutPage = () => {
  return (
    <>
    <AboutHeroSession photo={AboutHeroImage}  page="About"/>
    <MovingLogo/>
    <Awards/>
    <Wave />
    <MakingOfTheMovie/>
    <Journey/>
    <Review/>
    </>

  )
          
  
         
};

export default AboutPage;
