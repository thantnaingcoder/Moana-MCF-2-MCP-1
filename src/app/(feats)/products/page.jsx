import AboutHeroSession from "@/components/about/AboutHeroSession";
import ProductImg from "../../../assets/products-images/productHero.png"
import MoanaToys from "@/components/products/MoanaToys";
import WeeklyPlanner from "@/components/products/WeeklyPlanner";
import Calendar from "@/components/products/Calendar";
import PencilGame from "@/components/products/PencilGame";
import SelfCare from "@/components/products/SelfCare";
const ProductsPage = () => {
  return <>
         <AboutHeroSession photo={ProductImg} page="Products"/>
         <MoanaToys/>
         <WeeklyPlanner/>
         <Calendar/>
         <PencilGame/>
         <SelfCare/>

         </>;
};

export default ProductsPage;
