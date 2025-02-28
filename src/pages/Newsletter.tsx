import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Logo } from '../components/Logo';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    setIsSubmitted(true);
  };

  const containerVariants = {
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
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Menu />
      
      <section className="pt-32 pb-24 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            <AnimatedText>Stay Ahead with AI in Insurance</AnimatedText>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/70 mb-12"
          >
            <AnimatedText>
              Subscribe to our newsletter for the latest insights on how AI is transforming the insurance industry. Get exclusive updates, trends, and expert analysis delivered straight to your inbox.
            </AnimatedText>
          </motion.p>

          {!isSubmitted ? (
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="relative mb-6">
                <motion.input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>

              <motion.p
                variants={itemVariants}
                className="mt-4 text-sm text-white/40"
              >
                By subscribing, you agree to receive marketing emails from InsurXai.
              </motion.p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-md mx-auto"
            >
              <div className="text-4xl mb-4"><Logo /></div>
              <h3 className="text-2xl font-semibold mb-2">Thank you for subscribing!</h3>
              <p className="text-white/70">
                Check your inbox for the latest updates on AI in insurance.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};