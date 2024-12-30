import Image from "next/image";

const CastCard = ({ name, role, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-48 w-48 overflow-hidden rounded-lg">
        {/* <Image src={imageUrl} alt={name} fill className="object-cover" /> */}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
};

export default CastCard;
