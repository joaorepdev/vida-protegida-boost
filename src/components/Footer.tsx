import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Shield, Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 p-8 bg-primary-foreground/10 rounded-lg">
          <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">
            Proteja quem você ama hoje mesmo
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Não espere por um momento difícil para pensar em proteção. 
            Garante a segurança da sua família com o Vida Protegida Chevrolet.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('planos')}
          >
            <Shield className="w-5 h-5 mr-2" />
            Contratar Agora
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-accent" />
              <div>
                <h4 className="text-xl font-bold">Vida Protegida</h4>
                <p className="text-sm text-primary-foreground/80">CHEVROLET</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Muito mais que um seguro de vida, somos seu parceiro na construção 
              de um futuro seguro e tranquilo para você e sua família.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/60">
                Produto oferecido pela Chevrolet Seguros em parceria com seguradoras licenciadas pela SUSPEG.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4">Links Rápidos</h5>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => scrollToSection('planos')} 
                  className="hover:text-accent transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('simulador')} 
                  className="hover:text-accent transition-colors"
                >
                  Simulador
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('beneficios')} 
                  className="hover:text-accent transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="hover:text-accent transition-colors"
                >
                  Dúvidas
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4">Atendimento</h5>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>0800-XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>contato@vidaprotegida.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>24 horas por dia</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>São Paulo, SP<br />Atendimento nacional</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="opacity-20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Vida Protegida Chevrolet. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/60">
            <button className="hover:text-accent transition-colors">
              Termos de Uso
            </button>
            <button className="hover:text-accent transition-colors">
              Política de Privacidade
            </button>
            <button className="hover:text-accent transition-colors">
              Condições Gerais
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;