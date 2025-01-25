import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Font, Stack} from '../core';
import {SeeIcon} from '../../assets';

export const Ad = () => {
  return (
    <Stack
      style={styles.container}
      justifyContent="space-between"
      align="center">
      <View>
        <Font color="white" opacity={0.6} size={'10px'}>
          Авах
        </Font>
        <Stack marginTop={4}>
          <Font color="white">Barkley village * 0.5 mi</Font>
        </Stack>
      </View>
      <SeeIcon />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    height: 60,
    paddingHorizontal: '3%',
  },
});
