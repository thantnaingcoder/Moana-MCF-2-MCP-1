import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-moana-950 py-12 text-sky-100">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-lg font-semibold">Follow us</h3>
          <div className="flex justify-center gap-4">
            {["facebook", "twitter", "youtube", "instagram"].map((social) => (
              <Link
                key={social}
                href={`https://${social}.com`}
                className="rounded-lg bg-neutral-600 p-2 hover:bg-sky-700"
              >
                <span className="sr-only">{social}</span>
                <div className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <div className="flex  gap-3 justify-center mt-7">
          <hr className="  w-32 items-center" />
          <hr className=" w-32 items-center" />
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/characters" className="hover:text-white">
            Characters
          </Link>
          <Link href="/products" className="hover:text-white">
            Products
          </Link>
          <Link href="/gallery" className="hover:text-white">
            Gallery
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
