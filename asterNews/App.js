import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, View} from 'react-native';
import {DataProvider} from './providers/DataProvider';
import {TabNavigation} from './navigation';

export const NotificationsScreen = ({route}) => {
  return (
    <View>
      <Button title={route.name} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <DataProvider>
        <TabNavigation />
      </DataProvider>
    </NavigationContainer>
  );
};

export default App;
