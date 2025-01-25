import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Center, Font, Margin, Padding, Stack} from '../core';
import {changeColor} from '../../utils';
import {useNavigation} from '@react-navigation/native';

export const OrderCard = ({item, type}: {type: string; item: any}) => {
  const navigation = useNavigation<typeof useNavigation>();
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState<any>({
    quantity: 0,
    amount: 0,
  });

  return (
    <Margin margin={'2% 0% 0% 0%'}>
      <Center>
        <View style={styles.container}>
          <Padding padding={'4% 0% 2% 0%'}>
            <Stack justifyContent="space-between">
              <Font size="16px">Order #{count}</Font>
              <Font size="16px" color="#969495">
                05-20-2020
              </Font>
            </Stack>
            <Stack>
              <Stack marginTop={7}>
                <Font color="#969495" size="11px">
                  Тоо хэмжээ: <Font color="#2D2A2B">{total.quantity}</Font>
                </Font>
              </Stack>
            </Stack>
            <Stack justifyContent={'flex-end'}>
              <Font size="14px" height="20px">
                Нийт дүн : $10.56
              </Font>
            </Stack>
            <Stack justifyContent="space-between" marginTop={3} align="center">
              <TouchableOpacity
                style={styles.detail}
                onPress={() =>
                  navigation.navigate('History', {
                    item: item,
                  })
                }>
                <Font>Дэлгэрэнгүй</Font>
              </TouchableOpacity>
              <Font color={changeColor(type)}>{type}</Font>
            </Stack>
          </Padding>
        </View>
      </Center>
    </Margin>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    paddingHorizontal: 10,
    width: 343,
  },
  detail: {
    borderWidth: 1,
    borderColor: '#2D2A2B',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
