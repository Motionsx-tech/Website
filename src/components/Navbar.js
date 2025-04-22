import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-blue-600 font-bold text-xl">
          MotionsX
        </Link>
        <div className="hidden md:flex gap-8">
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link> {/* Change this to Products */}
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 flex flex-col gap-3 border-t">
          <Link to="/services" className="py-2 hover:text-blue-600">Services</Link>
          <Link to="/products" className="py-2 hover:text-blue-600">Products</Link> {/* Change this to Products */}
          <Link to="/contact" className="py-2 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}
