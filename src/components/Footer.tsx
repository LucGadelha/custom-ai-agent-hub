
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full gradient-purple flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-white">AgentesIA</span>
            </div>
            <p className="text-gray-400">
              Transformando negócios com agentes de IA personalizados.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Agentes</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Atendimento</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Vendas</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Marketing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">RH</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Tutoriais</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 KeynoaAI. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Termos</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
