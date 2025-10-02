import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, X, Check, Monitor } from "lucide-react";

const Solutions = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [showExploreModal, setShowExploreModal] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<any>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check if it's desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

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

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal || showExploreModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal, showExploreModal]);

  const handleDemonstrationClick = () => {
    const message = "Quero obter uma demostração do KitandaSoft, podemos agendar uma seção remota?";
    window.open(`https://wa.me/244923123456?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSolutionClick = (solution: any) => {
    setSelectedSolution(solution);
    setShowModal(true);
  };

  const handleExploreClick = () => {
    if (isDesktop) {
      setShowExploreModal(true);
    } else {
      // Mobile popup
      setShowModal(true);
      setSelectedSolution({
        title: "Visualização Completa",
        description: "Para uma melhor experiência de navegação",
        icon: "💻",
        features: ["Use a versão web para visualizar todas as funcionalidades"]
      });
    }
  };

  const solutions = [
    {
      title: "Farmácia",
      description: "Sistema completo para gestão de farmácias com controlo de medicamentos e receitas.",
      image: "/Imagens/kfarmacia01.webp",
      icon: "🏥",
      features: [
        "Gestão de lotes e datas de validade",
        "Controlo de medicamentos sujeitos a receita médica",
        "Alertas de stock mínimo e máximo",
        "Integração com prescrições eletrónicas",
        "Gestão de comparticipações",
        "Relatórios de vendas por fármaco",
        "Controlo de temperatura de armazenamento"
      ]
    },
    {
      title: "Gestão Comercial",
      description: "Solução completa para gestão empresarial com faturação, vendas e controlo de stocks.",
      image: "/Imagens/kgcomercial01.webp",
      icon: "📊",
      features: [
        "Faturação profissional (IVA & SAFT-AO)",
        "Gestão de clientes e fornecedores",
        "Controlo de contas correntes",
        "Análise de rentabilidade por produto",
        "Múltiplos pontos de venda",
        "Gestão de preços e promoções",
        "Relatórios de desempenho comercial"
      ]
    },
    {
      title: "Lavandaria",
      description: "Sistema especializado para gestão de lavandarias com controlo de serviços e entregas.",
      image: "/Imagens/klavandaria01.webp",
      icon: "👕",
      features: [
        "Ficha técnica de peças por cliente",
        "Controlo de estados de roupa (recolhida, lavada, entregue)",
        "Gestão de tickets de serviço",
        "Controlo de qualidade na receção",
        "Gestão de fidelização de clientes",
        "SMS automáticas para avisos de entrega",
        "Relatórios de produtividade"
      ]
    },
    {
      title: "Oficina Mecânica",
      description: "Gestão completa para oficinas mecânicas com orçamentos, reparações e peças.",
      image: "/Imagens/komecanica01.webp",
      icon: "🔧",
      features: [
        "Gestão de viaturas e históricos",
        "Ordens de serviço e orçamentos",
        "Controlo de stocks de peças",
        "Integração com seguradoras",
        "Agenda de marcações online",
        "Relatórios de tempo de reparação",
        "Gestão de garantias de trabalho"
      ]
    },
    {
      title: "Prestação de Serviços",
      description: "Sistema para empresas de serviços com gestão de clientes e faturação.",
      image: "/Imagens/kpservicos01.webp",
      icon: "👨‍💼",
      features: [
        "Gestão de projetos e tarefas",
        "Controlo de horas e custos",
        "Faturação por projetos",
        "Gestão de documentação por cliente",
        "Relatórios de rentabilidade por projeto",
        "Controlo de prazos e entregáveis",
        "Portal do cliente para acompanhamento"
      ]
    },
    {
      title: "POS (Ponto de Venda)",
      description: "Sistema de ponto de venda completo para retalho e restauração.",
      image: "/Imagens/kpos01.webp",
      icon: "💳",
      features: [
        "Interface touchscreen otimizado",
        "Múltiplas formas de pagamento",
        "Impressão automática de faturas",
        "Gestão de aberturas/fechos de caixa",
        "Controlo de operadores por turno",
        "Vendas rápidas e devoluções",
        "Integração com leitores de código de barras"
      ]
    },
    {
      title: "Restauração",
      description: "Solução especializada para restaurantes com gestão de mesas e comandas.",
      image: "/Imagens/krestauracao01.webp",
      icon: "🍽️",
      features: [
        "Gestão de mesas e comandas",
        "Impressão automática para cozinha/bar",
        "Controlo de stocks em tempo real",
        "Gestão de cartões de fidelização",
        "Múltiplos pontos de venda (sala, take-away)",
        "Relatórios de venda por período/horário",
        "Integração com delivery externo"
      ]
    },
    {
      title: "Retalho",
      description: "Sistema completo para lojas de retalho com gestão de vendas e stocks.",
      image: "/Imagens/kretalho01.webp",
      icon: "🛒",
      features: [
        "Gestão multi-departamento",
        "Controlo de stocks automático",
        "Preços dinâmicos e campanhas",
        "Gestão de fornecedores e compras",
        "Faturação integrada",
        "Relatórios de margens por categoria",
        "Gestão de espaços comerciais"
      ]
    },
  ];

  return (
    <>
      {/* Explore Modal - Desktop Full Screen */}
      {showExploreModal && isDesktop && (
        <div className="fixed inset-0 bg-white dark:bg-[#000F3D] z-[100] overflow-y-auto">
          <div className="min-h-screen p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Explore Nossas Soluções
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Descubra todas as funcionalidades dos nossos softwares certificados
                </p>
              </div>
              <button
                onClick={() => setShowExploreModal(false)}
                className="p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-[#001451] rounded-lg shadow-lg transition-all duration-500 cursor-pointer ${
                    hoveredCard === index 
                      ? 'scale-110 z-10 shadow-2xl' 
                      : hoveredCard !== null 
                        ? 'scale-95 opacity-70' 
                        : 'scale-100'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Certification Sticker */}
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-bold z-20">
                    Certificado AGT
                  </div>

                  <div className="p-6">
                    {/* Solution Image */}
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-32 mb-4 flex items-center justify-center overflow-hidden">
                      {solution.image ? (
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <span className="text-3xl">{solution.icon}</span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {solution.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Software de Facturação - {solution.title}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {solution.description}
                    </p>

                    {/* Expanded Content on Hover */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 bg-white dark:bg-[#001451] rounded-lg p-6 shadow-2xl border-2 border-blue-500 overflow-y-auto">
                        <div className="text-center mb-4">
                          <span className="text-4xl mb-2 block">{solution.icon}</span>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {solution.title}
                          </h3>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                            Software de Facturação - {solution.title}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {solution.description}
                          </p>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                            Características Principais:
                          </h4>
                          <div className="space-y-1">
                            {solution.features.slice(0, 4).map((feature: string, idx: number) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <Check className="h-3 w-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-700 dark:text-gray-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-center">
                          <p className="text-xs font-bold text-blue-800 dark:text-blue-200">
                            Certificado pela AGT Nº 505/AGT/2025
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Todos os nossos softwares são certificados pela Administração Geral Tributária
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 inline-block px-6 py-3 rounded-lg">
                <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
                  Certificação AGT Nº 505/AGT/2025
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solution Modal */}
      {showModal && selectedSolution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{selectedSolution.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedSolution.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {selectedSolution.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Solution Image */}
              {selectedSolution.image && (
                <div className="mb-6">
                  <img
                    src={selectedSolution.image}
                    alt={selectedSolution.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Características Principais:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSolution.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center">
                  <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
                    Software de Facturação Certificado pela AGT Nº 505/AGT/2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section ref={sectionRef} id="solutions" className="bg-gray-50 dark:bg-[#000F3D] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p 
              data-element="subtitle"
              className={`text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 transition-all duration-700 ${
                visibleElements.has('subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Soluções
            </p>
            <h2 
              data-element="title"
              className={`text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
                visibleElements.has('title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Recursos que transformam
              <br />
              sua estratégia digital
            </h2>
            <p 
              data-element="description"
              className={`text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
                visibleElements.has('description') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Desenvolvemos soluções tecnológicas que se adaptam às necessidades
              específicas do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                data-element={`card-${index}`}
                onClick={() => handleSolutionClick(solution)}
                className={`rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-700 delay-${600 + index * 150} bg-white dark:bg-[#001451] cursor-pointer hover:scale-105 ${
                  visibleElements.has(`card-${index}`) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
                }`}
              >
                {/* Solution Image */}
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
                    <span className="text-2xl">{solution.icon}</span>
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
              visibleElements.has('cta-buttons') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              onClick={handleExploreClick}
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