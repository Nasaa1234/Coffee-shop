import {Image, ScrollView} from 'react-native';
import React from 'react';
import {Ad, Category, Center, Special} from '../components';

export const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Ad />
      <Center>
        <Image
          source={require('../assets/picture/ad.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '95%', height: 205, marginTop: 10}}
        />
      </Center>
      <Category category="Your Favorite" />
      <Category category="Seasonal drinks" />
      <Special />
    </ScrollView>
  );
};
