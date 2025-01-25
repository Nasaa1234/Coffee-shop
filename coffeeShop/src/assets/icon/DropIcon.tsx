import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

export const Drop = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1470_811)">
        <Path
          d="M12 13.172l-4.95-4.95-1.414 1.414L12 16l6.364-6.364-1.414-1.414-4.95 4.95z"
          fill="#969495"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1470_811">
          <Rect
            width={24}
            height={24}
            rx={2}
            transform="matrix(-1 0 0 1 24 0)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
