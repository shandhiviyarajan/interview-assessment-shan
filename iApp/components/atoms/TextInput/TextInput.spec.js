import React from 'react';
import {render} from '@testing-library/react-native';

import {TextInput} from '../../components';

it('Should render the TextInput component', async () => {
  const {toJSON} = render(<TextInput onChangeText={() => {}} />);
  expect(toJSON()).toMatchSnapshot();
});
