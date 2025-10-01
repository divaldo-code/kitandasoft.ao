import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Shield, Eye, Lock, Server, Users, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Política de Privacidade
              </h1>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleGoBack} variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <Button onClick={handleGoHome} size="sm">
                Início
              </Button>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Última atualização: Janeiro de 2025
          </p>
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Software Certificado pela AGT Nº 505/AGT/2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Introdução
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A GC LUCAN, empresa responsável pelo desenvolvimento e comercialização do software KitandaSoft, 
              compromete-se a proteger a privacidade e os dados pessoais dos nossos utilizadores. Esta política 
              explica como recolhemos, utilizamos e protegemos as suas informações nas duas modalidades do nosso software.
            </p>
          </section>

          {/* Software Versions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Server className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Modalidades do KitandaSoft
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  ☁️ KitandaSoft Online (SaaS)
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Dados armazenados em cloud segura</li>
                  <li>• Acesso via navegador web</li>
                  <li>• Atualizações automáticas</li>
                  <li>• Backup centralizado</li>
                  <li>• Multiutilizador com níveis de acesso</li>
                </ul>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  💻 KitandaSoft Local
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Dados armazenados localmente</li>
                  <li>• Instalação em servidor próprio</li>
                  <li>• Atualizações manuais</li>
                  <li>• Backup responsabilidade do cliente</li>
                  <li>• Funcionamento offline</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Recolha de Dados
            </h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dados Recolhidos:</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>• <strong>Dados da Empresa:</strong> Nome, NIF, endereço, contactos</li>
                <li>• <strong>Dados de Utilizadores:</strong> Nome, email, função, permissões</li>
                <li>• <strong>Dados de Clientes:</strong> Informações comerciais e de faturação</li>
                <li>• <strong>Dados de Fornecedores:</strong> Informações comerciais e de compras</li>
                <li>• <strong>Dados Operacionais:</strong> Vendas, stocks, movimentos financeiros</li>
                <li>• <strong>Dados Técnicos:</strong> Logs de sistema, estatísticas de uso</li>
              </ul>
            </div>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Armazenamento e Segurança
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Versão Online:</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Servidores localizados em Angola</li>
                  <li>• Encriptação SSL/TLS</li>
                  <li>• Backup automático diário</li>
                  <li>• Monitorização 24/7</li>
                  <li>• Controlo de acesso rigoroso</li>
                  <li>• Conformidade com normas de segurança</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Versão Local:</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Dados sob controlo total do cliente</li>
                  <li>• Responsabilidade de segurança do cliente</li>
                  <li>• Recomendações de boas práticas</li>
                  <li>• Suporte técnico para configuração</li>
                  <li>• Orientações sobre backup</li>
                  <li>• Atualizações de segurança disponíveis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Direitos do Utilizador
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                De acordo com a legislação angolana de proteção de dados, tem os seguintes direitos:
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>• <strong>Direito de Acesso:</strong> Consultar os seus dados pessoais</li>
                <li>• <strong>Direito de Retificação:</strong> Corrigir dados incorretos</li>
                <li>• <strong>Direito de Eliminação:</strong> Solicitar remoção de dados</li>
                <li>• <strong>Direito de Portabilidade:</strong> Exportar os seus dados</li>
                <li>• <strong>Direito de Oposição:</strong> Opor-se ao tratamento</li>
                <li>• <strong>Direito de Limitação:</strong> Restringir o processamento</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Partilha de Dados
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Os seus dados podem ser partilhados apenas nas seguintes situações:
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>• <strong>Autoridade Tributária:</strong> Cumprimento de obrigações fiscais (SAFT-AO)</li>
                <li>• <strong>Autoridades Competentes:</strong> Quando exigido por lei</li>
                <li>• <strong>Prestadores de Serviços:</strong> Apenas para operação do sistema</li>
                <li>• <strong>Nunca para fins comerciais</strong> sem o seu consentimento explícito</li>
              </ul>
            </div>
          </section>

          {/* Cookies and Analytics */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cookies e Analytics
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              O nosso portal online utiliza cookies para:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>• Manter a sessão do utilizador</li>
              <li>• Melhorar a experiência de navegação</li>
              <li>• Analisar estatísticas de uso (anonimizadas)</li>
              <li>• Personalizar conteúdos</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contactos
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Para questões sobre privacidade ou exercer os seus direitos, contacte-nos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Empresa:</strong> GC LUCAN</p>
                  <p><strong>Email:</strong> comercial@lucansolucoes.com</p>
                  <p><strong>Website:</strong> www.lucansolucoes.co.ao</p>
                </div>
                <div>
                  <p><strong>Telefone:</strong> +244 222 780 264</p>
                  <p><strong>Móvel:</strong> +244 944 178 180</p>
                  <p><strong>Certificação:</strong> Nº 505/AGT/2025</p>
                </div>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Atualizações da Política
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Esta política pode ser atualizada periodicamente. Notificaremos sobre alterações significativas 
              através do nosso website ou por email. A versão mais recente estará sempre disponível em 
              www.lucansolucoes.co.ao.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 GC LUCAN - KitandaSoft. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;