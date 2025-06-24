
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">começar</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos agentes de IA 
            podem revolucionar seu negócio hoje mesmo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <span className="mr-3">📞</span>
                  Fale Conosco
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Nossa equipe está pronta para ajudar você a encontrar a solução perfeita.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-3">📧</span>
                  contato@keynoaai.com
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-3">📱</span>
                  +55 (11) 99999-9999
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-3">💬</span>
                  Chat ao vivo 24/7
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <span className="mr-3">🎁</span>
                  Teste Grátis
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Experimente nossos agentes por 30 dias sem compromisso.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full gradient-purple text-white border-0 hover:opacity-90 transition-opacity">
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Envie sua Mensagem</CardTitle>
              <CardDescription className="text-gray-400">
                Preencha o formulário e entraremos em contato em até 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Seu nome" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Seu email" 
                  type="email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <Input 
                placeholder="Empresa" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Textarea 
                placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                rows={4}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full gradient-pink text-white border-0 hover:opacity-90 transition-opacity">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
