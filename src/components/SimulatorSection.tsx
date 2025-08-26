import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Users, Briefcase, Heart, ArrowRight } from 'lucide-react';

interface SimulationResult {
  recommendedPlan: string;
  planName: string;
  estimatedPrice: string;
  coverage: string;
  reasons: string[];
}

const SimulatorSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    profession: '',
    familySize: '',
    income: '',
    priority: ''
  });
  const [result, setResult] = useState<SimulationResult | null>(null);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const calculateRecommendation = (): SimulationResult => {
    // Simple recommendation logic based on form data
    let score = 0;
    let reasons: string[] = [];

    // Age factor
    const ageNum = parseInt(formData.age);
    if (ageNum < 30) score += 1;
    else if (ageNum < 45) score += 2;
    else score += 3;

    // Profession factor
    if (formData.profession === 'alto-risco') {
      score += 2;
      reasons.push('Profissão de alto risco requer maior proteção');
    }

    // Family size factor
    const familyNum = parseInt(formData.familySize);
    if (familyNum > 3) {
      score += 2;
      reasons.push('Família numerosa precisa de cobertura ampliada');
    } else if (familyNum > 1) {
      score += 1;
    }

    // Income factor
    if (formData.income === 'alta') score += 2;
    else if (formData.income === 'media') score += 1;

    // Priority factor
    if (formData.priority === 'maxima-cobertura') {
      score += 2;
      reasons.push('Prioridade em máxima cobertura');
    } else if (formData.priority === 'equilibrio') {
      score += 1;
      reasons.push('Busca equilibrio entre preço e benefícios');
    } else {
      reasons.push('Foco em preço acessível');
    }

    // Determine plan based on score
    if (score <= 3) {
      return {
        recommendedPlan: 'essencial',
        planName: 'Vida Protegida Essencial',
        estimatedPrice: 'R$ 15-25',
        coverage: 'Até R$ 50.000',
        reasons: [...reasons, 'Proteção fundamental ideal para seu perfil']
      };
    } else if (score <= 6) {
      return {
        recommendedPlan: 'completo',
        planName: 'Vida Protegida',
        estimatedPrice: 'R$ 35-55',
        coverage: 'Até R$ 150.000',
        reasons: [...reasons, 'Proteção completa recomendada para sua situação']
      };
    } else {
      return {
        recommendedPlan: 'master',
        planName: 'Vida Protegida Master',
        estimatedPrice: 'R$ 65-95',
        coverage: 'Até R$ 300.000',
        reasons: [...reasons, 'Máxima proteção ideal para seu perfil']
      };
    }
  };

  const handleSubmit = () => {
    const recommendation = calculateRecommendation();
    setResult(recommendation);
    setStep(4);
  };

  const resetSimulator = () => {
    setStep(1);
    setFormData({
      age: '',
      profession: '',
      familySize: '',
      income: '',
      priority: ''
    });
    setResult(null);
  };

  return (
    <section id="simulador" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <Calculator className="w-4 h-4 mr-2" />
            Simulador Inteligente
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Encontre o plano ideal para você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Responda algumas perguntas simples e descubra qual plano oferece 
            a melhor proteção para sua situação específica.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4].map((stepNum) => (
                    <div
                      key={stepNum}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        stepNum <= step 
                          ? stepNum === 4 ? 'bg-accent' : 'bg-primary' 
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <CardTitle className="text-2xl">
                {step === 1 && "Informações Básicas"}
                {step === 2 && "Situação Familiar"}
                {step === 3 && "Suas Prioridades"}
                {step === 4 && "Sua Recomendação"}
              </CardTitle>
              <CardDescription>
                {step === 4 
                  ? "Baseado nas suas respostas, esta é nossa recomendação:" 
                  : `Passo ${step} de 3`
                }
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {step === 1 && (
                <>
                  <div className="space-y-3">
                    <Label htmlFor="age">Qual sua faixa etária?</Label>
                    <Select value={formData.age} onValueChange={(value) => setFormData({...formData, age: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione sua idade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-25">18 a 25 anos</SelectItem>
                        <SelectItem value="26-35">26 a 35 anos</SelectItem>
                        <SelectItem value="36-45">36 a 45 anos</SelectItem>
                        <SelectItem value="46-55">46 a 55 anos</SelectItem>
                        <SelectItem value="56+">Acima de 56 anos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Sua profissão envolve:</Label>
                    <RadioGroup 
                      value={formData.profession} 
                      onValueChange={(value) => setFormData({...formData, profession: value})}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="baixo-risco" id="baixo-risco" />
                        <Label htmlFor="baixo-risco">Atividades de baixo risco (escritório, comércio)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medio-risco" id="medio-risco" />
                        <Label htmlFor="medio-risco">Atividades de médio risco (viagens, vendas)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="alto-risco" id="alto-risco" />
                        <Label htmlFor="alto-risco">Atividades de alto risco (construção, transporte)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-3">
                    <Label htmlFor="family">Quantas pessoas dependem de você financeiramente?</Label>
                    <Select value={formData.familySize} onValueChange={(value) => setFormData({...formData, familySize: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Número de dependentes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Apenas eu</SelectItem>
                        <SelectItem value="1">1 pessoa</SelectItem>
                        <SelectItem value="2">2 pessoas</SelectItem>
                        <SelectItem value="3">3 pessoas</SelectItem>
                        <SelectItem value="4+">4 ou mais pessoas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Sua faixa de renda familiar:</Label>
                    <RadioGroup 
                      value={formData.income} 
                      onValueChange={(value) => setFormData({...formData, income: value})}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="baixa" id="baixa" />
                        <Label htmlFor="baixa">Até R$ 3.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="media" id="media" />
                        <Label htmlFor="media">R$ 3.000 a R$ 8.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="alta" id="alta" />
                        <Label htmlFor="alta">Acima de R$ 8.000</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <Label>O que é mais importante para você?</Label>
                  <RadioGroup 
                    value={formData.priority} 
                    onValueChange={(value) => setFormData({...formData, priority: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="preco-baixo" id="preco-baixo" />
                      <Label htmlFor="preco-baixo">Menor preço possível</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="equilibrio" id="equilibrio" />
                      <Label htmlFor="equilibrio">Equilibrio entre preço e benefícios</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maxima-cobertura" id="maxima-cobertura" />
                      <Label htmlFor="maxima-cobertura">Máxima cobertura e benefícios</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {step === 4 && result && (
                <div className="text-center space-y-6">
                  <div className="p-6 bg-accent/10 rounded-lg border border-accent/20">
                    <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {result.planName}
                    </h3>
                    <div className="flex justify-center items-baseline mb-4">
                      <span className="text-3xl font-bold text-accent">{result.estimatedPrice}</span>
                      <span className="text-muted-foreground ml-1">/mês</span>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      Cobertura: {result.coverage}
                    </p>
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-foreground mb-3">Por que recomendamos este plano:</h4>
                    <ul className="space-y-2">
                      {result.reasons.map((reason, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="cta" className="flex-1">
                      <Users className="w-4 h-4 mr-2" />
                      Contratar Este Plano
                    </Button>
                    <Button variant="outline-primary" onClick={resetSimulator}>
                      Simular Novamente
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>

            {step < 4 && (
              <div className="flex justify-between p-6 pt-0">
                <Button 
                  variant="outline-primary" 
                  onClick={handleBack} 
                  disabled={step === 1}
                >
                  Voltar
                </Button>
                <Button 
                  variant="default" 
                  onClick={step === 3 ? handleSubmit : handleNext}
                  disabled={
                    (step === 1 && (!formData.age || !formData.profession)) ||
                    (step === 2 && (!formData.familySize || !formData.income)) ||
                    (step === 3 && !formData.priority)
                  }
                >
                  {step === 3 ? 'Ver Recomendação' : 'Próximo'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;