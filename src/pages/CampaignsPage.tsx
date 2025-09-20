import React from 'react';
import { Heart, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Campaign {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  goal: number;
  raised: number;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  link: string;
}

const humanitarianCampaigns: Campaign[] = [
  {
    id: 'gaza-01',
    title: 'Ajuda Humanitária Urgente para Gaza',
    author: 'Parceria Oficial ONU',
    imageUrl: 'https://i.ibb.co/4Z3pbG7r/104782733-palestinian-children-receive-food-at-a-united-nations-school-in-rafah-on-the-southern-gaza.jpg',
    goal: 500000,
    raised: 157987,
    description: 'Fornecimento de alimentos, água e cuidados médicos para famílias afetadas pelo conflito em Gaza.',
    tags: ['Conflito', 'Alimentos', 'Saúde'],
    isFeatured: true,
    link: '/',
  },
  {
    id: 'sudan-01',
    title: 'Emergência no Sudão: Fome e Conflito',
    author: 'Programa Mundial de Alimentos',
    imageUrl: 'https://images.unsplash.com/photo-1682905926517-6be3768e29f0?w=800',
    goal: 750000,
    raised: 210450,
    description: 'Combate à fome severa que ameaça milhões de pessoas, incluindo crianças, devido ao conflito prolongado.',
    tags: ['Fome', 'Refugiados', 'Crise'],
    link: '#',
  },
  {
    id: 'ukraine-01',
    title: 'Apoio às Vítimas da Guerra na Ucrânia',
    author: 'Cruz Vermelha Internacional',
    imageUrl: 'https://images.unsplash.com/photo-1648398822944-824f2f0105a8?w=800',
    goal: 1200000,
    raised: 850600,
    description: 'Assistência a civis deslocados, fornecendo abrigo, aquecimento e suporte psicossocial durante o inverno rigoroso.',
    tags: ['Guerra', 'Deslocados', 'Inverno'],
    link: '#',
  },
  {
    id: 'haiti-01',
    title: 'Crise no Haiti: Segurança e Saúde',
    author: 'Médicos Sem Fronteiras',
    imageUrl: 'https://images.unsplash.com/photo-1601791581429-a7a2a0f83758?w=800',
    goal: 300000,
    raised: 95200,
    description: 'Acesso a cuidados de saúde em áreas controladas por gangues e resposta a surtos de cólera e desnutrição.',
    tags: ['Saúde', 'Violência', 'Cólera'],
    link: '#',
  },
  {
    id: 'afghanistan-01',
    title: 'Afeganistão: Direitos e Sobrevivência',
    author: 'UNICEF',
    imageUrl: 'https://images.unsplash.com/photo-1631194605753-aa359fb41a0b?w=800',
    goal: 600000,
    raised: 180300,
    description: 'Foco na educação e nutrição de crianças, especialmente meninas, que enfrentam restrições e pobreza extrema.',
    tags: ['Crianças', 'Educação', 'Fome'],
    link: '#',
  },
  {
    id: 'yemen-01',
    title: 'Iêmen: A Pior Crise Humanitária',
    author: 'Oxfam International',
    imageUrl: 'https://images.unsplash.com/photo-1596443904797-a173d469a5a7?w=800',
    goal: 900000,
    raised: 420750,
    description: 'Combate à desnutrição aguda e fornecimento de água potável para prevenir doenças em meio a uma guerra civil devastadora.',
    tags: ['Fome', 'Guerra Civil', 'Água'],
    link: '#',
  },
];

const CampaignsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Crises Humanitárias Globais
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            O mundo enfrenta desafios sem precedentes. Sua doação pode levar esperança e ajuda vital para as populações mais vulneráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {humanitarianCampaigns.map((campaign) => {
            const progress = Math.min((campaign.raised / campaign.goal) * 100, 100);
            return (
              <Link to={campaign.link} key={campaign.id} className="group block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 group-hover:scale-105">
                  <div className="relative">
                    <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-56 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {campaign.isFeatured && (
                      <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>Campanha Principal</span>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {campaign.tags.map(tag => (
                        <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{campaign.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <ShieldCheck className="h-4 w-4 mr-2 text-blue-500" />
                      <span>por <span className="font-medium text-gray-700">{campaign.author}</span></span>
                    </div>

                    <div className="space-y-2 mb-5">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-bold text-green-600">R$ {campaign.raised.toLocaleString('pt-BR')}</span>
                        <span className="text-gray-500">{progress.toFixed(0)}% da meta</span>
                      </div>
                    </div>

                    <button className="mt-auto w-full bg-blue-600 group-hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <Heart className="h-5 w-5" />
                      <span>Apoiar Causa</span>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
