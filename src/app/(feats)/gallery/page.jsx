import AboutHeroSession from "@/components/about/AboutHeroSession";
import GalleryHeroPng from "../../../assets/gallery-images/galleryHero.png";
import MovieScene from "@/components/gallery/MovieScene";
import Wave from "@/components/Wave";
import OstSong from "@/components/gallery/OstSong";
import FanArt from "@/components/gallery/FanArt";
const GalleryPage = () => {
  return <>
         <AboutHeroSession photo={GalleryHeroPng} page="Gallery"/>
         <MovieScene/>
         <Wave/>
         <OstSong/>
         <FanArt/>



         </>;
};

export default GalleryPage;
