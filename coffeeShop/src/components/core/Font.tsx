import styled from 'styled-components/native';

export const Font = styled.Text`
  font-size: ${props => props.size || '14px'};
  font-weight: ${props => props.weight || '400'};
  color: ${props => props.color || 'black'};
  opacity: ${props => props.opacity || 1};
`;
