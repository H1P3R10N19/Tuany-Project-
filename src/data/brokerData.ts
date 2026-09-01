import { Differentiator, Testimonial } from '../types';

export const BROKER_INFO = {
  name: 'Alto Rio Imóveis',
  fullName: 'ALTO RIO IMÓVEIS',
  brandName: 'ALTO RIO IMÓVEIS',
  creci: 'CRECI 45.890-J',
  phone: '+55 21 99876-5432',
  phoneDisplay: '(21) 99876-5432',
  whatsappRaw: '5521998765432',
  email: 'contato@altorioimoveis.com.br',
  address: 'Av. Ataulfo de Paiva, 1251 - 9º Andar, Leblon, Rio de Janeiro - RJ',
  officeHours: 'Segunda a Sexta: 08:30 às 19:30 | Sábados: 09:00 às 15:00 (Com agendamento prévio)',
  instagram: 'https://instagram.com/altorioimoveis',
  instagramHandle: '@altorioimoveis',
  facebook: 'https://facebook.com/altorioimoveis',
  linkedin: 'https://linkedin.com/company/altorioimoveis',
  portraitImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
  teamImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
  officeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  bioTitle: 'Mais do que imóveis, realizamos projetos de vida',
  bioDescription: 'A ALTO RIO IMÓVEIS oferece atendimento personalizado para quem deseja comprar, vender ou investir em imóveis. Trabalhamos com transparência, segurança e conhecimento do mercado para encontrar as melhores oportunidades para cada cliente.',
  bioSecondary: 'Especializados no segmento de alto padrão e oportunidades exclusivas de investimento, proporcionamos assessoria jurídica, mercadológica e estrutural completa. Cada cliente recebe um atendimento sigiloso, dedicado e feito sob medida.',
  stats: [
    { label: 'Volume Negociado', value: '+R$ 240M' },
    { label: 'Famílias & Investidores', value: '+620' },
    { label: 'Anos de Mercado', value: '14' },
    { label: 'Satisfação & Confiança', value: '99.8%' }
  ]
};

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 'diff-1',
    title: 'Atendimento Personalizado',
    description: 'Diagnóstico detalhado das suas preferências, estilo de vida e objetivos patrimoniais para apresentar opções que façam real sentido.',
    icon: 'UserCheck'
  },
  {
    id: 'diff-2',
    title: 'Imóveis Selecionados',
    description: 'Rigorosa curadoria arquitetônica e documental. Trabalhamos apenas com empreendimentos e residências com procedência comprovada.',
    icon: 'Sparkles'
  },
  {
    id: 'diff-3',
    title: 'Segurança nas Negociações',
    description: 'Auditoria jurídica completa de certidões, matrículas e contratos, garantindo 100% de tranquilidade e conformidade legal.',
    icon: 'ShieldCheck'
  },
  {
    id: 'diff-4',
    title: 'Conhecimento do Mercado Imobiliário',
    description: 'Inteligência de dados, precificação precisa por metro quadrado e visão estratégica de valorização em cada região.',
    icon: 'TrendingUp'
  },
  {
    id: 'diff-5',
    title: 'Suporte Durante Todo o Processo',
    description: 'Acompanhamento contínuo e dedicado: da primeira visita à entrega das chaves, financiamento bancário e registro em cartório.',
    icon: 'Handshake'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Roberto M. Silveira',
    role: 'Médico & Investidor',
    city: 'Rio de Janeiro - RJ',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'A equipe da Alto Rio Imóveis foi cirúrgica ao entender exatamente o perfil de imóvel que buscávamos na Zona Sul. Processo conduzido com sigilo absoluto e extrema transparência.',
    propertyType: 'Adquiriu Cobertura no Leblon',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dra. Carolina Albuquerque',
    role: 'Advogada Tributarista',
    city: 'Rio de Janeiro - RJ',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    quote: 'Impressionante a segurança jurídica e clareza com que a Alto Rio Imóveis conduz cada detalhe da negociação. Vendi meu imóvel anterior e comprei a nova casa com total tranquilidade.',
    propertyType: 'Adquiriu Casa em Condomínio',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Guilherme B. Fontes',
    role: 'Empresário & Family Office',
    city: 'São Paulo / Rio de Janeiro',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote: 'Excelente visão de mercado e retorno de capital. A assessoria da Alto Rio Imóveis nos lançamentos exclusivos superou qualquer outra corretora com quem já trabalhei.',
    propertyType: 'Investiu em Lançamento Frente Mar',
    rating: 5
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico Personalizado',
    description: 'Entendemos a fundo o seu momento de vida, preferências de localização, arquitetura e objetivos financeiros.'
  },
  {
    step: '02',
    title: 'Curadoria Sob Medida',
    description: 'Filtramos e apresentamos uma seleção refinada de imóveis que atendem com precisão aos seus critérios.'
  },
  {
    step: '03',
    title: 'Visitas Guiadas com Especialistas',
    description: 'Agendamos visitas privativas e pontuais, oferecendo análise técnica de infraestrutura e valor de mercado.'
  },
  {
    step: '04',
    title: 'Negociação & Fechamento Seguro',
    description: 'Conduzimos a negociação de valores, estruturação de propostas, análise documental e suporte até a escritura definitiva.'
  }
];
