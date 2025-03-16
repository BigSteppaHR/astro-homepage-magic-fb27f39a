
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "per month",
    description: "Perfect for individuals and small projects",
    features: [
      "5,000 words per month",
      "Basic content types",
      "Standard response time",
      "Email support",
      "1 user"
    ],
    buttonText: "Get Started",
    highlighted: false
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    description: "Ideal for growing businesses and teams",
    features: [
      "25,000 words per month",
      "All content types",
      "Priority response time",
      "24/7 support",
      "5 team members",
      "Custom templates"
    ],
    buttonText: "Get Started",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "per month",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited words",
      "Advanced content types",
      "Instant response time",
      "Dedicated support manager",
      "Unlimited team members",
      "Custom integration",
      "White labeling"
    ],
    buttonText: "Contact Sales",
    highlighted: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#010D3E]">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your needs. No hidden fees or surprises.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`w-full md:w-[320px] rounded-2xl overflow-hidden ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-[#183EC2] to-[#001E80] text-white border-2 border-blue-600 shadow-xl' 
                  : 'bg-white border border-gray-200 text-[#010D3E]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mt-4 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`ml-2 mb-1 ${plan.highlighted ? 'text-blue-200' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={plan.highlighted ? 'text-blue-200' : 'text-gray-600'}>
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`h-5 w-5 mr-3 ${plan.highlighted ? 'text-blue-300' : 'text-blue-600'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-8 py-3 px-6 rounded-lg font-medium ${
                    plan.highlighted
                      ? 'bg-white text-blue-700 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } transition-colors`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Need a custom solution? <a href="#" className="text-blue-600 font-medium">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
