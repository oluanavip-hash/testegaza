import React, { useState } from 'react';
import { ArrowLeft, DollarSign, Users, Eye, Share2, Settings, BarChart3, Clock, TrendingUp, Image, Save, Trash2, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useDashboard } from '../contexts/DashboardContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { donations, analytics, siteConfig, updateSiteConfig, totalRaised } = useDashboard();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditingConfig, setIsEditingConfig] = useState(false);
  const [tempConfig, setTempConfig] = useState(siteConfig);

  // Prepare chart data
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return {
      date: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      donations: donations.filter(d => {
        const donationDate = new Date(d.time);
        return donationDate.toDateString() === date.toDateString();
      }).length,
      amount: donations.filter(d => {
        const donationDate = new Date(d.time);
        return donationDate.toDateString() === date.toDateString();
      }).reduce((sum, d) => sum + d.amount, 0)
    };
  }).reverse();

  const donationsByAmount = [
    { range: 'R$ 20-50', count: donations.filter(d => d.amount >= 20 && d.amount <= 50).length, color: '#8b5cf6' },
    { range: 'R$ 51-100', count: donations.filter(d => d.amount > 50 && d.amount <= 100).length, color: '#06b6d4' },
    { range: 'R$ 101-200', count: donations.filter(d => d.amount > 100 && d.amount <= 200).length, color: '#10b981' },
    { range: 'R$ 201+', count: donations.filter(d => d.amount > 200).length, color: '#f59e0b' }
  ];

  const progress = Math.min((totalRaised / siteConfig.goal) * 100, 100);

  const handleSaveConfig = () => {
    updateSiteConfig(tempConfig);
    setIsEditingConfig(false);
  };

  const StatCard = ({ title, value, icon: Icon, change, color = "blue" }: any) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm flex items-center mt-1 ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className="h-3 w-3 mr-1" />
              {change > 0 ? '+' : ''}{change}%
            </p>
          )}
        </div>
        <div className={`h-12 w-12 bg-${color}-100 rounded-lg flex items-center justify-center`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin - Gaza</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Última atualização: {new Date().toLocaleTimeString('pt-BR')}
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Visão Geral', icon: BarChart3 },
              { id: 'donations', name: 'Doações', icon: DollarSign },
              { id: 'analytics', name: 'Analytics', icon: Eye },
              { id: 'settings', name: 'Configurações', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Arrecadado"
                value={`R$ ${totalRaised.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                icon={DollarSign}
                change={12.5}
                color="green"
              />
              <StatCard
                title="Total de Doações"
                value={donations.length}
                icon={Users}
                change={8.2}
                color="blue"
              />
              <StatCard
                title="Visitas Hoje"
                value={analytics.todayVisits}
                icon={Eye}
                change={15.3}
                color="purple"
              />
              <StatCard
                title="Taxa de Conversão"
                value={`${((donations.length / analytics.totalVisits) * 100).toFixed(1)}%`}
                icon={TrendingUp}
                change={3.1}
                color="orange"
              />
            </div>

            {/* Progress toward goal */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Meta da Campanha</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progresso</span>
                <span className="text-sm font-medium text-gray-900">{progress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>R$ {totalRaised.toLocaleString('pt-BR')}</span>
                <span>R$ {siteConfig.goal.toLocaleString('pt-BR')}</span>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Donations over time */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Doações por Dia</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={last7Days}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="donations" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Donation amounts */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Doações por Valor</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={donationsByAmount}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                      label={({ range, count }) => `${range}: ${count}`}
                    >
                      {donationsByAmount.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Donations Tab */}
        {activeTab === 'donations' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Doações Recentes</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Doador
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Valor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data/Hora
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mensagem
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {donations.slice(0, 20).map((donation) => (
                      <tr key={donation.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {donation.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <span className="font-bold text-green-600">
                            R$ {donation.amount.toFixed(2)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {donation.time.toLocaleString('pt-BR')}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {donation.message || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard
                title="Total de Visitas"
                value={analytics.totalVisits.toLocaleString('pt-BR')}
                icon={Eye}
                change={18.2}
                color="blue"
              />
              <StatCard
                title="Clicks em Doação"
                value={analytics.donationClicks}
                icon={DollarSign}
                change={25.4}
                color="green"
              />
              <StatCard
                title="Compartilhamentos"
                value={analytics.shareClicks}
                icon={Share2}
                change={12.1}
                color="purple"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Valores Arrecadados (7 dias)</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={last7Days}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`R$ ${Number(value).toFixed(2)}`, 'Valor']} />
                  <Bar dataKey="amount" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Configurações da Campanha</h3>
                <button
                  onClick={() => setIsEditingConfig(!isEditingConfig)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {isEditingConfig ? 'Cancelar Edição' : 'Editar'}
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Imagens Principais (Carrossel)
                  </label>
                  {isEditingConfig ? (
                    <div className="space-y-4">
                      {tempConfig.mainImages.map((imageUrl, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="url"
                            value={imageUrl}
                            onChange={(e) => {
                              const newImages = [...tempConfig.mainImages];
                              newImages[index] = e.target.value;
                              setTempConfig(prev => ({ ...prev, mainImages: newImages }));
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="URL da imagem"
                          />
                          <button
                            onClick={() => {
                              const newImages = tempConfig.mainImages.filter((_, i) => i !== index);
                              setTempConfig(prev => ({ ...prev, mainImages: newImages }));
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          setTempConfig(prev => ({ ...prev, mainImages: [...prev.mainImages, ''] }));
                        }}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Adicionar Imagem</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {siteConfig.mainImages.map((imageUrl, index) => (
                        <div key={index} className="h-24 rounded-lg overflow-hidden border border-gray-200 group relative">
                          <img
                            src={imageUrl}
                            alt={`Imagem ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                           <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título da Campanha
                  </label>
                  {isEditingConfig ? (
                    <input
                      type="text"
                      value={tempConfig.title}
                      onChange={(e) => setTempConfig(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{siteConfig.title}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta de Arrecadação (R$)
                  </label>
                  {isEditingConfig ? (
                    <input
                      type="number"
                      value={tempConfig.goal}
                      onChange={(e) => setTempConfig(prev => ({ ...prev, goal: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">R$ {siteConfig.goal.toLocaleString('pt-BR')}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição
                  </label>
                  {isEditingConfig ? (
                    <textarea
                      value={tempConfig.description}
                      onChange={(e) => setTempConfig(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{siteConfig.description}</p>
                  )}
                </div>

                {isEditingConfig && (
                  <div className="flex space-x-4 pt-4 border-t">
                    <button
                      onClick={handleSaveConfig}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                    >
                      <Save className="h-4 w-4" />
                      <span>Salvar Alterações</span>
                    </button>
                    <button
                      onClick={() => {
                        setTempConfig(siteConfig);
                        setIsEditingConfig(false);
                      }}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
