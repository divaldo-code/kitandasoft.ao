import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isRecursosOpen, setIsRecursosOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const solutions = [
    {
      name: "KitandaSoft GE",
      description: "Software de facturação e gestão empresarial",
      category: "Empresarial",
    },
    {
      name: "SikolaSoft",
      description: "Sistema de gestão escolar completo",
      category: "Educação",
    },
    {
      name: "OspitaliSoft",
      description: "Gestão hospitalar e clínica",
      category: "Saúde",
    },
    {
      name: "OptisGest",
      description: "Gestão empresarial integrada",
      category: "Empresarial",
    },
    {
      name: "POS",
      description: "Sistema de ponto de venda",
      category: "Comercial",
    },
  ];

  const recursos = [
    {
      name: "Características",
      description: "Conheça todas as funcionalidades",
      category: "Funcionalidades",
    },
    {
      name: "Planos",
      description: "Escolha o plano ideal para seu negócio",
      category: "Preços",
    },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/244923123456", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+244923123456";
  };

  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  const handleContactClick = () => {
    if (isMobile()) {
      setIsContactOpen(!isContactOpen);
    } else {
      handleWhatsAppClick();
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img
                  src="/logo-oficial.png"
                  alt="KitandaSoft"
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Início
              </a>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  Soluções
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isSolutionsOpen && (
                  <div
                    className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <div className="py-2">
                      {solutions.map((solution, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          <div className="font-medium">{solution.name}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {solution.description}
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            {solution.category}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Recursos Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                  onMouseEnter={() => setIsRecursosOpen(true)}
                  onMouseLeave={() => setIsRecursosOpen(false)}
                >
                  Recursos
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isRecursosOpen && (
                  <div
                    className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                    onMouseEnter={() => setIsRecursosOpen(true)}
                    onMouseLeave={() => setIsRecursosOpen(false)}
                  >
                    <div className="py-2">
                      {recursos.map((recurso, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          <div className="font-medium">{recurso.name}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {recurso.description}
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            {recurso.category}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                FAQ
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600"
              >
                Entrar
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Experimentar
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Início
                </a>
                <div className="px-3 py-2">
                  <div className="text-base font-medium text-gray-700 mb-2">
                    Soluções
                  </div>
                  {solutions.map((solution, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {solution.name}
                    </a>
                  ))}
                </div>
                <div className="px-3 py-2">
                  <div className="text-base font-medium text-gray-700 mb-2">
                    Recursos
                  </div>
                  {recursos.map((recurso, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {recurso.name}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  FAQ
                </a>
                <div className="px-3 py-2 space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-700"
                  >
                    Entrar
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Experimentar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Mobile Contact Options */}
          {isContactOpen && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border p-2 space-y-2 min-w-48">
              <button
                onClick={handlePhoneClick}
                className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Ligar</div>
                  <div className="text-sm text-gray-500">+244 923 123 456</div>
                </div>
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">WhatsApp</div>
                  <div className="text-sm text-gray-500">Enviar mensagem</div>
                </div>
              </button>
            </div>
          )}

          {/* Contact Button */}
          <button
            onClick={handleContactClick}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;