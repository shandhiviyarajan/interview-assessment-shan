import React from 'react';

import { ThemeProvider } from 'core/theme';

import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from './core/routes/AuthStackNavigator';
function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthStackNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
