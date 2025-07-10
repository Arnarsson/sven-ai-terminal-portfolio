'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="shell">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <span className="sven">[SVEN</span>
          <span className="divider"> // </span>
          <span className="ai">AI]_</span>
        </div>
        
        <nav className="nav-links">
          <a href="#socials">Socials</a>
          <span>·</span>
          <a href="#blog">Blog</a>
          <span>·</span>
          <a href="#games">Games</a>
          <span>·</span>
          <a href="#tools">Tools</a>
          <span>·</span>
          <a href="#help">Need Help?</a>
        </nav>
        
        <div className="status-cluster">
          <div className="status-item">
            <span>👥</span>
            <span>149</span>
          </div>
          <div className="status-item">
            <span>🟢</span>
            <span>1</span>
          </div>
          <div className="status-item">
            <span>⏰</span>
            <span>{formatUptime()}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <button className="icon-button">
            <span>🚀</span>
            <span className="icon-label">Idea Machine</span>
          </button>
          <button className="icon-button">
            <span>📊</span>
            <span className="icon-label">Analytics</span>
          </button>
          <button className="icon-button">
            <span>⚙️</span>
            <span className="icon-label">Settings</span>
          </button>
        </aside>

        {/* Main Panel */}
        <main className="main-panel">
          {/* Terminal Window */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="traffic-lights">
                <div className="traffic-light red"></div>
                <div className="traffic-light yellow"></div>
                <div className="traffic-light green"></div>
              </div>
              <div className="terminal-title">Terminal</div>
            </div>
            
            <div className="terminal-body">
              <pre className="ascii-logo">
{`███████╗██╗   ██╗███████╗███╗   ██╗     █████╗ ██╗
██╔════╝██║   ██║██╔════╝████╗  ██║    ██╔══██╗██║
███████╗██║   ██║█████╗  ██╔██╗ ██║    ███████║██║
╚════██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║    ██╔══██║██║
███████║ ╚████╔╝ ███████╗██║ ╚████║    ██║  ██║██║
╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝`}
              </pre>
              
              <div className="welcome-line">Welcome to Sven AI v1.0</div>
              <div className="welcome-subtitle">I Connect Dots, Brains and Bots</div>
              <div className="help-text">Type 'help' for available commands or 'intro' for an introduction</div>
              
              <div className="error-line">sh: &lt;input&gt; : command not found</div>
              
              <div className="prompt-line">
                <span className="prompt">&gt;$</span>
                <span className="caret"></span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer Widget */}
      <div className="footer-widget">
        <div className="footer-title">POWERED BY CREATIVITY & AI</div>
        <div className="footer-subtitle">Sven Arnarsson</div>
        
        <div className="equation-pills">
          <div className="pill">
            <span className="pill-emoji">🔵</span>
            <span>Dots</span>
          </div>
          <span className="operator">+</span>
          <div className="pill">
            <span className="pill-emoji">🧠</span>
            <span>Brains</span>
          </div>
          <span className="operator">+</span>
          <div className="pill">
            <span className="pill-emoji">🤖</span>
            <span>Bots</span>
          </div>
          <span className="operator">=</span>
          <div className="pill">
            <span className="pill-emoji">📈</span>
            <span>Growth</span>
          </div>
        </div>
      </div>
    </div>
  );
}