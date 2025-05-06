import { useState } from "react";

 import bg2 from '../bg2.svg'
export default function HeroSection() {
  const [bgImage, setBgImage] = useState("");

  return (
    <section
      className="hero-section min-h-screen flex flex-col justify-center items-center text-center text-white relative font-sans"
      style={{
        backgroundImage: `url(${bgImage || bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 transition-colors duration-500"></div>

      <div className="relative z-10 max-w-4xl px-6 py-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-wide font-montserrat">
          Welcome to{" "}
          <span
            className="text-black hover:bg-[#FFC107] hover:text-white font-bold transition-all duration-300 cursor-pointer px-1 py-1"
            onMouseEnter={() =>
              setBgImage(
                "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png"
              )
            }
            onMouseLeave={() => setBgImage("")}
          >
            Motions<span className="text-pink-500">X</span>
          </span>
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-200 font-light tracking-normal leading-relaxed font-montserrat">
          Drive traffic and climb rankings with our proven{" "}
          <span
            className="inline-block text-[#FFC107] font-bold transition-all duration-300 cursor-pointer hover:bg-[#FF5722] hover:text-white px-2 py-1 rounded"
            onMouseEnter={() =>
              setBgImage(
                "https://cdn.pixabay.com/photo/2019/04/07/23/11/search-engine-optimization-4111000_1280.jpg"
              )
            }
            onMouseLeave={() => setBgImage("")}
          >
            traffic
          </span>{" "}
          and{" "}
          <span
            className="inline-block text-[#FFC107] font-bold transition-all duration-300 cursor-pointer hover:bg-[#FF5722] hover:text-white px-2 py-1 rounded"
            onMouseEnter={() =>
              setBgImage(
                "https://cdn.pixabay.com/photo/2019/05/26/06/05/digital-marketing-4229637_1280.jpg"
              )
            }
            onMouseLeave={() => setBgImage("")}
          >
            rankings
          </span>{" "}
          with our proven{" "}
          <span
            className="inline-block text-[#FFC107] font-bold transition-all duration-300 cursor-pointer hover:bg-[#FF5722] hover:text-white px-2 py-1 rounded"
            onMouseEnter={() =>
              setBgImage(
                "https://cdn.pixabay.com/photo/2018/01/13/20/58/business-3080799_1280.png"
              )
            }
            onMouseLeave={() => setBgImage("")}
          >
            digital strategies
          </span>
          .
        </p>

        <a
          href="/contact"
          className="inline-block bg-[#FFC107] text-black py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-[#e6ac00] hover:scale-105 transform transition-transform duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
