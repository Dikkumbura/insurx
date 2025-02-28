import { ServicesHero } from '../components/ServicesHero';
import { DetailedServices } from '../components/DetailedServices';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';

export const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Menu />
      <ServicesHero />
      <DetailedServices />
      <CallToAction />
      <Footer />
    </div>
  );
};