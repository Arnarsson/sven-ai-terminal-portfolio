'use client';

import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m SVEN, your AI consultant. How can I help you transform your business with AI today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulated response for now
    setTimeout(() => {
      const assistantMessage: Message = {
        role: 'assistant',
        content: 'Thank you for your message. Our AI chat functionality is currently being configured. Please contact us at hej@sven-ai.dk for immediate assistance.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-black/95 rounded-lg border border-matrix-primary/20 shadow-2xl overflow-hidden max-w-2xl mx-auto">
      <div className="bg-matrix-primary/10 px-4 py-3 border-b border-matrix-primary/20">
        <h3 className="text-matrix-primary font-mono flex items-center gap-2">
          <Bot className="w-5 h-5" />
          SVEN AI Assistant
        </h3>
      </div>
      
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`flex gap-3 max-w-[80%] ${
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.role === 'user' 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'bg-matrix-primary/20 text-matrix-primary'
              }`}>
                {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div
                className={`rounded-lg px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-cyan-500/10 text-cyan-100 border border-cyan-500/20'
                    : 'bg-matrix-primary/10 text-gray-200 border border-matrix-primary/20'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-matrix-primary/20 flex items-center justify-center">
              <Bot size={16} className="text-matrix-primary animate-pulse" />
            </div>
            <div className="bg-matrix-primary/10 rounded-lg px-4 py-2 border border-matrix-primary/20">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-matrix-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-matrix-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-matrix-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-matrix-primary/20">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about AI solutions for your business..."
            className="flex-1 bg-black/50 border border-matrix-primary/20 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-matrix-primary/50 font-mono text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-matrix-primary/20 hover:bg-matrix-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-matrix-primary rounded-lg px-4 py-2 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}