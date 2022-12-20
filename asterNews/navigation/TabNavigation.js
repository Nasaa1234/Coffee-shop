import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NotificationsScreen} from '../App';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddPostScreen, Profile} from '../screens';
import {DrawerNavigation} from './DrawerNavigation';
import {AddIcon, HomeIcon, SearchIcon, UserIcon} from '../assets/icon';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({color}) => <HomeIcon stroke={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Add Post"
        component={AddPostScreen}
        options={{
          tabBarIcon: ({color}) => <AddIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({color}) => <SearchIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <UserIcon stroke={color} />,
          headerRight: () => <View style={style.header} />,
          headerLeft: () => (
            <View style={style.profile}>
              <Text style={style.profile.username}>Nasanbat</Text>
              <View style={style.profile.postNumber}>
                <Text style={{color: 'white'}}>9+</Text>
              </View>
            </View>
          ),
          headerTitle: () => <View style={style.header} />,
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginRight: 15,
  },
  profile: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    username: {
      fontWeight: 'bold',
      fontSize: 20,
      marginRight: 5,
    },
    postNumber: {
      backgroundColor: 'red',
      padding: 2,
      borderRadius: 5,
      paddingHorizontal: 6,
    },
  },
});
