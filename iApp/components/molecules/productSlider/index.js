import React from 'react';

import FastImage from 'react-native-fast-image';
import PagerView from 'react-native-pager-view';
const ProductSlider = ({ data }) => {
  return (
    <PagerView style={{ height: 200, width: '100%' }} initialPage={0}>
      {data.map((url) => (
        <FastImage
          style={{ width: '100%', height: 200 }}
          source={{
            uri: url,
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      ))}
    </PagerView>
  );
};

export { ProductSlider };
