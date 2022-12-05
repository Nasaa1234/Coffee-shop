import React from 'react';
import {Detail} from './screens/Detail';
import {Home} from './screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustomDrawer} from './components';
import {
  AddIcon,
  HomeIcon,
  LogoIcon,
  MenuIcon,
  SaveIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  UserIcon,
} from './assets/icon';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NotificationsScreen = ({route}) => {
  return (
    <View>
      <Button title={route.name} />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const BottomHome = () => {
  const Items = [
    {
      icon: <HomeIcon />,
      name: 'Top Stories',
      screen: HomeScreen,
    },
    {
      icon: <ShareIcon />,
      name: 'Around the World ',
      screen: NotificationsScreen,
    },
    {
      icon: <HomeIcon />,
      screen: NotificationsScreen,
      name: 'Business',
    },
    {
      screen: NotificationsScreen,
      icon: <ShareIcon />,
      name: 'Health',
    },

    {
      icon: <SaveIcon />,
      screen: NotificationsScreen,
      name: 'Covid 19',
    },
    {
      icon: <ShareIcon />,
      screen: NotificationsScreen,
      name: 'Entertainment',
    },
    {
      screen: NotificationsScreen,
      icon: <HomeIcon />,
      name: 'Sports',
    },
    {
      icon: <SaveIcon />,
      screen: NotificationsScreen,
      name: 'Discussion',
    },
    {
      icon: <UserIcon />,
      screen: NotificationsScreen,
      name: 'Notification',
    },
    {
      screen: NotificationsScreen,
      icon: <ShareIcon />,
      name: 'News Feed Settings',
    },
  ];
  return (
    <Drawer.Navigator
      initialRouteName="Top Stories"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({navigation}) => ({
        drawerActiveBackgroundColor: 'rgba(47, 159, 248, 0.1)',
        drawerLabelStyle: {
          fontSize: 15,
        },
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

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={BottomHome}
          options={{
            tabBarIcon: ({color}) => <HomeIcon stroke={color} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Add"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({color}) => <AddIcon stroke={color} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({color}) => <SettingsIcon stroke={color} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({color}) => <UserIcon stroke={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

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
