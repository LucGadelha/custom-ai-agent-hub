
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Send, ArrowLeft, Bot, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

interface ChatInterfaceProps {
  agentPrompt: string;
  agentName: string;
  company: string;
  onBack: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ agentPrompt, agentName, company, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Sugestões de perguntas
  const suggestions = [
    "Horários de atendimento",
    "Quais são os valores?",
    "Como entrar em contato?",
    "Quais serviços oferecem?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Mensagem de boas-vindas do agente
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      content: `Olá! Sou a IA personalizada da sua empresa. Como posso ajudá-lo hoje?`,
      sender: 'agent',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [agentName]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Aqui você pode integrar com o webhook do N8n para processar a mensagem
      // Por enquanto, vou simular uma resposta baseada no prompt
      setTimeout(() => {
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: `Baseado no contexto: "${agentPrompt}" - Esta é uma resposta personalizada para sua pergunta: "${textToSend}". Como posso ajudá-lo mais especificamente?`,
          sender: 'agent',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, agentResponse]);
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar a mensagem. Tente novamente.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>
          
          <div className="text-center">
            <Badge className="gradient-purple text-white border-0 mb-2">
              🟣 Teste de Prompt
            </Badge>
            <p className="text-gray-300 text-sm">
              Empresa: <span className="text-purple-400 font-semibold">{company}</span>
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge className="gradient-purple text-white border-0">
              🟣 Teste da IA
            </Badge>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' ? 'bg-blue-600' : 'bg-purple-600'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                
                <div className={`rounded-2xl p-4 ${
                  message.sender === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-white border border-gray-700'
                }`}>
                  <p className="text-sm leading-relaxed">
                    {message.content}
                  </p>
                  <p className="text-xs opacity-70 mt-2">
                    {message.sender === 'agent' ? 'Agora' : message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-[80%]">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white rounded-full px-4 py-2 text-sm"
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-gray-900 border-t border-gray-800 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem para testar..."
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-full px-4"
              disabled={isLoading}
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputMessage.trim()}
              className="gradient-purple text-white border-0 hover:opacity-90 transition-opacity px-6 rounded-full"
            >
              ✨ Enviar
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            Interface de validação - Desenvolva seu bot agora
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
