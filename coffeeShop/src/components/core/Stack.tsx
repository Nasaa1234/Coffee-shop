import styled from 'styled-components/native';

export const Stack = styled.View`
  display: flex;
  flex-wrap: ${({flexWrap}) => flexWrap || 'nowrap'};
  width: ${({width}) => width || 'auto'};
  height: ${({height}) => height || 'auto'};
  flex-direction: ${({direction}) => direction || 'row'};
  justify-content: ${({justifyContent}) => justifyContent || undefined};
  align-items: ${({align}) => align || undefined};
  background-color: ${({bg}) => bg || undefined};
  cursor: ${({cursor}) => cursor || undefined};
  text-align: ${({textAlign}) => textAlign || undefined};
`;
