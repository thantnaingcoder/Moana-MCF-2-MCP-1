"use client";
import Image from "next/image";
import Logo from "../assets/home-logo.png";

import PageLayout from "./PageLayout";

import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();
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
  return (
    <>
      <nav className=" mx-auto max-w-7xl w-full ">
        <nav className=" dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src={Logo} className="h-8" alt="Flowbite Logo" />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navbarItem.map((item, index) => (
                  <li key={index} className="md:mr-0">
                    <Link
                      href={item.href}
                      className={` ${
                        pathname === item.href
                          ? "text-moana-500"
                          : "text-gray-400"
                      } block py-2 px-3  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500`}
                      aria-current="page"
                    >
                      {item.name}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
