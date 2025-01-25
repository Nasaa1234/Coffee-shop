import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export const myToken = async setUser => {
  setUser(await AsyncStorage.getItem('auth'));
  return await AsyncStorage.getItem('auth');
};
export const setToken = async number => {
  try {
    await AsyncStorage.setItem('auth', number);
  } catch (e) {
    Alert.alert(e);
  }
};
export const ClearToken = async () => {
  AsyncStorage.clear();
};
