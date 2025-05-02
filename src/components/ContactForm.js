import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2f7w1fm',
      'template_jd8odmq',
      e.target,
      'H6AvJP7WTBH5evGcD'
    )
    .then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error(error.text);
      }
    );
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 min-h-screen flex items-center justify-center py-8 px-3 sm:px-6">
  <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-10 md:p-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#10375C] mb-2">
      Let's Connect
    </h2>
    <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
      Fill in the form and our team will get back to you shortly.
    </p>

    {submitted ? (
      <div className="text-center text-green-600 text-lg sm:text-xl font-medium py-8">
        🎉 Thank you! We'll get back to you shortly.
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 shadow-sm text-sm sm:text-base"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 shadow-sm text-sm sm:text-base"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base" htmlFor="message">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="How can we help you?"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 shadow-sm text-sm sm:text-base"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-[#10375C] hover:bg-[#0a2a49] text-white font-semibold px-5 py-3 sm:px-6 sm:py-4 rounded-xl transition-transform transform hover:scale-105 duration-300 shadow-md text-sm sm:text-base"
          >
            Send Message ✉️
          </button>
        </div>
      </form>
    )}
  </div>
</div>

  );
}
