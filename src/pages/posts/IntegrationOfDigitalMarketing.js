// src/pages/posts/IntegrationOfDigitalMarketing.js
import { Link } from "react-router-dom";

export default function IntegrationOfDigitalMarketing() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16" style={{ fontFamily: "'Merriweather', serif" }}>
      {/* Load Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap"
        rel="stylesheet"
      />

      {/* Breadcrumb Navigation */}
      <nav className="text-gray-600 mb-6">
        <Link to="/" className="hover:text-blue-600">Home</Link> &gt;{" "}
        <Link to="/blog" className="hover:text-blue-600">Blog</Link> &gt;{" "}
        <span className="text-gray-800">The Integration of Digital Marketing into Everyday Life</span>
      </nav>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        The Integration of Digital Marketing into Everyday Life
      </h1>

      {/* Featured Image */}
      <img
        src="https://cdn.pixabay.com/photo/2016/10/29/09/28/digital-marketing-1780161_1280.png" // Add your actual image URL
        alt="Digital Marketing"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Blog Content */}
      <p className="text-gray-800 leading-relaxed mb-6">
        <strong className="text-blue-600">Morning Routines and Digital Touchpoints</strong>
        <br />
        From the moment individuals check their smartphones upon waking, they are engaging with digital marketing. Curated news articles, weather updates, calendar reminders, and email digests are all tailored through automated marketing platforms and behavior-based segmentation.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li className="text-gray-700">SEO determines which articles rank on search engines.</li>
        <li className="text-gray-700">Email automation ensures content relevance and timely delivery.</li>
        <li className="text-gray-700">App notifications are triggered by location, time, and user behavior.</li>
      </ul>

      <p className="text-gray-800 leading-relaxed mb-6">
        <strong className="text-blue-600">Purchasing Patterns and Consumer Influence</strong>
        <br />
        E-commerce platforms have revolutionized how consumers discover and purchase products. Product recommendations, limited-time offers, and cross-platform retargeting are all outcomes of integrated digital marketing systems.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li className="text-gray-700">Programmatic advertising presents relevant ads based on browsing history.</li>
        <li className="text-gray-700">Influencer marketing introduces products through relatable narratives.</li>
        <li className="text-gray-700">Customer reviews, often optimized for search, guide final purchasing decisions.</li>
      </ul>

      <p className="text-gray-800 leading-relaxed mb-6">
        <strong className="text-blue-600">Professional Environments and B2B Marketing</strong>
        <br />
        Digital marketing is not confined to B2C contexts. In the corporate world, decision-makers rely on webinars, whitepapers, and case studies—many of which are delivered through targeted digital channels.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li className="text-gray-700">LinkedIn advertising targets professionals based on industry, designation, and interests.</li>
        <li className="text-gray-700">CRM-integrated email workflows guide potential clients through the sales funnel.</li>
        <li className="text-gray-700">Content-driven lead generation is central to business development efforts.</li>
      </ul>

      {/* Author Section */}
      <div className="border-t pt-6 mt-6 text-gray-600">
        <p className="font-semibold text-lg">Written by: Kumar Vaibhav</p>
        <p>Digital Marketing Expert at MotionsX</p>
        <p>
          <a href="https://www.linkedin.com/company/motionsx-india/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Follow on LinkedIn
          </a>
        </p>
      </div>

      {/* Social Share Buttons */}
      <div className="mt-8">
        <p className="text-gray-600">Share this post:</p>
        <div className="flex space-x-4">
          <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20blog%20on%20Digital%20Marketing%20Integration&url=http://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            Twitter
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
            Facebook
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=http://example.com&title=The%20Integration%20of%20Digital%20Marketing%20into%20Everyday%20Life" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
