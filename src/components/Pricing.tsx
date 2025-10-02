import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Check, X, Mail, MessageCircle } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  category: string;
  popular?: boolean;
}

interface RequestFormData {
  name: string;
  phone: string;
  email: string;
  plan: string;
  method: "email" | "whatsapp" | null;
}

const Pricing = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showMethodModal, setShowMethodModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [formData, setFormData] = useState<RequestFormData>({
    name: "",
    phone: "",
    email: "",
    plan: "",
    method: null,
  });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
  );
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const sectionId = entry.target.getAttribute("data-section");
            if (sectionId && !visibleSections.has(sectionId)) {
              setVisibleSections((prev) => new Set([...prev, sectionId]));
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  // Pre-load local plans visibility when component mounts
  useEffect(() => {
    // Pre-load all sections for local plans so they're ready when user switches
    const localSections = [
      "header",
      "Facturação Base – Local",
      "special-plans",
    ];

    setVisibleSections((prev) => {
      const newSet = new Set(prev);
      localSections.forEach((section) => newSet.add(section));
      return newSet;
    });
  }, []);

  const onlinePlans: Plan[] = [
    {
      id: "pos-retalho-online",
      name: "Facturação Venda ao Balcão (POS Retalho)",
      price: "83.000,00",
      category: "Facturação Base – Online",
      features: [
        "Vendas",
        "Stock base",
        "Instalação Online",
        "Formação",
        "5 Intervenções de Suporte Técnico",
        "Até 1 empresa, 5 utilizadores",
      ],
    },
    {
      id: "faturacao-backoffice-online",
      name: "Faturação BackOffice",
      price: "145.000,00",
      category: "Facturação Base – Online",
      features: [
        "Facturação de Cliente em BackOffice",
        "Contas Correntes",
        "Instalação Online",
        "Formação",
        "5 Intervenções de Suporte Técnico",
        "Até 1 empresa, 5 utilizadores",
      ],
    },
    {
      id: "pos-rest-online",
      name: "Facturação Restauração (POS REST)",
      price: "180.000,00",
      category: "Facturação Base – Online",
      features: [
        "Vendas",
        "Stock base",
        "Gestão de Mesas e Cartões",
        "Instalação Online",
        "Até 1 empresa, 5 utilizadores",
      ],
    },
    {
      id: "gestao-comercial-online",
      name: "Gestão Comercial",
      price: "395.540,00",
      category: "Gestão Comercial – Online",
      popular: true,
      features: [
        "Facturação Base BackOffice – Online",
        "Compras e Contas Correntes de Fornecedores",
        "POS Retalho/Restauração",
        "Suporte Técnico Remoto Grátis",
      ],
    },
    {
      id: "tesouraria-online",
      name: "KitandaSoft Gestão – Tesouraria",
      price: "450.000,00",
      category: "Tesouraria Online",
      features: [
        "Banco/Caixa",
        "Contas Correntes",
        "Orçamentos e Previsional",
        "Instalação Online",
      ],
    },
  ];

  const localPlans: Plan[] = [
    {
      id: "pos-retalho-local",
      name: "Facturação Venda ao Balcão (POS Retalho)",
      price: "150.000,00",
      category: "Facturação Base – Local",
      features: [
        "Vendas",
        "Stock base",
        "Instalação Local",
        "Formação",
        "5 Intervenções de Suporte Técnico",
        "Até 1 empresa, 5 utilizadores",
      ],
    },
    {
      id: "faturacao-backoffice-local",
      name: "Facturação BackOffice",
      price: "270.000,00",
      category: "Facturação Base – Local",
      features: [
        "Facturação de Cliente em BackOffice",
        "Contas Correntes",
        "Instalação Local",
        "Formação",
        "5 Intervenções de Suporte Técnico",
        "Até 3 empresas, 5 utilizadores",
      ],
    },
    {
      id: "pos-rest-local",
      name: "Facturação Restauração (POS REST)",
      price: "230.000,00",
      category: "Facturação Base – Local",
      features: [
        "Vendas",
        "Stock base",
        "Gestão de Mesas e Cartões",
        "Instalação Online",
        "Formação",
        "5 Intervenções de Suporte Técnico",
        "Até 1 empresa, 5 utilizadores",
      ],
    },
    {
      id: "gestao-comercial-local",
      name: "Gestão Comercial",
      price: "530.000,00",
      category: "Gestão Comercial – Local",
      popular: true,
      features: [
        "Facturação Base BackOffice – Online",
        "Compras e Contas Correntes de Fornecedores",
        "POS Retalho/Restauração",
        "Suporte Técnico Remoto Grátis",
        "10 Intervenções presenciais sem custos",
        "Configuração de Documentos comerciais",
        "Formação de Utilizadores e Acompanhamento",
      ],
    },
    {
      id: "tesouraria-local",
      name: "KitandaSoft Gestão – Tesouraria",
      price: "650.000,00",
      category: "Tesouraria Local",
      features: [
        "Banco/Caixa",
        "Contas Correntes",
        "Orçamentos e Previsional",
        "Instalação Local",
      ],
    },
  ];

  const rhPlans: Plan[] = [
    {
      id: "rh-20-processamento",
      name: "Processamento 20 Colaboradores",
      price: "480.000,00",
      category: "Gestão de Pessoal e Processamento",
      features: ["Processamento até 20 colaboradores"],
    },
    {
      id: "rh-100-processamento",
      name: "Processamento 100 Colaboradores",
      price: "650.000,00",
      category: "Gestão de Pessoal e Processamento",
      features: ["Processamento até 100 colaboradores"],
    },
    {
      id: "rh-ilimitado-processamento",
      name: "Processamento Ilimitado",
      price: "980.000,00",
      category: "Gestão de Pessoal e Processamento",
      features: ["Processamento ilimitado de colaboradores"],
    },
    {
      id: "rh-20-implementacao",
      name: "Implementação 20 Colaboradores",
      price: "480.000,00",
      category: "Implementação, Parametrização e Suporte (1 Ano)",
      features: ["Implementação e suporte para até 20 colaboradores"],
    },
    {
      id: "rh-100-implementacao",
      name: "Implementação 100 Colaboradores",
      price: "980.000,00",
      category: "Implementação, Parametrização e Suporte (1 Ano)",
      features: ["Implementação e suporte para até 100 colaboradores"],
    },
    {
      id: "rh-ilimitado-implementacao",
      name: "Implementação Ilimitado",
      price: "1.350.000,00",
      category: "Implementação, Parametrização e Suporte (1 Ano)",
      features: ["Implementação e suporte para número ilimitado"],
    },
  ];

  const currentPlans = isOnline ? onlinePlans : localPlans;

  const handleRequestClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowMethodModal(true);
  };

  const handleMethodSelect = (method: "email" | "whatsapp") => {
    setFormData({ ...formData, method, plan: selectedPlan?.name || "" });
    setShowMethodModal(false);
    setShowRequestModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.method === "email") {
      const subject = `Solicitação de Orçamento - ${formData.plan}`;
      const body = `Olá,\\n\\nGostaria de solicitar um orçamento para o plano: ${formData.plan}\\n\\nDados de contacto:\\nNome: ${formData.name}\\nTelemóvel: ${formData.phone}\\nEmail: ${formData.email}\\n\\nAguardo o vosso contacto.\\n\\nCumprimentos,\\n${formData.name}`;

      window.location.href = `mailto:comercial@kitandasoft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else if (formData.method === "whatsapp") {
      const message = `Olá! Gostaria de solicitar um orçamento para o plano: *${formData.plan}*\\n\\n*Dados de contacto:*\\nNome: ${formData.name}\\nTelemóvel: ${formData.phone}\\nEmail: ${formData.email}\\n\\nAguardo o vosso contacto. Obrigado!`;

      window.open(
        `https://wa.me/244923123456?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    }

    setShowRequestModal(false);
    setFormData({ name: "", phone: "", email: "", plan: "", method: null });
  };

  // Separate Gestão Comercial and Tesouraria plans
  const specialPlans = currentPlans.filter(
    (plan) =>
      plan.category.includes("Gestão Comercial") ||
      plan.category.includes("Tesouraria"),
  );

  const regularPlans = currentPlans.filter(
    (plan) =>
      !plan.category.includes("Gestão Comercial") &&
      !plan.category.includes("Tesouraria"),
  );

  const regularGroupedPlans = regularPlans.reduce(
    (acc, plan) => {
      if (!acc[plan.category]) {
        acc[plan.category] = [];
      }
      acc[plan.category].push(plan);
      return acc;
    },
    {} as Record<string, Plan[]>,
  );

  // Group RH plans
  const groupedRHPlans = rhPlans.reduce(
    (acc, plan) => {
      if (!acc[plan.category]) {
        acc[plan.category] = [];
      }
      acc[plan.category].push(plan);
      return acc;
    },
    {} as Record<string, Plan[]>,
  );

  return (
    <>
      <section
        id="planos"
        className="bg-gray-50 py-20 dark:bg-[#000F3D] text-[white] dark:text-[#eeeaea] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:text-[#ffffff]">
          {/* Header Section */}
          <div
            ref={(el) => (sectionRefs.current["header"] = el)}
            data-section="header"
            className={`text-center mb-16 dark:text-[#ffffff] relative transition-all duration-1000 ${
              visibleSections.has("header")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Animated border */}
            <div
              className={`absolute top-0 left-1/2 h-1 bg-blue-600 transition-all duration-1000 ${
                visibleSections.has("header")
                  ? "w-full -translate-x-1/2"
                  : "w-0 -translate-x-1/2"
              }`}
            ></div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 dark:text-[#ffffff] pt-8">
              Planos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 dark:text-[#ffffff]">
              Escolha o plano ideal para o seu negócio com preços transparentes
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center space-x-4">
              <span
                className={`text-lg font-medium ${!isOnline ? "text-blue-600" : "text-gray-500 dark:text-[#ffffff]"}`}
              >
                Local
              </span>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isOnline ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isOnline ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-lg font-medium ${isOnline ? "text-blue-600" : "text-gray-500"}`}
              >
                Online
              </span>
            </div>
          </div>

          {/* Regular Plans */}
          {Object.entries(regularGroupedPlans).map(
            ([category, plans], categoryIndex) => (
              <div
                key={category}
                ref={(el) => (sectionRefs.current[category] = el)}
                data-section={category}
                className={`mb-12 relative transition-all duration-1000 delay-${categoryIndex * 200} ${
                  visibleSections.has(category)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Animated border */}
                <div
                  className={`absolute top-0 left-1/2 h-1 bg-blue-600 transition-all duration-1000 delay-300 ${
                    visibleSections.has(category)
                      ? "w-full -translate-x-1/2"
                      : "w-0 -translate-x-1/2"
                  }`}
                ></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center dark:text-[#ffffff] pt-8">
                  {category}
                </h3>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {plans.map((plan, planIndex) => (
                    <div
                      key={plan.id}
                      className={`bg-white dark:bg-[#001451] rounded-lg shadow-lg p-8 relative transition-all duration-700 delay-${planIndex * 100} ${
                        visibleSections.has(category)
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-5 scale-95"
                      } ${plan.popular ? "ring-2 ring-blue-600" : ""}`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Mais Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {plan.name}
                        </h4>
                        <div className="text-3xl font-bold text-blue-600 dark:text-white">
                          {plan.price} Kz
                          <span className="text-sm text-gray-500 dark:text-gray-300 font-normal">
                            {" "}
                            + IVA
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-white text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => handleRequestClick(plan)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Solicitar
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}

          {/* Special Plans Section - Gestão Comercial and Tesouraria */}
          {specialPlans.length > 0 && (
            <div
              ref={(el) => (sectionRefs.current["special-plans"] = el)}
              data-section="special-plans"
              className={`mb-12 relative transition-all duration-1000 ${
                visibleSections.has("special-plans")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Animated border */}
              <div
                className={`absolute top-0 left-1/2 h-1 bg-blue-600 transition-all duration-1000 delay-300 ${
                  visibleSections.has("special-plans")
                    ? "w-full -translate-x-1/2"
                    : "w-0 -translate-x-1/2"
                }`}
              ></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center dark:text-[#ffffff] pt-8">
                Planos Empresariais
              </h3>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                {specialPlans.map((plan, planIndex) => (
                  <div
                    key={plan.id}
                    className={`bg-white dark:bg-[#001451] rounded-lg shadow-lg p-8 relative max-w-md w-full transition-all duration-700 delay-${planIndex * 200} ${
                      visibleSections.has("special-plans")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-5 scale-95"
                    } ${plan.popular ? "ring-2 ring-blue-600" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Mais Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {plan.name}
                      </h4>
                      <div className="text-3xl font-bold text-blue-600 dark:text-white">
                        {plan.price} Kz
                        <span className="text-sm text-gray-500 dark:text-gray-300 font-normal">
                          {" "}
                          + IVA
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-white text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => handleRequestClick(plan)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Solicitar
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RH Plans */}
          <div className="mt-16 dark:text-[#ffffff]">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center dark:text-[#ffffff]">
              Recursos Humanos
            </h3>
            <p className="text-gray-600 text-center mb-8 dark:text-[#ffffff] mt-[0px]">
              Aplicável a Online e Local
            </p>

            {Object.entries(groupedRHPlans).map(([category, plans]) => (
              <div key={category} className="mb-12">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center dark:text-[#ffffff]">
                  {category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className="max-w-md w-full dark:text-[#ffffff] dark:bg-[#001451] flex flex-col border-none py-10 pb-[0px] pt-10 my-[0px] rounded-[10px] pl-10 pr-10 shadow"
                    >
                      <div className="text-center mb-6">
                        <h5 className="text-lg font-bold text-gray-900 mb-2 dark:text-[#ffffff]">
                          {plan.name}
                        </h5>
                        <div className="text-2xl font-bold text-blue-600 dark:text-[#ffffff]">
                          {plan.price} Kz
                          <span className="text-sm text-gray-500 font-normal">
                            {" "}
                            + IVA
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8 dark:text-[#ffffff]">
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start dark:text-[#ffffff]"
                          >
                            <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm dark:text-[#ffffff]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => handleRequestClick(plan)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Solicitar
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-[#001451]">
              <h4 className="text-lg font-bold text-gray-900 mb-4 dark:text-[#fbfafa]">
                💳 Condições de Pagamento
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-[#ffffff]">
                <li>Mensal: +10%</li>
                <li>Trimestral: +15%</li>
                <li>Semestral: +20%</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-[#001451]">
              <h4 className="text-lg font-bold text-gray-900 mb-4 dark:text-[#ffffff]">
                ➕ Empresas Adicionais
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-[#ffffff]">
                <li>Mesmo NIF: +95.000,00 Kz</li>
                <li>NIF Diferente: valor de uma licença completa</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-[#001451]">
              <h4 className="text-lg font-bold text-gray-900 mb-4 dark:text-[#ffffff]">
                🔧 Intervenções Técnicas
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-[#ffffff]">
                <li>Básica (até 1 dia): 6.500,00 Kz</li>
                <li>Urgente (+24h): 12.500,00 Kz</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Method Selection Modal */}
      {showMethodModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Como deseja solicitar?
            </h3>
            <div className="space-y-4">
              <button
                onClick={() => handleMethodSelect("email")}
                className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span className="font-medium">Por Email</span>
              </button>
              <button
                onClick={() => handleMethodSelect("whatsapp")}
                className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="font-medium">Por WhatsApp</span>
              </button>
            </div>
            <button
              onClick={() => setShowMethodModal(false)}
              className="mt-6 w-full px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
      {/* Request Form Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Solicitar Orçamento
              </h3>
              <button
                onClick={() => setShowRequestModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telemóvel *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Plano Selecionado
                </label>
                <input
                  type="text"
                  value={formData.plan}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {formData.method === "email"
                  ? "Enviar por Email"
                  : "Enviar por WhatsApp"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Pricing;
