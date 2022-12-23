import React, {useEffect, useRef} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Post, Subscribe} from '../components';
import {Footer} from '../layout';
import {Stack} from '../styles/Stack';
import LottieView from 'lottie-react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useData} from '../providers/DataProvider';

export const Home = () => {
  const {data} = useData();

  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.top}>Top Stories for you</Text>
        </View>
        {data ? (
          <View>
            <View>
              <FlatList
                pagingEnabled
                vertical
                data={data}
                renderItem={({item, index}) => {
                  return <Post data={item} key={index} />;
                }}
              />
            </View>
            <Subscribe />
            <Footer />
          </View>
        ) : (
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{...Stack.center, height: 500}}>
            <LottieView
              ref={animationRef}
              source={require('../animation/loading.json')}
              autoPlay
              loop={true}
            />
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

  top: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 23,
    color: '#072D4B',
    marginTop: 20,
  },
});
