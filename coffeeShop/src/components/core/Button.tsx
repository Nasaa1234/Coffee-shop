import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Font, Stack} from './';

interface Props {
  title: string;
  icon?: any;
  width?: string;
}

export const Button = (props: Props) => {
  const {title, icon, width} = props;
  return (
    <StyledButton width={width}>
      <View>{icon}</View>
      <Stack marginLeft={6}>
        <Font color="white" weight="600">
          {title}
        </Font>
      </Stack>
    </StyledButton>
  );
};

const StyledButton = styled.View`
  width: ${props => props.width || '300px'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  background: #d3a762;
`;
