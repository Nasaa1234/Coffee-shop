import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Header} from '../layouts';
import {Bag, Detail, History, Home, Payment} from '../screen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Bag" component={Bag} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};
