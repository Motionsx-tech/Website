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
    <section className="py-20 bg-black text-center px-4">
      <h2 className="text-4xl font-bold text-white mb-4">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Blog</span>
      </h2>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
        Stay updated with the latest trends, tips, and insights from the world of digital marketing and SEO.
      </p>

      <div className="max-w-4xl mx-auto">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-lg">No blog posts available right now. Stay tuned!</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li
                key={post.id}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 p-6 text-left hover:border-pink-500"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title.length > 65 ? post.title.slice(0, 62) + "..." : post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block mt-2 px-4 py-2 text-sm border border-pink-500 text-pink-400 rounded-full hover:bg-pink-500 hover:text-white transition-all"
                >
                  Read More →
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
