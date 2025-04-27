import { Link } from "react-router-dom";

export default function PersonalizationAndPredictiveAnalytics() {
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
        <span className="text-gray-800">Personalization and Predictive Analytics</span>
      </nav>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-6">Personalization and Predictive Analytics</h1>

      {/* Featured Image */}
      <img
        src="https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111798_1280.jpg" // Add your actual image URL
        alt="Personalization and Predictive Analytics"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Blog Content */}
      <p className="text-gray-800 leading-relaxed mb-6">
        Personalization is no longer a luxury; it is an expectation. Businesses that understand user behavior and deliver relevant content enjoy significantly higher engagement rates.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        Our approach integrates:
      </p>

      <ul className="list-disc pl-6 mb-6 text-gray-800 leading-relaxed">
        <li>AI-powered segmentation</li>
        <li>Dynamic content generation</li>
        <li>Predictive analytics for behavior modeling</li>
      </ul>

      <p className="text-gray-800 leading-relaxed mb-6">
        The result is a user experience that feels intuitive, seamless, and personalized—driving higher brand loyalty and customer lifetime value.
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
          <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20blog%20on%20Personalization%20and%20Predictive%20Analytics&url=http://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            Twitter
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
            Facebook
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=http://example.com&title=Personalization%20and%20Predictive%20Analytics" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
