import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Loading, Post, Subscribe} from '../components';
import {Footer} from '../layout';
import {useData} from '../providers/DataProvider';

export const Home = () => {
  const {data} = useData();

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
          <View>
            <Text>Loading...</Text>
            {/* <Loading /> */}
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
