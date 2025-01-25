import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Center, Padding} from '../components';
import {LogoIcon} from '../assets';

export const DefaultHeader = ({order}: {order?: boolean}) => {
  return (
    <SafeAreaView style={!order && styles.bottomBorder}>
      <Center>
        <Padding padding={'3% 0%'}>
          <LogoIcon />
        </Padding>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: 3,
    borderBottomColor: '#E5E5E5',
  },
  orderTotal: {
    width: 18,
    height: 18,
    backgroundColor: '#D3A762',
    borderRadius: 18 / 2,
    position: 'absolute',
    bottom: 8,
    zIndex: 1,
    right: 10,
    borderWidth: 1,
    borderColor: 'white',
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 4,
      marginBottom: 3,
    },
  },
});
