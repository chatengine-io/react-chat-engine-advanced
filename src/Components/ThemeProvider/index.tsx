import React, { createContext, ReactNode } from 'react';

export * from './defaultTheme';

export const ThemeContext = createContext(null);

export interface ProviderProps {
  children?: ReactNode;
  theme: any; // Theme object
}

const ThemeProvider = (props: ProviderProps) => {

  const { children, theme } = props;

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
