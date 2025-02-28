import { Menu } from '../components/Menu';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { WhyInsureXai } from '../components/WhyInsureXai';
import { AiServices } from '../components/AiServices';
import { HowItWorks } from '../components/HowItWorks';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Menu />
      <Hero />
      <Stats />
      <WhyInsureXai />
      <AiServices />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};