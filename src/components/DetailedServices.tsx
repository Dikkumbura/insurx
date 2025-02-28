import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    icon: "🤖",
    title: "AI-Powered Customer Service & Sales",
    overview: "Automate customer interactions, qualify leads, and streamline follow-ups with AI-driven chatbots and CRM integrations.",
    features: [
      "AI chatbots handle policy inquiries 24/7, reducing manual workload",
      "Automated lead qualification and scoring to prioritize high-value prospects",
      "AI-powered email and SMS follow-ups to nurture potential clients"
    ],
    example: "An AI chatbot instantly answers common policy questions, schedules follow-ups, and updates CRM records automatically.",
    metrics: {
      responseTime: "< 1 second",
      availability: "24/7",
      satisfactionRate: "95%"
    }
  },
  {
    icon: "⚡",
    title: "AI-Driven Claims Processing & Fraud Detection",
    overview: "Speed up claims processing, reduce fraud, and ensure accuracy with AI-powered document scanning and fraud analysis.",
    features: [
      "AI extracts data from claim forms and automatically verifies details",
      "AI scans accident photos to estimate repair costs instantly",
      "Fraud detection algorithms flag suspicious claims in real-time"
    ],
    example: "AI scans images of car damage, compares them to past claims, and estimates repair costs within seconds.",
    metrics: {
      processingSpeed: "5x faster",
      fraudDetection: "99.9%",
      accuracy: "98%"
    }
  },
  {
    icon: "📊",
    title: "AI-Powered Underwriting & Risk Assessment",
    overview: "Optimize policy underwriting with AI-driven risk assessments and dynamic pricing models.",
    features: [
      "AI assigns risk scores instantly based on customer data",
      "AI predicts policy renewals and suggests retention strategies",
      "Telematics integration adjusts auto insurance pricing dynamically"
    ],
    example: "AI personalizes auto insurance rates based on a customer's driving behavior using telematics data.",
    metrics: {
      riskAccuracy: "95%",
      pricingOptimization: "+40%",
      retentionRate: "85%"
    }
  },
  {
    icon: "🎯",
    title: "AI-Driven Marketing & Lead Generation",
    overview: "Increase sales and customer retention with AI-powered marketing automation.",
    features: [
      "AI predicts high-value leads and scores them based on behavior",
      "AI automates social media, email marketing, and content creation",
      "AI identifies cross-sell and upsell opportunities"
    ],
    example: "AI detects home insurance clients who may need auto insurance and sends targeted offers automatically.",
    metrics: {
      leadQuality: "+60%",
      conversionRate: "3x higher",
      campaignROI: "+45%"
    }
  },
  {
    icon: "📝",
    title: "AI-Powered Workflow & Compliance Automation",
    overview: "Automate policy processing, document handling, and compliance checks with AI-driven workflows.",
    features: [
      "AI auto-fills policy forms and extracts key information from documents",
      "Compliance automation ensures policies meet state and federal regulations",
      "AI dashboards provide real-time insights into agency performance"
    ],
    example: "AI extracts customer details from uploaded PDFs and automatically fills out insurance applications.",
    metrics: {
      timeReduction: "80%",
      errorReduction: "99%",
      complianceRate: "100%"
    }
  },
  {
    icon: "🏢",
    title: "White-Label AI Solutions for Insurance Agencies",
    overview: "Offer custom AI-powered tools under your brand with seamless API integrations.",
    features: [
      "AI-powered customer service chatbots branded for individual agencies",
      "AI sales tools that help agents close more deals",
      "API integrations with industry software like EZLynx and Applied Epic"
    ],
    example: "An insurance agency gets a custom AI chatbot to handle policy inquiries, claims, and renewals under its brand.",
    metrics: {
      implementation: "2 weeks",
      customization: "100%",
      integrationRate: "99.9%"
    }
  }
];

export const DetailedServices = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

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

  const expandedVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: {
          duration: 0.4
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <motion.div
                className={`p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 cursor-pointer
                  transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5
                  ${expandedService === index ? 'border-white/30' : ''}`}
                whileHover={{ 
                  scale: expandedService === index ? 1 : 1.02,
                  boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                }}
                layout
              >
                {/* Header Section */}
                <motion.div className="flex items-start gap-6" layout>
                  <motion.div 
                    className="text-4xl opacity-80"
                    whileHover={{ scale: 1.1 }}
                    layout
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-2xl font-semibold mb-3 text-white/90"
                      layout
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/70 leading-relaxed"
                      layout
                    >
                      {service.overview}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      variants={expandedVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="mt-8 space-y-8"
                    >
                      {/* Features */}
                      <div className="bg-white/5 rounded-2xl p-6">
                        <h4 className="text-lg font-semibold mb-4 text-white/90">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 text-white/70"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></span>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Example */}
                      <div className="bg-white/5 rounded-2xl p-6">
                        <h4 className="text-lg font-semibold mb-3 text-white/90">
                          Real-World Example
                        </h4>
                        <p className="text-white/70">
                          {service.example}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="bg-white/5 rounded-2xl p-6">
                        <h4 className="text-lg font-semibold mb-4 text-white/90">
                          Performance Metrics
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(service.metrics).map(([key, value], i) => (
                            <motion.div
                              key={i}
                              className="text-center"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="text-2xl font-bold text-white mb-1">
                                {value}
                              </div>
                              <div className="text-sm text-white/60 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="text-center">
                        <Link to="/book-a-call">
                          <motion.button
                            className="px-8 py-3 text-sm rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Schedule a Demo
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};