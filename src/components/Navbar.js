import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-60 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MotionsX Logo" className="h-36 mr-3" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/services" className="text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:scale-110">Services</Link>
          <Link to="/products" className="text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:scale-110">Products</Link>
          <Link to="/contact" className="text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:scale-110">Contact</Link>
          <Link to="/blog" className="text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:scale-110">Blog</Link>
          <Link to="/pricing" className="text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:scale-110">Pricing</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-blue-600 transition-transform duration-300 ease-in-out transform rotate-90" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-600 transition-transform duration-300 ease-in-out transform rotate-0" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-60 pb-4 px-4 flex flex-col gap-3 border-t border-gray-300 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100 backdrop-blur-md">
          <Link to="/services" className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110">Services</Link>
          <Link to="/products" className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110">Products</Link>
          <Link to="/contact" className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110">Contact</Link>
          <Link to="/blog" className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110">Blog</Link>
          <Link to="/pricing" className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110">Pricing</Link>
        </div>
      )}
    </nav>
  );
}
