import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Vida Protegida</span>
            <span className="text-sm text-accent font-semibold">CHEVROLET</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('planos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('simulador')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Simulador
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Dúvidas
            </button>
            <Button variant="cta" onClick={() => scrollToSection('planos')}>
              Contratar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-background rounded-lg shadow-elegant">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('planos')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('simulador')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Simulador
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Dúvidas
              </button>
              <Button variant="cta" onClick={() => scrollToSection('planos')} className="w-full">
                Contratar Agora
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;