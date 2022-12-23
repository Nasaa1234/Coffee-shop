/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Stack} from '../styles/Stack';
import {SaveIcon, ShareIcon} from '../assets/icon';
import {Swipeable} from 'react-native-gesture-handler';
import {useData} from '../providers/DataProvider';

const LeftSwipe = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.deleteBox}>
        <Animated.Text
          style={({transform: [{scale: scale}]}, {color: 'white'})}>
          Delete
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

const RightSwipe = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.archiveBox}>
        <Animated.Text
          style={({transform: [{scale: scale}]}, {color: 'white'})}>
          Dont see
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

export const Post = ({data}) => {
  const navigation = useNavigation();
  const date = new Date(data?.published_at);
  const {getPostId} = useData();
  const normalizedDate = new Date(
    date.getTime() - date.getTimezoneOffset() * -60000,
  );

  const formattedDate = normalizedDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Swipeable renderLeftActions={LeftSwipe} renderRightActions={RightSwipe}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', {
            date: formattedDate,
          });
          getPostId(data?._id);
        }}>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={{...Stack.row, ...Stack.spaceBetween}}>
              <View style={Stack.center}>
                <Text style={styles.title}>{data?.title}</Text>
                <Text style={styles.yummy}>
                  {data?.description.slice(0, 60)}...
                </Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: data?.image[0],
                  }}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
              </View>
            </View>
            <View style={{...Stack.row, ...styles.space}}>
              <View style={{...Stack.row, ...Stack.center}}>
                <Text>Nasaa</Text>
                <Text style={styles.dot} />
                <Text>{formattedDate}</Text>
              </View>
              <View style={Stack.row}>
                <ShareIcon />
                <SaveIcon style={{marginLeft: 10}} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 363,
    height: 164,
    borderRadius: 4,
    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.04)',
    marginTop: 15,
    backgroundColor: 'white',
  },
  dot: {
    height: 3,
    width: 3,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'dotted',
    marginHorizontal: 5,
  },
  body: {
    padding: 20,
  },
  space: {
    justifyContent: 'space-between',
    marginTop: 25,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  yummy: {
    fontSize: 14,
    marginTop: 10,
    color: '#072D4B',
    opacity: 0.6,
    width: 200,
  },
  save: {
    marginRight: 15,
  },

  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 164,
    marginTop: 15,
    borderRadius: 10,
  },
  archiveBox: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 164,
    marginTop: 15,
    borderRadius: 10,
  },
});
