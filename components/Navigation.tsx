'use client';

import React from 'react';
import { Terminal, Code, BarChart3, MessageSquare } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-matrix-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-matrix-primary" />
              <span className="text-xl font-mono text-matrix-primary">SVEN AI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-400 hover:text-matrix-primary transition-colors font-mono text-sm">
                <span className="text-matrix-primary">$</span> about
              </a>
              <a href="#services" className="text-gray-400 hover:text-matrix-primary transition-colors font-mono text-sm">
                <span className="text-matrix-primary">$</span> services
              </a>
              <a href="#analytics" className="text-gray-400 hover:text-matrix-primary transition-colors font-mono text-sm">
                <span className="text-matrix-primary">$</span> analytics
              </a>
              <a href="#contact" className="text-gray-400 hover:text-matrix-primary transition-colors font-mono text-sm">
                <span className="text-matrix-primary">$</span> contact
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-gray-500">
              <div className="w-2 h-2 bg-matrix-primary rounded-full animate-pulse"></div>
              <span>System Online</span>
            </div>
            <button className="md:hidden text-matrix-primary">
              <Code className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}