import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SearchIcon = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.25 14.25a6 6 0 100-12 6 6 0 000 12zM15.75 15.75l-3.262-3.262"
        stroke={props.stroke || '#072D4B'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
