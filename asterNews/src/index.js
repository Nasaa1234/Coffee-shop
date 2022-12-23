import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DataProvider} from './providers/DataProvider';
import {TabNavigation} from './navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <DataProvider>
        <TabNavigation />
      </DataProvider>
    </NavigationContainer>
  );
};

export default App;
