import React from 'react';

const testimonials = [
  {
    name: 'Ravi Kumar',
    title: 'Product Manager at TechNova',
    feedback: 'Working with MotionsX was an absolute game changer. Their designs are fresh, modern, and effective.',
  },
  {
    name: 'Aisha Patel',
    title: 'Founder of Creatify',
    feedback: 'The team exceeded our expectations at every step. Highly professional and creative!',
  },
  {
    name: 'Liam Johnson',
    title: 'Marketing Lead at PixelWave',
    feedback: 'The video production quality and storytelling were simply top-notch.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="services-section py-20 text-center"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/2134893574/vector/quotation-marks-symbol-seamless-pattern-icons-on-white-background.jpg?s=2048x2048&w=is&k=20&c=Xh6xzWvhfX0j6Wh50MiGpt-0f9Ijrsy4SAy84OrZCXM=')",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundBlendMode: 'overlay',
        backgroundAttachment: 'fixed', // Adds parallax effect
      }}
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white animate__animated animate__fadeInUp">What Our Clients Say</h2>
        <p className="mt-4 text-gray-300 animate__animated animate__fadeInUp">Real feedback from real partners.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-sm mx-auto md:mx-0 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50"
            style={{ animationDelay: `${index * 0.3}s` }} // Stagger animation delay for cards
          >
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-500 transition-transform duration-300 transform hover:scale-110 hover:border-4 hover:border-blue-500">
                {testimonial.name.charAt(0)}
              </div>
            </div>
            <p className="text-gray-700 italic mb-6 animate__animated animate__fadeInUp">{`“${testimonial.feedback}”`}</p>
            <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
