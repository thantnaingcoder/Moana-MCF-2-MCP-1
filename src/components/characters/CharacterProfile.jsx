import Image from "next/image";
import { Button } from "@/components/ui/button";

const CharacterProfile = ({
  name,
  description,
  type,
  role,
  gender,
  imageUrl,
}) => {
  return (
    <div className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2">
      <div className="relative h-[500px]">
        {/* <Image src={imageUrl} alt={name} fill className="object-contain" /> */}
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-sky-600">{name}</h2>
        <p className="text-lg text-gray-700">{description}</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-sky-50 p-4">
            <h4 className="font-semibold text-sky-900">Type</h4>
            <p className="text-sky-600">{type}</p>
          </div>
          <div className="rounded-lg bg-sky-50 p-4">
            <h4 className="font-semibold text-sky-900">Role</h4>
            <p className="text-sky-600">{role}</p>
          </div>
          <div className="rounded-lg bg-sky-50 p-4">
            <h4 className="font-semibold text-sky-900">Gender</h4>
            <p className="text-sky-600">{gender}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">← Back</Button>
          <Button>Next →</Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
