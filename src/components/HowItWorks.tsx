import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from './AnimatedText';
import { Logo } from './Logo';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <Logo />,
    title: "Assess",
    description: "We analyze your insurance business needs and workflows to identify the highest-impact AI opportunities.",
    number: "01"
  },
  {
    icon: <Logo />,
    title: "Integrate",
    description: "We implement AI-driven solutions customized for your operations, ensuring seamless adoption.",
    number: "02"
  },
  {
    icon: <Logo />,
    title: "Optimize",
    description: "We fine-tune and automate your processes for efficiency and growth, maximizing your ROI.",
    number: "03"
  }
];

export const HowItWorks = () => {
  useEffect(() => {
    gsap.utils.toArray('.animate-text').forEach((element) => {
      gsap.fromTo(
        element as HTMLElement,
        { opacity: 0, y: 50 }, 
        {
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          scrollTrigger: {
            trigger: element as HTMLElement,
            start: 'top 80%',
            scrub: true
          }
        }
      );
    });
  }, []);

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
    <section className="py-24 px-4 relative overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent animate-text">
            <AnimatedText>How InsureXai Transforms Your Business</AnimatedText>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto animate-text">
            <AnimatedText>
              A simple three-step process to revolutionize your insurance operations with AI
            </AnimatedText>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (visible on md and up screens) */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-500 hover:border-white/30 h-full">
                <div className="absolute -top-6 left-8 text-8xl font-bold text-white/5">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="text-4xl mb-6 opacity-80">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white/90">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};