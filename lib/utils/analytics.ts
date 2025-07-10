// Analytics utility functions
export const trackCommand = (command: string) => {
  // In a real implementation, this would send data to analytics service
  if (typeof window !== 'undefined') {
    console.log(`Command tracked: ${command}`);
  }
};

export const trackPageView = () => {
  // Track page views
  if (typeof window !== 'undefined') {
    console.log('Page view tracked');
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Track custom events
  if (typeof window !== 'undefined') {
    console.log('Event tracked:', eventName, properties);
  }
};