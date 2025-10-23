import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if it's desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/NnVYoeoaB1PDhW3U8", "_blank");
  };

  const handlePhoneClick = () => {
    if (isDesktop) {
      // Desktop: Open WhatsApp
      const message = "Olá, gostaria de saber mais sobre os softwares da KitandaSoft.";
      window.open(`https://wa.me/244944178180?text=${encodeURIComponent(message)}`, "_blank");
    } else {
      // Mobile: Show options (call or WhatsApp)
      const userChoice = confirm("Escolha uma opção:\nOK = Ligar\nCancelar = WhatsApp");
      
      if (userChoice) {
        // User chose to call
        window.location.href = "tel:+244944178180";
      } else {
        // User chose WhatsApp
        const message = "Olá, gostaria de saber mais sobre os softwares da KitandaSoft.";
        window.open(`https://wa.me/244944178180?text=${encodeURIComponent(message)}`, "_blank");
      }
    }
  };

  const handlePinClick = () => {
    window.open("https://maps.app.goo.gl/NnVYoeoaB1PDhW3U8", "_blank");
  };

  return (
    <section className="bg-gray-50 dark:bg-[#000F3D] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Contacto
              </h2>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Fale conosco
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Estamos prontos para ajudar sua empresa a evoluir digitalmente
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    E-mail
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Entre em comercial com nossa equipe
                  </p>
                  <a
                    href="mailto:comercial@lucansolucoes.co.ao"
                    className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    comercial@kitandasoft.ao
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Telefone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Nossos especialistas estão disponíveis
                  </p>
                  <button
                    onClick={handlePhoneClick}
                    className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                  >
                    +244 944 178 180
                  </button>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Escritório
                  </h3>
                  <div className="text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">
                    <div>Urbanização Nova Vida, Rua 47, Prédio 153</div>
                    <div>Apt nº 7, Luanda-Angola</div>
                  </div>
                  <button
                    onClick={handleLocationClick}
                    className="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 group"
                  >
                    Ver localização
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Map */}
          <div className="relative">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 lg:h-[500px] relative overflow-hidden">
              {/* Embedded Google Map with updated coordinates */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8234567890123!2d13.234053!3d-8.908267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTQnMjkuOCJTIDEzwrAxNCcwMi42IkU!5e0!3m2!1spt!2sao!4v1643723400000!5m2!1spt!2sao"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>

              {/* Custom Pin Overlay - Clickable */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 group cursor-pointer"
                onClick={handlePinClick}
              >
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    Software da GC LUCAN, certificado pela AGT
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>

                {/* Custom Pin with KitandaSoft Logo */}
                <div className="relative hover:scale-110 transition-transform">
                  <div className="bg-blue-600 rounded-full p-3 shadow-lg border-4 border-white">
                    <img
                      src="/kitandasoft-icon.webp"
                      alt="KitandaSoft"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Fallback to MapPin icon if logo fails to load
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove(
                          "hidden",
                        );
                      }}
                    />
                    <MapPin className="w-8 h-8 text-white hidden" />
                  </div>
                  {/* Pin point */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;