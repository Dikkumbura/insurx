import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const benefits = [
  {
    icon: "📈",
    title: "Increase Sales",
    description: "AI qualifies leads 24/7 and personalizes offers in real-time, turning more prospects into customers. Start converting leads while you sleep."
  },
  {
    icon: "💰",
    title: "Reduce Costs",
    description: "Automate up to 80% of claims processing and customer support tasks. Cut operational costs while maintaining quality service delivery."
  },
  {
    icon: "🚀",
    title: "Improve Experience",
    description: "Instant responses to customer inquiries and lightning-fast claims processing. Delight customers with speed and efficiency they've never seen before."
  }
];

export const WhyInsureXai = () => {
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
    <section className="py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            <AnimatedText>Why AI? Why Now?</AnimatedText>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            <AnimatedText>
              The insurance industry is evolving. Stay ahead with AI-powered solutions that drive growth and efficiency.
            </AnimatedText>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all duration-500 group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-4xl mb-6 opacity-80">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white/90">
                {benefit.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {benefit.description}
              </p>
              <motion.div
                className="mt-6 inline-flex items-center text-sm text-white/60 hover:text-white/90 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Learn more →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};