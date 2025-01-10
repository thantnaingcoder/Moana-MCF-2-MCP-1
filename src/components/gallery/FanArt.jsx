import PageLayout from "../PageLayout";
import F1 from "../../assets/gallery-images/fan-art/f1.png";
import F2 from "../../assets/gallery-images/fan-art/f2.png";
import F3 from "../../assets/gallery-images/fan-art/f3.png";
import F4 from "../../assets/gallery-images/fan-art/f4.png";
import F5 from "../../assets/gallery-images/fan-art/f5.png";
import F6 from "../../assets/gallery-images/fan-art/f6.png";
import F7 from "../../assets/gallery-images/fan-art/f7.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const FanArt = () => {

    const fanArts = [F1,F2,F3,F4,F5,F6,F7];
  return (
    <PageLayout>
      <div className=" my-10">
        <h1 className=" text-3xl md:text-5xl font-heading text-gradient mb-10 ">
        Fan art gallery
        </h1>

             <Carousel
                       opts={{
                         align: "start",
                       }}
                       className="w-full "
                     >
                       <CarouselContent>
                         {fanArts.map((fanArt, index) => (
                           <CarouselItem
                             key={index}
                             className=" md:basis-1/2 lg:basis-1/3"
                           >
                             <CardContent className="h-full !p-0 flex flex-col justify-between">
                               <div className=" w-full h-full">
                                 <div className="relative w-full h-[300px] md:h-[400px]">
                                
                                   <Image
                                     src={fanArt}
                                     width={3840}
                                     height={2160}
                                     alt="fan art"
                                     className="w-full h-full object-cover object-center"
                                   />
                                 </div>
                               </div>
                             </CardContent>
                           </CarouselItem>
                         ))}
                       </CarouselContent>
                       <div className=" flex   justify-center mt-6 md:mt-10 gap-5">
                         <CarouselPrevious />
                         <CarouselNext />
                       </div>
                     </Carousel>
      </div>
    </PageLayout>
  );
};

export default FanArt;
