import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  Sun,
  Moon,
  Home,
  Settings,
  CreditCard,
  Star,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isRecursosOpen, setIsRecursosOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showContactButton, setShowContactButton] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobileContactModal, setShowMobileContactModal] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Scroll tracking for header visibility and mobile nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollPercent = (currentScrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Header visibility logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      
      // Contact button logic (desktop only)
      if (window.innerWidth > 768) {
        setShowContactButton(scrollPercent >= 20 && scrollPercent < 80);
      }
      
      // Mobile nav logic
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowMobileNav(false);
        } else {
          setShowMobileNav(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMobileNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExperimentarClick = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      window.open("https://criar.app.kitandasoft.ao/Seguranca/CreateAccount", "_blank");
    }, 2000);
  };

  const solutions = [
    {
      name: "KitandaSoft GE",
      description: "Software de facturação e gestão empresarial",
      category: "Empresarial",
      onClick: () => scrollToSection("solutions"),
    },
    {
      name: "SikolaSoft",
      description: "Sistema de gestão escolar completo",
      category: "Educação",
      onClick: () => scrollToSection("solutions"),
    },
    {
      name: "OspitaliSoft",
      description: "Gestão hospitalar e clínica",
      category: "Saúde",
      onClick: () => scrollToSection("solutions"),
    },
    {
      name: "OptisGest",
      description: "Gestão empresarial integrada",
      category: "Empresarial",
      onClick: () => scrollToSection("solutions"),
    },
    {
      name: "POS",
      description: "Sistema de ponto de venda",
      category: "Comercial",
      onClick: () => scrollToSection("solutions"),
    },
  ];

  const recursos = [
    {
      name: "Características",
      description: "Conheça todas as funcionalidades",
      category: "Funcionalidades",
      onClick: () => scrollToSection("characteristics"),
    },
    {
      name: "Planos",
      description: "Escolha o plano ideal para seu negócio",
      category: "Preços",
      onClick: () => scrollToSection("pricing"),
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

  const handleFloatingContactClick = () => {
    scrollToSection("contact");
  };

  const handleMobileContactClick = () => {
    setShowMobileContactModal(true);
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md mx-4 text-center animate-bounce relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Obrigado por experimentar!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              KitandaSoft - Software de Facturação e Gestão mais completo de Angola
            </p>
            <div className="mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Contact Modal */}
      {showMobileContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] md:hidden">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4 w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Contactar
              </h3>
              <button
                onClick={() => setShowMobileContactModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => {
                  handlePhoneClick();
                  setShowMobileContactModal(false);
                }}
                className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Ligar
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    +244 923 123 456
                  </div>
                </div>
              </button>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setShowMobileContactModal(false);
                }}
                className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    WhatsApp
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Enviar mensagem
                  </div>
                </div>
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setShowMobileContactModal(false);
                }}
                className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Ir para Contactos
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Ver secção de contactos
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <header className={`dark:bg-[#000F3D] shadow-sm dark:border-gray-700 sticky top-0 z-50 bg-white border-b-2 transition-transform duration-300 ${
        headerVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img
                  src="/logo-oficial.png"
                  alt="KitandaSoft"
                  className="h-10 w-auto cursor-pointer"
                  onClick={scrollToTop}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Início
              </a>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                >
                  Soluções
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isSolutionsOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 z-50">
                    <div className="py-2">
                      {solutions.map((solution, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            solution.onClick();
                            setIsSolutionsOpen(false);
                          }}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <div className="font-medium">{solution.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {solution.description}
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                            {solution.category}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Recursos Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center"
                  onClick={() => setIsRecursosOpen(!isRecursosOpen)}
                >
                  Recursos
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isRecursosOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 z-50">
                    <div className="py-2">
                      {recursos.map((recurso, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            recurso.onClick();
                            setIsRecursosOpen(false);
                          }}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <div className="font-medium">{recurso.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {recurso.description}
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                            {recurso.category}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                FAQ
              </button>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <Button
                variant="ghost"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Entrar
              </Button>
              <Button
                onClick={handleExperimentarClick}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Experimentar
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t dark:border-gray-700">
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Início
                </a>
                <div className="px-3 py-2">
                  <div className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Soluções
                  </div>
                  {solutions.map((solution, index) => (
                    <button
                      key={index}
                      onClick={solution.onClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {solution.name}
                    </button>
                  ))}
                </div>
                <div className="px-3 py-2">
                  <div className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Recursos
                  </div>
                  {recursos.map((recurso, index) => (
                    <button
                      key={index}
                      onClick={recurso.onClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {recurso.name}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  FAQ
                </button>
                <div className="px-3 py-2 space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 dark:text-gray-300"
                  >
                    Entrar
                  </Button>
                  <Button
                    onClick={handleExperimentarClick}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Experimentar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Floating Contact Button (Left Side) */}
      {showContactButton && (
        <div className="hidden md:block fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
          <button
            onClick={handleFloatingContactClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Contacto</span>
          </button>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {showMobileNav && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 transition-transform duration-300">
          <div className="flex justify-around items-center py-2">
            <button
              onClick={() => scrollToSection("solutions")}
              className="flex flex-col items-center p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Settings className="h-5 w-5" />
              <span className="text-xs mt-1">Soluções</span>
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="flex flex-col items-center p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <CreditCard className="h-5 w-5" />
              <span className="text-xs mt-1">Planos</span>
            </button>
            <button
              onClick={() => scrollToSection("characteristics")}
              className="flex flex-col items-center p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Star className="h-5 w-5" />
              <span className="text-xs mt-1">Características</span>
            </button>
            <button
              onClick={handleMobileContactClick}
              className="flex flex-col items-center p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs mt-1">Contacto</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;