import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";  // This is your products section
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

// You can use more components like Testimonial, Hero, etc.
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

// Import the TawkToChat component
import TawkToChat from "./components/TawkToChat";

export default function App() {
  return (
    <Router>
      <TawkToChat />  {/* Add TawkToChat component here to load chat globally */}
      <Navbar />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <div>
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Products Section */}
            <section className="products-section py-20 bg-gray-100">
              <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
              <ProductList />  {/* Show Product List directly on the Home page */}
            </section>

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Contact Section */}
            <section className="contact-section py-20 bg-white">
              <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
              <p className="text-xl text-center mb-4">We'd love to hear from you!</p>
              <ContactPage />
            </section>
          </div>
        } />

        {/* Product Page Route */}
        <Route path="/products" element={<ProductList />} />  {/* This route will show Product List */}

        {/* Services Page Route */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Contact Page Route */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
