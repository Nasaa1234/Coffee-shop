import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Font} from '../components';

export const History = ({route}) => {
  const {item} = route.params;
  return (
    <View>
      {item.order.map((order, i) => {
        return (
          <View key={i}>
            <Font>{order.orderId}</Font>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});
