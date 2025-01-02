import J1 from "../../assets/about-images/journey/image_88-removebg-preview 1.png"
import J2 from "../../assets/about-images/journey/image_93-removebg-preview 1.png"
import J3 from "../../assets/about-images/journey/image_101.png"
import J4 from "../../assets/about-images/journey/image_109.png"
import J5 from "../../assets/about-images/journey/image_110.png"
import J6 from "../../assets/about-images/journey/image_112.png"
import PageLayout from "../PageLayout";
import Image from "next/image"
const Journey = () => {
   const journeyList = [
    {
      id: 1,
      title: "Call to Adventure",
      description: "Learns she is chosen to restore Te Fiti’s heart and save her island.",
    },
    {
      id: 2,
      title: "Departure",
      description: "Defies her father’s restrictions and sets sail beyond the reef.",
    },
    {
      id: 3,
      title: "Meeting Maui",
      description: "Convinces the demigod Maui to join her mission despite his initial reluctance.",
    },
    {
      id: 4,
      title: "Challenges:",
      description: "Faces battles with Kakamora pirates and retrieves Maui’s fishhook from Tamatoa.",

    },
    {
      id: 5,
      title: "Growth",
      description: "Learns wayfinding and discovers her inner strength.",
    },
    {
      id: 6,
      title: "Climactic Confrontation",
      description: "Realizes Te Kā is Te Fiti without her heart and restores it, healing the world.",
    },
    {
      id: 7,
      title: "Return Home:",
      description: "Inspires her people to embrace voyaging and becomes their leader.",
    },
  
  
  
  
  
  ]
  return <PageLayout>
       <div>
       <div className="mb-20" >
          <h1 className="text-4xl text-center font-heading  md:text-5xl font-bold text-gradient tracking-wide">
          Moana’s Journey
          </h1>
        </div>
        

        <div className=" grid md:grid-cols-2 gap-5">

        <div className=" relative w-full container min-h-[400px] ">
        <iframe className=" w-full h-full " src="https://lottie.host/embed/417a6f83-9817-4f0f-806c-cd4c1a29c682/fiaEXxVwr9.lottie" />
        <Image src={J1} alt="J1" className=" absolute md:-left-10 -top-10  object-contain "/>
        <Image src={J2} alt="J2" className=" absolute md:left-5 left-10 top-20 md:top-32  size-28 md:size-auto   object-contain "/>
        <Image src={J4} alt="J4" className=" absolute left-40 md:left-52 md:top-36 top-20 size-28 md:size-auto   object-contain "/>
        <Image src={J5} alt="J5" className=" absolute left-52 md:left-52 top-72    size-28 md:size-auto  object-contain "/>  
        <Image src={J3} alt="J3" className=" absolute  left-60 bottom-36  size-20 md:size-auto  object-contain "/>
        <Image src={J6} alt="J6" className=" absolute left-60 bottom-0  size-20 md:size-auto  object-contain "/>
        </div>

         <div>
          {journeyList.map((item) => (
            <JourneyGrid key={item.id} journeyList={item} />
          ))}
         </div>
          
        </div>

  </div>;

  </PageLayout>
};

export default Journey;



const JourneyGrid = ({ journeyList }) => {
  return <div>
       <div className="mb-4 border-b border-[#D4D4D4] pb-5">
          <h1 className="text-[24px]  font-heading leading-[28px] mb-2    text-gradient tracking-wide">
          {journeyList.title}
          </h1>
          <p className="text-[16px]">{journeyList.description}</p>
        </div>
        </div>;
};

        
 