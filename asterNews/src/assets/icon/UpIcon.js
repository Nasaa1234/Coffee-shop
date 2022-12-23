import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const UpIcon = props => {
  return props.up ? (
    <Svg
      width={9}
      height={5}
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        d="M0.888137 0.771362L4.36992 4.25314"
      />
      <Path
        transform="scale(-1 1) rotate(45 -5.21 -9.946)"
        stroke="#fff"
        strokeLinecap="round"
        d="M0.5 -0.5L5.42398 -0.5"
      />
    </Svg>
  ) : (
    <Svg
      width={9}
      height={6}
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        d="M8.04851 5.16516L4.56673 1.68338"
      />
      <Path
        transform="scale(1 -1) rotate(45 6.424 -2.126)"
        stroke="#fff"
        strokeLinecap="round"
        d="M0.5 -0.5L5.42398 -0.5"
      />
    </Svg>
  );
};
