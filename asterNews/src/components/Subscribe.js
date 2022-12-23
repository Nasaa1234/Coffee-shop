import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const Subscribe = () => {
  const [value, setValue] = useState();
  const getValue = e => {
    setValue(e);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscribe to our newsletter</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder="Enter Email"
        keyboardType="numeric"
        onChangeText={e => getValue(e)}
      />
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => value && Alert.alert(value)}>
        <Text style={styles.appButtonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 363,
    height: 164,
    borderRadius: 4,
    borderWidth: 1,
    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.04)',
    marginTop: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  input: {
    height: 40,
    borderWidth: 0.2,
    padding: 10,
    backgroundColor: '#F4F9F8',
    borderColor: '#072D4B',
    borderRadius: 4,
  },
  title: {
    fontSize: 15,
    lineHeight: 18,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#2F9FF8',
    borderRadius: 4,
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
