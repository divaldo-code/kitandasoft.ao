import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Phone, MessageCircle, X } from "lucide-react";

const CTA = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSpecialistModal, setShowSpecialistModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const elementId = entry.target.getAttribute('data-element');
            if (elementId && !visibleElements.has(elementId)) {
              setVisibleElements(prev => new Set([...prev, elementId]));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('[data-element]');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [visibleElements]);

  const handleComecarClick = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      window.open("https://criar.app.kitandasoft.ao/Seguranca/CreateAccount", "_blank");
    }, 2000);
  };

  const handleSpecialistClick = () => {
    setShowSpecialistModal(true);
  };

  const handleWhatsAppSpecialist = () => {
    const message = "Preciso falar com um especialista do KitandaSoft.";
    window.open(`https://wa.me/244923123456?text=${encodeURIComponent(message)}`, "_blank");
    setShowSpecialistModal(false);
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+244923123456";
    setShowSpecialistModal(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowSpecialistModal(false);
  };

  const isMobile = () => {
    return window.innerWidth <= 768;
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
              KitandaSoft - Software de Facturação e Gestão mais completo de Angola
            </p>
            <div className="mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          </div>
        </div>
      )}

      {/* Specialist Modal */}
      {showSpecialistModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4 w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Falar com Especialista
              </h3>
              <button
                onClick={() => setShowSpecialistModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              {isMobile() && (
                <button
                  onClick={handlePhoneCall}
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
              )}
              <button
                onClick={handleWhatsAppSpecialist}
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
                onClick={scrollToContact}
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

      <section ref={sectionRef} className="dark:bg-[#000F3D] py-20 bg-[#0028a3] text-[white]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-accent-foreground">
            <div className="text-accent-foreground">
              <h1 
                data-element="title"
                className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white transition-all duration-1000 ${
                  visibleElements.has('title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Comece a usar
                <br />
                hoje a KitandaSoft
              </h1>
              <p 
                data-element="description"
                className={`text-lg lg:text-xl max-w-3xl mx-auto text-white dark:text-white transition-all duration-1000 delay-300 ${
                  visibleElements.has('description') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Não perca mais tempo. Comece hoje a otimizar seus processos com
                nossa solução completa.
              </p>
            </div>

            <div 
              data-element="cta-buttons"
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${
                visibleElements.has('cta-buttons') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Button 
                onClick={handleComecarClick}
                className="px-8 py-3 text-lg font-medium rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 bg-accent"
              >
                Começar
              </Button>
              <Button
                onClick={handleSpecialistClick}
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-3 text-lg font-medium rounded-lg bg-[#1a3dac] text-[white]"
              >
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;