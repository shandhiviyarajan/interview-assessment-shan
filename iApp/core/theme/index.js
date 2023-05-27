import React, { createContext, useContext } from 'react';

import { useColorScheme } from 'react-native';
const ColorsLight = {
  Primary: '#2E71F2',
  Secondary: '#C3D8FF',
  Grey: '#C5C5C5',
  LightGrey: '#E6E6E6',
  Dark: '#2E2E2E',
  Info: '#0EB7FF',
  Success: '#FE3B47',
  Warning: '#FFBB0D',
  Error: '#FE3B47',
  Light: '#ffffff'
};

const ColorsDark = {
  ...ColorsLight,
  Black: '#FFFFFF',
  Light: '#2E2E2E'
};

const Gutters = {
  Padding: 8,
  Margin: 8,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40
};

const FontSize = {
  h1: 36,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 10,
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};

const Radius = {
  sm: 6,
  md: 12,
  lg: 18,
  xl: 24,
  xxl: 30
};
//ThemeContext
const ThemeContext = createContext();
//Custom hook
const useAppTheme = () => {
  return useContext(ThemeContext);
};

//Theme provider
const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState({
    Colors: colorScheme === 'light' ? ColorsLight : ColorsDark,
    Gutters,
    FontSize,
    Radius
  });
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, useAppTheme };
