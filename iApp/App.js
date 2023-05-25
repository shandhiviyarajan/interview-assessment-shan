import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from './core/routes/AuthStackNavigator';
function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

export default App;
