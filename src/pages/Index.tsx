
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Index: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Scroll to top button visibility
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-astreyon-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="w-24 h-24 mb-6 relative"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img
                  src="/lovable-uploads/05a500ed-5b93-48e1-ac5a-d7628782b7d2.png"
                  alt="Astreyon Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.h1
                className="text-2xl font-bold text-white mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Astreyon
              </motion.h1>
              <p className="text-white/60">Transforming ideas into reality</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 rounded-full bg-astreyon-blue/90 text-white shadow-lg z-40 hover:bg-astreyon-blue transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Index;
