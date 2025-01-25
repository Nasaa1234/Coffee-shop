import notifee from '@notifee/react-native';

export async function onDisplayNotification() {
  await notifee.requestPermission();

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: 'Woods Coffee',
    body: 'Та цүнхээ шалгана уу',
    android: {
      channelId,
      smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      pressAction: {
        id: 'default',
      },
    },
  });
}
