import { motion } from "framer-motion";

const services = [
  {
    title: "SEO Optimization",
    desc: "Rank higher on Google with our data-driven strategies.",
    icon: "🔍",
  },
  {
    title: "PPC Advertising",
    desc: "Get immediate traffic with targeted ads.",
    icon: "📈",
  },
  {
    title: "Content Marketing",
    desc: "Engage your audience with high-quality content.",
    icon: "✍️",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}