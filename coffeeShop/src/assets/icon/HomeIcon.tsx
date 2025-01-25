import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const HomeIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1418_2890)">
        <Path
          d="M21 20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"
          fill={props.stroke || '#838383'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1418_2890">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
