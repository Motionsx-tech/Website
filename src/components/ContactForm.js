import { useState } from 'react';
import emailjs from '@emailjs/browser'; // Make sure this is imported correctly

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data
    emailjs.sendForm(
      'service_2f7w1fm',  // Replace with your service ID
      'template_jd8odmq',  // Replace with your template ID
      e.target,  // The form element itself
      'H6AvJP7WTBH5evGcD'  // Replace with your user ID
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
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      {/* Center the form in the middle */}
      <div className="max-w-2xl w-full p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#10375C] mb-4">Get In Touch</h2>
        <p className="text-center text-gray-500 mb-8">We'd love to hear from you! Please fill out the form below.</p>

        {submitted ? (
          <div className="text-center text-green-600 text-lg font-semibold">
            🎉 Thank you! We'll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-700"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-700"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-700"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#10375C] hover:bg-[#0a2a49] text-white font-semibold px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
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
