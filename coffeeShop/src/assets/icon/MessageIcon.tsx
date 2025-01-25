import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const MessageIcon = props => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.333 16.667h.017-.017zm6.667 0h.017H20zm6.667 0h.016-.016zM15 26.667H8.333A3.333 3.333 0 015 23.333V10a3.333 3.333 0 013.333-3.333h23.334A3.333 3.333 0 0135 10v13.333a3.333 3.333 0 01-3.333 3.334h-8.334L15 35v-8.333z"
        stroke="#FCB92F"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
