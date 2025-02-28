import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { IridescentRing } from './IridescentRing';
import { Environment } from '@react-three/drei';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import { useEffect } from 'react';
import { observeElements } from '../utils/intersectionObserver';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    observeElements('.animate-on-scroll', 'visible');
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3A7BD5" />
          <IridescentRing />
        </Canvas>
      </div>
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
        <motion.div 
          className="text-center max-w-full mx-auto px-4 -mt-24 animate-on-scroll"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/75 animate-on-scroll"
            variants={fadeUpVariants}
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.5)'
            }}
          >
            <AnimatedText>
              <span className="text-6xl md:text-8xl">Xcelerate Insurance</span> <br /> Xpand Reach
            </AnimatedText>
          </motion.h1>
        </motion.div>
        
        <div className="absolute bottom-72 flex flex-col items-center space-y-4 animate-on-scroll">
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-on-scroll"
            variants={fadeUpVariants}
          >
          </motion.p>
          
          <motion.div
            className="mt-2 animate-on-scroll"
            variants={fadeUpVariants}
          >
            <Link to="/book-a-call">
              <motion.button 
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-on-scroll"
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Transformation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};