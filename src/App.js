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
import SmartXalgo from "./pages/productpage/SmartXalgo";

// Blog Components
import BlogList from "./pages/BlogList";
import SeoSkyrocketBusiness from "./pages/posts/SeoSkyrocketBusiness";
import IntegrationOfDigitalMarketing from "./pages/posts/IntegrationOfDigitalMarketing";
import RoleOfSeo from "./pages/posts/RoleOfSeo";
import PersonalizationAndPredictiveAnalytics from "./pages/posts/PersonalizationAndPredictiveAnalytics";
import WebsiteAndDigitalMarketing from "./pages/posts/WebsiteAndDigitalMarketing";
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
            
            <TestimonialsSection />
            <section>
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
        <Route path="/products/smartxalgo"element={<SmartXalgo />} />
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
        <Route path="/blog/website-boost-digital-marketing" element={<WebsiteAndDigitalMarketing />} />
        {/*Pricing*/}
        <Route path="/pricing" element={<PricingPage />} />

      </Routes>
      
      <Footer />
    </Router>
  );
}
