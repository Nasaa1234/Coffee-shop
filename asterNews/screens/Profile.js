import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Post} from '../components';
import {Stack} from '../styles/Stack';
import {instance} from '../utils/axios';

const Description = ({number, title}) => {
  return (
    <View style={{...Stack.center, ...styles.description}}>
      <View>
        <Text style={styles.description.number}>{number}</Text>
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export const Profile = () => {
  const [data, setData] = useState();
  useEffect(() => {
    instance.get('/posts').then(el => {
      console.log(el);
      setData(el.data);
    });
  });
  return (
    <View style={styles.container}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...Stack.center,
          ...Stack.row,
          ...Stack.spaceEvenly,
          marginLeft: -40,
          marginTop: 10,
        }}>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            }}
            style={styles.profilePicture}
          />
        </View>
        <View style={{...Stack.row}}>
          <Description number={152} title="Posts" />
          <Description number={209} title="Followers" />
          <Description number={109} title="Following" />
        </View>
      </View>
      <View>
        <Text style={styles.username}>Nasanbat</Text>
        <Text>La description de mon profil</Text>
      </View>
      <View style={Stack.row}>
        <Pressable style={styles.editButton}>
          <Text>Edit profile</Text>
        </Pressable>
        <Pressable style={styles.editButton}>
          <Text>Share profile</Text>
        </Pressable>
      </View>
      <View>
        {data?.map((el, index) => {
          return <Post data={el} key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  description: {
    marginHorizontal: 10,
    number: {
      fontWeight: 'bold',
      fontSize: 16,
    },
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  editButton: {
    marginTop: 10,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    marginRight: 10,
  },
});
