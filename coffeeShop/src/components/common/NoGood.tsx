import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Font, Margin} from '../core';

export const NoGood = () => {
  return (
    <Margin margin="5% 0% 0% 0%" style={styles.container}>
      <Font size="20px" color="#D3A762">
        Энэ төрлийн бүтээгдэхүүн алга
      </Font>
    </Margin>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderWidth: 1,
    borderColor: '#D3A762',
    borderRadius: 10,
    width: Dimensions.get('window').width / 1.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
