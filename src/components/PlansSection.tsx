import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Shield, Heart, Users, Zap } from 'lucide-react';

const PlansSection = () => {
  const plans = [
    {
      id: 'essencial',
      name: 'Vida Protegida Essencial',
      subtitle: 'A proteção fundamental para o seu dia a dia',
      price: 'A partir de R$ 15',
      period: '/mês',
      popular: false,
      icon: Shield,
      benefits: [
        'Morte por qualquer causa',
        'Invalidez permanente por acidente',
        'Assistência funeral',
        'Atendimento 24h',
      ],
      coverage: 'Até R$ 50.000',
      color: 'bg-secondary',
    },
    {
      id: 'completo',
      name: 'Vida Protegida',
      subtitle: 'Proteção completa para toda a família',
      price: 'A partir de R$ 35',
      period: '/mês',
      popular: true,
      icon: Heart,
      benefits: [
        'Morte por qualquer causa',
        'Invalidez permanente por acidente',
        'Perda de renda por desemprego',
        'Assistência funeral',
        'Auxílio educação filhos',
        'Atendimento 24h',
      ],
      coverage: 'Até R$ 150.000',
      color: 'bg-primary',
    },
    {
      id: 'master',
      name: 'Vida Protegida Master',
      subtitle: 'Máxima proteção e benefícios exclusivos',
      price: 'A partir de R$ 65',
      period: '/mês',
      popular: false,
      icon: Star,
      benefits: [
        'Morte por qualquer causa',
        'Invalidez permanente por acidente',
        'Perda de renda por desemprego',
        'Assistência funeral premium',
        'Auxílio educação filhos',
        'Cesta básica familiar',
        'Atendimento VIP 24h',
        'Consultoria financeira',
      ],
      coverage: 'Até R$ 300.000',
      color: 'bg-accent',
    },
  ];

  const handlePlanSelect = (planId: string) => {
    // Here you would implement the actual plan selection logic
    console.log(`Plan selected: ${planId}`);
    // Scroll to contact or redirect to contracting flow
  };

  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Escolha seu plano
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Planos que se adaptam à sua vida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do básico ao premium, temos a proteção ideal para cada momento da sua vida. 
            Comece pelo essencial e evolua conforme suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-300 hover:shadow-elegant hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-primary shadow-elegant scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-accent text-accent-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4 ${
                    plan.popular ? 'shadow-glow' : ''
                  }`}>
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">
                    {plan.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Cobertura: {plan.coverage}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    variant={plan.popular ? "cta" : "outline-primary"}
                    className="w-full"
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    {plan.popular ? "Contratar Agora" : "Quero Este Plano"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Dúvidas sobre qual plano escolher?
          </p>
          <Button 
            variant="outline-primary" 
            onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Users className="w-4 h-4 mr-2" />
            Use nosso Simulador
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;