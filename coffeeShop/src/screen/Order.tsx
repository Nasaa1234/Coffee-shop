/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Center, Font, OrderCard} from '../components';
import {OrderTab} from '../utils';
import {UseData} from '../providers';

export const Order = () => {
  const {orderItems} = UseData();
  const [activeBar, setActiveBar] = useState('Processing');
  const scroll = useRef<any>(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scroll, {
      toValue:
        activeBar === 'Processing' ? 0 : activeBar === 'Success' ? 130 : 260,
      friction: 8,
      tension: 200,
      useNativeDriver: true,
    }).start();
  }, [activeBar]);

  const setStatusFilter = status => {
    setActiveBar(status);
  };
  const renderItem = ({item, index}) => {
    return <OrderCard type={activeBar} key={index} item={item} />;
  };
  return (
    <View style={styles.container}>
      <Center>
        <View style={styles.tabs}>
          {OrderTab.map((tab, i) => {
            return (
              <Animated.View key={i}>
                <TouchableOpacity
                  onPress={() => setStatusFilter(tab.status)}
                  style={[styles.btnTab]}>
                  <Font size="17px">{tab.status}</Font>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      </Center>
      <Animated.View
        style={[
          styles.btnTabActive,
          {
            transform: [
              {
                translateX: scroll,
              },
            ],
          },
        ]}
      />
      <FlatList data={orderItems[activeBar]} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
  },
  listTab: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },

  btnTabActive: {
    width: Dimensions.get('window').width / 3,
    borderBottomColor: '#D3A762',
    borderBottomWidth: 3,
  },

  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
});
