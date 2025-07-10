'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface Command {
  input: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([
    {
      input: '',
      output: (
        <div className="text-matrix-primary">
          <pre className="text-xs mb-2">
{`   _____ _    _ ______ _   _          _____ 
  / ___| |  | |  ____| \\ | |   /\\   |_   _|
  \\___ \\ |  | | |__  |  \\| |  /  \\    | |  
   ___) | |  | |  __| | . \` | / /\\ \\   | |  
  |____/ \\__/ |____| |_|\\__| /_/  \\_\\ |_|  
                                            `}
          </pre>
          <p className="mb-2">Welcome to SVEN AI Terminal - Your Gateway to AI Excellence</p>
          <p className="text-sm text-gray-400">Type <span className="text-matrix-primary">'help'</span> for available commands</p>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => (
      <div className="space-y-1">
        <p className="text-matrix-primary mb-2">Available commands:</p>
        <p><span className="text-cyan-400">help</span> - Show this help message</p>
        <p><span className="text-cyan-400">about</span> - Learn about SVEN AI</p>
        <p><span className="text-cyan-400">services</span> - View our AI consulting services</p>
        <p><span className="text-cyan-400">contact</span> - Get in touch with us</p>
        <p><span className="text-cyan-400">chat</span> - Start AI chat assistant</p>
        <p><span className="text-cyan-400">clear</span> - Clear terminal</p>
      </div>
    ),
    about: () => (
      <div className="space-y-2">
        <p className="text-matrix-primary">SVEN AI - Specialized Virtual Enhancement Network</p>
        <p className="text-gray-300">Leading AI consulting firm helping Danish businesses transform through intelligent automation.</p>
        <p className="text-gray-400 text-sm mt-2">Founded: 2023 | Location: Copenhagen, Denmark</p>
      </div>
    ),
    services: () => (
      <div className="space-y-2">
        <p className="text-matrix-primary mb-2">Our Services:</p>
        <p className="text-cyan-400">• AI Strategy Consulting</p>
        <p className="text-cyan-400">• Custom AI Solutions</p>
        <p className="text-cyan-400">• Process Automation</p>
        <p className="text-cyan-400">• Data Analytics & Insights</p>
        <p className="text-cyan-400">• AI Training & Workshops</p>
      </div>
    ),
    contact: () => (
      <div className="space-y-2">
        <p className="text-matrix-primary">Contact Information:</p>
        <p>Email: <span className="text-cyan-400">hej@sven-ai.dk</span></p>
        <p>Phone: <span className="text-cyan-400">+45 28 49 39 11</span></p>
        <p>LinkedIn: <span className="text-cyan-400">linkedin.com/company/sven-ai</span></p>
      </div>
    ),
    chat: () => (
      <div className="text-yellow-400">
        <p>Chat interface opening... (Feature coming soon)</p>
      </div>
    ),
    clear: () => {
      setHistory([]);
      return null;
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode;

    if (trimmedCmd in commands) {
      output = commands[trimmedCmd as keyof typeof commands]();
    } else if (trimmedCmd === '') {
      output = null;
    } else {
      output = <p className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</p>;
    }

    if (trimmedCmd !== 'clear') {
      setHistory(prev => [...prev, { input: cmd, output }]);
    }
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-black/95 rounded-lg border border-matrix-primary/20 shadow-2xl overflow-hidden">
      <div className="bg-matrix-primary/10 px-4 py-2 flex items-center justify-between border-b border-matrix-primary/20">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs font-mono text-matrix-primary">sven@ai-terminal:~$</span>
      </div>
      
      <div 
        ref={terminalRef}
        className="p-4 h-96 overflow-y-auto font-mono text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((cmd, index) => (
          <div key={index} className="mb-2">
            {cmd.input && (
              <div className="flex items-center text-gray-300">
                <ChevronRight className="w-4 h-4 text-matrix-primary mr-2" />
                <span>{cmd.input}</span>
              </div>
            )}
            {cmd.output && <div className="ml-6 mt-1">{cmd.output}</div>}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center text-gray-300">
          <ChevronRight className="w-4 h-4 text-matrix-primary mr-2" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}