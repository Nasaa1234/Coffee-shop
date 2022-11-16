/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';

export const Story = ({userName, userProfile, seen}) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
      }}>
      <View
        style={{
          borderRadius: 68,
          padding: seen ? 1 : 3,
          borderColor: seen
            ? '#DCDCDC'
            : 'linear-gradient(180deg, rgba(222,0,70,1) 0%, rgba(247,163,75,1) 100%)',
          borderWidth: 3,
        }}>
        <Image
          source={require('../../assets/image/user.jpeg')}
          style={{
            width: 68,
            height: 68,
            borderRadius: 34,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 14.5,
          lineHeight: 22,
          textAlign: 'center',
        }}>
        {userName}
      </Text>
    </View>
  );
};
