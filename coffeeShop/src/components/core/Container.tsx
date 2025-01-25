import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${props => `${props.width}px` || 'auto'};
  height: ${props => `${props.height}px` || 'auto'};
`;
