import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notifactions, Order, Profile, Scan} from '../screen';
import {HomeIcon, OrderIcon, ProfileIcon, ScanIcon} from '../assets';
import {DefaultHeader} from '../layouts';
import {StackNavigation} from './StackNavigation';
const Tab = createBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Нүүр"
        component={StackNavigation}
        options={{
          tabBarIcon: ({color}) => <HomeIcon stroke={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Скан"
        component={Scan}
        options={{
          header: () => <DefaultHeader />,
          tabBarIcon: ({color}) => <ScanIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name="Захиалга"
        component={Order}
        options={{
          tabBarIcon: ({color}) => <OrderIcon stroke={color} />,
          header: () => <DefaultHeader order />,
        }}
      />
      <Tab.Screen
        name="Нүүр Хуудас"
        component={Profile}
        options={{
          header: () => <DefaultHeader />,
          tabBarIcon: ({color}) => <ProfileIcon stroke={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
