import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const AddIcon = props => {
  return (
    <Svg
      height="24px"
      viewBox="0 0 512 512"
      width="24px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="20px"
      {...props}>
      <Path d="M256 512C114.625 512 0 397.391 0 256 0 114.609 114.625 0 256 0c141.391 0 256 114.609 256 256 0 141.391-114.609 256-256 256zm0-448C149.969 64 64 149.969 64 256s85.969 192 192 192c106.047 0 192-85.969 192-192S362.047 64 256 64zm32 320h-64v-96h-96v-64h96v-96h64v96h96v64h-96v96z" />
    </Svg>
  );
};
