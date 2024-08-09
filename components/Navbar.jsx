import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className={`${poppins.className} text-white text-2xl font-bold`}>
          Aditya Bajoria
        </div>
        {/* Navigation Links */}
        <div className="space-x-6 flex">
          <Link href="/" className="text-white hover:text-blue-900">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-900">
            About
          </Link>
          <Link
            href="/workexperience"
            className="text-white hover:text-blue-900"
          >
            Work Experience
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-900">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
