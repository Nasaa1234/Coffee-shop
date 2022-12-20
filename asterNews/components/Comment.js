/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DeleteIcon, DislikeIcon, LikeIcon} from '../assets/icon';
import {Stack} from '../styles/Stack';

const ReplyComment = ({data}) => {
  return (
    <View style={styles.reply}>
      <View style={{...Stack.row, ...Stack.spaceBetween}}>
        <Text style={styles.name}>{data.user}</Text>
        <View style={Stack.row}>
          <LikeIcon />
          <DislikeIcon style={{marginLeft: 10}} />
        </View>
      </View>
      <Text style={styles.text}>{data.text}</Text>
      <View style={{...Stack.row, ...Stack.spaceBetween, marginVertical: 5}}>
        <Text style={styles.written}>Posted on {data.posted_on}</Text>
      </View>
    </View>
  );
};

export const Comment = ({data, DeleteComment, id, postId}) => {
  return (
    <View style={{marginVertical: 5}}>
      <View style={{...Stack.row, ...Stack.spaceBetween}}>
        <Text style={styles.name}>{data.user}</Text>
        <View style={Stack.row}>
          <LikeIcon />
          <DislikeIcon style={{marginLeft: 10}} />
        </View>
      </View>
      <Text style={styles.text}>{data.text}</Text>
      <View style={{...Stack.row, ...Stack.spaceBetween, marginVertical: 5}}>
        <Text style={styles.written}>Posted on {data.posted_on}</Text>
        <TouchableOpacity
          style={{...Stack.row, ...Stack.center}}
          onPress={() => DeleteComment(id, postId)}>
          <DeleteIcon />
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
      <Text style={{color: '#2F9FF8'}}>Reply</Text>
      {data.reply?.map((el, ind) => {
        return <ReplyComment key={ind} data={el} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 17,
    color: '#2F9FF8',
  },
  text: {
    opacity: 0.6,
    fontSize: 17,
    marginVertical: 2,
  },
  written: {
    fontSize: 12,
    opacity: 0.3,
  },
  delete: {
    marginLeft: 10,
    color: '#FF8C8C',
    fontSize: 12,
  },
  reply: {
    borderLeftWidth: 3,
    borderLeftColor: '#FFE8C4',
    paddingLeft: 30,
    marginVertical: 10,
  },
});
