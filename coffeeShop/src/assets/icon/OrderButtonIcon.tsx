import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const OrderButtonIcon = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.667 18.333H3.333A.834.834 0 012.5 17.5v-15a.833.833 0 01.833-.833h13.334a.833.833 0 01.833.833v15a.833.833 0 01-.833.833zm-.834-1.666V3.333H4.167v13.334h11.666zM6.667 5.833h6.666V7.5H6.667V5.833zm0 3.334h6.666v1.666H6.667V9.167zm0 3.333h4.166v1.667H6.667V12.5z"
        fill="#fff"
      />
    </Svg>
  );
};
