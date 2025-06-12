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
  testimonialsSection: {
    title: string;
    testimonials: {
      author: {
        name: string;
        handle: string;
        avatar: string;
      };
      text: string;
      href?: string;
    }[];
  };
  footer: {
    product: string;
    company: string;
    resources: string;
    social: string;
    copyright: string;
    links: {
      features: string;
      pricing: string;
      testimonials: string;
      faqs: string;
      about: string;
      terms: string;
      blog: string;
      changelog: string;
      help: string;
      facebook: string;
      instagram: string;
      linkedin: string;
    };
  };
  auth: {
    quote: {
      text: string;
      author: string;
    };
    signIn: {
      title: string;
      description: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      signInButton: string;
      noAccount: string;
      registerLink: string;
      socialLoginLabel: string;
    };
    signUp: {
      title: string;
      description: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      signUpButton: string;
      alreadyHaveAccount: string;
      signInLink: string;
      socialLoginLabel: string;
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
    testimonialsSection: {
      title: "Testimonials",
      testimonials: [
        {
          author: {
            name: "Logistics Manager",
            handle: "@fernando_fleet",
            avatar:
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
          },
          text: "Reduced our fuel costs by 28% and improved delivery times by 35% in the first month. The AI routing is game-changing!",
          href: "#fuel-savings-case",
        },
        {
          author: {
            name: "E-commerce Director",
            handle: "@luiza_deliveries",
            avatar:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
          },
          text: "Last-mile optimization cut our delivery complaints by 60%. Drivers love the real-time traffic adjustments.",
          href: "#last-mile-case",
        },
        {
          author: {
            name: "Supply Chain VP",
            handle: "@carlos_logistics",
            avatar:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
          },
          text: "Dynamic rerouting during floods saved us $120k in potential losses. The weather integration is brilliant.",
          href: "#weather-case",
        },
        {
          author: {
            name: "Delivery Startup CEO",
            handle: "@ana_fastdelivery",
            avatar:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
          },
          text: "Scaled from 50 to 300 daily deliveries without adding vehicles. The density optimization is magical!",
          href: "#scaling-case",
        },
      ],
    },
    footer: {
      product: "Product",
      company: "Company",
      resources: "Resources",
      social: "Social Links",
      copyright: `© ${new Date().getFullYear()} Nodal. All rights reserved.`,
      links: {
        features: "Features",
        pricing: "Pricing",
        testimonials: "Testimonials",
        faqs: "FAQs",
        about: "About Us",
        terms: "Terms of Services",
        blog: "Blog",
        changelog: "Changelog",
        help: "Help",
        facebook: "Facebook",
        instagram: "Instagram",
        linkedin: "LinkedIn",
      },
    },
    auth: {
      quote: {
        text: "Transportation is the lifeblood of progress, connecting people, places, and possibilities.",
        author: "Anonymous",
      },
      signIn: {
        title: "Welcome Back",
        description: "Log in to your account to continue",
        emailLabel: "Email Address",
        emailPlaceholder: "email@example.com",
        passwordLabel: "Password",
        signInButton: "Sign In",
        noAccount: "Don't have an account?",
        registerLink: "Create one",
        socialLoginLabel: "Or sign in with",
      },
      signUp: {
        title: "Join Nodal",
        description: "Create your account to get started",
        nameLabel: "Full Name",
        namePlaceholder: "John Doe",
        emailLabel: "Email Address",
        emailPlaceholder: "email@example.com",
        passwordLabel: "Password",
        signUpButton: "Sign Up",
        alreadyHaveAccount: "Already have an account?",
        signInLink: "Sign in",
        socialLoginLabel: "Or sign up with",
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
    testimonialsSection: {
      title: "Depoimentos",
      testimonials: [
        {
          author: {
            name: "Gerente de Logística",
            handle: "@fernando_fleet",
            avatar:
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
          },
          text: "Reduzimos nossos custos com combustível em 28% e melhoramos os prazos de entrega em 35% no primeiro mês. O roteamento por IA é revolucionário!",
          href: "#fuel-savings-case",
        },
        {
          author: {
            name: "Diretora de E-commerce",
            handle: "@luiza_deliveries",
            avatar:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
          },
          text: "A otimização da última milha reduziu nossas reclamações de entregas em 60%. Os motoristas adoram os ajustes de tráfego em tempo real.",
          href: "#last-mile-case",
        },
        {
          author: {
            name: "VP de Cadeia de Suprimentos",
            handle: "@carlos_logistics",
            avatar:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
          },
          text: "O redirecionamento dinâmico durante enchentes nos salvou $120k em perdas potenciais. A integração com dados meteorológicos é brilhante.",
          href: "#weather-case",
        },
        {
          author: {
            name: "CEO de Startup de Entregas",
            handle: "@ana_fastdelivery",
            avatar:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
          },
          text: "Escalamos de 50 para 300 entregas diárias sem adicionar veículos. A otimização de densidade é mágica!",
          href: "#scaling-case",
        },
      ],
    },
    footer: {
      product: "Produto",
      company: "Empresa",
      resources: "Recursos",
      social: "Redes Sociais",
      copyright: `© ${new Date().getFullYear()} Nodal. Todos os direitos reservados.`,
      links: {
        features: "Funcionalidades",
        pricing: "Preços",
        testimonials: "Depoimentos",
        faqs: "Perguntas Frequentes",
        about: "Sobre Nós",
        terms: "Termos de Serviço",
        blog: "Blog",
        changelog: "Registro de Alterações",
        help: "Ajuda",
        facebook: "Facebook",
        instagram: "Instagram",
        linkedin: "LinkedIn",
      },
    },
    auth: {
      quote: {
        text: "O transporte é a veia da evolução, conectando pessoas, lugares e possibilidades.",
        author: "Anônimo",
      },
      signIn: {
        title: "Bem-vindo de Volta",
        description: "Faça login na sua conta para continuar",
        emailLabel: "Endereço de E-mail",
        emailPlaceholder: "email@exemplo.com",
        passwordLabel: "Senha",
        signInButton: "Entrar",
        noAccount: "Não tem uma conta?",
        registerLink: "Crie uma",
        socialLoginLabel: "Ou entre com",
      },
      signUp: {
        title: "Junte-se ao Nodal",
        description: "Crie sua conta para começar",
        nameLabel: "Nome Completo",
        namePlaceholder: "João da Silva",
        emailLabel: "Endereço de E-mail",
        emailPlaceholder: "email@exemplo.com",
        passwordLabel: "Senha",
        signUpButton: "Registrar",
        alreadyHaveAccount: "Já tem uma conta?",
        signInLink: "Entrar",
        socialLoginLabel: "Ou registre-se com",
      },
    },
  },
};
