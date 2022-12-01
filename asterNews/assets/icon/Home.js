import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const HomeIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 512 512"
      {...props}>
      <Path
        d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <Path
        d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <Path
        d="M400 179L400 64 352 64 352 133"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </Svg>
  );
};
