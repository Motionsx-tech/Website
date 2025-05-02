import React from 'react';
import ContactForm from '../components/ContactForm'; // adjust path as needed

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-[#e5e7eb] to-indigo-600 text-white text-center py-20 px-6">
  <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
    <span className="text-white">Contact </span>
    <span className="text-black">Motions</span>
    <span className="text-pink-500">X</span>
  </h1>
  <p className="mt-6 text-xl font-semibold md:text-2xl">
  
  <span className="text-black">Have questions or need help?</span>
  <span className="text-pink-500"> We’re just a message away.</span>
</p>

</section>




      {/* Contact Form Section */}
      <section className="py-20 text-center bg-gradient-to-r from-green-400 via-green-500 to-teal-500 px-6">
  <h2 className="text-4xl font-extrabold text-white">Get in Touch</h2>
  <p className="mt-4 text-xl text-white font-semibold">
    Whether you're a client or just curious, we'd love to hear from you!
  </p>
  <div className="mt-8 max-w-2xl mx-auto rounded-xl shadow-2xl bg-white p-8">
    <ContactForm />
  </div>
</section>

<section className="py-20 text-center bg-gradient-to-r from-green-400 via-green-500 to-teal-500 px-6">
  <p className="mt-3 text-2xl font-semibold text-white">
    Reach us quickly through your preferred contact method.
  </p>



  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Phone */}
    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition duration-300">
      <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 text-2xl">
        <i className="fas fa-phone-alt"></i>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 border-b border-blue-500 inline-block pb-1 mb-2">
        Call Us
      </h4>
      <p className="text-sm font-semibold text-gray-600">+91 8249292183</p>
    </div>

    {/* WhatsApp */}
    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition duration-300">
      <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 text-green-600 text-2xl">
        <i className="fab fa-whatsapp"></i>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 border-b border-green-500 inline-block pb-1 mb-2">
        WhatsApp
      </h4>
      <p className="text-sm font-semibold text-gray-600">Chat anytime</p>
      <a
        href="https://wa.me/8249292183"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm font-medium text-green-600 hover:underline"
      >
        Start Chat →
      </a>
    </div>

    {/* Email */}
    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition duration-300">
      <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-100 text-yellow-600 text-2xl">
        <i className="fas fa-envelope"></i>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 border-b border-yellow-500 inline-block pb-1 mb-2">
        Email Us
      </h4>
      <p className="text-sm font-semibold text-gray-600">info@motionsx.com</p>
      <a
        href="mailto:info@motionsx.com"
        className="mt-2 inline-block text-sm font-medium text-yellow-600 hover:underline"
      >
        Send Mail →
      </a>
    </div>
  </div>
</section>





      {/* Google Map Section */}
      <section className="py-20 bg-gradient-to-r from-blue-200 to-indigo-200 text-gray-800">
  <h2 className="text-3xl font-semibold text-center text-gray-800">Our Office</h2>
  <div className="mt-8 mx-auto max-w-6xl">
    <iframe
      title="MotionsX Office Location"
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: '0' }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0498806396186!2d85.81894577506029!3d20.29820238117449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d8372ea9c3%3A0x48b3bd7641277d59!2sMotionsX%20India!5e0!3m2!1sen!2sin!4v1746169306619!5m2!1sen!2sin"
      allowFullScreen=""
    ></iframe>
  </div>
</section>


    </div>
  );
};

export default ContactPage;
