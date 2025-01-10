import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "facebook", href: "https://facebook.com", icon: <Facebook /> },
    { name: "twitter", href: "https://twitter.com", icon: <Twitter /> },
    { name: "youtube", href: "https://youtube.com", icon: <Youtube /> },
    { name: "instagram", href: "https://instagram.com", icon: <Instagram /> },
  ];
  return (
    <footer className=" bg-moana-950 py-12 text-white mt-auto">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-lg font-semibold">Follow us</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ name, href, icon }) => (
              <Link
                key={name}
                href={href}
                className="rounded-lg bg-neutral-600 p-2 hover:bg-moana-800"
                aria-label={name}
              >
                <span className="sr-only">{name}</span>
                <div className="h-6 w-6">{icon}</div>
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
