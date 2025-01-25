import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Center, Font, Margin, Stack} from '../components';
import {LogOutIcon} from '../assets';
import {useAuth} from '../providers';

export const Profile = () => {
  const {user, setUser} = useAuth();
  return (
    <Margin margin="14% 0% 0% 0%">
      <Center>
        <Image source={require('../assets/picture/profile.png')} />
        <Stack marginTop={10}>
          <Font size="16px" weight="bold">
            {user}
          </Font>
        </Stack>
        <TouchableOpacity style={styles.logOut} onPress={() => setUser(null)}>
          <LogOutIcon />
          <Margin margin="0% 0% 0% 3%">
            <Font>Гарах</Font>
          </Margin>
        </TouchableOpacity>
      </Center>
    </Margin>
  );
};

const styles = StyleSheet.create({
  logOut: {
    borderWidth: 1,
    width: 340,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderColor: '#F44C4C',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 50,
  },
});
