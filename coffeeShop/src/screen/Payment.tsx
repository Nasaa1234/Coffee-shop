import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Center, Font, PaymentCard, Stack, SuccesModal} from '../components';
import {useNavigation} from '@react-navigation/native';
import {UseData} from '../providers';

export const Payment = () => {
  const {getSuccess, bagItems} = UseData();
  const navigation = useNavigation<any>();
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    visible &&
      setTimeout(() => {
        getSuccess(bagItems);
        setVisible(false);
        navigation.navigate('Home');
      }, 2100);
  }, [visible]);
  return (
    <View>
      <Stack marginLeft={24} marginTop={10}>
        <Font weight="500" size="16px">
          Credit card
        </Font>
      </Stack>
      <Center>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <PaymentCard />
        </TouchableOpacity>
        <PaymentCard />
        <PaymentCard />
        <TouchableOpacity style={styles.button}>
          <Font color="#D3A762" weight="500">
            Шинэ карт нэмэх
          </Font>
        </TouchableOpacity>
        <SuccesModal modalVisible={visible} />
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D3A762',
    borderWidth: 1,
    height: 44,
    borderRadius: 10,
    marginTop: 10,
    width: 343,
  },
});
