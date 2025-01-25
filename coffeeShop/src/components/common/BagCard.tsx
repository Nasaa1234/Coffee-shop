/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Center, Font, Stack} from '../core';
import {CardType} from '../../interfaces';
import {currencyFormatter} from '../../utils';
import {UseData} from '../../providers';

export const BagCard = ({item, id}: {item: CardType; id: number}) => {
  const {removeItem, CanceledItem} = UseData();
  return (
    <Center style={styles.container}>
      <Stack align="center">
        <Image
          source={{
            uri: item.image,
          }}
          style={{width: 96, height: 96, borderRadius: 10}}
        />
        <Stack
          justifyContent="space-between"
          align="center"
          style={{width: 240, marginLeft: 20}}
          marginTop={4}>
          <View>
            <Font weight={'bold'} size={'16px'} height={'20px'}>
              {item.title}
            </Font>
            <Stack marginTop={5}>
              <Font size="13px" weight={'300'} height="20px">
                {currencyFormatter.format(item.price)} / {item.tag}
              </Font>
            </Stack>
            {Object.keys(item?.moreInc).map((inc: string, index: number) => {
              return (
                <Stack marginTop={5} key={index}>
                  <Font size="13px" weight={'300'} height="20px">
                    {item?.moreInc[inc]}
                  </Font>
                </Stack>
              );
            })}
          </View>
          <TouchableOpacity
            onPress={() => {
              removeItem(id);
              CanceledItem(item);
            }}>
            <Font>X</Font>
          </TouchableOpacity>
        </Stack>
      </Stack>
      <View style={styles.divider} />
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  divider: {
    borderWidth: 1,
    width: '90%',
    marginTop: 20,
    borderColor: '#EAEAEA',
  },
});
