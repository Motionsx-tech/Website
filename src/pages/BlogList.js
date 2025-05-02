import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "How SEO Can Skyrocket Your Business",
    excerpt: "Learn how SEO strategies can drastically improve your website traffic and sales.",
    slug: "seo-skyrocket-business",
  },
  {
    id: 2,
    title: "The Integration of Digital Marketing into Everyday Life",
    excerpt: "Explore how digital marketing integrates into daily routines and professional environments.",
    slug: "integration-digital-marketing-life",
  },
  {
    id: 3,
    title: "The Role of SEO: Being Present at the Right Time",
    excerpt: "Understand why being visible in search results when customers need you most is key to success.",
    slug: "role-of-seo-being-present",
  },
  {
    id: 4,
    title: "Personalization and Predictive Analytics",
    excerpt: "Learn how personalization and predictive analytics drive higher engagement and customer loyalty.",
    slug: "personalization-predictive-analytics",
  },
  {
    id: 5,
    title: "How a Website Can Boost Your Digital Marketing Strategy and Strengthen Your Online Brand Presence",
    excerpt: "Discover how your website can become the foundation of your digital marketing strategy and online presence.",
    slug: "website-boost-digital-marketing",
  },
];

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
