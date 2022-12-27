import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, TextInput, View} from 'react-native';
import {Post} from '../components';
import {Footer} from '../layout';
import {useData} from '../providers/DataProvider';
import {width} from '../utils';

export const Search = () => {
  const {data} = useData();
  const [values, setValues] = useState({
    search: '',
  });

  const handleChange = prop => event => {
    setValues({...values, [prop]: event});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange('search')}
        value={values.search}
        placeholder={'Search'}
      />
      <FlatList
        pagingEnabled
        horizontal
        data={data}
        renderItem={({item, _index}) => {
          if (item.title.includes(values.search)) {
            return (
              <View>
                <Image
                  source={{
                    uri: item.image[0],
                  }}
                  style={{
                    height: width / 1.5,
                    width: width / 1.5,
                  }}
                />
              </View>
            );
          }
        }}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
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
  image: {},
});
