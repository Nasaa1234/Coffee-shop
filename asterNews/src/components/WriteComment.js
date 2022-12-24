/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Stack} from '../styles/Stack';

export const WriteComment = ({getValue, AddComment, postId, value}) => {
  return (
    <View>
      <View style={{...Stack.row, marginTop: 20}}>
        <Text style={styles.comment}>Add your comment</Text>
        <View style={styles.separator} />
      </View>
      <TextInput
        style={styles.input}
        value={value}
        placeholder="Enter your comment here.."
        onChangeText={e => getValue(e)}
      />
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text
          style={styles.appButtonText}
          onPress={() => AddComment(value, postId)}>
          Post Comment
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  separator: {
    width: 185,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  comment: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 0.2,
    padding: 10,
    backgroundColor: '#F4F9F8',
    borderColor: '#072D4B',
    borderRadius: 4,
    marginVertical: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#2F9FF8',
    borderRadius: 4,
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
