import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const MenuIcon = props => {
  return (
    <Svg
      width={18}
      height={12}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M0 12h11v-2H0v2zm0-5h15V5H0v2zm0-7v2h18V0H0z" fill="#072D4B" />
    </Svg>
  );
};
