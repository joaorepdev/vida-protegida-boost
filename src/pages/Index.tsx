import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PlansSection from '../components/PlansSection';
import SimulatorSection from '../components/SimulatorSection';
import BenefitsSection from '../components/BenefitsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PlansSection />
        <SimulatorSection />
        <BenefitsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
