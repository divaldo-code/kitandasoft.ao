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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "Carlos Silva",
    title: "CEO",
    company: "Empresa Inovadora",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "Maria Santos",
    title: "Diretora",
    company: "Grupo Empresarial",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "João Oliveira",
    title: "Gerente",
    company: "Startup Tech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
  },
  {
    id: 4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "Ana Costa",
    title: "Fundadora",
    company: "Tech Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  },
  {
    id: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
                <div className="mb-6">
                  <svg
                    className="h-6 w-auto text-gray-600 dark:text-gray-400"
                    viewBox="0 0 100 24"
                    fill="currentColor"
                  >
                    <path d="M24.6 8.1c-.4-2.1-1.8-3.8-3.8-4.6-1.2-.5-2.5-.7-3.8-.7-2.8 0-5.4 1.2-7.2 3.3C8 7.3 7.2 8.9 7.2 10.6c0 1.7.8 3.3 2.2 4.5 1.4 1.2 3.2 1.9 5.1 1.9 1.3 0 2.6-.3 3.7-.9 1.1-.6 2-1.4 2.7-2.4l-2.1-1.5c-.4.6-.9 1.1-1.5 1.4-.6.3-1.3.5-2 .5-1.1 0-2.1-.4-2.9-1.1-.8-.7-1.3-1.6-1.4-2.6h8.8c.1-.4.1-.8.1-1.2 0-.4 0-.8-.1-1.1zm-8.7 1.4c.2-.9.7-1.7 1.4-2.3.7-.6 1.6-.9 2.5-.9.9 0 1.8.3 2.5.9.7.6 1.1 1.4 1.3 2.3h-7.7z" />
                    <path d="M35.8 2.4h-2.9v14.4h2.9V8.6c0-1.2.4-2.3 1.2-3.1.8-.8 1.9-1.2 3-1.2.8 0 1.5.2 2.1.6l1.4-2.5c-.9-.6-2-.9-3.1-.9-1.4 0-2.7.5-3.7 1.4V2.4z" />
                    <path d="M52.1 7.8c-1.2-.5-2.5-.7-3.8-.7-2.8 0-5.4 1.2-7.2 3.3-1.8 2.1-2.6 4.7-2.6 6.4 0 1.7.8 3.3 2.2 4.5 1.4 1.2 3.2 1.9 5.1 1.9 1.3 0 2.6-.3 3.7-.9 1.1-.6 2-1.4 2.7-2.4l-2.1-1.5c-.4.6-.9 1.1-1.5 1.4-.6.3-1.3.5-2 .5-1.1 0-2.1-.4-2.9-1.1-.8-.7-1.3-1.6-1.4-2.6h8.8c.1-.4.1-.8.1-1.2 0-.4 0-.8-.1-1.1-.4-2.1-1.8-3.8-3.8-4.6zm-6.2 3.5c.2-.9.7-1.7 1.4-2.3.7-.6 1.6-.9 2.5-.9.9 0 1.8.3 2.5.9.7.6 1.1 1.4 1.3 2.3h-7.7z" />
                    <path d="M65.4 7.1c-1.4 0-2.7.5-3.7 1.4V7.4h-2.9v9.4h2.9v-5.2c0-1.2.4-2.3 1.2-3.1.8-.8 1.9-1.2 3-1.2.8 0 1.5.2 2.1.6l1.4-2.5c-.9-.6-2-.9-3.1-.9z" />
                    <path d="M75.8 16.8h2.9V2.4h-2.9v14.4z" />
                    <path d="M88.1 7.1c-2.8 0-5.4 1.2-7.2 3.3-1.8 2.1-2.6 4.7-2.6 6.4 0 1.7.8 3.3 2.2 4.5 1.4 1.2 3.2 1.9 5.1 1.9 2 0 3.9-.7 5.4-2 1.5-1.3 2.3-3 2.3-4.8 0-1.8-.8-3.5-2.3-4.8-1.5-1.3-3.4-2-5.4-2zm0 11.1c-1.1 0-2.1-.4-2.9-1.1-.8-.7-1.3-1.6-1.3-2.6s.5-1.9 1.3-2.6c.8-.7 1.8-1.1 2.9-1.1s2.1.4 2.9 1.1c.8.7 1.3 1.6 1.3 2.6s-.5 1.9-1.3 2.6c-.8.7-1.8 1.1-2.9 1.1z" />
                    <path d="M100 7.4l-2.8 6.2-2.8-6.2h-3.2l4.4 9.4h3.2l4.4-9.4H100z" />
                  </svg>
                </div>

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
                      <div className="mb-6">
                        <svg
                          className="h-6 w-auto text-gray-600 dark:text-gray-400"
                          viewBox="0 0 100 24"
                          fill="currentColor"
                        >
                          <path d="M24.6 8.1c-.4-2.1-1.8-3.8-3.8-4.6-1.2-.5-2.5-.7-3.8-.7-2.8 0-5.4 1.2-7.2 3.3C8 7.3 7.2 8.9 7.2 10.6c0 1.7.8 3.3 2.2 4.5 1.4 1.2 3.2 1.9 5.1 1.9 1.3 0 2.6-.3 3.7-.9 1.1-.6 2-1.4 2.7-2.4l-2.1-1.5c-.4.6-.9 1.1-1.5 1.4-.6.3-1.3.5-2 .5-1.1 0-2.1-.4-2.9-1.1-.8-.7-1.3-1.6-1.4-2.6h8.8c.1-.4.1-.8.1-1.2 0-.4 0-.8-.1-1.1zm-8.7 1.4c.2-.9.7-1.7 1.4-2.3.7-.6 1.6-.9 2.5-.9.9 0 1.8.3 2.5.9.7.6 1.1 1.4 1.3 2.3h-7.7z" />
                          <path d="M35.8 2.4h-2.9v14.4h2.9V8.6c0-1.2.4-2.3 1.2-3.1.8-.8 1.9-1.2 3-1.2.8 0 1.5.2 2.1.6l1.4-2.5c-.9-.6-2-.9-3.1-.9-1.4 0-2.7.5-3.7 1.4V2.4z" />
                          <path d="M52.1 7.8c-1.2-.5-2.5-.7-3.8-.7-2.8 0-5.4 1.2-7.2 3.3-1.8 2.1-2.6 4.7-2.6 6.4 0 1.7.8 3.3 2.2 4.5 1.4 1.2 3.2 1.9 5.1 1.9 1.3 0 2.6-.3 3.7-.9 1.1-.6 2-1.4 2.7-2.4l-2.1-1.5c-.4.6-.9 1.1-1.5 1.4-.6.3-1.3.5-2 .5-1.1 0-2.1-.4-2.9-1.1-.8-.7-1.3-1.6-1.4-2.6h8.8c.1-.4.1-.8.1-1.2 0-.4 0-.8-.1-1.1-.4-2.1-1.8-3.8-3.8-4.6zm-6.2 3.5c.2-.9.7-1.7 1.4-2.3.7-.6 1.6-.9 2.5-.9.9 0 1.8.3 2.5.9.7.6 1.1 1.4 1.3 2.3h-7.7z" />
                          <path d="M65.4 7.1c-1.4 0-2.7.5-3.7 1.4V7.4h-2.9v9.4h2.9v-5.2c0-1.2.4-2.3 1.2-3.1.8-.8 1.9-1.2 3-1.2.8 0 1.5.2 2.1.6l1.4-2.5c-.9-.6-2-.9-3.1-.9z" />
                          <path d="M75.8 16.8h2.9V2.4h-2.9v14.4z" />
                          <path d="M88.1 7.1c-2.8 0-5.4 1.2-7.2 3.3-1.8 2.1-2.6 4.7-2.6 6.4 0 1.7.8 3.3 2.2 4.5 1.4 1.2 3.2 1.9 5.1 1.9 2 0 3.9-.7 5.4-2 1.5-1.3 2.3-3 2.3-4.8 0-1.8-.8-3.5-2.3-4.8-1.5-1.3-3.4-2-5.4-2zm0 11.1c-1.1 0-2.1-.4-2.9-1.1-.8-.7-1.3-1.6-1.3-2.6s.5-1.9 1.3-2.6c.8-.7 1.8-1.1 2.9-1.1s2.1.4 2.9 1.1c.8.7 1.3 1.6 1.3 2.6s-.5 1.9-1.3 2.6c-.8.7-1.8 1.1-2.9 1.1z" />
                          <path d="M100 7.4l-2.8 6.2-2.8-6.2h-3.2l4.4 9.4h3.2l4.4-9.4H100z" />
                        </svg>
                      </div>

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
