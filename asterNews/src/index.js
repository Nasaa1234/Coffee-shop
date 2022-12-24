import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DataProvider, AuthProvider} from './providers';
import {TabNavigation} from './navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DataProvider>
          <TabNavigation />
        </DataProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
