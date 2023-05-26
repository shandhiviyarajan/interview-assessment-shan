import React from 'react';

import { store } from 'core/store';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from './core/routes/AuthStackNavigator';
function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AuthStackNavigator />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
