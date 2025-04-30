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
};

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      login: "Sign In",
      register: "Create Account",
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
  },
};
