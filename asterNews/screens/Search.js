import React, {useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {Post} from '../components';
import {Footer} from '../layout';
import {useData} from '../providers/DataProvider';

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
        vertical
        data={data}
        renderItem={({item, index}) => {
          if (item.title.includes(values.search)) {
            return <Post data={item} key={index} />;
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
});
