import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const Characteristics = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set(),
  );
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

  const characteristics = [
    {
      title: "Emissão de Documentos",
      features: [
        "Faturas e recibos automáticos",
        "Notas de crédito e débito",
        "Orçamentos personalizados",
        "Guias de remessa digitais",
      ],
    },
    {
      title: "Artigos e Stocks",
      features: [
        "Controle de inventário em tempo real",
        "Gestão de códigos de barras",
        "Alertas de stock mínimo",
        "Relatórios de movimentação",
      ],
    },
    {
      title: "Clientes e Fornecedores",
      features: [
        "Base de dados completa",
        "Histórico de transações",
        "Gestão de créditos e débitos",
        "Comunicação automatizada",
      ],
    },
    {
      title: "Importações e Consultas",
      features: [
        "Importação de dados Excel",
        "Consultas avançadas personalizadas",
        "Filtros inteligentes",
        "Exportação para múltiplos formatos",
      ],
    },
    {
      title: "Compras, Avenças e Gestão Documental",
      features: [
        "Gestão de encomendas",
        "Controle de avenças e pagamentos",
        "Arquivo digital de documentos",
        "Workflow de aprovações",
      ],
    },
    {
      title: "Pontos de Venda (POS)",
      features: [
        "Interface intuitiva de vendas",
        "Múltiplas formas de pagamento",
        "Impressão de recibos",
        "Sincronização em tempo real",
      ],
    },
    {
      title: "Obrigações fiscais e Atualizações",
      features: [
        "Conformidade fiscal automática",
        "Relatórios para AGT",
        "Atualizações regulamentares",
        "Backup automático de dados",
      ],
    },
    {
      title: "Segurança e Configurações gerais",
      features: [
        "Controle de acesso por usuário",
        "Criptografia de dados",
        "Logs de auditoria",
        "Configurações personalizáveis",
      ],
    },
  ];

  return (
    <section
      id="caracteristicas"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-[#000F3D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            data-element="title"
            className={`text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-1000 ${
              visibleElements.has("title")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Características
          </h2>
          <p
            data-element="description"
            className={`text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              visibleElements.has("description")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Descubra todas as funcionalidades que tornam nosso software a
            escolha ideal para seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characteristics.map((characteristic, index) => (
            <div
              key={index}
              data-element={`card-${index}`}
              className={`bg-white p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-700 delay-${500 + index * 100} border-gray-100 dark:border-gray-700 border-[0px] dark:bg-[#001451] rounded-[11.282699999999998px] ${
                visibleElements.has(`card-${index}`)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-5 scale-95"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
                {characteristic.title}
              </h3>

              <ul className="space-y-3">
                {characteristic.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
