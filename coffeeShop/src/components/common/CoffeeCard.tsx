/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CardType} from '../../interfaces';
import {currencyFormatter} from '../../utils';
import {Stack, Font} from '..';
import {useNavigation} from '@react-navigation/native';

export const Card = ({item}: {item: CardType}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {
          item: item,
        })
      }>
      <View>
        <Image
          source={{
            uri: item?.image,
          }}
          style={styles.image}
        />
        <View style={{marginTop: 5}}>
          <Font weight="bold" size={'16px'}>
            {item?.title}
          </Font>
          <View style={{marginTop: 2}}>
            <Stack>
              <Font weight="300">{currencyFormatter.format(item?.price)}</Font>
              <View style={{marginRight: 2}}>
                <Font weight="300">/</Font>
              </View>
              <View style={{marginRight: 3}}>
                <Font weight="300">{item?.tag}</Font>
              </View>
            </Stack>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 183,
    width: 159,
    borderRadius: 3,
  },
});
