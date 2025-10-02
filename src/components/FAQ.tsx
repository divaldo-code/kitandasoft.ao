import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Maximize2, Minimize2 } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona a implementação?",
    answer:
      "Nosso processo de implementação é simples e personalizado. Nossos especialistas analisam suas necessidades e desenvolvem uma solução sob medida para seu negócio.",
  },
  {
    question: "Qual o tempo de instalação?",
    answer:
      "O tempo de instalação varia de acordo com a complexidade do seu negócio. Geralmente, levamos entre 15 minutos a 1 hora para uma implementação completa.",
  },
  {
    question: "Os dados são seguros?",
    answer:
      "Utilizamos protocolos de segurança avançados para proteger suas informações. Todos os dados são criptografados e mantidos em servidores seguros.",
  },
  {
    question: "Oferecem treinamento?",
    answer:
      "Sim, oferecemos treinamento completo para sua equipe. Nossos especialistas garantem que todos os usuários estejam preparados para usar o sistema.",
  },
  {
    question: "Qual o custo da solução?",
    answer: (
      <>
        Nossos planos são flexíveis e adaptados ao tamanho do seu negócio.
        Oferecemos diferentes planos para atender suas necessidades específicas.{" "}
        <button
          onClick={() => {
            const planosSection = document.getElementById("planos");
            if (planosSection) {
              planosSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Ver nossos planos
        </button>
      </>
    ),
  },
  {
    question: "Posso testar antes?",
    answer: (
      <>
        Absolutamente. Oferecemos uma versão de demonstração gratuita para que
        você possa experimentar todas as funcionalidades antes de contratar.{" "}
        <button
          onClick={() => {
            window.open(
              "https://criar.app.kitandasoft.ao/Seguranca/CreateAccount",
              "_blank",
            );
          }}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Experimentar demo grátis
        </button>
      </>
    ),
  },
  {
    question: "Suportam qual sistema?",
    answer:
      "Nossa solução é compatível com Windows, Mac, Linux e dispositivos móveis. Garantimos total integração com diferentes sistemas operacionais.",
  },
  {
    question: "Como fazer actualização?",
    answer:
      "As atualizações são automáticas e sem custo adicional. Nosso sistema garante que tenha tenha sempre a versão mais recente.",
  },
  {
    question: "Qual o suporte técnico?",
    answer:
      "Oferecemos suporte técnico presencial e rempoto durante o horário comercial, fora do horário comercial apenas em casos urgentes ou se solicitar de forma atempada, podem existir custos adicionais face a complexidade do pedido. Nossa equipe está sempre pronta para ajudar.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, você pode cancelar quando quiser. Não há taxas de cancelamento ou multas contratuais.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [allExpanded, setAllExpanded] = useState(false);

  // Check if it's desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Update allExpanded state based on openItems
  useEffect(() => {
    setAllExpanded(openItems.length === faqData.length);
  }, [openItems]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const toggleAllItems = () => {
    if (allExpanded) {
      setOpenItems([]);
    } else {
      setOpenItems(faqData.map((_, index) => index));
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-[#000F3D] py-20 dark:border-[#0099fe] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Encontre respostas rápidas para suas principais dúvidas sobre nossos
            serviços
          </p>
        </div>

        {/* Expand/Collapse All Button - Only on Desktop */}
        {isDesktop && (
          <div className="absolute top-24 right-8 group">
            <button
              onClick={toggleAllItems}
              className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg rounded-lg transition-all duration-200"
              title={allExpanded ? "Colapsar todas as respostas" : "Expandir todas as respostas"}
            >
              {allExpanded ? (
                <Minimize2 className="h-5 w-5" />
              ) : (
                <Maximize2 className="h-5 w-5" />
              )}
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-[#001451]"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 dark:border-gray-600 pt-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;