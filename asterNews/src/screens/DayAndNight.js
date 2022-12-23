/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Stack} from '../styles/Stack';
export const DayAndNight = () => {
  const [isDay, setIsDay] = useState(true);
  const animation = useRef(new Animated.Value(0)).current;
  const moveSun = useRef(new Animated.Value(0)).current;
  const moveMoon = useRef(new Animated.Value(0)).current;
  const switchDay = useRef(new Animated.Value(0)).current;
  const switchNight = useRef(new Animated.Value(0)).current;

  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isDay ? 0 : 45,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [animation, isDay]);

  useEffect(() => {
    Animated.timing(moveSun, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();

    Animated.timing(moveMoon, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    Animated.timing(switchNight, {
      toValue: isDay ? 0 : 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [moveSun, isDay, moveMoon, switchNight]);

  return (
    <AnimatedImage
      source={require('../assets/picture/night.png')}
      resizeMode="cover"
      style={{
        flex: 1,
      }}>
      <AnimatedImage
        source={require('../assets/picture/day.png')}
        resizeMode="cover"
        style={{
          flex: 1,
          opacity: switchNight.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        }}>
        <View style={{alignItems: 'flex-end', padding: 10}}>
          <View style={styles.container}>
            <Pressable
              style={Stack.row}
              onPress={() => setIsDay(prev => !prev)}>
              <Animated.View
                style={{
                  ...styles.switchSun,
                  transform: [
                    {
                      translateX: animation,
                    },
                  ],
                }}>
                <Animated.View
                  style={{
                    ...styles.Switchshadow,
                    transform: [
                      {
                        translateX: animation.interpolate({
                          inputRange: [0, 50],
                          outputRange: [0, 1],
                        }),
                      },
                      {
                        scale: animation.interpolate({
                          inputRange: [0, 50],
                          outputRange: [0, 1],
                        }),
                      },
                    ],
                  }}
                />
              </Animated.View>
            </Pressable>
          </View>
          <Animated.View
            style={{
              ...styles.sun,
              transform: [
                {
                  translateY: moveSun.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -370],
                  }),
                },
                {
                  translateX: moveSun.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
              ],
              opacity: moveSun.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            }}
          />
          <Animated.Image
            style={{
              ...styles.moon,
              transform: [
                {
                  translateY: moveSun.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -670],
                  }),
                },
                {
                  translateX: moveSun.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 200],
                  }),
                },
              ],
              opacity: moveMoon,
            }}
            source={require('../assets/animation/moon.png')}
          />
        </View>
      </AnimatedImage>
    </AnimatedImage>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 10,
    width: 85,
    position: 'absolute',
    zIndex: 1000,
    borderRadius: 30,
  },
  switchSun: {
    width: 20,
    height: 20,
    backgroundColor: '#FAE481',
    borderRadius: 15,
  },

  Switchshadow: {
    width: 22,
    height: 22,
    backgroundColor: 'black',
    borderRadius: 15,
    position: 'absolute',
    left: -10,
  },
  shadow: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 15,
    top: 5,
    left: -10,
  },
  moon: {
    width: 66,
    height: 66,
    borderRadius: 33,
    position: 'absolute',
    left: -100,
    top: 970,
  },
  sun: {
    width: 66,
    height: 66,
    backgroundColor: '#FAE481',
    borderRadius: 33,
    position: 'absolute',
    top: 300,
    left: 100,
  },
});
