import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Home, Phone, Mail, MessageCircle, X } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  method: "call" | "email" | "whatsapp" | null;
}

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    method: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showContactModal || showContactForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showContactModal, showContactForm]);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleMethodSelect = (method: "call" | "email" | "whatsapp") => {
    setFormData({ ...formData, method });
    setShowContactModal(false);
    setShowContactForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.method === "email") {
      const subject = "Contacto através da página 404 - KitandaSoft";
      const body = `Olá,\n\nEstava navegando no site do KitandaSoft e preciso de ajuda.\n\nDados de contacto:\nNome: ${formData.name}\nTelemóvel: ${formData.phone}\nEmail: ${formData.email}\n\nAguardo o vosso contacto.\n\nCumprimentos,\n${formData.name}`;

      window.location.href = `mailto:comercial@lucansolucoes.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else if (formData.method === "whatsapp") {
      const message = `Olá! Estava navegando no site do KitandaSoft e preciso de ajuda.\n\n*Dados de contacto:*\nNome: ${formData.name}\nTelemóvel: ${formData.phone}\nEmail: ${formData.email}\n\nAguardo o vosso contacto. Obrigado!`;

      window.open(
        `https://wa.me/244944178180?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    } else if (formData.method === "call") {
      window.location.href = "tel:+244944178180";
    }

    setShowContactForm(false);
    setFormData({ name: "", phone: "", email: "", method: null });
  };

  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  return (
    <>
      <Header />
      
      {/* Contact Method Selection Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Como deseja ser contactado?
                </h2>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-3">
                {isMobile() && (
                  <button
                    onClick={() => handleMethodSelect("call")}
                    className="w-full flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900 dark:text-white">
                        Chamada
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Ligar diretamente
                      </div>
                    </div>
                  </button>
                )}
                
                <button
                  onClick={() => handleMethodSelect("email")}
                  className="w-full flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900 dark:text-white">
                      Email
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Enviar por email
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleMethodSelect("whatsapp")}
                  className="w-full flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900 dark:text-white">
                      WhatsApp
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Enviar mensagem
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Dados de Contacto
                </h2>
                <button
                  onClick={() => setShowContactForm(false)}
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
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telemóvel *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="+244 9XX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Método selecionado: {
                      formData.method === "call" ? "Chamada" :
                      formData.method === "email" ? "Email" :
                      formData.method === "whatsapp" ? "WhatsApp" : ""
                    }
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4 animate-bounce">
              404
            </div>
            <div className="text-6xl mb-6">🧭</div>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Está perdido?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Não se preocupe! Comece a usar o <span className="font-bold text-blue-600 dark:text-blue-400">KitandaSoft</span> que tem todas as soluções que precisa para reencontrar seu negócio no top! 🚀
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-md mx-auto mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Software Certificado</p>
              <p className="font-bold text-blue-600 dark:text-blue-400">Nº 505/AGT/2025</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleGoHome}
              className="px-8 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Voltar ao Início</span>
            </Button>
            <Button
              onClick={handleContactClick}
              variant="outline"
              className="px-8 py-3 text-lg font-medium flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contacto</span>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Soluções Empresariais</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Gestão Comercial, Farmácia, Restauração e muito mais
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">POS Integrado</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Sistema de ponto de venda completo e certificado
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Online & Local</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Escolha entre versão cloud ou instalação local
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Precisa de Ajuda? Entre em Contacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Telefone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+244 222 780 264</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+244 944 178 180</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">comercial@lucansolucoes.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  onClick={handleContactClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                >
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;