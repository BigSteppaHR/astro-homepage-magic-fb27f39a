
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-[#010D3E]">
            AstreyonAI
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/documentation">Documentation</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-gray-600 hover:text-blue-600 font-medium">
              Login
            </a>
            <a
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
            >
              Sign Up Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6">
              <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8125 10.5C17.8125 10.7486 17.7137 10.9871 17.5379 11.1629C17.3621 11.3387 17.1236 11.4375 16.875 11.4375H3.125C2.87636 11.4375 2.6379 11.3387 2.46209 11.1629C2.28627 10.9871 2.1875 10.7486 2.1875 10.5C2.1875 10.2514 2.28627 10.0129 2.46209 9.83709C2.6379 9.66127 2.87636 9.5625 3.125 9.5625H16.875C17.1236 9.5625 17.3621 9.66127 17.5379 9.83709C17.7137 10.0129 17.8125 10.2514 17.8125 10.5ZM3.125 6.4375H16.875C17.1236 6.4375 17.3621 6.33873 17.5379 6.16291C17.7137 5.9871 17.8125 5.74864 17.8125 5.5C17.8125 5.25136 17.7137 5.0129 17.5379 4.83709C17.3621 4.66127 17.1236 4.5625 16.875 4.5625H3.125C2.87636 4.5625 2.6379 4.66127 2.46209 4.83709C2.28627 5.0129 2.1875 5.25136 2.1875 5.5C2.1875 5.74864 2.28627 5.9871 2.46209 6.16291C2.6379 6.33873 2.87636 6.4375 3.125 6.4375ZM16.875 14.5625H3.125C2.87636 14.5625 2.6379 14.6613 2.46209 14.8371C2.28627 15.0129 2.1875 15.2514 2.1875 15.5C2.1875 15.7486 2.28627 15.9871 2.46209 16.1629C2.6379 16.3387 2.87636 16.4375 3.125 16.4375H16.875C17.1236 16.4375 17.3621 16.3387 17.5379 16.1629C17.7137 15.9871 17.8125 15.7486 17.8125 15.5C17.8125 15.2514 17.7137 15.0129 17.5379 14.8371C17.3621 14.6613 17.1236 14.5625 16.875 14.5625Z" fill="currentColor"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4"
            >
              <nav className="flex flex-col space-y-4">
                <MobileNavLink href="/features" onClick={toggleMenu}>Features</MobileNavLink>
                <MobileNavLink href="/pricing" onClick={toggleMenu}>Pricing</MobileNavLink>
                <MobileNavLink href="/documentation" onClick={toggleMenu}>Documentation</MobileNavLink>
                <MobileNavLink href="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
                <MobileNavLink href="/login" onClick={toggleMenu}>Login</MobileNavLink>
                <a
                  href="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300 text-center"
                  onClick={toggleMenu}
                >
                  Sign Up Free
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a href={href} className="text-gray-600 hover:text-blue-600 font-medium">
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-blue-600 font-medium block px-4 py-2 hover:bg-gray-50 rounded-lg"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
