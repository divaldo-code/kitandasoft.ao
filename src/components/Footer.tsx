import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-[#000F3D] border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/logo-oficial.png"
                alt="KitandaSoft"
                className="h-8 w-auto cursor-pointer"
                onClick={scrollToTop}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
              Emite faturas certificadas pela AGT em minutos de forma fácil.
              <br />
              Comece hoje!
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Seu email aqui"
                  className="flex-1 text-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6">
                  Experimentar
                </Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Ao submeter seu email está de acordo com a nossa{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Política de privacidade
                </a>{" "}
                e da seu consentimento para ser contactado.
              </p>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Soluções KitandaSoft
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left"
                >
                  Farmácia
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left"
                >
                  Gestão Comercial
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left"
                >
                  Lavandaria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left"
                >
                  Oficina Mecânica
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left"
                >
                  Prestação de Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left"
                >
                  POS (Ponto de Venda)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left"
                >
                  Restauração
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left"
                >
                  Retalho
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Siga-nos
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  <Youtube className="h-4 w-4 mr-2" />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 GC Lucan. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 underline"
              >
                Política de privacidade
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 underline"
              >
                Termos de serviço
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 underline"
              >
                Configurações de cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;