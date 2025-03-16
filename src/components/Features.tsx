
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageSquare, 
  Image, 
  FileText, 
  Code, 
  Mic, 
  Settings, 
  Zap, 
  BarChart 
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Chat",
      description: "Engage in natural conversations with our advanced AI assistant that understands context and intent.",
      image: "/lovable-uploads/c2a04312-4827-4f1d-82f1-2c986230d1dd.png"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "AI Image Generator",
      description: "Create stunning, unique images from text descriptions with precision and artistry.",
      image: "/lovable-uploads/470a7ff2-cc24-413a-9a03-c3be6caa5848.png"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "AI Article Wizard",
      description: "Transform ideas into well-structured, engaging articles optimized for your audience.",
      image: "/lovable-uploads/fe8de733-1764-4735-b6ff-a4568345b3fb.png"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI Code Generator",
      description: "Write efficient, clean code across multiple programming languages with smart suggestions.",
      image: "/lovable-uploads/07e61f7a-da17-4992-8556-1ef9ac71d848.png"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "AI Voiceover",
      description: "Convert text to natural-sounding speech with customizable voices and emotions.",
      image: "/lovable-uploads/1f503cab-783e-4613-a608-e6a49c514f39.png"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "AI Automation",
      description: "Streamline your workflows with intelligent automation that learns and adapts.",
      image: "/lovable-uploads/e4bfbf2a-a493-4557-9f62-aae5a9c7029f.png"
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-astreyon-purple/10 to-transparent opacity-70"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-astreyon-blue/10 border border-astreyon-blue/20 rounded-full text-astreyon-blue">
              Powerful Features
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need in one platform
          </motion.h2>

          <motion.p
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Astreyon combines multiple AI capabilities to transform how you create, analyze, and optimize content.
          </motion.p>
        </div>

        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-astreyon-blue to-astreyon-purple flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-4">{feature.title}</h3>
                </div>
                <p className="text-foreground/80 mb-6">{feature.description}</p>
                <div className="mt-auto relative overflow-hidden rounded-xl h-40 glass">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-astreyon-black/50 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center glass rounded-2xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
            <div className="flex space-x-2 mb-4 md:mb-0 md:mr-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-astreyon-blue to-astreyon-purple flex items-center justify-center text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-astreyon-purple to-astreyon-pink flex items-center justify-center text-white">
                <BarChart className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Unlimited Potential</h3>
              <p className="text-foreground/80">Supercharge your creativity and productivity</p>
            </div>
          </div>
          <motion.a
            href="#pricing"
            className="px-6 py-3 bg-gradient-to-r from-astreyon-blue to-astreyon-purple text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all-ease"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Plans
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
