import AboutHeroSession from "@/components/about/AboutHeroSession";
import ProductImg from "../../../assets/products-images/productHero.png"
import MoanaToys from "@/components/products/MoanaToys";
import WeeklyPlanner from "@/components/products/WeeklyPlanner";
const ProductsPage = () => {
  return <>
         <AboutHeroSession photo={ProductImg} page="Products"/>
         <MoanaToys/>
         <WeeklyPlanner/>

         </>;
};

export default ProductsPage;
