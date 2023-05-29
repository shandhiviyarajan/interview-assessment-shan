import React from 'react';

import { View } from 'react-native';
export const Box = ({
  children,
  width = '100%',
  flex = 0,
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  alignContent = 'flex-start',
  backgroundColor,
  direction = 'column',
  pb = 0,
  pt = 0,
  pr = 0,
  pl = 0,
  pv = 0,
  ph = 0,
  mb = 0,
  mt = 0,
  ml = 0,
  mr = 0,
  mv = 0,
  mh = 0,
  style
}) => {
  return (
    <View
      style={{
        flexDirection: direction,
        width,
        justifyContent,
        alignContent,
        alignItems,
        flex,
        backgroundColor,
        paddingBottom: pb,
        paddingTop: pt,
        paddingLeft: pl,
        paddingRight: pr,
        paddingVertical: pv,
        paddingHorizontal: ph,
        marginLeft: ml,
        marginRight: mr,
        marginVertical: mv,
        marginHorizontal: mh,
        marginBottom: mb,
        marginTop: mt,
        ...style
      }}
    >
      {children}
    </View>
  );
};
