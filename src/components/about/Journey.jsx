import PageLayout from "../PageLayout";

const Journey = () => {
  const journeyList = [
    {
      id: 1,
      title: "Call to Adventure",
      description:
        "Learns she is chosen to restore Te Fiti’s heart and save her island.",
    },
    {
      id: 2,
      title: "Departure",
      description:
        "Defies her father’s restrictions and sets sail beyond the reef.",
    },
    {
      id: 3,
      title: "Meeting Maui",
      description:
        "Convinces the demigod Maui to join her mission despite his initial reluctance.",
    },
    {
      id: 4,
      title: "Challenges:",
      description:
        "Faces battles with Kakamora pirates and retrieves Maui’s fishhook from Tamatoa.",
    },
    {
      id: 5,
      title: "Growth",
      description: "Learns wayfinding and discovers her inner strength.",
    },
    {
      id: 6,
      title: "Climactic Confrontation",
      description:
        "Realizes Te Kā is Te Fiti without her heart and restores it, healing the world.",
    },
    {
      id: 7,
      title: "Return Home:",
      description:
        "Inspires her people to embrace voyaging and becomes their leader.",
    },
  ];
  return (
    <PageLayout>
      <div className=" hidden md:block mb-20">
        <h1 className="text-3xl text-center font-heading  md:text-5xl font-bold text-gradient tracking-wide">
          Moana’s Journey
        </h1>
      </div>

      <div className=" grid md:grid-cols-2 gap-5 md:gap-2">
        <div className=" col-span-1 relative w-full container min-h-full">
          <iframe
            className=" w-full min-h-[300px] h-[95%]"
            src="https://lottie.host/embed/795c332e-8eb0-4244-9681-cb8ab4fbb4d1/VlF5iRUJrt.lottie"
          />
        </div>

        <div className=" col-span-1">
          {journeyList.map((item) => (
            <JourneyGrid key={item.id} journeyList={item} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Journey;

const JourneyGrid = ({ journeyList }) => {
  return (
    <div>
      <div className="mb-4 border-b px-2 border-[#D4D4D4] pb-2 md:pb-5">
        <h1 className=" text-[20px] md:text-[24px]  font-heading md:leading-[28px] mb-1 md:mb-2    text-gradient tracking-wide">
          {journeyList.title}
        </h1>
        <p className="md:text-[16px]">{journeyList.description}</p>
      </div>
    </div>
  );
};
