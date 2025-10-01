import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
      "O tempo de instalação varia de acordo com a complexidade do seu negócio. Geralmente, levamos entre 15 a 30 dias para uma implementação completa.",
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
    answer:
      "Nossos preços são flexíveis e adaptados ao tamanho do seu negócio. Oferecemos diferentes planos para atender suas necessidades específicas.",
  },
  {
    question: "Posso testar antes?",
    answer:
      "Absolutamente. Oferecemos uma versão de demonstração gratuita para que você possa experimentar todas as funcionalidades antes de contratar.",
  },
  {
    question: "Suportam qual sistema?",
    answer:
      "Nossa solução é compatível com Windows, Mac, Linux e dispositivos móveis. Garantimos total integração com diferentes sistemas operacionais.",
  },
  {
    question: "Como fazer atualização?",
    answer:
      "As atualizações são automáticas e sem custo adicional. Nosso sistema garante que você sempre tenha a versão mais recente.",
  },
  {
    question: "Qual o suporte técnico?",
    answer:
      "Oferecemos suporte técnico 24 horas por dia, 7 dias por semana. Nossa equipe está sempre pronta para ajudar.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, você pode cancelar quando quiser. Não há taxas de cancelamento ou multas contratuais.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="bg-gray-50 dark:bg-[#000F3D] py-20 dark:border-[#0099fe]">
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
