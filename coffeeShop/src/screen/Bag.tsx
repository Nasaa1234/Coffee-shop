import {ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BagCard, Button, Center, Font, Margin, Stack} from '../components';
import {UseData} from '../providers';
import {CardType} from '../interfaces';
import {currencyFormatter, Tax} from '../utils';
import {useNavigation} from '@react-navigation/native';

export const Bag = () => {
  const navigation = useNavigation<any>();
  const {bagItems, totalAmount} = UseData();
  const newLocal = '100%';
  return (
    <View>
      <Stack marginLeft={18} marginTop={10}>
        <Font size="25px" weight="bold" height="30px">
          Order items ({bagItems?.length})
        </Font>
      </Stack>
      <ScrollView
        style={{
          height: newLocal,
        }}>
        {bagItems?.map((item: CardType, index: number) => {
          return <BagCard item={item} key={index} id={index} />;
        })}
        <Margin paddingHorizontal={20}>
          <Stack justifyContent="space-between" width="100%" marginTop={5}>
            <Font weight="300">Нийт дүн</Font>
            <Font weight="300">{currencyFormatter.format(totalAmount)}</Font>
          </Stack>
          <Stack justifyContent="space-between" width="100%" marginTop={5}>
            <Font weight="300">Татвар, хураамж</Font>
            <Font weight="300">
              {currencyFormatter.format(Tax(totalAmount))}
            </Font>
          </Stack>
          <Stack justifyContent="space-between" width="100%" marginTop={5}>
            <Font weight="bold" size="16px">
              Нийт
            </Font>
            <Font weight="bold" size="16px">
              {currencyFormatter.format(Tax(totalAmount) + totalAmount)}
            </Font>
          </Stack>
        </Margin>
      </ScrollView>
      <Center>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            bottom: 80,
          }}
          onPress={() => navigation.navigate('Payment')}>
          {totalAmount !== 0 && (
            <Button
              title={`Check out ${currencyFormatter.format(
                Tax(totalAmount) + totalAmount,
              )}`}
            />
          )}
        </TouchableOpacity>
      </Center>
    </View>
  );
};
