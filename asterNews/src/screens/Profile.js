import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Post, SuccesModal} from '../components';
import {UseAuth, useData} from '../providers';
import {Stack} from '../styles/Stack';
import {Login} from './Login';

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

const HaveUser = () => {
  const {user} = UseAuth();
  const {data} = useData();

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
              uri: user.profilePicture,
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
        <Text style={styles.username}>{user.username}</Text>
        <Text>{user.Bio}</Text>
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

export const Profile = () => {
  const {user, modalVisible} = UseAuth();
  return user ? (
    modalVisible ? (
      <SuccesModal modalVisible={modalVisible} />
    ) : (
      <HaveUser />
    )
  ) : (
    <Login />
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
