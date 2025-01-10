import PageLayout from "../PageLayout";
import S1Png from "../../assets/gallery-images/movie-scene/s1.png";
import S2Png from "../../assets/gallery-images/movie-scene/s2.png";
import S3Png from "../../assets/gallery-images/movie-scene/s3.png";
import S4Png from "../../assets/gallery-images/movie-scene/s4.png";
import S5Png from "../../assets/gallery-images/movie-scene/s5.png";
import S6Png from "../../assets/gallery-images/movie-scene/s6.png";
import S7Png from "../../assets/gallery-images/movie-scene/s7.png";
import S8Png from "../../assets/gallery-images/movie-scene/s8.png";
import S9Png from "../../assets/gallery-images/movie-scene/s9.png";
import Image from "next/image";

const MovieScene = () => {
  return (
    <PageLayout>
      <div className=" my-10">
        <h1 className=" text-3xl md:text-5xl font-heading text-gradient mb-10 ">
        Movie scence
        </h1>
        
       
          
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
    
    <div className=" col-span-4 md:col-span-2">
        <Image className="h-full w-full rounded-lg object-cover" src={S1Png} alt="1" />
    </div>
    <div className=" hidden md:block  ">
        <Image className="h-full w-full rounded-lg" src={S2Png} alt="2" />
    </div>
    <div className=" " >
        <div className="grid grid-cols-1 gap-4">
        <Image className="h-full w-full rounded-lg" src={S3Png} alt="3" />
        <Image className="h-full w-full rounded-lg" src={S4Png} alt="4" />
        </div>
    </div>

    <div className=" col-span-1">
        <Image className="h-full w-full rounded-lg" src={S5Png} alt="5" />
      </div>

      <div className=" col-span-3 gap-4">
         <div className=" grid grid-cols-3 gap-4">
            <div>
              <Image className="h-full w-full rounded-lg" src={S6Png} alt="6" />
            </div>
            <div className=" col-span-2">
              <Image className="h-full w-full rounded-lg" src={S7Png} alt="7" />
            </div>
            <div className=" col-span-2">
              <Image className="h-full w-full rounded-lg" src={S8Png} alt="8" />
            </div>
            <div >
              <Image className="h-full w-full rounded-lg" src={S9Png} alt="9" />
            </div>



         </div>

       

      </div>

      
   </div>

   
     

      
     
   

        

      </div>
    </PageLayout>
  );
};

export default MovieScene;
