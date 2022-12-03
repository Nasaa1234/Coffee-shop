import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Post, Subscribe} from '../components';
import {Footer} from '../layout';
import {Stack} from '../styles/Stack';
import {instance} from '../utils/axios';
import LottieView from 'lottie-react-native';

const Separator = () => <View style={styles.separator} />;

export const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await instance.get('/');
      console.log(res);
      setData(res.data.message);
    };
    getData();
  }, []);

  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LottieView
          ref={animationRef}
          source={require('../animation/loading.json')}
          autoPlay
          loop={true}
        />
        <Text style={styles.top}>Top Stories for you</Text>
        {data ? (
          <View>
            <View>
              {data?.map((dataDetail, index) => {
                return <Post data={dataDetail} key={index} />;
              })}
            </View>
            <Subscribe />
            <Separator />
            <Footer />
          </View>
        ) : (
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{...Stack.center, height: 500}}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#E5E5E5;',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginTop: 30,
    marginBottom: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  top: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 23,
    color: '#072D4B',
    marginHorizontal: 15,
    marginTop: 20,
  },
});
