import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import AnimatedText from '../components/AnimatedText';

const blogPosts = [
  {
    id: 'future-of-insurance-ai',
    title: 'The Future of Insurance: AI-Driven Transformation',
    description: 'Discover how artificial intelligence is revolutionizing the insurance industry, from automated claims processing to personalized customer service.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    date: 'February 13, 2025',
    readTime: '5 min read',
    category: 'AI Technology'
  },
  {
    id: 'ai-claims-processing-5x-faster',
    title: 'AI Claims Processing: 5X Faster Resolution',
    description: 'Learn how insurance companies are leveraging AI to process claims five times faster while maintaining accuracy and reducing fraud.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    date: 'October 20, 2025',
    readTime: '4 min read',
    category: 'Claims Processing'
  },
  {
    id: 'ai-fraud-detection',
    title: 'AI-Powered Fraud Detection in Insurance',
    description: 'Discover how AI is revolutionizing fraud detection in insurance, saving the industry billions while ensuring faster claim processing for honest customers.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    date: 'February 15, 2025',
    readTime: '8 min read',
    category: 'Fraud Detection'
  },
  {
    id: 'ai-chatbots-insurance',
    title: 'The Role of AI Chatbots in Customer Support and Sales',
    description: 'Discover how AI chatbots are transforming customer support and sales for insurance agencies—providing instant responses, automating policy inquiries, and driving more conversions.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
    date: 'October 30, 2025',
    readTime: '5 min read',
    category: 'Customer Service'
  },
  {
    id: 'ai-blockchain-insurance',
    title: 'How AI and Blockchain are Transforming the Insurance Industry',
    description: 'Discover how AI and blockchain are reshaping the insurance industry by making claims processing faster, underwriting smarter, and fraud detection more secure.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
    date: 'November 5, 2025',
    readTime: '6 min read',
    category: 'AI & Blockchain'
  },
  {
    id: 'ai-risk-assessment',
    title: 'How AI is Transforming Risk Assessment in the Insurance Industry',
    description: 'AI is reshaping risk assessment by using real-time data, machine learning, and predictive analytics. Learn how insurers are leveraging AI for more accurate underwriting and pricing.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    date: 'November 10, 2025',
    readTime: '6 min read',
    category: 'Risk Assessment'
  }
];

export const Blogs = () => {
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
    <div className="min-h-screen bg-black text-white">
      <Menu />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            <AnimatedText>InsurXai Blog</AnimatedText>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            <AnimatedText>
              Insights and innovations in AI-powered insurance technology
            </AnimatedText>
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Link to={`/blogs/${post.id}`} className="block">
                  <div className="rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5">
                    <div className="aspect-video overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-white/60 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white/90 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                          {post.category}
                        </span>
                        <motion.span 
                          className="text-white/60 group-hover:text-white transition-colors duration-300 text-sm flex items-center gap-1"
                          whileHover={{ x: 5 }}
                        >
                          Read More 
                          <span className="text-sm">→</span>
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};