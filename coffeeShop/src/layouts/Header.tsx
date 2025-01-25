/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Font, Margin, Padding, Stack} from '../components';
import {BagIcon, LogoIcon} from '../assets';
import {useNavigation} from '@react-navigation/native';
import {UseData} from '../providers';

export const Header = () => {
  const navigation = useNavigation<any>();
  const {bagItems} = UseData();
  return (
    <SafeAreaView style={styles.bottomBorder}>
      <Padding padding={'3% 0%'}>
        <Stack align="center" justifyContent={'space-between'}>
          <View style={{width: 27}} />
          <LogoIcon />
          <TouchableOpacity onPress={() => navigation.navigate('Bag')}>
            <Margin margin={'0% 2.25% 0% 0%'}>
              <View style={styles.orderTotal}>
                <Font color="white" size="16px" weight="600">
                  {bagItems?.length}
                </Font>
              </View>
              <BagIcon />
            </Margin>
          </TouchableOpacity>
        </Stack>
      </Padding>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: 3,
    borderBottomColor: '#E5E5E5',
  },

  orderTotal: {
    width: 22,
    height: 22,
    paddingHorizontal: 4,
    backgroundColor: '#D3A762',
    borderRadius: 22 / 2,
    position: 'absolute',
    bottom: 8,
    zIndex: 1,
    right: 10,
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 4,
    paddingBottom: 3,
    marginRight: 7,
  },
});
