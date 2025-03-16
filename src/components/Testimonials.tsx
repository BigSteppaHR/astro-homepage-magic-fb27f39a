
import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  imageSrc: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Astreyon has revolutionized our content creation workflow. What used to take days now happens in hours with better quality.",
      author: "Sarah Johnson",
      role: "Creative Director",
      imageSrc: "/lovable-uploads/e884c45c-254c-4b4e-ab30-ac595827f1ef.png"
    },
    {
      content: "The AI image generator is incredibly precise. I can describe exactly what I need, and Astreyon delivers every time.",
      author: "Michael Chen",
      role: "Product Designer",
      imageSrc: "/lovable-uploads/708cb849-03d8-42de-92f9-a0947975f9bc.png"
    },
    {
      content: "As a developer, the code generation capabilities save me countless hours. It's like having a genius pair programmer.",
      author: "David Miller",
      role: "Senior Developer",
      imageSrc: "/lovable-uploads/682265b7-7379-4356-ab93-249aef8e7a4a.png"
    },
    {
      content: "The article wizard helped me overcome writer's block and produce content that resonates with my audience.",
      author: "Emma Rodriguez",
      role: "Content Strategist",
      imageSrc: "/lovable-uploads/35e27e81-a982-4e8f-9a5d-09bf4b0309c6.png"
    },
    {
      content: "Our marketing team has doubled productivity since adopting Astreyon. The AI automation features are game-changing.",
      author: "Alex Thompson",
      role: "Marketing Director",
      imageSrc: "/lovable-uploads/50aafdaf-9ed4-4b57-998b-3003d82b0444.png"
    },
    {
      content: "The voice generation is indistinguishable from human narration. Our podcast production has never been smoother.",
      author: "Sophia Williams",
      role: "Podcast Producer",
      imageSrc: "/lovable-uploads/2beb10e4-9aeb-4a18-9d9a-105f24179512.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent to-astreyon-blue/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-astreyon-purple/10 border border-astreyon-purple/20 rounded-full text-astreyon-purple">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Loved by creators worldwide
          </motion.h2>

          <motion.p
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            See how Astreyon is transforming workflows and enabling breakthrough creativity for professionals across industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-6 flex-grow">
                <blockquote className="text-foreground/90 italic">
                  "{testimonial.content}"
                </blockquote>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 glass">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-medium mb-8">Trusted by innovative teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="/lovable-uploads/566ee54a-b063-476d-8015-b062fda51598.png" alt="Meta" className="h-6 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/739b73ff-bce7-453d-afaa-04df114ecda7.png" alt="OpenAI" className="h-6 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/3cae0fbb-7a4c-47b7-88c5-1845509ec960.png" alt="Claude" className="h-6 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/2877ac50-9452-4eb7-8a49-c8f02274e623.png" alt="Gemini" className="h-5 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/3441e606-f6d0-47b4-9a8b-ca366e72bd7c.png" alt="Perplexity" className="h-6 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/360b9b6e-91c1-414d-bf9a-1c8a57ffe9e4.png" alt="Cohere" className="h-5 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
