
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Define Your Needs",
    description: "Tell our AI what content you need - from product descriptions to full articles.",
    icon: CheckCircle
  },
  {
    number: "02",
    title: "AI Generation",
    description: "Our powerful models instantly create content based on your specifications.",
    icon: CheckCircle
  },
  {
    number: "03",
    title: "Review & Customize",
    description: "Fine-tune the output until it perfectly matches your requirements.",
    icon: CheckCircle
  },
  {
    number: "04",
    title: "Deploy & Profit",
    description: "Publish or distribute your new content and watch engagement soar.",
    icon: CheckCircle
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8F9FF]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#010D3E]">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our easy four-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-[2px] bg-gray-200 -ml-4 transform -translate-x-1/2">
                  <ArrowRightIcon className="absolute top-1/2 right-0 text-blue-500 transform -translate-y-1/2" />
                </div>
              )}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="text-3xl font-bold text-blue-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-[#010D3E] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn btn-primary">Start Creating Now</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
