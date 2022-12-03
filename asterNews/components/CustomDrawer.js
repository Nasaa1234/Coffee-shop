/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Stack} from '../styles/Stack';
import {LogoIcon} from '../assets/icon';

export const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            ...Stack.row,
            marginLeft: 15,
            marginBottom: 30,
            alignItems: 'center',
          }}>
          <LogoIcon />
          <Text style={style.asterNews}>Aster News</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  asterNews: {
    color: '#0768B5',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    marginLeft: 10,
  },
});
