
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <motion.div 
      className={`flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="mr-2 relative w-8 h-8"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-astreyon-teal via-astreyon-blue to-astreyon-purple rounded-lg opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </motion.div>
      <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-astreyon-blue via-astreyon-purple to-astreyon-pink">
        Astreyon
      </span>
    </motion.div>
  );
};

export default Logo;
