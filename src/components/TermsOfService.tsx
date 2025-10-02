import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  FileText,
  Scale,
  AlertTriangle,
  CreditCard,
  Headphones,
  Globe,
} from "lucide-react";

const TermsOfService = () => {
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
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Termos de Serviço
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
              software de facturação Certificado pela AGT Nº 505/AGT/2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Termos Gerais
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Estes Termos de Serviço regem o uso do software de facturação
              KitandaSoft, desenvolvido e comercializado pela GC LUCAN. Ao
              utilizar o nosso software de facturação, concorda com estes termos
              na sua totalidade.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Importante:</strong> Estes termos aplicam-se às duas
                  modalidades do KitandaSoft: Online (SaaS) e Local (Instalação
                  própria).
                </p>
              </div>
            </div>
          </section>

          {/* Service Modalities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Globe className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Modalidades de Serviço
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  ☁️ KitandaSoft Online (SaaS)
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Acesso via subscrição mensal/anual</li>
                  <li>• Atualizações automáticas incluídas</li>
                  <li>• Suporte técnico remoto gratuito</li>
                  <li>• Backup automático dos dados</li>
                  <li>• Disponibilidade 99.5% garantida</li>
                  <li>• Escalabilidade automática</li>
                </ul>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  💻 KitandaSoft Local
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Licença perpétua com pagamento único</li>
                  <li>• Instalação no servidor do cliente</li>
                  <li>• Controlo total dos dados</li>
                  <li>• Funcionamento offline</li>
                  <li>• Suporte técnico por intervenção</li>
                  <li>• Atualizações opcionais pagas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Propriedade Intelectual
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                O software de facturação KitandaSoft, incluindo código-fonte,
                design, documentação e materiais relacionados, são propriedade
                exclusiva da GC LUCAN e estão protegidos por leis de direitos
                autorais.
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>
                  • <strong>Proibida</strong> a cópia, distribuição ou
                  modificação não autorizada
                </li>
                <li>
                  • <strong>Proibida</strong> a engenharia reversa do software
                  de facturação
                </li>
                <li>
                  • <strong>Permitido</strong> o uso conforme licença adquirida
                </li>
                <li>
                  • <strong>Permitida</strong> a personalização de relatórios e
                  documentos
                </li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Responsabilidades do Utilizador
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Versão Online:
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Manter credenciais de acesso seguras</li>
                  <li>• Usar o software de facturação conforme a lei</li>
                  <li>• Reportar problemas de segurança</li>
                  <li>• Manter dados atualizados</li>
                  <li>• Respeitar limites de utilizadores</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Versão Local:
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Manter sistema operativo atualizado</li>
                  <li>• Realizar backups regulares</li>
                  <li>• Garantir segurança do servidor</li>
                  <li>• Cumprir requisitos técnicos mínimos</li>
                  <li>• Instalar atualizações de segurança</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <CreditCard className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Condições de Pagamento
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Versão Online:
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                  <li>• Pagamento mensal ou anual antecipado</li>
                  <li>• Renovação automática salvo cancelamento</li>
                  <li>• Preços sujeitos a alteração com aviso de 30 dias</li>
                  <li>• Sem reembolso por cancelamento antecipado</li>
                </ul>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Versão Local:
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                  <li>• Pagamento único da licença</li>
                  <li>• Suporte técnico cobrado por intervenção</li>
                  <li>• Atualizações major opcionais e pagas</li>
                  <li>• Garantia de 12 meses incluída</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Support */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Headphones className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Suporte Técnico
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Horário de Suporte:
                </h3>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Segunda a Sexta: 08:00 às 17:00 (Hora de Luanda)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Canais de Suporte:
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Email: comercial@lucansolucoes.com</li>
                    <li>• Telefone: +244 222 780 264</li>
                    <li>• WhatsApp: +244 944 178 180</li>
                    <li>• Suporte remoto (TeamViewer/AnyDesk)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Tipos de Suporte:
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Configuração inicial</li>
                    <li>• Formação de utilizadores</li>
                    <li>• Resolução de problemas técnicos</li>
                    <li>• Atualizações e melhorias</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Limitations of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Limitações de Responsabilidade
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                A GC LUCAN não se responsabiliza por:
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>• Perda de dados por falha do utilizador</li>
                <li>• Interrupções de serviço por causas externas</li>
                <li>• Danos indiretos ou lucros cessantes</li>
                <li>• Uso inadequado do software de facturação</li>
                <li>• Falhas de hardware do cliente (versão local)</li>
              </ul>
              <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Importante:</strong> Recomendamos vivamente a
                  realização de backups regulares dos seus dados,
                  independentemente da versão utilizada.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Rescisão do Contrato
            </h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Pelo Cliente:
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>• Versão Online: Cancelamento a qualquer momento</li>
                <li>• Versão Local: Cessação de uso da licença</li>
                <li>• Exportação de dados garantida por 30 dias</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Pela GC LUCAN:
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>• Violação dos termos de uso</li>
                <li>• Não pagamento (versão online)</li>
                <li>• Uso fraudulento ou ilegal</li>
                <li>• Aviso prévio de 30 dias</li>
              </ul>
            </div>
          </section>

          {/* Certification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Certificação AGT
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                O KitandaSoft é um software de facturação certificado pela
                Administração Geral Tributária (AGT) de Angola sob o número{" "}
                <strong>505/AGT/2025</strong>.
              </p>
              <ul className="text-blue-700 dark:text-blue-300 space-y-2 text-sm">
                <li>• Cumpre todas as exigências fiscais angolanas</li>
                <li>• Gera ficheiro SAFT-AO conforme legislação</li>
                <li>• Documentos fiscalmente válidos</li>
                <li>• Atualizações automáticas de conformidade fiscal</li>
              </ul>
            </div>
          </section>

          {/* Jurisdiction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Jurisdição e Lei Aplicável
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Estes termos são regidos pelas leis da República de Angola.
              Qualquer disputa será resolvida nos tribunais competentes de
              Luanda, Angola.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Informações de Contacto
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p>
                    <strong>Empresa:</strong> GC LUCAN
                  </p>
                  <p>
                    <strong>Email:</strong> comercial@lucansolucoes.com
                  </p>
                  <p>
                    <strong>Website:</strong> www.lucansolucoes.co.ao
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Telefone:</strong> +244 222 780 264
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +244 944 178 180
                  </p>
                  <p>
                    <strong>Certificação:</strong> Nº 505/AGT/2025
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Alterações aos Termos
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              A GC LUCAN reserva-se o direito de alterar estes termos a qualquer
              momento. As alterações entrarão em vigor 30 dias após a
              notificação aos utilizadores. O uso continuado do software de
              facturação após as alterações constitui aceitação dos novos
              termos.
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

export default TermsOfService;
