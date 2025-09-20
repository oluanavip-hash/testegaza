import React from 'react';
import { Heart, AlertTriangle } from 'lucide-react';

const CampaignStory: React.FC = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">A Crise Humanitária em Gaza</h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                    <p>
                        Gaza enfrenta uma das piores crises humanitárias do mundo. Segundo relatórios da ONU,
                        mais de 2,3 milhões de pessoas vivem em condições extremamente precárias, com:
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                        <div className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                                <p className="text-red-800 font-medium">Situação Crítica:</p>
                                <ul className="text-red-700 text-sm mt-2 space-y-1">
                                    <li>• 90% da população enfrenta insegurança alimentar severa</li>
                                    <li>• Apenas 1,5 litros de água potável por pessoa/dia</li>
                                    <li>• 70% das crianças sofrem de desnutrição aguda</li>
                                    <li>• Hospitais operando com apenas 30% da capacidade</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p>
                        Nossa organização trabalha diretamente com parceiros locais para distribuir:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Cestas de alimentos não-perecíveis para famílias</li>
                        <li>Kits de purificação e água potável</li>
                        <li>Medicamentos básicos e suprimentos médicos</li>
                        <li>Cobertores e itens de primeira necessidade</li>
                        <li>Kits de higiene para prevenção de doenças</li>
                    </ul>
                    <p>
                        Cada real doado é convertido em ajuda direta através de organizações humanitárias
                        credenciadas que atuam na região. Sua contribuição pode salvar vidas.
                    </p>
                </div>
            </div>

            {/* Impact Section */}
            <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Impacto da sua doação</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Heart className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">R$ 30</p>
                            <p className="text-sm text-gray-600">5 refeições para uma criança</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Heart className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">R$ 60</p>
                            <p className="text-sm text-gray-600">Kit de higiene para uma família</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Heart className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">R$ 120</p>
                            <p className="text-sm text-gray-600">Água potável para 10 pessoas por 1 semana</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Heart className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">R$ 250</p>
                            <p className="text-sm text-gray-600">Cesta básica para família por 1 mês</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transparency Section */}
            <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparência Total</h3>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Ajuda direta às famílias</span>
                        <span className="font-medium text-gray-900">85%</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Logística e distribuição</span>
                        <span className="font-medium text-gray-900">10%</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Administração</span>
                        <span className="font-medium text-gray-900">5%</span>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                    Relatórios detalhados são publicados mensalmente em nosso site.
                </p>
            </div>
        </div>
    );
};

export default CampaignStory;
