import {Alert, AsyncStorage} from 'react-native';

export const myToken = async () => {
  return await AsyncStorage.getItem('auth_token');
};
export const setToken = async () => {
  try {
    await AsyncStorage.setItem('auth_token', '12345678');
  } catch (e) {
    Alert.alert(e);
  }
};
export const ClearToken = async () => {
  AsyncStorage.clear();
};
