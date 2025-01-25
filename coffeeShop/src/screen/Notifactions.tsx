import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import notifee from '@notifee/react-native';

export const Notifactions = () => {
  async function onDisplayNotification() {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: 'Hi hop3 guys',
      body: 'Hicheelee sain hiigeerei sain bsn shu',
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <View style={styles.container}>
      <View style={[styles.button, {bottom: 32, position: 'absolute'}]}>
        <Button
          onPress={() => onDisplayNotification()}
          color="white"
          title="Notification"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 48,
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#EBEEEF',
  },
  mainHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 8,
    marginTop: 10,
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 150,
    height: 400,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 30,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00B9B9',
    width: 100,
    borderRadius: 16,
  },
  modalView: {
    width: '100%',
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: 'white',
    marginBottom: 16,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 16,
  },
});
