'use client';

import React from 'react';
import { BarChart3, TrendingUp, Users, Clock } from 'lucide-react';

export default function AnalyticsDashboard() {
  // Placeholder data
  const stats = [
    { label: 'Active Users', value: '1,234', icon: Users, change: '+12%' },
    { label: 'Avg Response Time', value: '1.2s', icon: Clock, change: '-8%' },
    { label: 'AI Queries', value: '5,678', icon: BarChart3, change: '+24%' },
    { label: 'Success Rate', value: '98.5%', icon: TrendingUp, change: '+2%' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-mono text-matrix-primary mb-4">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-black/50 border border-matrix-primary/20 rounded-lg p-4 hover:border-matrix-primary/40 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <stat.icon className="w-5 h-5 text-matrix-primary" />
              <span className={`text-xs font-mono ${
                stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-mono text-gray-100 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-black/50 border border-matrix-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-mono text-matrix-primary mb-4">Performance Metrics</h3>
        <div className="h-64 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 mx-auto mb-2 text-matrix-primary/50" />
            <p className="font-mono text-sm">Chart visualization coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}