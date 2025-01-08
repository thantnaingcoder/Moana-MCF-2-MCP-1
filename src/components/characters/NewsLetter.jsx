import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PrimaryButton from "../PrimaryButton";

const NewsLetter = () => {
  return (
    <div className="relative bg-[url('/ocean-bg.jpg')] bg-cover bg-center py-16">
      <div className="absolute inset-0 bg-moana-900 container mx-auto mb-10 rounded-lg" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          JOIN MOANA'S ADVENTURE
        </h2>
        <p className="mb-8 text-sky-100">
          Stream now and experience her epic journey.
        </p>
        <form className="mx-auto flex max-w-md gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-white"
          />
          <PrimaryButton type="submit" className="bg-neutral-600 hover:bg-neutral-700">
            Subscribe
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
