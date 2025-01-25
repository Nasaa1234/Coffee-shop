import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const OTP = props => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20 30h.017H20zm-6.667 5h13.334A3.333 3.333 0 0030 31.667V8.333A3.333 3.333 0 0026.667 5H13.333A3.333 3.333 0 0010 8.333v23.334A3.333 3.333 0 0013.333 35z"
        stroke="#FFAB1B"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
