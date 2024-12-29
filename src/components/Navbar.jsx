"use client";
import Image from "next/image";
import Logo from "../assets/home-logo.png";
import PageLayout from "./PageLayout";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
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

  ]
  return <>

       <PageLayout>
       <nav >
      <div className="container mx-auto flex items-center justify-between py-2 ">
        {/* Logo */}
        <Link href="/" >
          <Image src={Logo} alt="Logo" width={120} height={120} className="mr-2" />
          
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
         {navbarItem.map((item,index) => (
            <li key={index}>
            <Link href={item.href} className={` ${pathname === item.href ? "text-moana-500" : ""}  hover:text-gray-400`}>
              {item.name}
            </Link>
          </li>
         ))}
       
        </ul>
      </div>
    </nav>
       </PageLayout>
  
         
         
         
         </>;
};

export default Navbar;
