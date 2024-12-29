import Image from "next/image";
import Logo from "../assets/home-logo.png";
import PageLayout from "./PageLayout";

import Link from 'next/link';
const Navbar = () => {
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
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/characters" className="hover:text-gray-400">
              Characters
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-400">
              Products
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-400">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
       </PageLayout>
  
         
         
         
         </>;
};

export default Navbar;
