
import React from 'react';
import { motion } from 'framer-motion';

// Using the existing logo images from the project
const partnerLogos = [
  { src: "/_next/static/media/OpenAI.90dbb5ca.png", alt: "OpenAI Logo" },
  { src: "/_next/static/media/Claude.bbf66ed6.png", alt: "Claude Logo" },
  { src: "/_next/static/media/Gemini.2ebefc63.png", alt: "Gemini Logo" },
  { src: "/_next/static/media/Cohere.b0721788.png", alt: "Cohere Logo" },
  { src: "/_next/static/media/Meta.8e0437a1.png", alt: "Meta Logo" },
  { src: "/_next/static/media/Perplexity.db28d50b.png", alt: "Perplexity Logo" }
];

export const Partners = () => {
  return (
    <section className="py-16 bg-[#F8F9FF]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#010D3E]">Powered by Leading AI Models</h2>
          <p className="mt-3 text-lg text-gray-600">
            We integrate with the world's most powerful AI technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="w-[120px] md:w-[180px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={52}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-md text-gray-500 max-w-2xl mx-auto">
            Our platform leverages multiple AI models to ensure you always get the best results for your specific content needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
