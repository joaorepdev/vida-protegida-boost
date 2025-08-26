import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Como funciona a contratação do seguro?',
      answer: 'A contratação é 100% digital e pode ser feita em poucos minutos. Após escolher seu plano, você preenche um formulário simples, faz o pagamento e recebe sua apólice por email. Não há necessidade de exames médicos para a maioria dos casos.'
    },
    {
      question: 'Quais são as formas de pagamento disponíveis?',
      answer: 'Você pode pagar por cartão de crédito, débito automático em conta corrente ou poupança, ou boleto bancário. O pagamento mensal garante que sua proteção esteja sempre ativa.'
    },
    {
      question: 'Em quanto tempo o seguro entra em vigor?',
      answer: 'Seu seguro entra em vigor imediatamente após a aprovação e o primeiro pagamento. Para morte por causas naturais, há carência de 24 meses. Para morte por acidente, a cobertura é imediata.'
    },
    {
      question: 'Posso alterar meu plano depois de contratado?',
      answer: 'Sim! Você pode fazer upgrade do seu plano a qualquer momento. Para downgrade, é necessário aguardar 12 meses da contratação. Entre em contato conosco para fazer a alteração.'
    },
    {
      question: 'Como funciona o acionamento do seguro?',
      answer: 'Em caso de sinistro, nosso atendimento 24h está disponível pelo telefone 0800-XXX-XXXX. Você também pode acionar pelo app ou site. Nossa equipe especializada te guiará em todo o processo de forma humanizada.'
    },
    {
      question: 'O seguro cobre doenças preexistentes?',
      answer: 'Doenças preexistentes declaradas no momento da contratação são cobertas após o período de carência. É muito importante ser transparente no preenchimento do questionário de saúde.'
    },
    {
      question: 'Posso cancelar o seguro quando quiser?',
      answer: 'Sim, você pode cancelar seu seguro a qualquer momento sem multa ou taxa de cancelamento. Basta entrar em contato conosco com 30 dias de antecedência.'
    },
    {
      question: 'Há limite de idade para contratar?',
      answer: 'Você pode contratar o seguro dos 18 aos 65 anos. A renovação é automática e pode ser mantida até os 70 anos, garantindo proteção por toda a vida.'
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: 'Telefone',
      description: '0800-XXX-XXXX',
      subtitle: 'Atendimento 24h'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: '(11) 9XXXX-XXXX',
      subtitle: 'Chat rápido'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'contato@vidaprotegida.com.br',
      subtitle: 'Resposta em até 2h'
    },
    {
      icon: Clock,
      title: 'Horário',
      description: '24 horas por dia',
      subtitle: '7 dias por semana'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <MessageCircle className="w-4 h-4 mr-2" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tire suas dúvidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reunimos as principais dúvidas para te ajudar a tomar a melhor decisão. 
            Não encontrou sua resposta? Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-elegant">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Precisa de mais ajuda?
          </h3>
          <p className="text-muted-foreground mb-8">
            Nossa equipe está pronta para esclarecer qualquer dúvida
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{option.title}</h4>
                  <p className="text-primary font-medium mb-1">{option.description}</p>
                  <p className="text-sm text-muted-foreground">{option.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;