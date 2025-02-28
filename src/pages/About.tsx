import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { useRef } from 'react';
import AnimatedText from '../components/AnimatedText';

const features = [
  {
    icon: "⚡",
    title: "AI-Powered Efficiency",
    description: "From instant quoting to claims automation, our AI solutions handle complex tasks with precision."
  },
  {
    icon: "🚀",
    title: "Scalable & Future-Proof",
    description: "Designed for growth, InsurX evolves with your business, ensuring long-term adaptability."
  },
  {
    icon: "🔄",
    title: "Seamless Integrations",
    description: "Plug into your existing platforms without disrupting operations."
  },
  {
    icon: "⚡",
    title: "Speed & Accuracy",
    description: "Reduce processing times and minimize errors with real-time, intelligent automation."
  },
  {
    icon: "🎯",
    title: "Expertise Meets Innovation",
    description: "Built by insurance professionals, powered by next-gen AI."
  }
];

const founders = [
  {
    name: "Stephanie Belote",
    title: "Co-Founder & Chief Visionary Officer",
    image: "/src/components/out..png",
    bio: "A forward-thinking entrepreneur and AI automation strategist, Stephanie brings a fusion of insurance industry expertise and cutting-edge technology to InsurX. She envisioned an AI-powered solution that revolutionizes risk placement, underwriting, and claims processing. Stephanie drives InsurX's strategic growth, innovation, and industry partnerships, positioning the company as a trailblazer in insurance automation."
  },
  {
    name: "Kavindu Lakshan",
    title: "Co-Founder & Chief Technology Officer",
    image: "/src/components/me (2).jpg",
    bio: "As an AI specialist and technology strategist, Kavindu is the architect behind InsurX's intelligent automation platform. His expertise lies in designing and deploying scalable AI systems for underwriting, claims processing, and policy management. He leads the development of InsurX's proprietary AI models, ensuring speed, accuracy, and compliance."
  }
];

export const About = () => {
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: false, amount: 0.2 });

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

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Menu />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            Xcelerate Insurance. <br />
            Xpand Possibilities.
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            At InsurX, we're redefining the insurance industry with AI-driven automation, intelligent risk placement, and seamless scalability. We empower agents, brokers, MGAs, PEOs, carriers, and InsurTechs with next-gen AI solutions that optimize workflows, streamline underwriting, and transform claims processing.
          </motion.p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              The AI Backbone of Insurance
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Insurance isn't just about policies—it's about precision, speed, and trust. That's why InsurX delivers industry-specific AI automation that enhances efficiency, compliance, and profitability. Our solutions intelligently optimize workflows, streamline underwriting and claims, and integrate seamlessly with CRMs and policy management systems.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariants}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 group hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:transform group-hover:rotate-12">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white/90">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index + 3}
                custom={index + 3}
                variants={featureVariants}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 group hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:transform group-hover:rotate-12">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white/90">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Future of Insurance Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-30" />
        <motion.div
          className="max-w-6xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              <AnimatedText>The Future of Insurance is Automated</AnimatedText>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              <AnimatedText>
                We're not just keeping up with industry changes—we're driving them. InsurX empowers insurance professionals with AI tools that enhance their capabilities, streamline operations, and deliver exceptional results.
              </AnimatedText>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Meet Our Founders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all duration-500 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-white/10 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-2 text-white/90">
                      {founder.name}
                    </h3>
                    <p className="text-white/60 mb-4">
                      {founder.title}
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-30" />
        <motion.div
          className="max-w-3xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Ready to Xcelerate Your Business and Xpand Your Potential?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link to="/book-a-call">
                <motion.button
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Free AI Strategy Call
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Our AI Solutions
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};