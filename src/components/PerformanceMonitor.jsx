import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Check if Performance API is available
    if (typeof window !== 'undefined' && 'performance' in window) {
      
      // Monitor Core Web Vitals
      const observeWebVitals = () => {
        // First Contentful Paint (FCP)
        const paintObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              console.log('FCP:', entry.startTime);
            }
          }
        });
        
        try {
          paintObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          // Handle older browsers
          console.log('Paint observer not supported');
        }

        // Largest Contentful Paint (LCP)
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.log('LCP observer not supported');
        }

        // First Input Delay (FID) - replaced with Interaction to Next Paint (INP)
        try {
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.log('FID observer not supported');
        }

        // Layout Shift
        try {
          const clsObserver = new PerformanceObserver((list) => {
            let clsScore = 0;
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsScore += entry.value;
              }
            }
            console.log('CLS:', clsScore);
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.log('CLS observer not supported');
        }
      };

      // Load performance monitoring
      const monitorLoadTime = () => {
        window.addEventListener('load', () => {
          const loadTime = performance.now();
          console.log('Page Load Time:', loadTime, 'ms');
          
          // Send to analytics if needed (Google Analytics, etc.)
          if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(loadTime)
            });
          }
        });
      };

      observeWebVitals();
      monitorLoadTime();

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 1000) { // Log slow resources
            console.log('Slow resource:', entry.name, entry.duration, 'ms');
          }
        }
      });
      
      try {
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (e) {
        console.log('Resource observer not supported');
      }

      return () => {
        // Cleanup observers
        try {
          paintObserver?.disconnect();
          lcpObserver?.disconnect();
          fidObserver?.disconnect();
          clsObserver?.disconnect();
          resourceObserver?.disconnect();
        } catch (e) {
          // Handle cleanup errors silently
        }
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;