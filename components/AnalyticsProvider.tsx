'use client';

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Placeholder for analytics tracking
    console.log('Analytics Event:', eventName, properties);
    
    // TODO: Implement actual analytics tracking with Supabase
    // This would send events to your analytics database
  };

  const trackPageView = (pageName: string) => {
    console.log('Page View:', pageName);
    
    // TODO: Implement actual page view tracking
  };

  useEffect(() => {
    // Track initial page view
    trackPageView('Home');
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};