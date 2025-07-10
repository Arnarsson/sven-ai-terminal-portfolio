'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Zap, Database, Cpu } from 'lucide-react';

interface DataPoint {
  id: string;
  type: 'query' | 'response' | 'system' | 'analytics';
  message: string;
  timestamp: Date;
  icon: React.ElementType;
}

export default function LiveDataFeed() {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Simulate live data feed
    const messages = [
      { type: 'query' as const, message: 'User requested AI strategy consultation', icon: Zap },
      { type: 'response' as const, message: 'Generated personalized AI roadmap', icon: Activity },
      { type: 'system' as const, message: 'System performance optimal', icon: Cpu },
      { type: 'analytics' as const, message: 'New visitor from Copenhagen', icon: Database },
      { type: 'query' as const, message: 'Chatbot interaction initiated', icon: Zap },
      { type: 'response' as const, message: 'Provided automation recommendations', icon: Activity },
    ];

    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const newDataPoint: DataPoint = {
        id: Date.now().toString(),
        ...randomMessage,
        timestamp: new Date(),
      };

      setDataPoints(prev => {
        const updated = [newDataPoint, ...prev];
        return updated.slice(0, 10); // Keep only last 10 items
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getTypeColor = (type: DataPoint['type']) => {
    switch (type) {
      case 'query': return 'text-cyan-400 border-cyan-400/20';
      case 'response': return 'text-green-400 border-green-400/20';
      case 'system': return 'text-yellow-400 border-yellow-400/20';
      case 'analytics': return 'text-purple-400 border-purple-400/20';
    }
  };

  return (
    <div className="bg-black/50 border border-matrix-primary/20 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-mono text-matrix-primary">Live Data Feed</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-500 font-mono">Live</span>
        </div>
      </div>
      
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {dataPoints.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Activity className="w-8 h-8 mx-auto mb-2 animate-pulse" />
            <p className="text-sm font-mono">Waiting for data...</p>
          </div>
        ) : (
          dataPoints.map((point) => (
            <div
              key={point.id}
              className={`flex items-start gap-3 p-3 rounded border ${getTypeColor(point.type)} bg-black/30 animate-fade-in`}
            >
              <point.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-mono text-gray-200 break-words">{point.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {point.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}