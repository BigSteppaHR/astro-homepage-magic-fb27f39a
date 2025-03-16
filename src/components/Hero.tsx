
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#F8F9FF] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#010D3E] leading-tight mb-6">
                AI-Powered Content Creation For Everyone
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Generate high-quality content instantly with the world's most advanced AI platform. Perfect for creators, marketers, and businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                  Start Creating
                </button>
                <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-200 transition duration-300">
                  See Demo
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="/_next/static/media/banner.f781e73f.png"
                alt="AstreyonAI Platform"
                className="rounded-xl shadow-2xl"
                width={620}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
