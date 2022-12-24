import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {Stack} from '../styles/Stack';
import AnimatedLottieView from 'lottie-react-native';

export const Loading = () => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{...Stack.center, height: 500}}>
      <AnimatedLottieView
        ref={animationRef}
        source={require('../animation/loading.json')}
        autoPlay
        loop={true}
      />
    </View>
  );
};
