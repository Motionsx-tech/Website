export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MotionsX</h3>
            <p>Empowering Brands with Creative Design, Digital Marketing, and Innovative Solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: hello@marketboost.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-6 border-t border-gray-700">
          <p>© 2023 MarketBoost. All rights reserved.</p>
        </div>
      </footer>
    );
  }