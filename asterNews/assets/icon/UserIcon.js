import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const UserIcon = props => {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15 15.75v-1.5a3 3 0 00-3-3H6a3 3 0 00-3 3v1.5M9 8.25a3 3 0 100-6 3 3 0 000 6z"
        stroke="#072D4B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
