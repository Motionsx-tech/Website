import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TawkToChat from "./components/TawkToChat";
import ScrollToTop from "./components/ScrollToTop";
import ProductsSection from "./components/ProductsSection";

// Services Pages
import SEO from "./pages/servicepage/Seo";
import SocialMediaMarketing from "./pages/servicepage/SocialMediaMarketing";
import PerformanceMarketing from "./pages/servicepage/PerformanceMarketing";
import BrandingDesign from "./pages/servicepage/BrandingDesign";
import WebsiteDesignDevelopment from "./pages/servicepage/WebsiteDesignDevelopment";
import ContentMarketing from "./pages/servicepage/ContentMarketing";
import VideoProductionMotionGraphics from "./pages/servicepage/VideoProductionMotionGraphics";
import DigitalStrategyConsulting from "./pages/servicepage/DigitalStrategyConsulting";

// Product Pages
import IVRSystem from "./pages/productpage/IVRSystem";
import HRMS from "./pages/productpage/HRMS";
import CRM from "./pages/productpage/CRM";
import CloudSuite from "./pages/productpage/CloudSuite";
// Blog Components
import BlogList from "./pages/BlogList";
import SeoSkyrocketBusiness from "./pages/posts/SeoSkyrocketBusiness";
import IntegrationOfDigitalMarketing from "./pages/posts/IntegrationOfDigitalMarketing";
import RoleOfSeo from "./pages/posts/RoleOfSeo";
import PersonalizationAndPredictiveAnalytics from "./pages/posts/PersonalizationAndPredictiveAnalytics";
//Pricing
import PricingPage from "./pages/PricingPage"; 
// Importing the logo
import logo from './assets/logo.png';

export default function App() {
  return (
    <Router>
      <TawkToChat />
      <ScrollToTop />
      
      {/* Navbar with Logo */}
      <Navbar logo={logo} />
      
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <div>
            <HeroSection />
            <ServicesSection />
            <ProductsSection />
            <BlogSection />
            <section className="products-section py-20 bg-gray-100">
              {/* You can add other content for this section here */}
            </section>
            <TestimonialsSection />
            <section className="contact-section py-20 bg-white">
              <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
              <p className="text-xl text-center mb-4">We'd love to hear from you!</p>
              <ContactPage />
            </section>
          </div>
        } />

        {/* Product Page Route */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/ivr-system"element={<IVRSystem />} /> 
        <Route path="/products/hrms"element={<HRMS />} />  
        <Route path="/products/crm"element={<CRM />} />
        <Route path="/products/cloud-suite"element={<CloudSuite />} />
        {/* Service Pages */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/branding-design" element={<BrandingDesign />} />
        <Route path="/services/website-development" element={<WebsiteDesignDevelopment />} />
        <Route path="/services/content-marketing" element={<ContentMarketing />} />
        <Route path="/services/video-production" element={<VideoProductionMotionGraphics />} />
        <Route path="/services/digital-strategy" element={<DigitalStrategyConsulting />} />
        
        {/* Contact Page Route */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/seo-skyrocket-business" element={<SeoSkyrocketBusiness />} />
        <Route path="/blog/integration-digital-marketing-life" element={<IntegrationOfDigitalMarketing />} />
        <Route path="/blog/role-of-seo-being-present" element={<RoleOfSeo />} />
        <Route path="/blog/personalization-predictive-analytics" element={<PersonalizationAndPredictiveAnalytics />} />
        {/*Pricing*/}
        <Route path="/pricing" element={<PricingPage />} />

      </Routes>
      
      <Footer />
    </Router>
  );
}
