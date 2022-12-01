import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const LikeIcon = props => {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1_2403)">
        <Path
          d="M5.833 17.417h-2.5c-.442 0-.866-.167-1.178-.464a1.544 1.544 0 01-.488-1.12v-5.541c0-.42.175-.823.488-1.12a1.712 1.712 0 011.178-.464h2.5m5.834-1.583V3.958c0-.63-.264-1.234-.732-1.679a2.568 2.568 0 00-1.768-.696L5.833 8.708v8.709h9.4a1.72 1.72 0 001.099-.377c.306-.247.508-.592.568-.97l1.15-7.124c.036-.227.02-.459-.047-.68a1.562 1.562 0 00-.343-.597 1.665 1.665 0 00-.575-.405 1.742 1.742 0 00-.702-.139h-4.716z"
          stroke="#072D4B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2403">
          <Path fill="#fff" d="M0 0H20V19H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
