
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "AstreyonAI has transformed our content production. We now create in minutes what used to take days.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechNova",
    avatar: "/_next/static/media/avatar-1.b3f4dd51.png"
  },
  {
    id: 2,
    quote: "The quality of content generated is remarkable. Our audience engagement has increased by 45% since we started using it.",
    author: "Michael Chen",
    role: "Content Lead, CreativeForge",
    avatar: "/_next/static/media/avatar-2.d41a0f10.png"
  },
  {
    id: 3,
    quote: "As a solo entrepreneur, AstreyonAI feels like having a full content team at my fingertips. Absolute game-changer.",
    author: "Olivia Rodriguez",
    role: "Founder, GrowthMaster",
    avatar: "/_next/static/media/avatar-3.21df1c82.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#010D3E]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied users creating amazing content with AstreyonAI
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a 
              href="/case-studies" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              View all case studies
              <div className="w-5 h-5 ml-2">
                <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z" fill="currentColor"/>
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start mb-6">
        <div className="w-6 h-6 mr-2 text-blue-500">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3367 8.43697L10.7367 18.037C10.6531 18.1209 10.5538 18.1875 10.4444 18.2329C10.335 18.2783 10.2177 18.3017 10.0992 18.3017C9.98079 18.3017 9.8635 18.2783 9.75411 18.2329C9.64471 18.1875 9.54535 18.1209 9.46174 18.037L5.26174 13.837C5.17802 13.7533 5.11162 13.6539 5.06631 13.5445C5.021 13.4351 4.99768 13.3179 4.99768 13.1995C4.99768 13.0811 5.021 12.9638 5.06631 12.8545C5.11162 12.7451 5.17802 12.6457 5.26174 12.562C5.34546 12.4783 5.44485 12.4118 5.55423 12.3665C5.66361 12.3212 5.78085 12.2979 5.89924 12.2979C6.01764 12.2979 6.13487 12.3212 6.24425 12.3665C6.35364 12.4118 6.45302 12.4783 6.53674 12.562L10.1 16.1252L19.0632 7.16348C19.2323 6.9944 19.4616 6.89941 19.7007 6.89941C19.9399 6.89941 20.1692 6.9944 20.3382 7.16348C20.5073 7.33255 20.6023 7.56187 20.6023 7.80098C20.6023 8.04008 20.5073 8.2694 20.3382 8.43848L20.3367 8.43697Z" fill="currentColor"/>
          </svg>
        </div>
        <p className="text-gray-600 italic">{testimonial.quote}</p>
      </div>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author} 
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-[#010D3E]">{testimonial.author}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
