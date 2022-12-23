import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const AddIcon = props => {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 .469a.596.596 0 00-.596.596v3.34h-3.34a.596.596 0 100 1.19h3.34v3.34a.596.596 0 101.192 0v-3.34h3.34a.596.596 0 100-1.19h-3.34v-3.34A.596.596 0 005 .469z"
        fill="#000"
      />
    </Svg>
  );
};
