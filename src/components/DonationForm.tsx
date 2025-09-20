import React from 'react';
import { useDashboard } from '../contexts/DashboardContext';

const DonationForm: React.FC = () => {
    const { incrementClick } = useDashboard();
    const checkoutUrl = "https://checkout.bullspay.app.br/PMPnaDA3eT";

    const handleDonateClick = () => {
        incrementClick('donation');
        window.open(checkoutUrl, '_blank');
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ajude Gaza Agora</h3>
                <p className="text-sm text-gray-600">Sua contribuição salva vidas. Clique abaixo para doar.</p>
            </div>

            <button
                onClick={handleDonateClick}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-lg animate-pulse"
            >
                Doar Agora - Salvar Vidas
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
                🔒 Você será redirecionado para um ambiente de pagamento seguro.
            </p>
        </div>
    );
};

export default DonationForm;
