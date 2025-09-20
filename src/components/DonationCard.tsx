import React, { useState } from 'react';
import { QrCode, Heart, Copy, Check, AlertTriangle } from 'lucide-react';
import { useDashboard } from '../contexts/DashboardContext';

const DonationCard: React.FC = () => {
  const { addDonation, incrementClick } = useDashboard();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showPixCode, setShowPixCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [donorName, setDonorName] = useState('');

  const suggestionAmounts = [30, 60, 120, 250, 500];
  const pixCode = "00020126580014br.gov.bcb.pix01364c2f5932-5678-4321-890a-987654321def520400005303986540530.005802BR5925Org Humanitaria Gaza6009SAO PAULO62070503***6304WXYZ";

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setShowPixCode(false);
    incrementClick('donation');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
    setShowPixCode(false);
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount > 0) {
      setShowPixCode(true);
      incrementClick('donation');
      
      // Simulate donation completion after 10 seconds
      setTimeout(() => {
        addDonation({
          name: donorName || 'Doador Anônimo',
          amount,
          message: 'Solidariedade ao povo palestino',
          pixCode: pixCode
        });
      }, 10000);
    }
  };

  const copyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar código PIX:', err);
    }
  };

  const getDonationAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Campaign Story */}
          <div className="lg:col-span-2 space-y-8">
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

          {/* Donation Card */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sticky top-24">
              {!showPixCode ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ajude Gaza Agora</h3>
                    <p className="text-sm text-gray-600">Cada doação salva vidas</p>
                  </div>
                  
                  {/* Donor Name */}
                  <div className="space-y-2 mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Seu nome (opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Como você gostaria de aparecer"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  {/* Amount Selection */}
                  <div className="space-y-4 mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Escolha o valor da sua doação
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {suggestionAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => handleAmountSelect(amount)}
                          className={`p-3 border rounded-lg text-center font-medium transition-colors ${
                            selectedAmount === amount
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-300 hover:border-blue-300 text-gray-700'
                          }`}
                        >
                          R$ {amount}
                        </button>
                      ))}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ou digite outro valor
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          R$
                        </span>
                        <input
                          type="number"
                          placeholder="0,00"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* PIX Payment Method */}
                  <div className="space-y-4 mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Forma de pagamento
                    </label>
                    <div className="w-full flex items-center space-x-3 p-4 border-2 border-blue-500 bg-blue-50 rounded-lg">
                      <QrCode className="h-6 w-6 text-blue-600" />
                      <div className="flex-1">
                        <span className="text-lg font-semibold text-blue-700">PIX</span>
                        <p className="text-sm text-blue-600">Doação instantânea e segura</p>
                      </div>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <button 
                    onClick={handleDonate}
                    disabled={getDonationAmount() <= 0}
                    className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Doar Agora - Salvar Vidas
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    🔒 Doação 100% segura • Recibo para IR
                  </p>
                </>
              ) : (
                <>
                  {/* PIX Code Display */}
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center mb-4">
                      <QrCode className="h-8 w-8 text-blue-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">PIX - Gaza</h3>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-blue-700 mb-2">
                        R$ {getDonationAmount().toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        Para: Ajuda Humanitária Gaza
                      </p>
                    </div>

                    {/* QR Code Placeholder */}
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mx-auto w-48 h-48 flex items-center justify-center">
                      <div className="text-center">
                        <QrCode className="h-24 w-24 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">QR Code do PIX</p>
                      </div>
                    </div>

                    {/* PIX Code */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-700">
                        Ou copie o código PIX:
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg border">
                        <p className="text-xs text-gray-600 break-all font-mono">
                          {pixCode}
                        </p>
                      </div>
                      <button
                        onClick={copyPixCode}
                        className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 text-green-600" />
                            <span className="text-green-600">Código copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span>Copiar código PIX</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-xs text-yellow-800 font-medium">⚡ Cada minuto conta!</p>
                      <p className="text-xs text-yellow-700">Sua doação será convertida em ajuda imediata.</p>
                    </div>

                    <div className="space-y-2 text-xs text-gray-500">
                      <p>1. Abra o app do seu banco</p>
                      <p>2. Escolha a opção PIX</p>
                      <p>3. Cole o código ou escaneie o QR</p>
                      <p>4. Confirme a doação</p>
                    </div>

                    <button
                      onClick={() => setShowPixCode(false)}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                    >
                      Voltar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
