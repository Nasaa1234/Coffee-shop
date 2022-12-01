import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Stack} from '../styles/Stack';

export const Footer = () => {
  return (
    <View style={{...Stack.row, ...Stack.spaceBetween}}>
      <View>
        <Text style={styles.text}>© Aster News, 2021</Text>
      </View>
      <View style={Stack.row}>
        <Text style={styles.text}>Privacy Policy</Text>
        <Text style={{...styles.text, ...styles.margin}}>Terms of Service</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#072D4B',
    fontSize: 12,
    lineHeight: 22,
    opacity: 0.4,
  },
  margin: {
    marginLeft: 15,
  },
});
