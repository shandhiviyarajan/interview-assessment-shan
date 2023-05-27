import React, { createContext, useContext, useState } from 'react';
//ThemeContext
const ThemeContext = createContext();

//Custom hook
export function useAppTheme() {
  return useContext(ThemeContext);
}
//Theme provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Initial theme state

  // func toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  //colours variations
  const Colors = theme === 'light' ? ColorsLight : ColorsDark;
  const value = {
    theme,
    toggleTheme,
    ...Colors,
    ...Gutters,
    FontSize,
    Radius
  };

  return <ThemeContext.Provider theme={value}>{children}</ThemeContext.Provider>;
}

// Usage in your app
function App() {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Rest of your app */}
    </div>
  );
}
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
