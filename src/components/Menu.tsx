import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import AnimatedText from './AnimatedText';

export const Menu = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
      <motion.div
        className="text-lg font-bold tracking-[0.2em] text-white/90"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/"><AnimatedText>INSURX·COM</AnimatedText></Link>
      </motion.div>
      
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-8"
      >
        <Link 
          to="/about"
          className={`text-sm tracking-[0.2em] ${
            location.pathname === '/about' 
              ? 'text-white' 
              : 'text-white/60 hover:text-white'
          } transition-colors duration-300`}
        >
          <AnimatedText>ABOUT</AnimatedText>
        </Link>
        <Link 
          to="/services"
          className={`text-sm tracking-[0.2em] ${
            location.pathname === '/services' 
              ? 'text-white' 
              : 'text-white/60 hover:text-white'
          } transition-colors duration-300`}
        >
          <AnimatedText>SERVICES</AnimatedText>
        </Link>
        <Link 
          to="/blogs"
          className={`text-sm tracking-[0.2em] ${
            location.pathname.startsWith('/blogs') 
              ? 'text-white' 
              : 'text-white/60 hover:text-white'
          } transition-colors duration-300`}
        >
          <AnimatedText>BLOGS</AnimatedText>
        </Link>
        <Link 
          to="/newsletter"
          className={`text-sm tracking-[0.2em] ${
            location.pathname === '/newsletter' 
              ? 'text-white' 
              : 'text-white/60 hover:text-white'
          } transition-colors duration-300`}
        >
          <AnimatedText>NEWSLETTER</AnimatedText>
        </Link>
        <Link 
          to="/book-a-call"
          className={`px-6 py-2 border border-white/10 rounded-full ${
            location.pathname === '/book-a-call'
              ? 'bg-white text-black'
              : 'text-white/80 hover:bg-white/5 hover:border-white/20'
          } transition-all duration-300 tracking-[0.2em] text-sm backdrop-blur-sm`}
        >
          BOOK A CALL
        </Link>
      </motion.nav>
    </div>
  );
};