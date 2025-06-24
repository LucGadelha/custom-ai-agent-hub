
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-purple opacity-90"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full gradient-pink opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full gradient-blue opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full gradient-orange opacity-30 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge className="mb-6 gradient-pink text-white border-0 px-4 py-2">
          🚀 Criado por KeynoaAI
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Agentes de IA
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Personalizados
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Transforme seu negócio com agentes de IA personalizados. 
          Automatize processos, melhore a experiência do cliente e aumente a eficiência.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gradient-pink text-white border-0 hover:opacity-90 transition-all hover:scale-105 px-8 py-4 text-lg">
            ✨ Criar Meu Agente
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-all px-8 py-4 text-lg">
            Ver Demonstração
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">🔒 Ambiente Seguro</p>
          <p className="text-sm text-gray-400">Sistema de agentes de IA - KeynoaAI © 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
