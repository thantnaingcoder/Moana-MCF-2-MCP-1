import Link from "next/link";
import { LuFacebook, LuYoutube, LuInstagram, LuLinkedin } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import PageLayout from "./PageLayout";
const Footer = () => {
  const socialLinks = [
    {
      name: "facebook",
      href: "https://facebook.com",
      icon: (
        <LuFacebook className="size-4 sm:size-5 bg-neutral-600 fill-neutral-100 stroke-none" />
      ),
    },
    {
      name: "instagram",
      href: "https://instagram.com",
      icon: <LuInstagram className="size-4 sm:size-5 bg-neutral-600  " />,
    },
    {
      name: "twitter",
      href: "https://twitter.com",
      icon: (
        <BsTwitterX className="size-4 sm:size-5 bg-neutral-600 fill-neutral-100 stroke-none" />
      ),
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com",
      icon: (
        <LuLinkedin className="size-4 sm:size-5 bg-neutral-600 fill-neutral-100 stroke-none" />
      ),
    },
    {
      name: "youtube",
      href: "https://youtube.com",
      icon: <LuYoutube className="size-4 sm:size-5 bg-neutral-600  " />,
    },
  ];
  return (
    <footer className=" bg-moana-950 py-12 text-white mt-auto">
      {/* <div className="container mx-auto px-4"> */}
      <PageLayout>
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-lg md:text-2xl  font-label ">Follow us</h3>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ name, href, icon }) => (
              <Link
                key={name}
                href={href}
                className="flex justify-center items-center rounded bg-neutral-600 p-2 hover:bg-neutral-600"
                aria-label={name}
              >
                <p className="sr-only">{name}</p>
                <p>{icon}</p>
              </Link>
            ))}
          </div>
          <div className="flex  gap-3 justify-center mt-7">
            <hr className="  w-32 items-center" />
            <hr className=" w-32 items-center" />
          </div>
        </div>
        <div className="  flex justify-center gap-5 md:gap-10 lg:gap-14 ">
          <Link href="/" className="hover:text-white max-[320px]:text-xs sm:text-base text-sm ">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-white max-[320px]:text-xs sm:text-base text-sm "
          >
            About
          </Link>
          <Link
            href="/characters"
            className="hover:text-white max-[320px]:text-xs sm:text-base text-sm "
          >
            Characters
          </Link>
          <Link
            href="/products"
            className="hover:text-white max-[320px]:text-xs sm:text-base text-sm "
          >
            Products
          </Link>
          <Link
            href="/gallery"
            className="hover:text-white sm:text-base text-sm "
          >
            Gallery
          </Link>
        </div>
      </PageLayout>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
