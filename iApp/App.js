import React from 'react';

import store from 'core/store';
import { ThemeProvider } from 'core/theme';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from './core/routes/AuthStackNavigator';
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <FlashMessage position="top" />
          <AuthStackNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
