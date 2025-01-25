/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, Font, Margin, Stack} from '../core';
import {useNavigation} from '@react-navigation/native';

const Inc = ({name, dot}: {name: string; dot: string}) => {
  return (
    <Stack style={styles.item} justifyContent="space-between">
      <Font size="16px">{dot}</Font>
      <Font size="16px">{name}</Font>
    </Stack>
  );
};

export const MoreIngredients = ({setSeeDetail, moreInc, addBag}) => {
  const navigation = useNavigation<any>();
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <Margin style={styles.container}>
        <Stack justifyContent="space-between" align="center">
          <Font weight="bold" size="16px">
            Сүү
          </Font>
          <TouchableOpacity onPress={() => setSeeDetail(false)}>
            <Font size={'25px'} weight="bold">
              X
            </Font>
          </TouchableOpacity>
        </Stack>
        {Object?.keys(moreInc).map((el, index) => {
          return <Inc name={moreInc[el]} key={index} dot={el} />;
        })}
        <TouchableOpacity
          style={{marginTop: 40}}
          onPress={() => {
            addBag();
            navigation.navigate('Home');
          }}>
          <Button title={'Цүнхэнд нэмэх'} width="100%" />
        </TouchableOpacity>
      </Margin>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.7,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 15,
  },
  item: {
    borderBottomColor: '#EAEAEA',
    borderBottomWidth: 1,
    paddingVertical: 10,

    marginTop: 15,
  },
});
