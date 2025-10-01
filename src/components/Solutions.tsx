import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, X, Check } from "lucide-react";

const Solutions = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set(),
  );
  const [showKitandaSoftModal, setShowKitandaSoftModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const elementId = entry.target.getAttribute("data-element");
            if (elementId && !visibleElements.has(elementId)) {
              setVisibleElements((prev) => new Set([...prev, elementId]));
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll("[data-element]");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [visibleElements]);

  const handleDemonstrationClick = () => {
    const message =
      "Quero obter uma demostração do KitandaSoft, podemos agendar uma seção remota?";
    window.open(
      `https://wa.me/244923123456?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleKitandaSoftClick = () => {
    setShowKitandaSoftModal(true);
  };

  const solutions = [
    {
      title: "Farmácia",
      description:
        "Sistema completo para gestão de farmácias com controlo de medicamentos e receitas.",
      image: "/Imagens/kfarmacia01.webp",
    },
    {
      title: "Gestão Comercial",
      description:
        "Solução completa para gestão empresarial com faturação, vendas e controlo de stocks.",
      image: "/Imagens/imagem01k.webp",
      onClick: handleKitandaSoftClick,
    },
    {
      title: "Lavandaria",
      description:
        "Sistema especializado para gestão de lavandarias com controlo de serviços e entregas.",
      image: "/Imagens/imagem01k.webp",
    },
    {
      title: "Oficina Mecânica",
      description:
        "Gestão completa para oficinas mecânicas com orçamentos, reparações e peças.",
      image: "/Imagens/imagem01k.webp",
    },
    {
      title: "Prestação de Serviços",
      description:
        "Sistema para empresas de serviços com gestão de clientes e faturação.",
      image: "/Imagens/imagem01k.webp",
    },
    {
      title: "POS (Ponto de Venda)",
      description:
        "Sistema de ponto de venda completo para retalho e restauração.",
      image: "/Imagens/imagem01k.webp",
    },
    {
      title: "Restauração",
      description:
        "Solução especializada para restaurantes com gestão de mesas e comandas.",
      image: "/Imagens/imagem01k.webp",
    },
    {
      title: "Retalho",
      description:
        "Sistema completo para lojas de retalho com gestão de vendas e stocks.",
      image: "/Imagens/imagem01k.webp",
    },
  ];

  return (
    <>
      {/* KitandaSoft GE Modal */}
      {showKitandaSoftModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    KITANDASOFT GE
                  </h2>
                  <p className="text-lg text-blue-600 dark:text-blue-400">
                    Solução Completa de Gestão Empresarial
                  </p>
                </div>
                <button
                  onClick={() => setShowKitandaSoftModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Características Principais:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Gestão Comercial & Faturação */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      📈 Gestão Comercial & Faturação
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Otimização de faturação",
                        "Gestão de vendas",
                        "Gestão de encomendas de clientes",
                        "Gestão de compras",
                        "Controlo de stocks",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gestão Financeira */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      💰 Gestão Financeira
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Controlo de tesouraria",
                        "Gestão de bancos e caixas",
                        "Contas a pagar e a receber",
                        "Relatórios financeiros",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recursos Humanos */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      👥 Recursos Humanos
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Gestão de funcionários",
                        "Processamento de salários",
                        "Controlo de assiduidade",
                        "Gestão de documentos de RH",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gestão Documental */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      📑 Gestão Documental
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Arquivo e organização de documentos",
                        "Controlo de versões",
                        "Partilha segura de documentos",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gestão de Património */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      🏢 Gestão de Património
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Inventário de ativos fixos",
                        "Controlo de bens da empresa",
                        "Depreciações e manutenções",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Funcionalidades Adicionais */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      🔧 Funcionalidades Adicionais
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Múltiplos utilizadores",
                        "Relatórios personalizados",
                        "Integração entre departamentos",
                        "Ambiente seguro e centralizado",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center">
                  <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
                    SOFTWARE CERTIFICADO Nº 505/AGT/2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section ref={sectionRef} className="bg-gray-50 dark:bg-[#000F3D] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              data-element="subtitle"
              className={`text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 transition-all duration-700 ${
                visibleElements.has("subtitle")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Soluções
            </p>
            <h2
              data-element="title"
              className={`text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
                visibleElements.has("title")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Soluções que transformam
              <br />
              sua estratégia digital
            </h2>
            <p
              data-element="description"
              className={`text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
                visibleElements.has("description")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Desenvolvemos o sistema de facturação KitandaSoft com soluções
              tecnológicas que se adaptam às necessidades específicas do seu
              negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                data-element={`card-${index}`}
                onClick={solution.onClick}
                className={`rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-700 delay-${600 + index * 150} bg-white dark:bg-[#001451] ${
                  visibleElements.has(`card-${index}`)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-5 scale-95"
                } ${solution.onClick ? "cursor-pointer hover:scale-105" : ""}`}
              >
                {/* Placeholder Image */}
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-32 mb-6 flex items-center justify-center overflow-hidden">
                  {solution.image ? (
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center ${solution.image ? 'hidden' : ''}`}>
                    <svg
                      className="w-8 h-8 text-gray-400 dark:text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {solution.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          <div
            data-element="cta-buttons"
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1200 ${
              visibleElements.has("cta-buttons")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              variant="outline"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 dark:bg-blue-950 border-[black] bg-accent dark:text-[#e1e1e1]"
            >
              Explorar
            </Button>
            <button
              onClick={handleDemonstrationClick}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium group"
            >
              Demonstração
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;