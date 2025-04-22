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
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">What Our Clients Say</h2>
        <p className="mt-4 text-gray-600">Real feedback from real partners.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-sm mx-auto md:mx-0 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-500">
                {testimonial.name.charAt(0)}
              </div>
            </div>
            <p className="text-gray-700 italic mb-6">&ldquo;{testimonial.feedback}&rdquo;</p>
            <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
