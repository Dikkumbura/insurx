import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Logo } from '../components/Logo';

export const BookCall = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available time slots (you would typically fetch these from a backend)
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the booking submission
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
            <AnimatedText>Book Your Free AI Consultation Call</AnimatedText>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/70 mb-12"
          >
            <AnimatedText>
              Speak with our AI automation experts and discover how we can help your insurance business leverage AI. Schedule a free strategy call at your convenience.
            </AnimatedText>
          </motion.p>
        </motion.div>

        {!isSubmitted ? (
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Date Selection */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-white/80 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-4">
                  Preferred Time * (EST)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {timeSlots.map((slot) => (
                    <motion.label
                      key={slot}
                      className={`
                        relative cursor-pointer overflow-hidden group
                        before:absolute before:inset-0 before:border before:border-white/20 before:rounded-lg
                        after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-lg
                        after:transition-all after:duration-300 after:content-['']
                        hover:after:border-white/40 hover:after:scale-95
                      `}
                    >
                      <input
                        type="radio"
                        name="time"
                        value={slot}
                        checked={formData.time === slot}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`
                          px-4 py-3 text-center rounded-lg transition-all duration-300
                          ${formData.time === slot 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white/5 text-white/80 hover:bg-white/10'
                          }
                          group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                        `}
                      >
                        {slot}
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-white/80 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                  placeholder="Any specific topics you'd like to discuss?"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule My Free AI Consultation
              </motion.button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-4"><Logo /></div>
            <h3 className="text-2xl font-semibold mb-4">Your call has been successfully scheduled!</h3>
            <p className="text-white/70">
              Check your email for the meeting details. We look forward to speaking with you.
            </p>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  );
};