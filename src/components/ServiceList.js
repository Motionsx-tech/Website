//import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Rank higher. Reach faster. Grow smarter. Our SEO services are designed to put your business right where your customers are looking — on top of Google search results. From technical audits to high-quality content creation, keyword research, on-page & off-page optimization, and link building, we offer end-to-end SEO solutions that drive organic traffic and long-term visibility.",
    icon: "🔍",
    subservices: [
      "Local & Global SEO",
      "E-commerce SEO",
      "Voice Search & Mobile SEO",
      "Competitor & Market Analysis",
    ],
    link: "/services/seo"
  },
  {
    title: "Social Media Marketing (SMM)",
    description: "Where your brand becomes a conversation. We turn your social media handles into powerful engagement and conversion tools. Whether it’s Instagram, Facebook, LinkedIn, or Twitter, we design strategies that tell your brand story, build community, and generate leads through scroll-stopping content, influencer collaborations, and paid campaigns.",
    icon: "📱",
    subservices: [
      "Content Creation & Scheduling",
      "Social Media Advertising",
      "Community Management",
      "Influencer Marketing",
    ],
    link: "/services/social-media-marketing"
  },
  {
    title: "Performance Marketing",
    description: "Every click, every rupee — optimized. From Google Ads to Meta Ads, our performance marketing approach is rooted in analytics and ROI. We help you run high-converting paid campaigns with sharp targeting, creative copy, and real-time optimization.",
    icon: "📊",
    subservices: [
      "PPC (Pay-Per-Click) Campaigns",
      "Google Display & Shopping Ads",
      "Facebook, Instagram & LinkedIn Ads",
      "Funnel Design & A/B Testing",
    ],
    link: "/services/performance-marketing"
  },
  {
    title: "Branding & Design",
    description: "We don’t just design logos. We build legacies. Our creative team builds brands that leave a lasting impression — from visual identity to brand voice. Whether you’re a startup or an established business rebranding, we shape your brand to resonate emotionally and stand out in the crowd.",
    icon: "🎨",
    subservices: [
      "Logo Design & Brand Identity",
      "Brand Strategy & Messaging",
      "Packaging Design",
      "Marketing Collateral (Brochures, Decks, Banners)",
    ],
    link: "/services/branding-design"
  },
  
  {
    title: "Website Design & Development",
    description: "Your digital storefront, built for results. We create high-performance websites that are sleek, secure, responsive, and conversion-focused. From corporate websites to landing pages and e-commerce portals, our team ensures your digital presence is fast, functional, and future-ready.",
    icon: "💻",
    subservices: [
      "UI/UX Design",
      "WordPress & Custom Development",
      "E-commerce Stores (Shopify, WooCommerce)",
      "Landing Pages & Funnels",
    ],
    link: "/services/website-development"
  },
  {
    title: "Content Marketing",
    description: "Great content that converts — blogs, copies, scripts, and more. We create content that resonates with your audience, improves your brand authority, and drives conversions. Whether it's blog posts, website copy, product descriptions, or email campaigns, we craft compelling narratives to engage and convert.",
    icon: "✍️",
    subservices: [
      "Blog Writing & Optimization",
      "Copywriting & Ad Copy",
      "Email Marketing Campaigns",
      "Content Strategy & Planning",
    ],
    link: "/services/content-marketing"
  },
  {
    title: "Video Production & Motion Graphics",
    description: "Because static is boring. In today’s visual-first world, we help brands communicate through powerful visuals — explainer videos, social media reels, corporate promos, or animated content. Our motion designers bring ideas to life that people remember and share.",
    icon: "🎥",
    subservices: [
      "Promotional & Corporate Videos",
      "Reels, Shorts & Animations",
      "2D/3D Motion Graphics",
      "Video Editing & Post-Production",
    ],
    link: "/services/video-production"
  },
  {
    title: "Digital Strategy & Consulting",
    description: "Your roadmap to digital excellence. Every business is unique — and so should its strategy be. We provide end-to-end consulting to align your marketing efforts with business goals, audit existing campaigns, uncover growth opportunities, and create a roadmap for digital domination.",
    icon: "🧭",
    subservices: [
      "Digital Audits",
      "360° Strategy Planning",
      "Competitor Benchmarking",
      "Data Analytics & Reporting",
    ],
    link: "/services/digital-strategy"
  }
  // Add Services
];

export default function ServiceList() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div className="text-4xl mb-4 text-center">{service.icon}</div>
          <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
          <p className="mt-2 text-gray-700">{service.description.substring(0, 200)}...</p>
          <Link to={service.link} className="mt-4 block text-blue-600 hover:text-blue-800 text-center">Read More</Link>
        </div>
      ))}
    </div>
  );
}
