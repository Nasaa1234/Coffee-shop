import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UseData} from '../../providers';
import {CardType} from '../../interfaces';
import {Card} from './';
import {Font, Margin, Stack} from '../core';

export const Category = ({category}: {category: string}) => {
  const {goods} = UseData();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData([...goods.filter(good => good.category === category)]);
  }, [category, goods]);

  const SPACING = 10;
  return (
    <View>
      <Margin margin="2% 3% 0% 3%">
        <Stack marginVertical={10}>
          <Font size="16px" weight="500">
            {category}
          </Font>
        </Stack>
        <FlatList
          decelerationRate={'fast'}
          snapToInterval={SPACING}
          contentContainerStyle={{
            paddingRight: SPACING,
          }}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: SPACING}} />}
          horizontal
          data={data}
          renderItem={({item}: {item: CardType}) => {
            return <Card item={item} />;
          }}
        />
      </Margin>
    </View>
  );
};
