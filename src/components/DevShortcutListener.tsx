import React, { useEffect } from 'react';

const DevShortcutListener: React.FC = () => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Support both Ctrl+M (Windows/Linux) and Meta+M (Mac)
      const isCtrlM = (e.ctrlKey || e.metaKey) && (e.key === 'm' || e.key === 'M');
      if (!isCtrlM) return;

      e.preventDefault();
      try {
        const input = window.prompt('Enter command');
        if (input && input.trim() === '?') {
          window.alert('Developer Name: shanmuka\nContact: 9515490871\nPortfolio: eshanmuka.onrender.com');
        }
      } catch (err) {
        // no-op
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return null;
};

export default DevShortcutListener;
