import React from "react";
import { Link } from "react-router-dom";

const blogData = [
  {
    title: "The Role of SEO: Being Present at the Right Time",
    description:
      "In the digital-first era, SEO is not just a marketing tactic—it's a necessity for survival and growth. Every time a user types a query, SEO ensures your brand shows up at the right time.",
    image: "https://cdn.pixabay.com/photo/2015/08/19/15/44/seo-896175_1280.png",
    link: "/blog/role-of-seo-being-present"
  },
  {
    title: "How SEO Can Skyrocket Your Business",
    description:
      "SEO is one of the most powerful tools to grow your business. From increasing visibility to driving traffic and conversions, it plays a vital role in modern digital marketing.",
    image: "https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/blog/seo-skyrocket-business"
  },
  {
    title: "The Integration of Digital Marketing into Everyday Life",
    description:
      "Digital marketing is an integral part of our daily lives, from mobile app notifications to targeted ads. Businesses today need to leverage this integration for success.",
    image: "https://cdn.pixabay.com/photo/2016/10/29/09/28/digital-marketing-1780161_1280.png",
    link: "/blog/integration-digital-marketing-life"
  },
  {
    title: "Personalization and Predictive Analytics",
    description:
      "Personalization is no longer a luxury; it is an expectation. Businesses that understand user behavior and deliver relevant content enjoy significantly higher engagement rates. Our approach integrates.",
    image: "https://cdn.pixabay.com/photo/2022/04/04/16/41/technology-7111798_1280.jpg",
    link: "/blog/personalization-predictive-analytics"
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                  <Link to={blog.link}>{blog.title}</Link>
                </h3>
                <p className="text-gray-600 mt-4">{blog.description}</p>
                <Link
                  to={blog.link}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
