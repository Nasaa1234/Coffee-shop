import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustomDrawer} from '../components';
import {
  HomeIcon,
  LogoIcon,
  MenuIcon,
  SearchIcon,
  ShareIcon,
  UserIcon,
} from '../assets/icon';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigation';
import {NotificationsScreen} from '../App';
import {DayAndNight} from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  const Items = [
    {
      icon: <HomeIcon />,
      name: 'Top Stories',
      screen: StackNavigation,
    },
    {
      icon: <ShareIcon />,
      name: 'Long Tap ',
      screen: NotificationsScreen,
    },
    {
      icon: <HomeIcon />,
      screen: DayAndNight,
      name: 'Day && Night animation',
    },
  ];
  return (
    <Drawer.Navigator
      initialRouteName="Top Stories"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({navigation}) => ({
        drawerActiveBackgroundColor: 'rgba(47, 159, 248, 0.1)',
        headerRight: () => (
          <View style={style.header}>
            <SearchIcon style={style.header.search} />
            <UserIcon style={style.header.user} />
            <Text>My Profile</Text>
          </View>
        ),
        headerLeft: () => (
          <View style={style.menu}>
            <TouchableOpacity onPress={() => navigation?.openDrawer()}>
              <MenuIcon />
            </TouchableOpacity>
            <LogoIcon style={style.menu.logo} />
          </View>
        ),
        headerTitle: () => <View style={style.header} />,
      })}>
      {Items.map((item, index) => (
        <Drawer.Screen
          name={item.name}
          component={item.screen}
          options={{drawerIcon: () => item.icon}}
          key={index}
        />
      ))}
    </Drawer.Navigator>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginRight: 15,
    search: {
      marginHorizontal: 35,
    },
    user: {
      marginRight: 8,
    },
  },
  menu: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    logo: {
      marginHorizontal: 20,
    },
  },
});
