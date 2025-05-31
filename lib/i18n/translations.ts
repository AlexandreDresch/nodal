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
  },
};
