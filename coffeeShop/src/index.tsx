import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthNavigation, RootNavigation} from './navigations';
import {AuthProvider, DataProvider, useAuth} from './providers';

const ControlNavigation = () => {
  const {user} = useAuth();
  return user ? <RootNavigation /> : <AuthNavigation />;
};

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DataProvider>
          <ControlNavigation />
        </DataProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
