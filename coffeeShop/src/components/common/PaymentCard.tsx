/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Font, Stack} from '../core';
import {SeeIcon} from '../../assets';

export const PaymentCard = () => {
  return (
    <Stack
      style={styles.container}
      align="center"
      marginTop={20}
      justifyContent="space-between">
      <Stack align="center">
        <Stack marginLeft={15}>
          <Image source={require('../../assets/picture/visa.png')} />
        </Stack>
        <View style={{marginLeft: 20}}>
          <Font weight="700" size={'12px'}>
            Крэдит Карт
          </Font>
          <Font weight={'300'} size={'12px'}>
            Visa ******** 3306
          </Font>
        </View>
      </Stack>

      <SeeIcon fill="black" width={28} height={28} />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: 343,
    height: 56,
    borderRadius: 4,
  },
});
