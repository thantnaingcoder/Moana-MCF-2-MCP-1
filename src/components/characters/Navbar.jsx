import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-sky-500">
          MOANA
        </Link>

        <div className="flex gap-8">
          <Link href="/" className="text-gray-600 hover:text-sky-500">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-sky-500">
            About
          </Link>
          <Link href="/characters" className="text-sky-500">
            Characters
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-sky-500">
            Products
          </Link>
          <Link href="/gallery" className="text-gray-600 hover:text-sky-500">
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
