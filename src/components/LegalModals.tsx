import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BROKER_INFO } from '../data/brokerData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-dark border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full glass-light border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-light">
            <div className="flex items-center gap-3 text-white mb-2">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shadow-md">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Política de Privacidade & LGPD
              </h3>
            </div>
            <p className="text-xs text-slate-400">Última atualização: 2026</p>
            <p>
              A <strong className="text-white font-medium">{BROKER_INFO.name}</strong> ({BROKER_INFO.creci}) valoriza a privacidade e o sigilo de seus clientes e usuários. Esta política detalha como coletamos, tratamos e protegemos seus dados pessoais em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
            </p>
            <h4 className="font-serif text-base font-bold text-white pt-2">1. Coleta de Informações</h4>
            <p>
              Coletamos apenas dados estritamente necessários para a prestação de serviços de consultoria imobiliária, tais como nome, telefone, e-mail e preferências de busca e investimento informadas voluntariamente em nossos canais de atendimento.
            </p>
            <h4 className="font-serif text-base font-bold text-white pt-2">2. Finalidade do Tratamento</h4>
            <p>
              Seus dados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Apresentação de imóveis e projetos correspondentes ao seu perfil;</li>
              <li>Agendamento e realização de visitas privativas;</li>
              <li>Elaboração de propostas, simulações de financiamento e contratos de intermediação;</li>
              <li>Comunicações diretas via WhatsApp, telefone ou e-mail.</li>
            </ul>
            <h4 className="font-serif text-base font-bold text-white pt-2">3. Não Compartilhamento com Terceiros</h4>
            <p>
              Não comercializamos, alugamos ou compartilhamos suas informações pessoais com terceiros não autorizados para fins publicitários.
            </p>
            <h4 className="font-serif text-base font-bold text-white pt-2">4. Direitos do Titular</h4>
            <p>
              Você pode, a qualquer momento, solicitar a atualização, confirmação de existência ou exclusão definitiva de seus dados de nossa base de contatos pelo e-mail {BROKER_INFO.email}.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-light">
            <div className="flex items-center gap-3 text-white mb-2">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shadow-md">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Termos de Uso do Website
              </h3>
            </div>
            <p className="text-xs text-slate-400">Última atualização: 2026</p>
            <p>
              Bem-vindo ao site oficial da imobiliária <strong className="text-white font-medium">{BROKER_INFO.name}</strong> ({BROKER_INFO.creci}). Ao navegar e utilizar este portal, você concorda com os termos e condições estipulados abaixo:
            </p>
            <h4 className="font-serif text-base font-bold text-white pt-2">1. Informações de Imóveis e Valores</h4>
            <p>
              As informações, metragens, fotos, plantas e valores dos imóveis divulgados neste site têm caráter informativo e podem sofrer alterações sem aviso prévio por parte dos proprietários ou incorporadoras. A confirmação de disponibilidade e valores é realizada diretamente pela equipe da ALTO RIO IMÓVEIS durante o atendimento.
            </p>
            <h4 className="font-serif text-base font-bold text-white pt-2">2. Propriedade Intelectual</h4>
            <p>
              Todo o conteúdo deste site, incluindo textos, marcas, logotipos, fotografias e layout, é de propriedade exclusiva ou devidamente licenciado para a {BROKER_INFO.name}, sendo vedada sua reprodução não autorizada.
            </p>
            <h4 className="font-serif text-base font-bold text-white pt-2">3. Intermediação e Responsabilidade</h4>
            <p>
              A concretização de qualquer negócio imobiliário está condicionada à validação documental, certidões atualizadas e celebração de instrumento particular ou público competente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
