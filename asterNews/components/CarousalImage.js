/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Stack} from '../styles/Stack';

export const CarousalImage = ({data}) => {
  const width = Dimensions.get('window').width;

  const scrollX = useRef(new Animated.Value(0)).current;

  const RotateData = scrollX.interpolate(
    {
      inputRange: [width * -1, 0, width],
      outputRange: ['-180deg', '0deg', '335deg'],
    },
    {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    },
  );

  const StartImageRotation = e => {
    scrollX.setValue(e.nativeEvent.contentOffset.x);
  };
  return (
    <FlatList
      data={data?.image}
      onScroll={e => StartImageRotation(e)}
      horizontal
      snapToEnd
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled
      renderItem={({item}) => (
        <ImageBackground
          source={{
            uri: item,
          }}
          resizeMode="cover"
          style={{
            ...Stack.center,
            width: width,
            height: width / 1.5,
          }}
          blurRadius={10}>
          <Animated.Image
            ref={scrollX}
            source={{
              uri: item,
            }}
            style={[
              {
                width: 300,
                height: 200,
              },
              {
                transform: [
                  {
                    rotate: RotateData,
                  },
                ],
              },
            ]}
          />
        </ImageBackground>
      )}
    />
  );
};
