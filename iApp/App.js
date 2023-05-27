import React from 'react';

import { ThemeProvider } from 'core/theme';
import FlashMessage from 'react-native-flash-message';

import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from './core/routes/AuthStackNavigator';
function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <FlashMessage position="top" />
        <AuthStackNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
