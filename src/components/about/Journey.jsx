import JsonToAnimation from "../JsonToAnimation";
import JourneyAnimation from "../../assets/about-images/ass-json/test.json"
import PageLayout from "../PageLayout";
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
        <div className=" mx-auto">
          <JsonToAnimation jsonData={JourneyAnimation}  />

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

        
 