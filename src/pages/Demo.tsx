
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Lock, Shield } from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';
import { useToast } from '@/hooks/use-toast';

const Demo = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [agentPrompt, setAgentPrompt] = useState('');
  const [agentName, setAgentName] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const { toast } = useToast();

  const handleLogin = async () => {
    if (!accessCode.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, digite o código de acesso",
        variant: "destructive",
      });
      return;
    }

    if (!webhookUrl.trim()) {
      toast({
        title: "Configuração Necessária",
        description: "Por favor, configure a URL do webhook do n8n primeiro",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Iniciando teste com código:", accessCode);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessCode: accessCode,
          action: 'getAgentPrompt'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.prompt && data.agentName) {
          setAgentPrompt(data.prompt);
          setAgentName(data.agentName);
          setIsAuthenticated(true);
          
          toast({
            title: "Acesso Liberado",
            description: `Agente ${data.agentName} carregado com sucesso!`,
          });
        } else {
          toast({
            title: "Código Inválido",
            description: "Código de acesso não encontrado ou inválido",
            variant: "destructive",
          });
        }
      } else {
        throw new Error('Falha na autenticação');
      }
    } catch (error) {
      console.error("Erro ao autenticar:", error);
      toast({
        title: "Erro de Conexão",
        description: "Não foi possível conectar ao servidor. Verifique a URL do webhook.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  if (isAuthenticated) {
    return (
      <ChatInterface 
        agentPrompt={agentPrompt} 
        agentName={agentName}
        onBack={() => setIsAuthenticated(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardHeader className="text-center pb-8">
            <div className="w-24 h-24 rounded-full gradient-pink flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            
            <CardTitle className="text-2xl font-bold mb-2">Bem-vindo</CardTitle>
            <CardDescription className="text-purple-300 text-lg font-semibold mb-4">
              Empresa
            </CardDescription>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Este é um ambiente para testar o script da IA personalizado para sua empresa.
            </p>
            
            <Badge className="gradient-purple text-white border-0 mt-4 mx-auto">
              🚀 Criado por KeynoaAI
            </Badge>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="webhook" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <Shield className="w-4 h-4 mr-2" />
                  URL do Webhook N8N
                </label>
                <Input
                  id="webhook"
                  type="url"
                  placeholder="https://seu-webhook-n8n.com/webhook/..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
              
              <div>
                <label htmlFor="accessCode" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <Lock className="w-4 h-4 mr-2" />
                  Código de Acesso
                </label>
                <Input
                  id="accessCode"
                  type="password"
                  placeholder="Digite o código fornecido"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full gradient-pink text-white border-0 hover:opacity-90 transition-opacity py-3 text-lg"
            >
              {isLoading ? "🔄 Carregando..." : "🚀 Iniciar Teste"}
            </Button>
            
            <div className="text-center pt-4">
              <div className="flex items-center justify-center text-green-400 text-sm mb-2">
                <Shield className="w-4 h-4 mr-2" />
                Ambiente Seguro
              </div>
              <p className="text-xs text-gray-500">
                Sistema de testes de IA - KeynoaAI © 2025
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Demo;
