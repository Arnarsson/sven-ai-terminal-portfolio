export interface Command {
  name: string;
  description: string;
  category: 'portfolio' | 'system' | 'fun';
  action: (args?: string) => React.ReactNode;
}

export interface TerminalHistory {
  input: string;
  output: React.ReactNode;
  timestamp: Date;
}

export interface TerminalTheme {
  background: string;
  foreground: string;
  prompt: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}

export type CommandRegistry = Record<string, () => React.ReactNode | ((args: string) => React.ReactNode)>;