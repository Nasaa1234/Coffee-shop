/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import {useData} from '../providers/DataProvider';
import {Stack} from '../styles/Stack';
import {launchImageLibrary} from 'react-native-image-picker';

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
  const width = Dimensions.get('window').width;
  const {AddPost} = useData();
  const [photo, setPhoto] = useState(null);
  const [values, setValues] = useState({
    title: '',
    description: '',
    image: '',
    body: '',
  });

  const handleChange = prop => event => {
    setValues({...values, [prop]: event});
  };
  const labels = ['Title', 'Description', 'Body', 'Tags'];

  const handleChoosePhoto = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      setPhoto(response);
    });
  };

  const requstPhotoLibrary = async () => {
    try {
      await request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(response => {
        handleChoosePhoto();
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <>
          <Image
            source={{uri: photo.assets[0].uri}}
            style={{width: width / 1.06, height: 200, borderRadius: 10}}
          />
        </>
      ) : (
        <Pressable onPress={requstPhotoLibrary}>
          <View
            style={[styles.addPicture, {width: width / 1.06}, Stack.center]}>
            <Text style={[{color: 'white', fontSize: 60}]}>+</Text>
          </View>
        </Pressable>
      )}

      <View style={{marginTop: 10}}>
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
      </View>
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
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    marginHorizontal: 10,
    padding: 10,
  },
  component: {
    marginBottom: 10,
  },
  label: {
    marginLeft: 20,
    marginBottom: 5,
    color: 'gray',
    fontSize: 18,
  },
  addPicture: {
    backgroundColor: '#b7a4e6',
    height: 200,
    borderRadius: 10,
  },
});
