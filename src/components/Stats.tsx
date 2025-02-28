import { useEffect } from 'react';
import { observeElements } from '../utils/intersectionObserver';
import CountUp from 'react-countup';
import AnimatedText from './AnimatedText';

export const Stats = () => {
  const stats = [
    {
      percentage: 80,
      text: "of insurance inquiries can be automated with AI",
      details: "AI can handle repetitive tasks, freeing up human resources for more complex issues."
    },
    {
      percentage: 60,
      text: "reduction in claim processing time with AI",
      details: "AI streamlines the claims process, reducing time and errors."
    },
    {
      percentage: 3,
      text: "increase in lead conversions using AI chatbots",
      details: "AI chatbots engage customers effectively, leading to higher conversion rates."
    }
  ];

  useEffect(() => {
    observeElements('.animate-on-scroll', 'visible');
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-500 hover:scale-105 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-on-scroll">
          <div className="relative z-10">
            <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              <CountUp
                end={stat.percentage}
                duration={2}
                suffix={stat.percentage === 3 ? "x" : "%"}
                start={0}
              />
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              <AnimatedText>{stat.text}</AnimatedText>
            </p>
            <p className="text-white/50 text-sm mt-4">
              <AnimatedText>{stat.details}</AnimatedText>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};