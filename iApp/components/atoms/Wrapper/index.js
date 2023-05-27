import React from 'react';

import { View } from 'react-native';
function Wrapper({
  children,
  flex = 1,
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  alignContent = 'flex-start'
}) {
  return (
    <View
      style={{
        justifyContent,
        alignContent,
        alignItems,
        flex
      }}
    >
      {children}
    </View>
  );
}

export default Wrapper;
