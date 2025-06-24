
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
  const [agentData, setAgentData] = useState({ prompt: '', agentName: '', company: '' });
  const { toast } = useToast();

  // URL do webhook N8n integrado com Supabase
  const webhookUrl = 'https://nwh.hisaas.com.br/webhook/fe36e288-b07c-4f79-a79e-a9580d3c558d/chat';

  const handleLogin = async () => {
    if (!accessCode.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, digite o código de acesso",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Validando código:", accessCode);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessCode: accessCode,
          action: 'validateAccess'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.valid && data.prompt && data.agentName) {
          setAgentData({
            prompt: data.prompt,
            agentName: data.agentName,
            company: data.company || 'Empresa'
          });
          setIsAuthenticated(true);
          
          toast({
            title: "Acesso Liberado",
            description: `Bem-vindo ao teste do agente ${data.agentName}!`,
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
      console.error("Erro ao validar código:", error);
      toast({
        title: "Erro de Conexão",
        description: "Não foi possível conectar ao servidor. Tente novamente.",
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
        agentPrompt={agentData.prompt} 
        agentName={agentData.agentName}
        company={agentData.company}
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
              Teste de Agente IA
            </CardDescription>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Digite seu código de acesso para testar o agente de IA personalizado.
            </p>
            
            <Badge className="gradient-purple text-white border-0 mt-4 mx-auto">
              🚀 Criado por KeynoaAI
            </Badge>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="accessCode" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <Lock className="w-4 h-4 mr-2" />
                  Código de Acesso
                </label>
                <Input
                  id="accessCode"
                  type="password"
                  placeholder="Digite seu código de acesso"
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
              {isLoading ? "🔄 Validando..." : "🚀 Iniciar Teste"}
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
