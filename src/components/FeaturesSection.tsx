
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Implementação Rápida",
      description: "Configure seu agente de IA em minutos, não em semanas. Interface intuitiva e processo simplificado."
    },
    {
      icon: "🎯",
      title: "Personalização Total",
      description: "Adapte completamente o comportamento do agente às necessidades específicas do seu negócio."
    },
    {
      icon: "📊",
      title: "Analytics Avançados",
      description: "Monitore performance, métricas de sucesso e ROI com dashboards detalhados em tempo real."
    },
    {
      icon: "🔐",
      title: "Segurança Máxima",
      description: "Seus dados protegidos com criptografia de ponta e compliance com LGPD e regulamentações internacionais."
    },
    {
      icon: "🌐",
      title: "Integração Universal",
      description: "Conecte com qualquer sistema: CRM, ERP, WhatsApp, Telegram, email e muito mais."
    },
    {
      icon: "⚡",
      title: "Escalabilidade Ilimitada",
      description: "Cresça sem limites. Nossa infraestrutura suporta desde startups até grandes corporações."
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que escolher nossos <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Agentes IA</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologia de ponta, facilidade de uso e resultados comprovados. 
            Tudo o que você precisa para transformar seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
