import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Users, Umbrella, Phone, GraduationCap, ShoppingCart, UserCheck } from 'lucide-react';
import protectionIcon from '@/assets/protection-icon.png';
import securityIcon from '@/assets/security-icon.png';
import peaceIcon from '@/assets/peace-icon.png';

const BenefitsSection = () => {
  const mainBenefits = [
    {
      icon: protectionIcon,
      title: 'Proteção Completa',
      description: 'Cobertura para morte, invalidez e situações imprevistas da vida.',
    },
    {
      icon: securityIcon,
      title: 'Segurança Financeira',
      description: 'Garanta a estabilidade financeira da sua família quando mais precisar.',
    },
    {
      icon: peaceIcon,
      title: 'Tranquilidade',
      description: 'Durma em paz sabendo que seus entes queridos estão protegidos.',
    },
  ];

  const comparativeData = [
    {
      benefit: 'Morte por qualquer causa',
      essencial: true,
      completo: true,
      master: true,
      icon: Heart,
    },
    {
      benefit: 'Invalidez permanente por acidente',
      essencial: true,
      completo: true,
      master: true,
      icon: Shield,
    },
    {
      benefit: 'Assistência funeral',
      essencial: true,
      completo: true,
      master: true,
      icon: Umbrella,
    },
    {
      benefit: 'Atendimento 24h',
      essencial: true,
      completo: true,
      master: true,
      icon: Phone,
    },
    {
      benefit: 'Perda de renda por desemprego',
      essencial: false,
      completo: true,
      master: true,
      icon: Users,
    },
    {
      benefit: 'Auxílio educação filhos',
      essencial: false,
      completo: true,
      master: true,
      icon: GraduationCap,
    },
    {
      benefit: 'Cesta básica familiar',
      essencial: false,
      completo: false,
      master: true,
      icon: ShoppingCart,
    },
    {
      benefit: 'Atendimento VIP',
      essencial: false,
      completo: false,
      master: true,
      icon: UserCheck,
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Benefits */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Benefícios
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher o Vida Protegida?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Muito mais que um seguro, uma promessa de cuidado e proteção para quem você ama.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainBenefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <img src={benefit.icon} alt={benefit.title} className="w-12 h-12" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparative Table */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Compare os planos
          </h3>
          <p className="text-muted-foreground mb-8">
            Veja o que cada plano oferece para fazer a melhor escolha
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-elegant">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="text-left p-4 font-semibold">Benefícios</th>
                      <th className="text-center p-4 font-semibold">Essencial</th>
                      <th className="text-center p-4 font-semibold bg-accent text-accent-foreground">
                        Completo
                        <div className="text-xs mt-1 opacity-90">POPULAR</div>
                      </th>
                      <th className="text-center p-4 font-semibold">Master</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparativeData.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <tr key={index} className={index % 2 === 0 ? 'bg-muted/20' : 'bg-background'}>
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <IconComponent className="w-5 h-5 text-primary" />
                              <span className="font-medium text-foreground">{item.benefit}</span>
                            </div>
                          </td>
                          <td className="text-center p-4">
                            {item.essencial ? (
                              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                                ✓
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center mx-auto">
                                ✗
                              </div>
                            )}
                          </td>
                          <td className="text-center p-4 bg-accent/5">
                            {item.completo ? (
                              <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto">
                                ✓
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center mx-auto">
                                ✗
                              </div>
                            )}
                          </td>
                          <td className="text-center p-4">
                            {item.master ? (
                              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                                ✓
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center mx-auto">
                                ✗
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;