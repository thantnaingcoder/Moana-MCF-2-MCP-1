'use client'

import Toys1 from "../../assets/products-images/toys/t1.png";
import Toys2 from "../../assets/products-images//toys/t2.png";
import Toys3 from "../../assets/products-images/toys/t3.png";
import Toys4 from "../../assets/products-images/toys/t4.png";
import * as React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Store } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import PageLayout from "../PageLayout";
import PrimaryButton from '../PrimaryButton'
const MoanaToys = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const previousSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? productData.length - 1 : prev - 1))
    }
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === productData.length - 1 ? 0 : prev + 1))
    }
  
  return (
    <PageLayout>
      <div className=" my-20">
     

      <div className="md:grid  lg:grid-cols-3 gap-5 ">
        {/* Image Slider */}
        <div className="m-1 relative col-span-1  rounded-lg">
          <div className="relative aspect-square">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 ,x: 40 }}
                animate={{ opacity: 1 ,x: 0 }}
                exit={{ opacity: 0 , }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={productData[currentSlide].image}
                  alt={productData[currentSlide].title}
                  width={400}
                  height={400}
                  className="md:w-full md:h-full max-w-[300px] md:max-w-full mx-auto object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

       
         
        </div>

        {/* Product Details */}
        <div className="relative md:ms-10 space-y-6 py-5 col-span-1 md:col-span-2">
        {/* <AnimatePresence mode="wait">
           <motion.div 
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0,  }}
              transition={{ duration: 0.5 }} >
                <h2 className="text-4xl mb-10 font-heading text-gradient  ">
                  Moana Toys
                </h2>
                
              </motion.div>
              </AnimatePresence> */}

       <div className="flex justify-between items-center mb-16">
        <h1 className=" text-3xl md:text-5xl font-heading text-gradient ">MOANA TOYS</h1>
         <PrimaryButton>Store</PrimaryButton>
       </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
             

              {/* <p className="text-gray-600 text-lg">
                {productData[currentSlide].description}
              </p> */}

                <h3 className="text-3xl text-gradient font-label"> {productData[currentSlide].title}</h3>
              <div className="mx-10 md:mx-20 md:space-y-4">
                <ul className="space-y-3 text-gray-600">
                  {productData[currentSlide].features.map((feature, index) => (
                    <p key={index} className="flex items-start text-sm md:text-base gap-2 text-justify">
                       {feature}
                    </p>
                  ))}
                </ul>
              </div>

              
            </motion.div>
          </AnimatePresence>

          <div className=" absolute bottom-0 md:bottom-10  md:translate-x-1/3  flex gap-5 md:gap-20">
            {productData.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-20  transition-colors ${
                  currentSlide === index ? 'bg-[#2B95CE]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className=" absolute left-0 top-1/2 -translate-y-1/2 "
            onClick={previousSlide}
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className=" absolute right-0 md:right-20 top-1/2 -translate-y-1/2 "
            onClick={nextSlide}
          >
            <ChevronRight className="h-10 w-10" />
          </Button>

        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default MoanaToys;



export const productData = [
  {
    id: 1,
    image: Toys1,
    title: "Moana Adventure Doll",
    description:
      "Bring the adventurous spirit of Moana to life with this beautifully designed doll. Perfect for children who love to imagine and recreate their favorite scenes from the movie.",
    features: [
      "Authentic Design: Detailed features inspired by Moana's iconic look in the film.",
      "Poseable Arms and Legs: Enables creative play and dynamic storytelling.",
      "High-Quality Materials: Durable and safe for kids of all ages.",
    ],
  },
  {
    id: 2,
    image: Toys2,
    title: "Moana's Ocean Voyager Set",
    description:
      "Set sail on imaginative adventures with this complete ocean voyager playset, featuring Moana and her boat from the movie.",
    features: [
      "Complete Set: Includes Moana figure, her canoe, and ocean-themed accessories.",
      "Interactive Play: Rotating sail and secret storage compartments for treasures.",
      "Durable and Safe: Designed for long-lasting play and endless fun.",
    ],
  },
  {
    id: 3,
    image: Toys3,
    title: "Heart of Te Fiti Playset",
    description:
      "Unlock the magic of Te Fiti with this enchanting playset, featuring a light-up Heart of Te Fiti and interactive island effects.",
    features: [
      "Light-Up Heart: Glows to replicate the magical Heart of Te Fiti.",
      "Tropical Island Scenery: Includes miniature trees, rocks, and figurines.",
      "Perfect for Fans: Captures the mystical charm of the movie for creative play.",
    ],
  },
  {
    id: 4,
    image: Toys4,
    title: "Maui Shape Shifter Action Figure",
    description:
      "Bring Maui's legendary shape-shifting abilities to life with this action-packed figure, complete with his magical fish hook.",
    features: [
      "Multiple Transformations: Features various forms Maui takes in the film.",
      "Interactive Features: Includes light and sound effects with the magic hook.",
      "Great for Collectors: A must-have for fans of Disney's Moana.",
    ],
  },
];
;
  
