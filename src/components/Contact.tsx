import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-medium text-gray-600 mb-2">Contato</h2>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Fale conosco
              </h1>
              <p className="text-lg text-gray-600">
                Estamos prontos para ajudar sua empresa a evoluir digitalmente
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-gray-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h3>
                  <p className="text-gray-600 mb-2">Entre em contato com nossa equipe</p>
                  <a 
                    href="mailto:contato@kitandasoft.ao" 
                    className="text-gray-900 font-medium hover:text-blue-600"
                  >
                    contato@kitandasoft.ao
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-gray-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h3>
                  <p className="text-gray-600 mb-2">Nossos especialistas estão disponíveis</p>
                  <a 
                    href="tel:+244923123456" 
                    className="text-gray-900 font-medium hover:text-blue-600"
                  >
                    +244 923 123 456
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-gray-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Escritório</h3>
                  <p className="text-gray-600 mb-2">Visite nossa sede localizada no Nova Vida rua 1234</p>
                  <button className="flex items-center text-gray-900 font-medium hover:text-blue-600 group">
                    Ver localização
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map Placeholder */}
          <div className="relative">
            <div className="bg-gray-200 rounded-lg h-96 lg:h-[500px] flex items-center justify-center relative overflow-hidden">
              {/* Map placeholder with location pin */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="bg-gray-400 rounded-full p-6">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
              </div>
              
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-gray-300"></div>
                  ))}
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