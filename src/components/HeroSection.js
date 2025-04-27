export default function HeroSection() {
  return (
    <section 
      className="hero-section min-h-screen flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2019/04/07/23/11/search-engine-optimization-4111000_1280.jpg")',
        backgroundSize: 'cover', // Ensures the image covers the section fully
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Ensures the section takes full viewport height
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-[Poppins] tracking-wide">
          Welcome to{" "}
          <span className="text-black">Motions</span>
          <span className="text-pink-500">X</span>
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-200 font-[Poppins] font-light tracking-normal leading-relaxed">
          Unlock your brand’s full potential with our data-driven SEO and digital marketing expertise. 
          From skyrocketing SERP rankings to unstoppable web traffic, we help your business thrive online.
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
