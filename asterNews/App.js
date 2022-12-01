import React from 'react';
import {Detail} from './screens/Detail';
import {Home} from './screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustomDrawer} from './components';
import {LogoIcon, MenuIcon, SearchIcon, UserIcon} from './assets/icon';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function NotificationsScreen({navigation}) {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

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

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
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
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MenuIcon />
              </TouchableOpacity>
              <LogoIcon style={style.menu.logo} />
            </View>
          ),
          headerTitle: () => <View style={style.header} />,
        })}
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
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
