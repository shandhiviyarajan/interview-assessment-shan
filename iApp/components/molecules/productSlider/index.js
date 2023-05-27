import React from 'react';

import FastImage from 'react-native-fast-image';
const ProductSlider = () => {
  return (
    <>
      <FastImage
        style={{ width: '100%', height: 200 }}
        source={{
          uri: 'https://placehold.co/600x400.png',
          priority: FastImage.priority.normal
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </>
  );
};

export { ProductSlider };
