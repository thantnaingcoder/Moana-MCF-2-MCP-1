"use client";
import Image from "next/image";
import Logo from "../assets/home-logo.png";

import PageLayout from "./PageLayout";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navbarItem = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Characters",
      href: "/characters",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
  ];

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <PageLayout>
        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "linear",
          }}
          className=" flex justify-between items-center py-6"
        >
          <div className=" flex items-center space-x-3 rtl:space-x-reverse">
            <Link href={"/"}>
              <Image src={Logo} className="h-8" alt="Flowbite Logo" />
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-12">
            {navbarItem.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`${
                    item.href === pathname
                      ? "text-moana-500 underline underline-offset-8"
                      : "text-gray-400"
                  } hover:text-moana-500 duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden block pr-5 ">
            <button onClick={handleMenuOpen}>
              {isOpen ? (
                <LuX className="size-6" />
              ) : (
                <LuMenu className="size-6" />
              )}
            </button>
          </div>
        </motion.nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navbarItem.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.href === pathname
                        ? "bg-cyan-50 text-cyan-500"
                        : "text-gray-600 hover:bg-gray-50 hover:text-cyan-500"
                    } group flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageLayout>
    </>
  );
};

export default Navbar;
