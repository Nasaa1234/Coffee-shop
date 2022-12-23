import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const DislikeIcon = props => {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.458 1.583h2.114a1.829 1.829 0 011.845 1.584v5.541a1.829 1.829 0 01-1.845 1.584h-2.114m-5.541 1.583v3.167a2.375 2.375 0 002.375 2.375l3.166-7.125V1.583h-8.93A1.583 1.583 0 002.945 2.93l-1.093 7.125a1.583 1.583 0 001.584 1.821h4.48z"
        stroke="#072D4B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
