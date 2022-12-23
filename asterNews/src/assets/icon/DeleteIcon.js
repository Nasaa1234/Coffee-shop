import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const DeleteIcon = props => {
  return (
    <Svg
      width={14}
      height={20}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.667 5V3.333a1.667 1.667 0 011.666-1.666h3.334a1.667 1.667 0 011.666 1.666V5m2.5 0v11.667a1.667 1.667 0 01-1.666 1.666H2.833a1.667 1.667 0 01-1.666-1.666V5h11.666z"
        stroke="#FF8C8C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
