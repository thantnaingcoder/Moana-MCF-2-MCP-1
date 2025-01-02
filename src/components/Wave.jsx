
import Image from "next/image"
import WavePng from "../assets/about-images/Vector (1).png"
const Wave = ({ className }) => {
  return (
    <div className="w-full">
      <Image src={WavePng} className={`${className} w-full object-contain`} alt="wave" />
    </div>
  );
};

export default Wave;
 