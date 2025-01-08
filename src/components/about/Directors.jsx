import Image from "next/image";
import Director1 from "../../assets/about-images/directors/director.png";
import Director2 from "../../assets/about-images/directors/image-1.png";
import Director3 from "../../assets/about-images/directors/image-2.png";
import Director4 from "../../assets/about-images/directors/image.png";
import PageLayout from "../PageLayout";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";



const Directors = () => {

    const Directors = [
        {
            photo: Director1,
            name: "Ron Clements",
            role: "Animator, Director, Screenwriter"
        },
        {
            photo: Director2,
            name: "John Musker",
            role: "Animator, Director, Screenwriter"
        },
        {
            photo: Director3,
            name: "Jared Bush",
            role: "Screenwriter, Director, Producerr"
        },
        {
            photo: Director4,
            name: "Taika Waititi",
            role: " Director, Screenwriter, Actor"
        },
    ]
  return (
    <PageLayout>
      <div className=" p-5 md:my-20 md:p-3 grid  md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Directors.map((director) => (
          <DirectorCard photo={director.photo} name={director.name} role={director.role} />
        ))}  
      </div>
    </PageLayout>
  );
};

export default Directors;

const DirectorCard = ({ photo,name,role}) => {
  return (
    <div>
    <div className=" relative mb-10">
      <Image className="w-full" src={photo} alt="director" />

      <div className=" absolute bottom-0 flex justify-center w-full ">
        <div className=" flex gap-2 translate-y-[50%] ">
          
          <div className=" bg-[#525252] rounded-md p-2 ">
            <FaFacebookF size={20} fill="white" />
          </div>
          <div className=" bg-[#525252] rounded-md p-2 ">
            <FaInstagram size={20} fill="white" />
          </div>
          <div className=" bg-[#525252] rounded-md p-2 ">
            <FaTwitter size={20} fill="white" />
          </div>
          <div className=" bg-[#525252] rounded-md p-2 ">
            <FaYoutube size={20} fill="white" />
          </div>
        </div>
      </div>
    </div>

    <div className=" flex flex-col items-center">
       <h1 className=" text-[#171717] font-bold text-[30px]">{name}</h1>
       <p className=" text-[#262626] text-[16px]">{role}</p>
    </div>
  </div>
  );
};
