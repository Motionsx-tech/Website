import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

// Import icons from react-icons
import { FcHome, FcServices, FcPackage, FcPhone, FcNews, FcCurrencyExchange } from 'react-icons/fc';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  return (
    <nav className="bg-white bg-opacity-70 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MotionsX Logo" className="h-36 mr-3" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 relative">
          <Link
            to="/"
            className="relative text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out flex flex-col items-center group"
          >
            <span className="w-6 h-6 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FcHome className="w-6 h-6" />
            </span>
            Home
          </Link>

          {/* Services with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <Link
              to="/services"
              className="relative text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out flex flex-col items-center group"
            >
              <span className="w-6 h-6 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FcServices className="w-6 h-6" />
              </span>
              Services
            </Link>
            {showServicesDropdown && (
              <div className="absolute top-full mt-2 w-60 bg-white shadow-xl border border-gray-200 rounded-xl p-3 z-50">
                <div className="flex flex-col gap-2">
                  <Link
                    to="/services/performance-marketing"
                    className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                  >
                    Performance Marketing
                  </Link>
                  <Link
                    to="/services/branding-design"
                    className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                  >
                    Branding & Design
                  </Link>
                  <Link
                    to="/services/social-media-marketing"
                    className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                  >
                    Social Media Marketing
                  </Link>
                  <Link 
                   to="/services/seo"
                   className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                   >
                    Search Engine Optimization
                   </Link>
                   <Link
                   to="/services/website-development"
                   className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                    >
                      Website Development
                    </Link>
                    <Link
                     to="/services/content-marketing"
                     className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                     >
                      Content Marketing
                     </Link>
                     <Link
                     to="/services/video-production"
                     className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                     >
                      Video Production
                     </Link>
                     <Link
                     to="/services/digital-strategy"
                      className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                      >
                        Digital Strategy & Consulting
                      </Link>
                </div>
              </div>
            )}
          </div>

          {/* Products with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <Link
              to="/products"
              className="relative text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out flex flex-col items-center group"
            >
              <span className="w-6 h-6 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FcPackage className="w-6 h-6" />
              </span>
              Products
            </Link>
            {showProductsDropdown && (
              <div className="absolute top-full mt-2 w-60 bg-white shadow-xl border border-gray-200 rounded-xl p-3 z-50">
                <div className="flex flex-col gap-2">
                  <Link
                    to="/products/ivr-system"
                    className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                  >
                    IVR System
                  </Link>
                  <Link
                    to="/products/hrms"
                    className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                  >
                    HRMS
                  </Link>
                  <Link
                    to="/products/crm"
                    className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                  >
                    CRM
                  </Link>
                  <Link
                    to="/products/smartxalgo"
                    className="px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-white/40 hover:scale-105 transition-all duration-200 ease-in-out font-semibold"
                    >
                      SmartXalgo
                      </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="relative text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out flex flex-col items-center group"
          >
            <span className="w-6 h-6 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FcPhone className="w-6 h-6" />
            </span>
            Contact
          </Link>

          <Link
            to="/blog"
            className="relative text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out flex flex-col items-center group"
          >
            <span className="w-6 h-6 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FcNews className="w-6 h-6" />
            </span>
            Blog
          </Link>

          <Link
            to="/pricing"
            className="relative text-gray-700 font-semibold hover:text-blue-600 py-2 px-4 rounded-md transition-all duration-300 ease-in-out flex flex-col items-center group"
          >
            <span className="w-6 h-6 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FcCurrencyExchange className="w-6 h-6" />
            </span>
            Pricing
          </Link>
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
        <div className="md:hidden bg-white pb-4 px-4 flex flex-col gap-3 border-t border-gray-300">
          <Link
            to="/"
            className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FcHome className="w-6 h-6 inline-block mr-1" />
            Home
          </Link>
          <Link
            to="/services"
            className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FcServices className="w-6 h-6 inline-block mr-1" />
            Services
          </Link>
          <Link
            to="/products"
            className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FcPackage className="w-6 h-6 inline-block mr-1" />
            Products
          </Link>
          <Link
            to="/contact"
            className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FcPhone className="w-6 h-6 inline-block mr-1" />
            Contact
          </Link>
          <Link
            to="/blog"
            className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FcNews className="w-6 h-6 inline-block mr-1" />
            Blog
          </Link>
          <Link
            to="/pricing"
            className="py-2 text-gray-700 font-semibold hover:text-blue-600 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FcCurrencyExchange className="w-6 h-6 inline-block mr-1" />
            Pricing
          </Link>
        </div>
      )}
    </nav>
  );
}
