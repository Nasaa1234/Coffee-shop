import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Center, Font} from '../components';

export const Scan = () => {
  return (
    <Center marginTop={20}>
      <Image source={require('../assets/picture/scan.png')} />
      <View>
        <Font>Тэнцвэр</Font>
        <Font>$0.00</Font>
      </View>
      <Image source={require('../assets/picture/qr.png')} />
      <Font>7656 9882 2488 7622</Font>
      <TouchableOpacity>
        <Font>Сан нэмэх</Font>
      </TouchableOpacity>
    </Center>
  );
};
