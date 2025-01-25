import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const OrderIcon = props => {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 14V2H0V0h3a1 1 0 011 1v12h12.438l2-8H6V3h13.72a1 1 0 01.97 1.243l-2.5 10a1 1 0 01-.97.757H3a1 1 0 01-1-1zm2 7a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4z"
        fill="#838383"
      />
    </Svg>
  );
};
