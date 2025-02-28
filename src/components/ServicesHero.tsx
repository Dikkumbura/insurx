import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { AINetwork } from './AINetwork';
import { ResponsiveCamera } from './ResponsiveCamera';

export const ServicesHero = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ResponsiveCamera />
          <Environment preset="city" />
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3A7BD5" />
          <AINetwork />
        </Canvas>
      </div>
      
      <div className="relative z-20 h-full flex items-center justify-center text-white">
        <motion.div 
          className="text-center max-w-4xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/75 mb-6">
              AI Solutions for the Insurance Industry
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of AI to transform your agency's operations, claims, and customer service.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};