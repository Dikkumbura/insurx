import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import AnimatedText from './AnimatedText';

export const Footer = () => {
  const location = useLocation();
  const isNewsletterPage = location.pathname === '/newsletter';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <div className="text-2xl font-bold tracking-[0.2em] text-white/90 mb-2">
            <AnimatedText>InsurXai</AnimatedText>
          </div>
          {!isNewsletterPage && (
            <Link
              to="/newsletter"
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg text-white border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 mt-4"
            >
              <AnimatedText>Join Our Newsletter</AnimatedText>
            </Link>
          )}
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-12 text-sm"
          variants={itemVariants}
        >
          <Link to="/about" className="text-white/60 hover:text-white transition-colors duration-300">
            About
          </Link>
          <Link to="/services" className="text-white/60 hover:text-white transition-colors duration-300">
            Services
          </Link>
          <Link to="/blogs" className="text-white/60 hover:text-white transition-colors duration-300">
            Blogs
          </Link>
          <Link to="/newsletter" className="text-white/60 hover:text-white transition-colors duration-300">
            Newsletter
          </Link>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
          <Link to="/privacy" className="text-white/60 hover:text-white transition-colors duration-300">
            Privacy Policy
          </Link>
        </motion.div>

        <motion.div 
          className="text-center text-white/40 text-sm"
          variants={itemVariants}
        >
          © 2025 InsurXai. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};