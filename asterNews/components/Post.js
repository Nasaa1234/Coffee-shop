/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Stack} from '../styles/Stack';
import {SaveIcon, ShareIcon} from '../assets/icon';

export const Post = ({data}) => {
  const date = new Date(data?.publishDate);

  const normalizedDate = new Date(
    date.getTime() - date.getTimezoneOffset() * -60000,
  );

  const formattedDate = normalizedDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {
          id: data?._id,
        });
      }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>{data?.title}</Text>
          <View style={Stack.row}>
            <Text style={styles.yummy}>{data?.description}</Text>
          </View>
          <View style={{...Stack.row, ...styles.space}}>
            <View style={{...Stack.row, ...Stack.center}}>
              <Text>{data?.owner?.firstName}</Text>
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
});
