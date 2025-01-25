import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

export const SeeIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_220_2219)">
        <Path
          d="M13.172 12l-4.95 4.95 1.414 1.414L16 12 9.636 5.636 8.222 7.05l4.95 4.95z"
          fill={props.fill || '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_220_2219">
          <Rect
            width={24}
            height={24}
            rx={2}
            transform="matrix(1 0 0 -1 0 24)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
