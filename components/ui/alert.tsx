// components/ui/alert.tsx
import React from 'react';

export const Alert: React.FC = ({ children }) => (
  <div className="alert">
    {children}
  </div>
);

export const AlertTitle: React.FC = ({ children }) => (
  <h3 className="alert-title">{children}</h3>
);

export const AlertDescription: React.FC = ({ children }) => (
  <p className="alert-description">{children}</p>
);
