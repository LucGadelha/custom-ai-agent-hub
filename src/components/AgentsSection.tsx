
import React from 'react';
import AgentCard from './AgentCard';

const AgentsSection = () => {
  const agents = [
    {
      title: "Atendimento Virtual",
      description: "Agente especializado em atendimento ao cliente 24/7",
      features: [
        "Respostas instantâneas",
        "Integração com WhatsApp",
        "Análise de sentimentos",
        "Histórico de conversas"
      ],
      gradient: "gradient-purple",
      icon: "💬",
      category: "Atendimento"
    },
    {
      title: "Vendas Inteligentes",
      description: "Agente focado em conversão e vendas automatizadas",
      features: [
        "Qualificação de leads",
        "Propostas personalizadas",
        "Follow-up automático",
        "Relatórios de vendas"
      ],
      gradient: "gradient-pink",
      icon: "💰",
      category: "Vendas"
    },
    {
      title: "Marketing Digital",
      description: "Agente para criação de conteúdo e campanhas",
      features: [
        "Criação de posts",
        "Análise de métricas",
        "Segmentação de público",
        "Otimização de anúncios"
      ],
      gradient: "gradient-blue",
      icon: "📈",
      category: "Marketing"
    },
    {
      title: "Recursos Humanos",
      description: "Agente para gestão de pessoas e recrutamento",
      features: [
        "Triagem de currículos",
        "Agendamento de entrevistas",
        "Avaliação de candidatos",
        "Gestão de funcionários"
      ],
      gradient: "gradient-orange",
      icon: "👥",
      category: "RH"
    },
    {
      title: "Financeiro",
      description: "Agente para análise financeira e contabilidade",
      features: [
        "Análise de fluxo de caixa",
        "Relatórios financeiros",
        "Controle de gastos",
        "Previsões financeiras"
      ],
      gradient: "gradient-purple",
      icon: "💎",
      category: "Financeiro"
    },
    {
      title: "Suporte Técnico",
      description: "Agente especializado em resolução de problemas técnicos",
      features: [
        "Diagnóstico automático",
        "Base de conhecimento",
        "Escalamento inteligente",
        "Tutoriais interativos"
      ],
      gradient: "gradient-pink",
      icon: "🔧",
      category: "Suporte"
    }
  ];

  return (
    <section id="agentes" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Agentes IA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Escolha o agente perfeito para sua necessidade. Cada um é especializado em uma área específica 
            para entregar os melhores resultados para seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <AgentCard
              key={index}
              title={agent.title}
              description={agent.description}
              features={agent.features}
              gradient={agent.gradient}
              icon={agent.icon}
              category={agent.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
