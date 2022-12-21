import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Stack} from '../styles/Stack';

const Separator = () => <View style={styles.separator} />;
export const Footer = () => {
  return (
    <View>
      <Separator />
      <View style={{...Stack.row, ...Stack.spaceBetween}}>
        <View>
          <Text style={styles.text}>© Aster News, 2021</Text>
        </View>
        <View style={Stack.row}>
          <Text style={styles.text}>Privacy Policy</Text>
          <Text style={{...styles.text, ...styles.margin}}>
            Terms of Service
          </Text>
        </View>
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
  separator: {
    marginTop: 30,
    marginBottom: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
