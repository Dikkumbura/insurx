import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';

const faqs = [
  {
    question: "How quickly can we implement AI in our insurance agency?",
    answer: "Implementation typically takes 2-4 weeks, with immediate benefits visible in the first week. We handle all technical aspects, ensuring a smooth transition without disrupting your current operations."
  },
  {
    question: "Is AI secure enough for sensitive insurance data?",
    answer: "Yes. We implement bank-level security protocols and ensure full compliance with insurance industry regulations. All data is encrypted and processed in accordance with HIPAA and GDPR standards."
  },
  {
    question: "What ROI can we expect from AI implementation?",
    answer: "Our clients typically see a 3-5x ROI within the first year. This includes 60% reduction in processing time, 40% decrease in operational costs, and 80% improvement in customer response times."
  },
  {
    question: "Do we need technical expertise to use your AI solutions?",
    answer: "No technical expertise required. Our solutions are designed for insurance professionals, with intuitive interfaces and full training provided. We handle all technical aspects and provide ongoing support."
  }
];

export const CallToAction = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            <AnimatedText>Ready to Transform Your Insurance Business with AI?</AnimatedText>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            <AnimatedText>
              Join the leading insurance agencies already leveraging AI to grow their business.
            </AnimatedText>
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mb-16"
        >
          <Link to="/book-a-call">
            <motion.button
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Free AI Strategy Call
            </motion.button>
          </Link>
          <p className="text-white/60 text-sm mt-4">
            Spots are limited. Secure yours today.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white/90">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg overflow-hidden"
                variants={itemVariants}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-white/90">{faq.question}</span>
                  <span className="ml-4 text-white/60">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-4 text-white/70">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};