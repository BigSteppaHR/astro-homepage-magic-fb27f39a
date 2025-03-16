
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-foreground font-medium transition-all-ease"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            className="p-2 rounded-full text-foreground/80 hover:text-foreground transition-all-ease"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search size={20} />
          </motion.button>
          <motion.a
            href="#login"
            className="px-4 py-2 text-foreground/80 hover:text-foreground font-medium transition-all-ease"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log in
          </motion.a>
          <motion.a
            href="#signup"
            className="px-6 py-2 bg-gradient-to-r from-astreyon-blue to-astreyon-purple text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all-ease"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-foreground/80 hover:text-foreground"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 glass py-4 px-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground font-medium py-2 transition-all-ease"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href="#login"
                  className="py-2 text-foreground/80 hover:text-foreground font-medium transition-all-ease"
                >
                  Log in
                </a>
                <a
                  href="#signup"
                  className="py-3 bg-gradient-to-r from-astreyon-blue to-astreyon-purple text-white font-medium rounded-full text-center shadow-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
