/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Margin,
  Stack,
  AutoComplete,
  Button,
  Font,
  Center,
  MoreIngredients,
} from '../components';
import {
  Size,
  MilkInput,
  WhippingInput,
  FoamInpit,
  Fact,
  onDisplayNotification,
} from '../utils';
import {BagIcon, SeeIcon} from '../assets';
import {UseData} from '../providers';
import {MoreInc} from '../interfaces';

const Divider = () => {
  return <View style={styles.divider} />;
};

export const Detail = ({navigation, route}) => {
  const {item} = route.params;
  const {addItem} = UseData();
  const [fact, setFact] = useState<any>('');
  const [seeDetail, setSeeDetail] = useState<boolean>(false);
  const scroll = useRef<any>(new Animated.Value(0)).current;

  const [moreInc, setMore] = useState<MoreInc>({
    size: 'Small',
    Milk: 'Standart',
    Foam: 'Extra foam',
    WhippingCream: 'No whip',
    Quantity: 1,
  });
  const getInc = (el: string, title: string) => {
    setMore({...moreInc, [title]: el});
  };
  useEffect(() => {
    setFact(Fact(moreInc.Milk));
  }, [moreInc.Milk]);

  const addBag = () => {
    onDisplayNotification();
    addItem(item, moreInc);
  };

  useEffect(() => {
    Animated.spring(scroll, {
      toValue:
        moreInc.size === 'Small'
          ? 0
          : moreInc.size === 'Sprunce'
          ? 76
          : moreInc.size === 'Ceder'
          ? 152
          : moreInc.size === 'Redwood'
          ? 228
          : 300,
      friction: 5,
      tension: 50,
      useNativeDriver: true,
    }).start();
  }, [moreInc.size, scroll]);
  const data = [
    {
      title: 'Milk',
      data: MilkInput,
    },

    {
      title: 'Foam',
      data: FoamInpit,
    },
    {
      title: 'WhippingCream',
      data: WhippingInput,
    },
    {
      title: 'Quantity',
    },
  ];
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={{
            uri: item.image,
          }}
          style={styles.image}>
          <SafeAreaView>
            <Stack justifyContent="space-between">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  transform: [{rotate: '180deg'}],
                  width: 50,
                }}>
                <SeeIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Bag')}>
                <Margin margin={'0% 20px 0% 0%'}>
                  <View style={styles.orderTotal}>
                    <Font style={styles.text}>1</Font>
                  </View>
                  <BagIcon />
                </Margin>
              </TouchableOpacity>
            </Stack>
          </SafeAreaView>
        </ImageBackground>
        <View style={styles.container}>
          <Font style={styles.text}>Хэмжээний төрөл</Font>
          <Divider />
          <Margin margin={'7% 0% 0% 0%'}>
            <Stack align="center" justifyContent="space-between">
              {Size?.map((el, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => getInc(el.name, 'size')}>
                    <View
                      style={[
                        {
                          width: 64,
                          height: 64,
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                      ]}>
                      {el.picture}
                    </View>
                    <Font
                      style={[
                        styles.sizeText,
                        el.name === moreInc.size && styles.activeText,
                      ]}>
                      {el.name}
                    </Font>
                  </TouchableOpacity>
                );
              })}
              <Animated.View
                style={[styles.activeSize, {transform: [{translateX: scroll}]}]}
              />
            </Stack>
          </Margin>
          <Font style={[styles.text, {marginTop: 40}]}>Flavor changes</Font>
          <Divider />
          {data.map((el, ind) => (
            <AutoComplete
              key={ind}
              data={el.data}
              type={'drop'}
              title={el.title}
              getInc={getInc}
              moreInc={moreInc}
            />
          ))}
          <Font style={[styles.text, {marginTop: 30}]}>
            Хоол тэжээлийн баримтууд
          </Font>
          <Divider />
          <Stack marginBottom={70}>
            <Font style={styles.fact} color="#969495">
              {fact}
            </Font>
          </Stack>
        </View>
      </ScrollView>
      <Center style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <TouchableOpacity onPress={() => setSeeDetail(true)}>
          <Button title="Цүнхэнд нэмэх" width="370px" />
        </TouchableOpacity>
      </Center>
      {seeDetail && (
        <Stack style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <MoreIngredients
            setSeeDetail={setSeeDetail}
            moreInc={moreInc}
            addBag={addBag}
          />
        </Stack>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 354,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#D3A762',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
  fact: {
    marginTop: 20,
  },
  activeSize: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(211, 167, 98, 0.3)',
    borderWidth: 2,
    borderColor: '#D3A762',
    bottom: 20,
    position: 'absolute',
  },
  sizeText: {
    fontWeight: '300',
    fontSize: 12,
    color: '#969495',
    textAlign: 'center',
    marginTop: 5,
  },
  activeText: {
    color: '#2D2A2B',
    fontWeight: '500',
  },
  orderTotal: {
    width: 18,
    height: 18,
    backgroundColor: '#D3A762',
    borderRadius: 18 / 2,
    position: 'absolute',
    bottom: 8,
    zIndex: 1,
    right: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
});
