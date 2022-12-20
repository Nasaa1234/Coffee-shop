import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useData} from '../providers/DataProvider';

const Input = ({handleChange, values, type}) => {
  return (
    <View style={styles.component}>
      <Text style={styles.label}>{type}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange(type)}
        value={values[type]}
        placeholder={`Enter yout title ${type}`}
      />
    </View>
  );
};

export const AddPostScreen = () => {
  const {AddPost} = useData();
  const [values, setValues] = useState({
    title: '',
    description: '',
    image: '',
    body: '',
  });

  const handleChange = prop => event => {
    setValues({...values, [prop]: event});
  };
  const labels = ['Title', 'Description', 'Image', 'Body'];

  return (
    <View style={styles.container}>
      {labels.map((el, index) => {
        return (
          <Input
            handleChange={handleChange}
            values={values}
            type={el}
            key={index}
          />
        );
      })}
      <Button title="Add Post" onPress={AddPost(values)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderWidth: 0.2,
    borderRadius: 5,
    padding: 10,
  },
  component: {
    marginBottom: 10,
  },
  label: {
    marginLeft: 5,
    marginBottom: 5,
  },
});
