
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-astreyon-blue/5 to-astreyon-purple/10"></div>
      </div>

      {/* Floating 3D Objects */}
      <motion.div 
        className="absolute top-20 right-[10%] w-24 h-24 opacity-70 hidden md:block"
        style={{ y, opacity }}
      >
        <img
          src="/lovable-uploads/640a7285-a392-4657-a967-c7c1985aadc3.png"
          alt="3D Shape"
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-20 left-[10%] w-20 h-20 opacity-70 hidden md:block"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]), opacity }}
      >
        <img
          src="/lovable-uploads/8206a48d-c2b6-4291-a41d-5859fea7c5a4.png"
          alt="3D Shape"
          className="w-full h-auto"
        />
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            <div className="text-center mb-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to transform your creative workflow?
              </motion.h2>

              <motion.p
                className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of professionals who are creating better content in less time with Astreyon's AI-powered platform.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.a
                  href="#signup"
                  className="px-8 py-4 bg-gradient-to-r from-astreyon-blue to-astreyon-purple text-white font-medium rounded-full shadow-lg hover:shadow-xl text-lg flex items-center justify-center transition-all-ease"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Free Trial</span>
                  <ArrowRight size={18} className="ml-2" />
                </motion.a>
                <motion.a
                  href="#demo"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-foreground font-medium rounded-full hover:bg-white/20 text-lg transition-all-ease"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60 mt-10 pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-astreyon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-astreyon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-astreyon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
