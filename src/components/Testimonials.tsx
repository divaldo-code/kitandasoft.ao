import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "O KitandaSoft revolucionou a gestão da minha farmácia! A sua versatilidade é incrível. Controlo o stock de medicamentos, faço facturas e emito receitas de forma integrada. O módulo POS é rápido e intuitivo. Para qualquer retalho, é a solução completa que simplifica operações complexas. Recomendo!",
    name: "Carlos Silva",
    title: "CEO",
    company: "Grupo Farmaceutico",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  },
  {
    id: 2,
    quote:
      "A nossa lavandaria industrial precisava de organização. O KitandaSoft deu-nos clareza total! Controlamos entradas/saidas de roupa, faturamos por serviço e gerimos o cadastro de clientes com facilidade. O sistema é robusto e adapta-se perfeitamente a negócios baseados em serviços. Muito satisfeito!",
    name: "Maria Santos",
    title: "Proprietária",
    company: "Lavandaria",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  },
  {
    id: 3,
    quote:
      "Na minha oficina, controlar ordens de serviço e stock de peças era um caos. O KitandaSoft trouxe controle total! Automatiza facturação, gere o fluxo de caixa e emite relatórios precisos. Para serviços ou comércio, a gestão tornou-se muito mais eficiente e profissional. Um aliado indispensável para o negócio!",
    name: "João Oliveira",
    title: "Gerente",
    company: "Oficina",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
  },
  {
    id: 4,
    quote:
      "Como dono de um café e bar, precisava de um sistema rápido e fiável. O KitandaSoft no POS é fantástico! Faturação rápida, gestão de mesas e controlo de stock integrado. Tornou o atendimento mais ágil e o fecho de caixa, infalível. Para restauração e retalho, é a eficiência que precisávamos.",
    name: "Ana Costa",
    title: "Fundadora",
    company: "Café e Bar",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  },
  {
    id: 5,
    quote:
      "Para a nossa empresa de prestação de serviços, a gestão de clientes e projetos era descentralizada. O KitandaSoft centralizou tudo! Emitimos faturas, controlamos o fluxo de entrada/saída e gerimos o stock de materiais usados. É flexível e adapta-se perfeitamente ao nosso modelo de negócio. Fantástico!",
    name: "Pedro Mendes",
    title: "CTO",
    company: "Digital Corp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#000F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Depoimentos
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            O que nossos clientes dizem sobre nossa plataforma
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:hover:bg-gray-700 transition-colors dark:bg-[#001451] hover:bg-[#ffffff]"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:hover:bg-gray-700 transition-colors dark:bg-[#001451] hover:bg-[#ffffff]"
          >
            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden md:mx-12">
            {/* Mobile: Single testimonial */}
            <div className="md:hidden">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mx-4">
                {/* Webflow Logo */}
                <div className="mb-6"></div>

                {/* Quote */}
                <blockquote className="text-gray-900 dark:text-white text-base md:text-lg leading-relaxed mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[currentIndex].title},{" "}
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Three testimonials grid */}
            <div className="hidden md:block">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white border border-gray-200 dark:border-gray-700 rounded-lg p-8 h-full dark:bg-[#001451]">
                      {/* Webflow Logo */}
                      <div className="mb-6"></div>

                      {/* Quote */}
                      <blockquote className="text-gray-900 dark:text-white text-lg leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.title}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {/* Mobile: Show all testimonials */}
            <div className="md:hidden flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-gray-900 dark:bg-white"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Desktop: Show sliding groups */}
            <div className="hidden md:flex space-x-2">
              {Array.from({ length: testimonials.length - 2 }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-gray-900 dark:bg-white"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ),
              )}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="md:hidden flex justify-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
