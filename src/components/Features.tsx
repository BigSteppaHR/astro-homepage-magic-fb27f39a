
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const featureItems = [
  {
    title: "AI-Powered Content Creation",
    description: "Generate high-quality articles, blog posts, and more with our advanced AI models.",
    icon: "/_next/static/media/star.c6520da8.png",
  },
  {
    title: "Multi-Modal Generation",
    description: "Create text, images, and videos from simple prompts in seconds.",
    icon: "/_next/static/media/tube.e2613147.png",
  },
  {
    title: "Personalized Solutions",
    description: "Customize outputs to match your brand voice and style requirements.",
    icon: "/_next/static/media/pyramid.ffcbdb14.png",
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing workflows and tools for maximum efficiency.",
    icon: "/_next/static/media/spring.cf1cfdf2.png",
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#010D3E]">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the capabilities that make AstreyonAI the ultimate platform for AI-generated content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mb-6 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#010D3E] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
