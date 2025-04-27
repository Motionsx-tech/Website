import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-pink-500 to-pink-700 py-20 px-4 text-white text-center"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
         Accelerate Your Digital Growth with MotionsX India
        </motion.h1>
        <p className="text-xl mb-8 text-gray-100">
          Unlock your brand’s full potential with our data-driven SEO and Digital marketing expertise.
          From skyrocketing SERP rankings to higher conversions and unstoppable web traffic — 
          we help your business thrive in the digital realm.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black hover:bg-gray-900 px-8 py-3 rounded-lg font-bold flex items-center mx-auto gap-2"
        >
          Free Consultation <ArrowRightIcon className="w-5 h-5 text-pink-400" />
        </motion.button>
      </div>
    </motion.section>
  );
}
