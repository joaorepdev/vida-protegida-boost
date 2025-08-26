import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-family.jpg';

const HeroSection = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-12 w-12 text-accent" />
            <div>
              <h2 className="text-accent font-bold text-xl">Vida Protegida</h2>
              <p className="text-primary-foreground/80 text-sm">CHEVROLET</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            O futuro de quem você ama começa com a 
            <span className="text-accent"> proteção</span> que você contrata hoje
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl leading-relaxed">
            Não deixe para amanhã a segurança financeira da sua família. 
            Com o Vida Protegida Chevrolet, você garante tranquilidade e proteção 
            para os momentos mais importantes da vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToPlans}
              className="text-lg px-8 py-4"
            >
              <Heart className="mr-2 h-5 w-5" />
              Conheça os Planos
            </Button>
            <Button 
              variant="outline-primary" 
              size="lg" 
              onClick={scrollToSimulator}
              className="text-lg px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm"
            >
              <Users className="mr-2 h-5 w-5" />
              Simule sua Proteção
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">100% Digital</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Cobertura Nacional</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Atendimento 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;