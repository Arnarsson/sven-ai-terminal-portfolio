'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{input: string, output: React.ReactNode}>>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);
  const [showGlitch, setShowGlitch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Boot sequence
    setTimeout(() => {
      setIsBooting(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }, 1500);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setShowGlitch(true);
        setTimeout(() => setShowGlitch(false), 200);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const allCommands = Object.keys(commands);
      const matches = allCommands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        const output = (
          <div className="grid grid-cols-3 gap-2">
            {matches.map(cmd => (
              <span key={cmd} className="text-cyan-400">{cmd}</span>
            ))}
          </div>
        );
        setHistory(prev => [...prev, { input: '', output }]);
      }
    }
  };

  const commands = {
    help: () => (
      <div className="animate-fadeIn">
        <div className="text-cyan-400 mb-2 text-glow">Available commands:</div>
        <div className="grid grid-cols-2 gap-x-8">
          <div>
            <div className="text-gray-500 mb-1">Portfolio:</div>
            <div><span className="text-yellow-400">about</span> - About me</div>
            <div><span className="text-yellow-400">skills</span> - Technical skills</div>
            <div><span className="text-yellow-400">projects</span> - Portfolio projects</div>
            <div><span className="text-yellow-400">experience</span> - Work history</div>
            <div><span className="text-yellow-400">contact</span> - Contact info</div>
            <div><span className="text-yellow-400">resume</span> - Download resume</div>
            <div><span className="text-yellow-400">github</span> - GitHub profile</div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">System:</div>
            <div><span className="text-yellow-400">help</span> - This help menu</div>
            <div><span className="text-yellow-400">clear</span> - Clear terminal</div>
            <div><span className="text-yellow-400">date</span> - Current date/time</div>
            <div><span className="text-yellow-400">whoami</span> - Current user</div>
            <div><span className="text-yellow-400">pwd</span> - Current directory</div>
            <div><span className="text-yellow-400">ls</span> - List files</div>
            <div><span className="text-yellow-400">echo [text]</span> - Echo text</div>
            <div><span className="text-yellow-400">matrix</span> - Enter the Matrix</div>
            <div><span className="text-yellow-400">hack</span> - "Hack" the system</div>
          </div>
        </div>
        <div className="mt-3 text-gray-500 text-sm">
          💡 Tips: Use ↑/↓ arrows for command history, Tab for autocomplete
        </div>
      </div>
    ),
    about: () => (
      <div className="animate-fadeIn">
        <div className="text-cyan-400 mb-2 animate-text-shadow-pulse">SVEN ARNARSSON - AI CONSULTANT & BUSINESS AUTOMATION EXPERT</div>
        <div className="text-green-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        <div className="mt-2">
          <div>Transforming Danish businesses through intelligent automation.</div>
          <div className="mt-2">• 48-hour implementation guarantee</div>
          <div>• 300-2,281% typical ROI</div>
          <div>• 100% success rate</div>
          <div>• Founded HARKA.dk in 2023</div>
        </div>
      </div>
    ),
    skills: () => (
      <div className="animate-fadeIn">
        <div className="text-cyan-400 mb-2 animate-text-shadow-pulse">TECHNICAL EXPERTISE</div>
        <div className="text-green-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        <div className="mt-2 grid grid-cols-2 gap-x-8">
          <div>
            <div className="text-yellow-400 mb-1">AI & Machine Learning:</div>
            <div>• OpenAI GPT Integration</div>
            <div>• Custom AI Solutions</div>
            <div>• Process Automation</div>
            <div>• Predictive Analytics</div>
          </div>
          <div>
            <div className="text-yellow-400 mb-1">Business Solutions:</div>
            <div>• Workflow Automation</div>
            <div>• Data Analytics</div>
            <div>• CRM Integration</div>
            <div>• Performance Optimization</div>
          </div>
        </div>
      </div>
    ),
    projects: () => (
      <div className="animate-fadeIn">
        <div className="text-cyan-400 mb-2 animate-text-shadow-pulse">FEATURED PROJECTS</div>
        <div className="text-green-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        <div className="mt-2 space-y-3">
          <div className="hover:translate-x-2 transition-transform">
            <div className="text-yellow-400">[1] VMS Group Automation</div>
            <div className="ml-4">• Result: 2,281% ROI achieved</div>
            <div className="ml-4">• Tech: GPT-4, Python, API Integration</div>
          </div>
          <div className="hover:translate-x-2 transition-transform">
            <div className="text-yellow-400">[2] E-commerce AI Assistant</div>
            <div className="ml-4">• Result: 67% reduction in support tickets</div>
            <div className="ml-4">• Tech: Natural Language Processing, React</div>
          </div>
          <div className="hover:translate-x-2 transition-transform">
            <div className="text-yellow-400">[3] Manufacturing Process Optimizer</div>
            <div className="ml-4">• Result: 42% efficiency improvement</div>
            <div className="ml-4">• Tech: Machine Learning, IoT Sensors</div>
          </div>
        </div>
      </div>
    ),
    experience: () => (
      <div className="animate-fadeIn">
        <div className="text-cyan-400 mb-2 animate-text-shadow-pulse">PROFESSIONAL EXPERIENCE</div>
        <div className="text-green-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        <div className="mt-2 space-y-3">
          <div>
            <div className="text-yellow-400">Founder & Lead AI Consultant - HARKA.dk</div>
            <div className="text-gray-500">2023 - Present | Copenhagen, Denmark</div>
            <div className="mt-1">• Delivered 50+ AI automation projects</div>
            <div>• Maintained 100% client success rate</div>
            <div>• Pioneered 48-hour delivery methodology</div>
          </div>
          <div>
            <div className="text-yellow-400">Senior Solutions Architect - TechCorp DK</div>
            <div className="text-gray-500">2020 - 2023 | Copenhagen, Denmark</div>
            <div className="mt-1">• Led digital transformation initiatives</div>
            <div>• Architected enterprise AI solutions</div>
          </div>
        </div>
      </div>
    ),
    contact: () => (
      <div className="animate-fadeIn">
        <div className="text-cyan-400 mb-2 animate-text-shadow-pulse">CONTACT INFORMATION</div>
        <div className="text-green-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        <div className="mt-2 space-y-1">
          <div>📧 Email: <a href="mailto:svenarnarsson@gmail.com" className="text-blue-400 hover:text-glow hover:underline transition-all">svenarnarsson@gmail.com</a></div>
          <div>📱 Phone: <span className="text-blue-400">+45 28 49 39 11</span></div>
          <div>💼 LinkedIn: <a href="https://linkedin.com/in/svenarnarsson" className="text-blue-400 hover:text-glow hover:underline transition-all">linkedin.com/in/svenarnarsson</a></div>
          <div>🌐 Website: <a href="https://harka.dk" className="text-blue-400 hover:text-glow hover:underline transition-all">harka.dk</a></div>
          <div>📍 Location: Copenhagen, Denmark</div>
        </div>
      </div>
    ),
    resume: () => (
      <div className="animate-fadeIn">
        <div className="text-yellow-400">Downloading resume...</div>
        <div className="mt-2">
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-green-400 h-2 rounded-full animate-[loading_2s_ease-in-out]" style={{width: '100%'}}></div>
          </div>
        </div>
        <div className="text-gray-500 text-sm mt-2">(In a real implementation, this would trigger a file download)</div>
      </div>
    ),
    clear: () => {
      setHistory([]);
      return null;
    },
    date: () => (
      <div className="text-cyan-400">{new Date().toString()}</div>
    ),
    whoami: () => (
      <div className="text-green-400">sven - AI Consultant & Business Automation Expert</div>
    ),
    pwd: () => (
      <div className="text-blue-400">/home/sven/portfolio</div>
    ),
    ls: () => (
      <div className="grid grid-cols-3 gap-4 animate-fadeIn">
        <div className="text-blue-400 hover:text-glow cursor-pointer">projects/</div>
        <div className="text-blue-400 hover:text-glow cursor-pointer">skills/</div>
        <div className="text-blue-400 hover:text-glow cursor-pointer">experience/</div>
        <div className="text-green-400 hover:text-glow cursor-pointer">resume.pdf</div>
        <div className="text-green-400 hover:text-glow cursor-pointer">portfolio.json</div>
        <div className="text-yellow-400 hover:text-glow cursor-pointer">README.md</div>
      </div>
    ),
    echo: (args: string) => (
      <div className="text-gray-300">{args || ''}</div>
    ),
    'sudo': () => (
      <div className="text-red-400 animate-glitch">Nice try! But you don't have sudo privileges here 😉</div>
    ),
    matrix: () => {
      const chars = '01';
      const matrix = Array(15).fill(null).map(() => 
        Array(80).fill(null).map(() => 
          chars[Math.floor(Math.random() * chars.length)]
        ).join('')
      ).join('\n');
      return (
        <div className="animate-fadeIn">
          <pre className="text-green-400 text-xs animate-text-shadow-pulse">{matrix}</pre>
          <div className="mt-2 text-green-400">Wake up, Neo... The Matrix has you...</div>
        </div>
      );
    },
    github: () => (
      <div className="animate-fadeIn">
        <div>Opening GitHub profile...</div>
        <div className="mt-2">
          <a href="https://github.com/svenarnarsson" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-glow hover:underline transition-all">
            github.com/svenarnarsson
          </a>
        </div>
      </div>
    ),
    hack: () => {
      const hackingText = [
        'Initializing hack sequence...',
        'Bypassing firewall...',
        'Cracking encryption...',
        'Accessing mainframe...',
        'Downloading data...',
        'HACK COMPLETE! (Just kidding 😄)'
      ];
      
      return (
        <div className="space-y-1">
          {hackingText.map((text, i) => (
            <div 
              key={i} 
              className="text-green-400 animate-fadeIn"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {text}
            </div>
          ))}
        </div>
      );
    }
  };

  const handleCommand = (cmd: string) => {
    const parts = cmd.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');
    let output: React.ReactNode = null;

    if (command === 'echo') {
      output = commands.echo(args);
    } else if (command in commands && command !== 'echo') {
      output = commands[command as keyof typeof commands]();
    } else if (command === '') {
      output = null;
    } else {
      output = (
        <div>
          <span className="text-red-400">bash: {command}: command not found</span>
          <div className="text-gray-500 mt-1">Type <span className="text-yellow-400">'help'</span> for available commands</div>
        </div>
      );
    }

    if (command !== 'clear' && cmd.trim() !== '') {
      setHistory(prev => [...prev, { input: cmd, output }]);
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
    }
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  if (isBooting) {
    return (
      <div className="h-screen flex items-center justify-center p-4 bg-black">
        <div className="text-center animate-terminal-boot">
          <pre className="text-green-400 text-xs mb-4 animate-text-shadow-pulse">
{`
 ▄▄▄▄    ▒█████   ▒█████  ▄▄▄█████▓ ██▓ ███▄    █   ▄████ 
▓█████▄ ▒██▒  ██▒▒██▒  ██▒▓  ██▒ ▓▒▓██▒ ██ ▀█   █  ██▒ ▀█▒
▒██▒ ▄██▒██░  ██▒▒██░  ██▒▒ ▓██░ ▒░▒██▒▓██  ▀█ ██▒▒██░▄▄▄░
▒██░█▀  ▒██   ██░▒██   ██░░ ▓██▓ ░ ░██░▓██▒  ▐▌██▒░▓█  ██▓
░▓█  ▀█▓░ ████▓▒░░ ████▓▒░  ▒██▒ ░ ░██░▒██░   ▓██░░▒▓███▀▒
░▒▓███▀▒░ ▒░▒░▒░ ░ ▒░▒░▒░   ▒ ░░   ░▓  ░ ▒░   ▒ ▒  ░▒   ▒ 
▒░▒   ░   ░ ▒ ▒░   ░ ▒ ▒░     ░     ▒ ░░ ░░   ░ ▒░  ░   ░ 
 ░    ░ ░ ░ ░ ▒  ░ ░ ░ ▒    ░       ▒ ░   ░   ░ ░ ░ ░   ░ 
 ░          ░ ░      ░ ░            ░           ░       ░   
      ░                                                     
`}
          </pre>
          <div className="text-green-400 animate-pulse">SYSTEM INITIALIZING...</div>
          <div className="mt-4 flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center p-4 bg-black relative overflow-hidden">
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {Array(50).fill(null).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>

      <div className={`w-full max-w-4xl h-[600px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden terminal-glow relative terminal-crt ${showGlitch ? 'animate-glitch' : ''}`}>
        {/* Scanline effect */}
        <div className="terminal-scanline"></div>
        
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:brightness-125 transition-all cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-125 transition-all cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:brightness-125 transition-all cursor-pointer"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono">sven@harka:~</div>
          <div className="text-xs text-gray-500 font-mono">{new Date().toLocaleTimeString()}</div>
        </div>
        
        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="h-full p-4 overflow-y-auto font-mono text-sm relative z-10"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Welcome Message */}
          <div className="mb-4 animate-fadeIn">
            <pre className="text-green-400 text-xs animate-text-shadow-pulse">
{`
███████╗██╗   ██╗███████╗███╗   ██╗     █████╗ ██╗
██╔════╝██║   ██║██╔════╝████╗  ██║    ██╔══██╗██║
███████╗██║   ██║█████╗  ██╔██╗ ██║    ███████║██║
╚════██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║    ██╔══██║██║
███████║ ╚████╔╝ ███████╗██║ ╚████║    ██║  ██║██║
╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝
`}
            </pre>
            <div className="text-green-400 mt-2">Welcome to SVEN AI Terminal v4.0.0</div>
            <div className="text-gray-400">AI Consulting & Business Automation Expert</div>
            <div className="text-gray-400 mt-2">Type <span className="text-yellow-400 text-glow">'help'</span> to see available commands</div>
          </div>
          
          {/* Command History */}
          {history.map((entry, index) => (
            <div key={index} className="mb-3 animate-fadeIn">
              {entry.input && (
                <div className="flex items-start">
                  <span className="text-green-400 mr-2">sven@harka:~$</span>
                  <span className="text-gray-200">{entry.input}</span>
                </div>
              )}
              {entry.output && <div className="mt-1 text-gray-300">{entry.output}</div>}
            </div>
          ))}
          
          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-start">
            <span className="text-green-400 mr-2">sven@harka:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-gray-200"
              spellCheck={false}
              autoComplete="off"
            />
            <span className="animate-blink text-green-400">▋</span>
          </form>
        </div>
      </div>
    </div>
  );
}