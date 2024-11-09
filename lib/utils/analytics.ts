type EventName = 
  | 'page_view'
  | 'book_started'
  | 'book_completed'
  | 'contact_form_submitted'
  | 'error_occurred';

type EventProperties = Record<string, string | number | boolean>;

export const analytics = {
  trackEvent: (name: EventName, properties?: EventProperties) => {
    if (typeof window === 'undefined') return;

    // Track with Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, properties);
    }

    // Track with custom analytics
    try {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, properties }),
      });
    } catch (error) {
      console.error('Analytics Error:', error);
    }
  },

  trackError: (error: Error, componentStack?: string) => {
    analytics.trackEvent('error_occurred', {
      error_message: error.message,
      error_stack: error.stack,
      component_stack: componentStack,
      url: window.location.href,
    });
  },

  pageView: (url: string) => {
    analytics.trackEvent('page_view', {
      page_url: url,
      page_title: document.title,
      referrer: document.referrer,
    });
  },
};