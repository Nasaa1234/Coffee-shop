/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {LogoIcon, MenuIcon, UserIcon} from '../assets/icon';
import {UseAuth} from '../providers';
import {Stack} from '../styles/Stack';

export const Login = () => {
  const {LoginWithPassword} = UseAuth();
  const [value, setValue] = useState({
    username: '',
    password: '',
  });

  const handleChange = prop => event => {
    setValue({...value, [prop]: event});
  };

  return (
    <View style={[styles.container, Stack.center]}>
      <LogoIcon width={100} height={110} />
      <Text style={styles.welcome}>Welcome back!</Text>
      <Text style={styles.account}>Login into account</Text>
      <View style={[Stack.row, Stack.center, {marginTop: 20}]}>
        <UserIcon />
        <TextInput
          style={styles.input}
          placeholder={'UserName'}
          value={value.username}
          onChangeText={handleChange('username')}
        />
      </View>
      <View style={[Stack.row, Stack.center]}>
        <MenuIcon />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          value={value.password}
          onChangeText={handleChange('password')}
        />
      </View>
      <Pressable
        style={[styles.signin, Stack.center]}
        onPress={() => LoginWithPassword(value.username, value.password)}>
        <Text style={styles.signin?.text}>Sign In</Text>
      </Pressable>
      <View style={[Stack.row, {marginTop: 50, marginBottom: 20}]}>
        <View style={styles.line} />
        <Text style={styles.line.text}>Or sign in with</Text>
        <View style={styles.line} />
      </View>
      <View style={[Stack.row]}>
        <View style={[Stack.center, styles.orApp]}>
          <Image
            source={require('../assets/picture/google.jpeg')}
            style={{width: 30, height: 30}}
          />
        </View>
        <View style={[Stack.center, styles.orApp]}>
          <Image
            source={require('../assets/picture/facebook.webp')}
            style={{width: 30, height: 30}}
          />
        </View>
        <View style={[Stack.center, styles.orApp]}>
          <Image
            source={require('../assets/picture/google.jpeg')}
            style={{width: 30, height: 30}}
          />
        </View>
      </View>
      <Text style={styles.dont}>
        Don't have an account?
        <Text style={styles.dont.text}>Sign Up here</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  welcome: {
    fontSize: 25,
    color: '#8b8b8b',
    marginTop: 10,
    fontWeight: '500',
  },
  account: {
    color: '#8b8b8b',
    marginTop: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: 3,
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 240,
    borderColor: '#2F9FF8',
    elevation: 4,
    shadowColor: '#2F9FF8',
    shadowOffset: {
      width: -1,
      height: 3,
    },
    shadowOpacity: 0.2,
    borderRadius: 20,
  },
  signin: {
    width: 150,
    backgroundColor: '#2F9FF8',
    height: 40,
    borderRadius: 17,
    marginTop: 10,
    text: {
      color: 'white',
      fontWeight: '500',
    },
  },
  line: {
    width: 80,
    marginHorizontal: 10,
    marginBottom: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    text: {
      fontWeight: '500',
      color: 'gray',
    },
  },
  orApp: {
    marginHorizontal: 10,
    borderWidth: 1,
    width: 55,
    height: 50,
    borderRadius: 10,
  },
  dont: {
    marginTop: 50,
    color: 'gray',
    fontWeight: '500',
    text: {
      color: '#2F9FF8',
    },
  },
});
