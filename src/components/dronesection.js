import { motion } from "framer-motion";

export default function AboutDroneSection() {
  const bgImage = "https://images.unsplash.com/photo-1614358108424-04d03647e343?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      className="relative py-20 px-6 md:px-20 text-white rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Floating shapes */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse-slow"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
          Discover Our Advanced Drone Technology
        </h2>
        <p className="text-gray-100 text-lg md:text-xl mb-8 font-lora leading-relaxed">
          MotionsX SkyOps drones combine precision, speed, and safety to deliver unparalleled aerial surveying and videography. From topographic mapping to stunning cinematic shots, our drones are designed to exceed your expectations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "High-Resolution Imaging",
            "DGCA-Compliant & Safe",
            "Fast & Cost-Efficient Operations",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-md hover:bg-white/30 transition-colors duration-300"
            >
              <p className="font-semibold text-lg">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="/services/drone-service"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
}
