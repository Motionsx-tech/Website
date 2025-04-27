import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'; // make sure the path is correct!

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#10375C] to-[#1E3A8A] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Brand Section */}
        <div>
          <img src={logo} alt="MotionsX Logo" className="h-36 mb-4" />
          <p className="text-gray-300 font-serif italic">
  Empowering Brands with Creative Design, Digital Marketing, and Innovative Solutions.
</p>

        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <a href="/services" className="hover:underline hover:text-blue-300 transition-all duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline hover:text-blue-300 transition-all duration-300">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline hover:text-blue-300 transition-all duration-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:underline hover:text-blue-300 transition-all duration-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline hover:text-blue-300 transition-all duration-300">
                Blog
              </a>
            </li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-6">Contact</h3>
          <p className="text-gray-300 mb-2">Email: info@motionsx.com</p>
          <p className="text-gray-300 mb-6">Phone: +91 8249292183</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            
            
            <a href="https://www.linkedin.com/company/motionsx-india/" className="hover:scale-125 transition-transform duration-300 text-blue-300" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/motions_xindia/" className="hover:scale-125 transition-transform duration-300 text-blue-300" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 pt-6 border-t border-gray-700">
        <p className="text-gray-400">
          © {new Date().getFullYear()} MotionsX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
