/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Center, Card, Margin, Stack, NoGood, Font} from '../';
import {UseData} from '../../providers';
import {ListTab} from '../../utils';

export const Special = () => {
  const {goods} = UseData();
  const [activeBar, setActiveBar] = useState('Special');
  const [dataList, setDataList] = useState([
    ...goods.filter(e => e.tag === activeBar),
  ]);

  const setStatusFilter = status => {
    setActiveBar(status);
  };
  useEffect(() => {
    setDataList([...goods.filter(e => e.tag === activeBar)]);
  }, [activeBar]);

  return (
    <View style={styles.container}>
      <Center>
        <ScrollView
          style={styles.tabs}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {ListTab.map((tab, i) => {
            return (
              <View key={i}>
                <TouchableOpacity
                  onPress={() => setStatusFilter(tab.tag)}
                  style={[
                    styles.btnTab,
                    activeBar === tab.tag && styles.btnTabActive,
                  ]}>
                  <Font size="17px">{tab.tag}</Font>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </Center>
      <Stack flexWrap={'wrap'} justifyContent="center">
        {dataList.length !== 0 ? (
          dataList.map((item, index) => (
            <Margin margin="5% 3% 0% 3%" key={index}>
              <Card item={item} />
            </Margin>
          ))
        ) : (
          <Center>
            <NoGood />
          </Center>
        )}
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 30,
  },
  listTab: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },

  btnTabActive: {
    borderBottomColor: '#D3A762',
    borderBottomWidth: 3,
  },

  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
});
