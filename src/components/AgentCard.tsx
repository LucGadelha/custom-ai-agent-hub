
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AgentCardProps {
  title: string;
  description: string;
  features: string[];
  gradient: string;
  icon: string;
  category: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ 
  title, 
  description, 
  features, 
  gradient, 
  icon, 
  category 
}) => {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 bg-gray-900 border-gray-800 overflow-hidden">
      <div className={`h-2 ${gradient}`}></div>
      
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 rounded-full ${gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
          <span className="text-2xl">{icon}</span>
        </div>
        
        <Badge variant="secondary" className="w-fit mx-auto mb-2 bg-gray-800 text-gray-200">
          {category}
        </Badge>
        
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-300">
              <span className="text-green-400 mr-2">✓</span>
              {feature}
            </div>
          ))}
        </div>
        
        <Button className="w-full gradient-purple text-white border-0 hover:opacity-90 transition-opacity">
          Testar Agente
        </Button>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
