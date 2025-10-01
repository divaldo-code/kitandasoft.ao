import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  X,
  Mail,
  MessageCircle,
} from "lucide-react";

interface RequestFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  method: "email" | "whatsapp" | null;
}

const Hero = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<RequestFormData>({
    name: "",
    phone: "",
    email: "",
    service: "Demonstração",
    method: null,
  });

  useEffect(() => {
    // Trigger animations on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleExperimentarClick = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      window.open(
        "https://criar.app.kitandasoft.ao/Seguranca/CreateAccount",
        "_blank",
      );
    }, 2000);
  };

  const handleDemoClick = () => {
    setShowDemoModal(true);
  };

  const handleMethodSelect = (method: "email" | "whatsapp") => {
    setFormData({ ...formData, method });
    setShowDemoModal(false);
    setShowRequestModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.method === "email") {
      const subject = `Solicitação de ${formData.service}`;
      const body = `Olá,\\n\\nGostaria de solicitar uma ${formData.service.toLowerCase()}.\\n\\nDados de contacto:\\nNome: ${formData.name}\\nTelemóvel: ${formData.phone}\\nEmail: ${formData.email}\\n\\nAguardo o vosso contacto.\\n\\nCumprimentos,\\n${formData.name}`;

      window.location.href = `mailto:comercial@kitandasoft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else if (formData.method === "whatsapp") {
      const message = `Olá! Gostaria de solicitar uma ${formData.service.toLowerCase()}.\\n\\n*Dados de contacto:*\\nNome: ${formData.name}\\nTelemóvel: ${formData.phone}\\nEmail: ${formData.email}\\n\\nAguardo o vosso contacto. Obrigado!`;

      window.open(
        `https://wa.me/244923123456?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    }

    setShowRequestModal(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "Demonstração",
      method: null,
    });
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md mx-4 text-center animate-bounce relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Obrigado por experimentar!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              KitandaSoft - Software de Facturação e Gestão mais completo de
              Angola
            </p>
            <div className="mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          </div>
        </div>
      )}

      {/* Demo Method Selection Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Como deseja solicitar?
            </h3>
            <div className="space-y-4">
              <button
                onClick={() => handleMethodSelect("email")}
                className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span className="font-medium text-gray-900 dark:text-white">
                  Por Email
                </span>
              </button>
              <button
                onClick={() => handleMethodSelect("whatsapp")}
                className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="font-medium text-gray-900 dark:text-white">
                  Por WhatsApp
                </span>
              </button>
            </div>
            <button
              onClick={() => setShowDemoModal(false)}
              className="mt-6 w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Request Form Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Solicitar Demonstração
              </h3>
              <button
                onClick={() => setShowRequestModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Telemóvel *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Serviço Solicitado
                </label>
                <input
                  type="text"
                  value={formData.service}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {formData.method === "email"
                  ? "Enviar por Email"
                  : "Enviar por WhatsApp"}
              </Button>
            </form>
          </div>
        </div>
      )}

      <section className="py-20 px-4 sm:px-6 lg:px-8 text-[#ffffff] bg-white bg-[#000f3d] dark:bg-dark-bg border-[#c0c0c0] rounded-[0px] border-[0px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  className={`bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  ✨ Certificado 505/AGT/2025
                </Badge>
                <h1
                  className={`text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-all duration-1000 delay-200 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  KitandaSoft Software
                  <span className="text-blue-600 dark:text-blue-400 block">
                    Facturação e Gestão
                  </span>
                </h1>
                <p
                  className={`text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-1000 delay-400 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  Software de faturação inovador certificado pela AGT que se
                  adapta ao seu negócio! Destinado a profissionais liberais,
                  micro, pequenas e médias empresas. Sem investimento inicial,
                  completo e intuitivo.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Faturação Online/Offline",
                  "Gestão de Stock",
                  "Contas Correntes",
                  "POS",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-700 delay-${600 + index * 100} ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Button
                  size="lg"
                  onClick={handleExperimentarClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Começar Agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleDemoClick}
                  className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3"
                >
                  Ver Demonstração
                </Button>
              </div>

              {/* Social Proof */}
              <div
                className={`flex items-center space-x-6 pt-4 transition-all duration-1000 delay-1200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    4.9/5
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    +1000 empresas
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    98% satisfação
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div
              className={`relative transition-all duration-1200 delay-800 ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95"
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Dashboard Executivo
                  </h2>
                  <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                    Ao Vivo
                  </Badge>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      45.200,00 Kz
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Receita Mensal
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      +23%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Crescimento
                    </div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <div className="flex items-end space-x-2 h-20">
                    {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
                      <div
                        key={i}
                        className="bg-blue-500 dark:bg-blue-400 rounded-t"
                        style={{ height: `${height}%`, width: "12px" }}
                      />
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Atividade Recente
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Fatura #1234 criada
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        125.000,00 Kz
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Pagamento recebido
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        89.000,00 Kz
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-3 shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
