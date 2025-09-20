import React from 'react';
import { Search, Heart, Share2, BarChart } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: '1. Encontre uma Causa',
      description: 'Navegue por centenas de campanhas verificadas, desde projetos locais até grandes operações humanitárias globais.',
    },
    {
      icon: Heart,
      title: '2. Faça sua Doação',
      description: 'Escolha o valor que deseja doar. Utilizamos PIX para garantir que sua contribuição seja instantânea, segura e sem taxas extras.',
    },
    {
      icon: Share2,
      title: '3. Compartilhe e Amplifique',
      description: 'O poder da comunidade é imenso. Compartilhe a campanha em suas redes sociais para que mais pessoas possam ajudar.',
    },
    {
      icon: BarChart,
      title: '4. Acompanhe o Impacto',
      description: 'Veja em tempo real como sua doação está sendo usada. Fornecemos relatórios de transparência e atualizações constantes.',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Como Funciona</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Doar em nossa plataforma é simples, seguro e transparente. Veja como você pode fazer a diferença em 4 passos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
