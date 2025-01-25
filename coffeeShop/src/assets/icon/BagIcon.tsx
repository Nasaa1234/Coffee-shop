import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BagIcon = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5 6.254h10.637V15.6a2 2 0 01-2 2H7a2 2 0 01-2-2V6.254z"
        stroke="#000"
        strokeWidth={2}
      />
      <Path
        d="M7.127 5.191A3.191 3.191 0 0110.32 2v0a3.191 3.191 0 013.19 3.191v1.064H7.127V5.19z"
        stroke="#000"
        strokeWidth={2}
      />
    </Svg>
  );
};
