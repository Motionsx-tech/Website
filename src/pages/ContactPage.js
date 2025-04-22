import ContactForm from '../components/ContactForm';
//import LocationMap from '../components/LocationMap';

export default function ContactPage() {
  const whatsappNumber = "8249292183";  // Replace with your WhatsApp business number
  const message = "Hi, I would like more information about your products.";  // Optional custom message
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      {/* WhatsApp Button */}
      <div className="whatsapp-button text-center mb-8">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-3 px-6 rounded-full shadow-lg"
        >
          Chat with us on WhatsApp
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ContactForm />
      </div>
    </div>
  );
}
