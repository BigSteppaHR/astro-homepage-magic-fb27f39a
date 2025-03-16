
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;

      shapeRefs.current.forEach((shape, index) => {
        if (shape) {
          const strength = (index + 1) * 10;
          shape.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 flex flex-col justify-center">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <div 
          ref={(el) => shapeRefs.current[0] = el}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-astreyon-blue/30 to-astreyon-purple/30 blur-3xl opacity-50"
        ></div>
        <div 
          ref={(el) => shapeRefs.current[1] = el}
          className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-astreyon-purple/20 to-astreyon-pink/20 blur-3xl opacity-40"
        ></div>
        <div 
          ref={(el) => shapeRefs.current[2] = el}
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-astreyon-teal/20 to-astreyon-blue/20 blur-3xl opacity-40"
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-foreground/90">
              Introducing Astreyon AI - The Future of Creative Intelligence
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gradient">Transform Your Ideas</span>
            <br />
            Into Brilliant Reality
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Astreyon combines cutting-edge AI technologies to help you create, refine, and elevate your content with unprecedented ease and precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="#get-started"
              className="px-8 py-3 bg-gradient-to-r from-astreyon-blue to-astreyon-purple text-white font-medium rounded-full shadow-lg hover:shadow-xl text-lg w-full sm:w-auto flex items-center justify-center transition-all-ease"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight size={18} className="ml-2" />
            </motion.a>
            <motion.a
              href="#demo"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-foreground font-medium rounded-full hover:bg-white/20 text-lg w-full sm:w-auto transition-all-ease"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Demo
            </motion.a>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          className="mt-16 md:mt-24 relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative glass rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <img
              src="/lovable-uploads/05a500ed-5b93-48e1-ac5a-d7628782b7d2.png"
              alt="Astreyon Dashboard"
              className="w-full h-auto"
              style={{ clipPath: 'inset(0)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          {/* Floating 3D Objects */}
          <motion.div
            className="absolute -top-16 -right-8 w-24 h-24 opacity-80"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <img
              src="/lovable-uploads/c69878cf-b178-4bb2-a032-ce30263fc17c.png"
              alt="3D Object"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-10 -left-8 w-20 h-20 opacity-80"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -15, 0] 
            }}
            transition={{ 
              duration: 5,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <img
              src="/lovable-uploads/ff4566b0-b88c-477e-82cc-1e3d47f8ac6f.png"
              alt="3D Object"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
