export type Language = "pt" | "en";

export type Translations = {
  header: {
    login: string;
    register: string;
  };
  hero: {
    title: string;
    subtitle: string;
    costReduction: string;
    description: string;
    tryButton: string;
    enterprise: string;
  };
  features: {
    routing: {
      title: string;
      description: string;
    };
    monitoring: {
      title: string;
      description: string;
    };
    constraints: {
      title: string;
      description: string;
      highlight: string;
      ending: string;
    };
  };
  detailedFeatures: {
    sectionTitle: string;
    heading: string;
    description: string;
    aiRouting: {
      title: string;
      description: string;
      items: string[];
    };
    multiStop: {
      title: string;
      description: string;
      items: string[];
    };
    tracking: {
      title: string;
      description: string;
      items: string[];
    };
    ecoFriendly: {
      title: string;
      description: string;
      items: string[];
    };
  };
  pricingSection: {
    title: string;
    subtitle: string;
    tierRange: string[];
    paymentFrequency?: string;
    discount: string;
    popularDescription: string;
    tiers: {
      name: string;
      price: {
        monthly: number | string;
        yearly: number | string;
      };
      description: string;
      features: string[];
      highlighted?: boolean;
      popular?: boolean;
      cta: string;
    }[];
  };
};

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      login: "Sign In",
      register: "Get Started",
    },
    hero: {
      title: "Smarter Delivery Routes Powered by AI",
      subtitle: "Cut Costs by up to",
      costReduction: "40%",
      description:
        "Automated multi-stop route planning with real-time updates and fleet management.",
      tryButton: "Try Free (7-Day Trial)",
      enterprise: "Enterprise-grade solutions available",
    },
    features: {
      routing: {
        title: "Intelligent Routing",
        description:
          "Algorithms that calculate the most efficient route considering traffic, delivery windows, and vehicle capacity.",
      },
      monitoring: {
        title: "Dynamic Monitoring",
        description:
          "Track real-time vehicle locations and receive deviation alerts with automatic route recalculations.",
      },
      constraints: {
        title: "Custom Constraints",
        description: "The feature that makes your routes",
        highlight: "realistic and executable",
        ending: "with tailored rules.",
      },
    },
    detailedFeatures: {
      sectionTitle: "What You'll Find",
      heading: "Intelligent Routing and Dynamic Monitoring",
      description:
        "Our goal is to streamline SMB trade, making it easier and faster than ever. We are building a platform that will allow you to manage your entire supply chain in one place.",
      aiRouting: {
        title: "AI-Powered Route Optimization",
        description: "Smart algorithms to reduce delivery time and fuel costs.",
        items: [
          "Dynamic route adjustments in real-time",
          "Traffic, weather, and delivery window considerations",
          "Up to 40% reduction in operational costs",
        ],
      },
      multiStop: {
        title: "Multi-Stop Route Planning",
        description: "Optimize hundreds of stops in seconds.",
        items: [
          "Batch address processing",
          "Priority-based sequencing (e.g., perishable goods)",
          "Customizable vehicle constraints",
        ],
      },
      tracking: {
        title: "Live Driver Tracking & Analytics",
        description: "Monitor and improve fleet performance.",
        items: [
          "Real-time GPS tracking for ETA accuracy",
          "Driver behavior analytics (e.g., speed, idling)",
          "Customizable reports for KPIs",
        ],
      },
      ecoFriendly: {
        title: "Eco-Friendly Logistics",
        description: "Reduce your carbon footprint effortlessly.",
        items: [
          "Fuel-efficient route suggestions",
          "Emissions tracking and reporting",
          "Green certifications support",
        ],
      },
    },
    pricingSection: {
      title: "Simple, Transparent Pricing",
      subtitle: "No hidden fees, no surprises",
      tierRange: ["monthly", "yearly"],
      paymentFrequency: "Per month/user",
      discount: "Save 35%",
      popularDescription: "🔥 Most Popular",
      tiers: [
        {
          name: "7-Day Demo",
          price: { monthly: "Free", yearly: "Free" },
          description: "Test our AI optimization with no risk",
          features: [
            "Full platform access for 7 days",
            "Optimize up to 50 deliveries/day",
            "Basic traffic & weather adjustments",
            "Email support",
            "No credit card required",
          ],
          cta: "Start Free Trial",
        },
        {
          name: "Starter",
          price: { monthly: 49, yearly: 39 },
          description: "For independent couriers & small teams",
          features: [
            "Up to 200 deliveries/day",
            "AI-powered multi-stop routing",
            "2 driver accounts",
            "Live GPS tracking",
            "Email & chat support",
          ],
          cta: "Get Started",
        },
        {
          name: "Business",
          price: { monthly: 149, yearly: 119 },
          description: "For growing delivery businesses",
          features: [
            "Unlimited deliveries",
            "Priority AI routing (15-second updates)",
            "Up to 10 driver accounts",
            "Driver behavior analytics",
            "API integrations (basic)",
          ],
          cta: "Get Started",
          popular: true,
        },
        {
          name: "Enterprise",
          price: { monthly: "Custom", yearly: "Custom" },
          description: "For large fleets & logistics providers",
          features: [
            "Custom AI model training",
            "Unlimited vehicles & drivers",
            "Dedicated account manager",
            "24/7 phone support",
            "ERP/WMS integrations",
          ],
          cta: "Contact Sales",
          highlighted: true,
        },
      ],
    },
  },
  pt: {
    header: {
      login: "Entrar",
      register: "Criar Conta",
    },
    hero: {
      title: "Rotas de Entrega Inteligentes feitas com IA",
      subtitle: "Reduza Custos em até",
      costReduction: "40%",
      description:
        "Planejamento automatizado de rotas com múltiplas paradas, atualizações em tempo real e gerenciamento de frota.",
      tryButton: "Experimente Grátis (Teste de 7 Dias)",
      enterprise: "Soluções empresariais disponíveis",
    },
    features: {
      routing: {
        title: "Roteamento Inteligente",
        description:
          "Algoritmos que calculam a rota mais eficiente considerando tráfego, janelas de entrega e capacidade do veículo.",
      },
      monitoring: {
        title: "Monitoramento Dinâmico",
        description:
          "Acompanhe localizações de veículos em tempo real e receba alertas de desvio com recálculos automáticos de rota.",
      },
      constraints: {
        title: "Restrições Personalizadas",
        description: "O recurso que torna suas rotas",
        highlight: "realistas e executáveis",
        ending: "com regras personalizadas.",
      },
    },
    detailedFeatures: {
      sectionTitle: "O Que Você Encontrará",
      heading: "Roteamento Inteligente e Monitoramento Dinâmico",
      description:
        "Nosso objetivo é agilizar o comércio de PMEs, tornando-o mais fácil e rápido do que nunca. Estamos construindo uma plataforma que permitirá que você gerencie toda a sua cadeia de suprimentos em um só lugar.",
      aiRouting: {
        title: "Otimização de Rotas com IA",
        description:
          "Algoritmos inteligentes para reduzir o tempo de entrega e custos de combustível.",
        items: [
          "Ajustes dinâmicos de rota em tempo real",
          "Considerações de tráfego, clima e janelas de entrega",
          "Até 40% de redução nos custos operacionais",
        ],
      },
      multiStop: {
        title: "Planejamento de Rotas com Múltiplas Paradas",
        description: "Otimize centenas de paradas em segundos.",
        items: [
          "Processamento em lote de endereços",
          "Sequenciamento baseado em prioridade (ex: bens perecíveis)",
          "Restrições de veículo personalizáveis",
        ],
      },
      tracking: {
        title: "Rastreamento e Análise de Motoristas em Tempo Real",
        description: "Monitore e melhore o desempenho da frota.",
        items: [
          "Rastreamento GPS em tempo real para precisão de ETA",
          "Análise de comportamento do motorista (ex: velocidade, marcha lenta)",
          "Relatórios personalizáveis para KPIs",
        ],
      },
      ecoFriendly: {
        title: "Logística Ecológica",
        description: "Reduza sua pegada de carbono sem esforço.",
        items: [
          "Sugestões de rotas com eficiência energética",
          "Acompanhamento e relatórios de emissões",
          "Suporte a certificações verdes",
        ],
      },
    },
    pricingSection: {
      title: "Preços Simples e Transparentes",
      subtitle: "Sem taxas ocultas, sem surpresas",
      tierRange: ["Mensal", "Anual"],
      paymentFrequency: "Por mês/usuário",
      discount: "Economize 35%",
      popularDescription: "🔥 Mais Popular",
      tiers: [
        {
          name: "Teste 7 Dias",
          price: { monthly: "Grátis", yearly: "Grátis" },
          description: "Teste nossa IA sem compromisso",
          features: [
            "Acesso completo por 7 dias",
            "Até 50 entregas/dia",
            "Ajustes básicos para tráfego e clima",
            "Suporte por e-mail",
            "Sem cartão de crédito",
          ],
          cta: "Testar Grátis",
        },
        {
          name: "Inicial",
          price: { monthly: 249, yearly: 199 },
          description: "Para entregadores autônomos e pequenas equipes",
          features: [
            "Até 200 entregas/dia",
            "Rotas com múltiplas paradas via IA",
            "2 contas de motorista",
            "Rastreamento GPS ao vivo",
            "Suporte por e-mail e chat",
          ],
          cta: "Começar Agora",
        },
        {
          name: "Negócios",
          price: { monthly: 749, yearly: 599 },
          description: "Para empresas em crescimento",
          features: [
            "Entregas ilimitadas",
            "Rotas prioritárias (atualizações em 15 segundos)",
            "Até 10 motoristas",
            "Análise de comportamento de direção",
            "Integrações via API (básicas)",
          ],
          cta: "Começar Agora",
          popular: true,
        },
        {
          name: "Empresarial",
          price: { monthly: "Sob consulta", yearly: "Sob consulta" },
          description: "Para frotas grandes e operadores logísticos",
          features: [
            "Treinamento personalizado de IA",
            "Veículos e motoristas ilimitados",
            "Gerente de conta dedicado",
            "Suporte 24/7 por telefone",
            "Integração com ERP/WMS",
          ],
          cta: "Fale com Vendas",
          highlighted: true,
        },
      ],
    },
  },
};
