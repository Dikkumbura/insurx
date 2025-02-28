import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const services = [
  {
    icon: "🤖",
    title: "AI-Powered Customer Service",
    description: "Chatbots answer policy questions twenty-four seven, reducing agent workload while maintaining high customer satisfaction.",
    cta: "See How It Works"
  },
  {
    icon: "⚡",
    title: "AI-Driven Claims Processing",
    description: "AI scans accident photos and estimates repair costs instantly, accelerating claims settlement and improving accuracy.",
    cta: "Learn More"
  },
  {
    icon: "📊",
    title: "AI-Powered Underwriting",
    description: "AI personalizes auto insurance rates based on driving behavior, enabling more accurate risk assessment and fairer pricing.",
    cta: "Explore Features"
  },
  {
    icon: "🎯",
    title: "AI-Driven Marketing",
    description: "AI detects home insurance clients who need auto insurance, creating targeted cross-selling opportunities.",
    cta: "View Demo"
  },
  {
    icon: "📝",
    title: "AI-Powered Workflow",
    description: "AI scans PDFs and fills policy applications instantly, streamlining operations and reducing manual data entry.",
    cta: "See It In Action"
  },
  {
    icon: "🏢",
    title: "White-Label AI Solutions",
    description: "Agencies get their own AI chatbot to handle claims and policy inquiries, branded with their identity.",
    cta: "Get Started"
  }
];

export const AiServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent leading-[1.4] pb-2">
            <AnimatedText>Custom AI Solutions for Insurance Agencies</AnimatedText>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            <AnimatedText>
              Transform your agency with cutting-edge AI technology designed specifically for the insurance industry.
            </AnimatedText>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 h-full transition-all duration-500 hover:border-white/30">
                <div className="text-4xl mb-6 opacity-80">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white/90">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <motion.button
                  className="px-6 py-2 text-sm rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};