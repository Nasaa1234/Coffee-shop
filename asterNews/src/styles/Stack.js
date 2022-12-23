import {StyleSheet} from 'react-native';

export const Stack = StyleSheet.create({
  flex: {display: 'flex'},
  row: {flexDirection: 'row'},
  column: {flexDirection: 'column'},
  spaceBetween: {justifyContent: 'space-between'},
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceAround: {justifyContent: 'space-around'},
  spaceEvenly: {justifyContent: 'space-evenly'},
});
