// src/pages/posts/SeoSkyrocketBusiness.js
import { Link } from "react-router-dom";

export default function SeoSkyrocketBusiness() {
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
        <span className="text-gray-800">How SEO Can Skyrocket Your Business</span>
      </nav>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-6">How SEO Can Skyrocket Your Business</h1>

      {/* Featured Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="SEO Strategies for Growth"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Blog Content */}
      <p className="text-gray-800 leading-relaxed mb-6">
        In today’s hyper-competitive digital era, <strong>SEO</strong> (Search Engine Optimization) isn't just a growth strategy—it's the backbone of sustainable online success. It acts as a magnet, pulling in organic, high-intent traffic and converting visitors into loyal customers.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        At <strong>MotionsX India Pvt Ltd</strong>, we leverage cutting-edge SEO strategies that go far beyond basic keyword stuffing:
      </p>

      <ul className="list-disc pl-6 mb-6 text-gray-800 leading-relaxed">
        <li><strong>Advanced Keyword Intent Mapping</strong> — targeting not just high-volume keywords, but the exact phrases your audience uses when ready to act.</li>
        <li><strong>Voice Search Optimization</strong> — preparing your content for conversational queries via Siri, Alexa, and Google Assistant.</li>
        <li><strong>AI-Powered SEO Tools</strong> — utilizing predictive analytics and machine learning to uncover emerging opportunities before competitors.</li>
        <li><strong>Core Web Vitals Focus</strong> — ensuring lightning-fast page speeds, mobile responsiveness, and seamless user experience to rank higher on Google.</li>
        <li><strong>Content Depth & Authority Building</strong> — producing comprehensive content that meets E-E-A-T (Experience, Expertise, Authority, Trust) standards.</li>
      </ul>

      <p className="text-gray-800 leading-relaxed mb-6">
        SEO today is about delivering value, relevance, and amazing user experience. The brands dominating the 2025 landscape will be those who adapt quickly to evolving algorithms and user behaviors.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        By investing in holistic SEO strategies now, businesses can enjoy long-term visibility, credibility, and an ever-growing flow of qualified leads.
      </p>

      {/* Author Section */}
      <div className="border-t pt-6 mt-6 text-gray-600">
        <p className="font-semibold text-lg">Written by: Deepam Bhusan</p>
        <p>Digital Marketing Expert  MotionsX</p>
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
          <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20blog%20on%20How%20SEO%20Can%20Skyrocket%20Your%20Business&url=http://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            Twitter
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
            Facebook
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=http://example.com&title=How%20SEO%20Can%20Skyrocket%20Your%20Business" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
