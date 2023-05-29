import React from 'react';

import { Box } from 'components/atoms';
import { useAppTheme } from 'core/theme';
import Icon from 'react-native-vector-icons/Ionicons';
const FeedbackStars = ({ rating }) => {
  const theme = useAppTheme();
  const feedback = new Array(5).fill('x');
  return (
    <Box direction="row" width="50%" justifyContent="flex-end">
      {feedback.map((v, i) =>
        i + 1 < rating ? (
          <Icon name="star" size={18} color={theme.Colors.Primary} key={i} />
        ) : (
          <Icon name="star" size={18} color={theme.Colors.Grey} key={i} />
        )
      )}
    </Box>
  );
};

export default FeedbackStars;
