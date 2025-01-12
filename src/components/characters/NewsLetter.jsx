import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import cta from "../../assets/moana character/cta.png";

const NewsLetter = () => {
  return (
    <div className="relative py-20">
      {/* <div className="absolute inset-0 bg-moana-900 container mx-auto mb-10 rounded-lg" /> */}
      <Image
        src={cta}
        alt="cta Image"
        className="absolute inset-0 container mx-auto rounded-lg h-72"
      />

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white font-heading">
          JOIN MOANA'S ADVENTURE
        </h2>
        <p className="mb-8 text-sky-100 font-label">
          Stream now and experience her epic journey.
        </p>
        <form className="mx-auto flex max-w-md gap-4">
          <div className="relative w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-7 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="absolute top-1/2 right-2 -translate-y-1/2 px-4 py-2 bg-moana-900 text-white font-medium font-heading rounded-md hover:bg-moana-800">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
