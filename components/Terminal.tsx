'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{input: string, output: React.ReactNode}>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: () => (
      <div>
        <div>Available commands:</div>
        <div className="mt-2">
          <div><span className="text-yellow-400">about</span> - Learn about me and my expertise</div>
          <div><span className="text-yellow-400">skills</span> - View my technical skills</div>
          <div><span className="text-yellow-400">projects</span> - Browse my portfolio projects</div>
          <div><span className="text-yellow-400">experience</span> - View my work experience</div>
          <div><span className="text-yellow-400">contact</span> - Get my contact information</div>
          <div><span className="text-yellow-400">resume</span> - Download my resume</div>
          <div><span className="text-yellow-400">clear</span> - Clear the terminal</div>
        </div>
      </div>
    ),
    about: () => (
      <div>
        <div className="text-cyan-400 mb-2">SVEN ARNARSSON - AI CONSULTANT & BUSINESS AUTOMATION EXPERT</div>
        <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
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
      <div>
        <div className="text-cyan-400 mb-2">TECHNICAL EXPERTISE</div>
        <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
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
      <div>
        <div className="text-cyan-400 mb-2">FEATURED PROJECTS</div>
        <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        <div className="mt-2 space-y-3">
          <div>
            <div className="text-yellow-400">[1] VMS Group Automation</div>
            <div className="ml-4">• Result: 2,281% ROI achieved</div>
            <div className="ml-4">• Tech: GPT-4, Python, API Integration</div>
          </div>
          <div>
            <div className="text-yellow-400">[2] E-commerce AI Assistant</div>
            <div className="ml-4">• Result: 67% reduction in support tickets</div>
            <div className="ml-4">• Tech: Natural Language Processing, React</div>
          </div>
          <div>
            <div className="text-yellow-400">[3] Manufacturing Process Optimizer</div>
            <div className="ml-4">• Result: 42% efficiency improvement</div>
            <div className="ml-4">• Tech: Machine Learning, IoT Sensors</div>
          </div>
        </div>
      </div>
    ),
    experience: () => (
      <div>
        <div className="text-cyan-400 mb-2">PROFESSIONAL EXPERIENCE</div>
        <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
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
      <div>
        <div className="text-cyan-400 mb-2">CONTACT INFORMATION</div>
        <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        <div className="mt-2">
          <div>📧 Email: <a href="mailto:svenarnarsson@gmail.com" className="text-blue-400 hover:underline">svenarnarsson@gmail.com</a></div>
          <div>📱 Phone: <span className="text-blue-400">+45 28 49 39 11</span></div>
          <div>💼 LinkedIn: <a href="https://linkedin.com/in/svenarnarsson" className="text-blue-400 hover:underline">linkedin.com/in/svenarnarsson</a></div>
          <div>🌐 Website: <a href="https://harka.dk" className="text-blue-400 hover:underline">harka.dk</a></div>
          <div>📍 Location: Copenhagen, Denmark</div>
        </div>
      </div>
    ),
    resume: () => (
      <div>
        <div className="text-yellow-400">Downloading resume...</div>
        <div className="mt-2">Resume download initiated. Check your downloads folder.</div>
        <div className="text-gray-500 text-sm mt-1">(In a real implementation, this would trigger a file download)</div>
      </div>
    ),
    clear: () => {
      setHistory([]);
      return null;
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    if (trimmedCmd in commands) {
      output = commands[trimmedCmd as keyof typeof commands]();
    } else if (trimmedCmd === '') {
      output = null;
    } else {
      output = (
        <div>
          <span className="text-red-400">bash: {cmd}: command not found</span>
          <div className="text-gray-500 mt-1">Type \'help\' for available commands</div>
        </div>
      );
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

  return (
    <div className="h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[600px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm">sven@harka:~</div>
          <div className="w-16"></div>
        </div>
        
        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="h-full p-4 overflow-y-auto font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Welcome Message */}
          <div className="mb-4">
            <pre className="text-green-400 text-xs">
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
            <div className="text-gray-400 mt-2">Type <span className="text-yellow-400">\'help\'</span> to see available commands</div>
          </div>
          
          {/* Command History */}
          {history.map((entry, index) => (
            <div key={index} className="mb-3">
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
              className="flex-1 bg-transparent outline-none text-gray-200"
              spellCheck={false}
              autoComplete="off"
            />
            <span className="animate-blink">▋</span>
          </form>
        </div>
      </div>
    </div>
  );
}