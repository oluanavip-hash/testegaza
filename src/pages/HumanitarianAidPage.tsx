import React from 'react';
import { Globe, Shield, Droplets, Utensils, HeartHandshake } from 'lucide-react';

const HumanitarianAidPage: React.FC = () => {
  const operations = [
    { name: 'Ajuda para Gaza (ONU)', icon: Globe, description: 'Distribuição emergencial de alimentos, água e suprimentos médicos em coordenação com a OCHA.', active: true },
    { name: 'Refugiados da Síria', icon: HeartHandshake, description: 'Apoio a campos de refugiados com educação e cuidados de saúde.', active: false },
    { name: 'Crise de Fome na África', icon: Utensils, description: 'Programas de nutrição e segurança alimentar em regiões afetadas pela seca.', active: false },
    { name: 'Emergências Climáticas', icon: Droplets, description: 'Resposta rápida a desastres naturais, fornecendo abrigo e itens de primeira necessidade.', active: false },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossas Operações Humanitárias</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Em parceria com a ONU e outras agências globais, atuamos em frentes críticas para levar esperança e ajuda onde é mais necessário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {operations.map((op) => (
            <div key={op.name} className={`p-6 rounded-lg border-2 ${op.active ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${op.active ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  <op.icon className={`h-6 w-6 ${op.active ? 'text-blue-600' : 'text-gray-600'}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{op.name}</h3>
                  <p className="text-sm text-gray-600">{op.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Nosso Compromisso com a Transparência</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-10 w-10 text-green-600 mb-3" />
              <h4 className="text-xl font-semibold mb-2">Auditoria ONU</h4>
              <p className="text-gray-600">Nossas operações são auditadas e verificadas por agências das Nações Unidas.</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-10 w-10 text-blue-600 mb-3" />
              <h4 className="text-xl font-semibold mb-2">Relatórios Públicos</h4>
              <p className="text-gray-600">Publicamos relatórios mensais detalhando a alocação de todos os recursos.</p>
            </div>
            <div className="flex flex-col items-center">
              <HeartHandshake className="h-10 w-10 text-red-600 mb-3" />
              <h4 className="text-xl font-semibold mb-2">Impacto Direto</h4>
              <p className="text-gray-600">Garantimos que pelo menos 85% de cada doação chegue diretamente aos beneficiários.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanitarianAidPage;
