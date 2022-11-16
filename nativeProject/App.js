import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Header, Story, Tabs} from './components/common';
import {Button} from './components/core/Button';

const App = () => {
  const TabsData = [
    {
      name: 'Posts',
      icon: () => (
        <Image
          source={require('./assets/icon/dropDown.svg')}
          style={styles.iconStyle}
        />
      ),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.row}>
        <Button text="Follow" status="follow" />
        <Button text="Message" status="message" />
        <Button text="Email" status="email" />
        <Button text="Following" status="following" />
      </View>
      <View style={styles.row}>
        <Story userName={'Nasanbat'} seen={false} />
        <Story userName={'Nasanbat'} seen={true} />
        <Story userName={'Nasanbat'} seen={true} />
      </View>
      <View style={styles.row}>
        <Tabs data={TabsData} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
});

export default App;
