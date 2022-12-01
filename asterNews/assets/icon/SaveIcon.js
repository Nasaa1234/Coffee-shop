import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SaveIcon = props => {
  return (
    <Svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.72 2h10.878c.36 0 .706.14.961.39s.399.59.399.943v4a6.602 6.602 0 01-1.992 4.714A6.868 6.868 0 018.16 14a6.915 6.915 0 01-2.602-.508 6.81 6.81 0 01-2.206-1.445A6.602 6.602 0 011.36 7.333v-4c0-.353.143-.692.398-.942S2.358 2 2.72 2v0z"
        stroke="#0768B5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.44 6.667l2.719 2.666 2.72-2.666"
        stroke="#0768B5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
