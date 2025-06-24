
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onDemoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDemoClick }) => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full gradient-purple flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-white">AgentesIA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-purple-300 transition-colors">Início</a>
            <a href="#agentes" className="text-white hover:text-purple-300 transition-colors">Agentes</a>
            <a href="#recursos" className="text-white hover:text-purple-300 transition-colors">Recursos</a>
            <a href="#contato" className="text-white hover:text-purple-300 transition-colors">Contato</a>
          </div>
          
          <Button 
            onClick={onDemoClick}
            className="gradient-pink text-white border-0 hover:opacity-90 transition-opacity"
          >
            Testar Demo
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
