// src/pages/posts/RoleOfSeo.js
import { Link } from "react-router-dom";

export default function RoleOfSeo() {
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
        <span className="text-gray-800">The Role of SEO: Being Present at the Right Time</span>
      </nav>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-6">The Role of SEO: Being Present at the Right Time</h1>

      {/* Featured Image */}
      <img
        src="https://cdn.pixabay.com/photo/2015/08/19/15/44/seo-896175_1280.png"
        alt="SEO Strategy "
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Blog Content */}
      <p className="text-gray-800 leading-relaxed mb-6">
        In the digital-first era, <strong>Search Engine Optimization (SEO)</strong> is not just a marketing tactic—it's a necessity for survival and growth. Every time a user types a query like “best CRM software in India” or “digital marketing agency near me,” they are actively seeking solutions. SEO ensures that your brand shows up at the right time, in front of the right audience.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        At <strong>MotionsX India Pvt Ltd</strong>, we employ comprehensive, up-to-date SEO strategies, combining:
      </p>

      <ul className="list-disc pl-6 mb-6 text-gray-800 leading-relaxed">
        <li>Advanced <strong>keyword research</strong> to match user intent accurately.</li>
        <li><strong>Schema markup</strong> for rich snippets, enhancing visibility in search results.</li>
        <li><strong>High-authority backlink building</strong> to boost domain trust and rankings.</li>
        <li><strong>Technical SEO</strong> audits to ensure websites are fast, mobile-friendly, and crawlable.</li>
        <li><strong>Content optimization</strong> for E-E-A-T (Experience, Expertise, Authority, Trust) signals, aligning with Google's latest algorithms.</li>
      </ul>

      <p className="text-gray-800 leading-relaxed mb-6">
        The goal isn't just to appear in search results—it's to drive <strong>qualified traffic</strong>, build brand authority, and turn visitors into loyal customers. In 2025, with AI-driven search and voice queries growing, adapting SEO strategies is more important than ever.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        Businesses that invest in holistic, future-proof SEO today are the ones who will dominate tomorrow’s digital landscape.
      </p>

      {/* Author Section */}
      <div className="border-t pt-6 mt-6 text-gray-600">
        <p className="font-semibold text-lg">Written by: Deepam Bhusan</p>
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
          <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20blog%20on%20The%20Role%20of%20SEO%20Being%20Present%20at%20the%20Right%20Time&url=http://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            Twitter
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
            Facebook
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=http://example.com&title=The%20Role%20of%20SEO%20Being%20Present%20at%20the%20Right%20Time" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
