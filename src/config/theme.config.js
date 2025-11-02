/**
 * Theme Configuration - Midnight Cloud Engineer Design System
 * 2026 Redesign - Minimalist Professional Aesthetic
 */

export const colors = {
  // Background & Surface
  bg: {
    primary: '#0b1220',      // Deep midnight blue
    secondary: '#0f1629',    // Slightly lighter blue
    elevated: '#1a1f35',     // Card/elevated surface
    overlay: 'rgba(11, 18, 32, 0.95)', // Modal backdrop
  },
  
  // Brand Colors
  brand: {
    primary: '#6366f1',      // Royal purple (Indigo-500)
    primaryHover: '#4f46e5', // Indigo-600
    primaryLight: '#818cf8', // Indigo-400
    secondary: '#d4af37',    // Gold/Champagne
    secondaryHover: '#c19b2e',
  },
  
  // Text Colors
  text: {
    primary: '#e5e7eb',      // Off-white (gray-200)
    secondary: '#9ca3af',    // Muted gray (gray-400)
    muted: '#6b7280',        // Very muted (gray-500)
    inverse: '#0b1220',      // For light backgrounds
  },
  
  // Border & Dividers
  border: {
    default: '#1f2937',      // gray-800
    light: '#374151',        // gray-700
    accent: '#6366f1',       // Brand primary
  },
  
  // Status Colors (minimal usage)
  status: {
    success: '#10b981',      // green-500
    warning: '#f59e0b',      // amber-500
    error: '#ef4444',        // red-500
  }
};

export const typography = {
  fontFamily: {
    heading: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },
  
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
  
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
  
  maxWidth: {
    prose: '75ch',
    container: '1280px',
  }
};

export const spacing = {
  section: {
    vertical: '6rem',      // 96px - between major sections
    mobile: '3rem',        // 48px - mobile section spacing
  },
  
  container: {
    padding: '1rem',       // 16px default
    md: '2rem',            // 32px medium screens
    lg: '4rem',            // 64px large screens
  },
};

export const animation = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

export const effects = {
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)',
    glowGold: '0 0 20px rgba(212, 175, 55, 0.3)',
  },
  
  blur: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

// Export complete theme object
export const theme = {
  colors,
  typography,
  spacing,
  animation,
  effects,
};

export default theme;
