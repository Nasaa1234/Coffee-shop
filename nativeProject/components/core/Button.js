import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

export const Button = ({text, status}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 30,
      backgroundColor: status === 'follow' ? '#1FA1FF' : 'white',
      borderRadius: 3,
      marginHorizontal: 3,
      marginVertical: 3,
      borderWidth: status === 'follow' ? 0 : 1,
      borderColor: '#CBCBCB',
    },
    text: {
      color: status === 'follow' ? 'white' : 'black',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {/* <Image source={require('../../assets/icon/dropDown.svg')} /> */}
    </View>
  );
};
