/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Drop, MessageIcon, OTP} from '../assets';
import {Center, Font, Margin, Stack} from '../components';
import {useAuth} from '../providers';
import {setToken} from '../utils';

const EnterNumber = ({setNumber}: {setNumber?: any}) => {
  return (
    <Margin>
      <TextInput
        keyboardType="numeric"
        style={styles.number}
        maxLength={1}
        placeholder={'_'}
        onChangeText={e => setNumber(e)}
      />
    </Margin>
  );
};

export const AuthNavigation = () => {
  const {setUser} = useAuth();
  const [next, setNext] = useState<any>({
    firstStep: false,
    secondStep: false,
  });
  const [number, setNumber] = useState<number | null>();
  const [value, setValue] = useState<string>('');
  useEffect(() => {
    if (number == 0) {
      setNext({...next, secondStep: true});
    }
    if (next.secondStep) {
      setToken(value);
      setUser(value);
    }
  }, [next, number, setUser, value]);

  const checkNumber = (e: string) => {
    setValue(e);
    if (value.length === 7) {
      if (value[0] === '8' || value[0] === '9') {
        setNext({...next, firstStep: true});
        return true;
      } else {
        Alert.alert('checkNumber');
        setValue('');
      }
    }
    return false;
  };

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Stack
          marginHorizontal={40}
          style={{
            width: 10,
            transform: [{rotate: '90deg'}],
          }}>
          <Drop />
        </Stack>
      </TouchableOpacity>
      <Margin margin="15% 0% 0% 0%">
        {next.firstStep ? (
          <Center>
            <MessageIcon />
            <Font size="24px" style={{textAlign: 'center'}}>
              Таны утас руу илгээсэн кодыг оруулна уу.
            </Font>
            <Font style={styles.send}>+976 {value} дугаарт илгээсэн</Font>
            <Stack marginTop={20}>
              <EnterNumber setNumber={setNumber} />
              <EnterNumber setNumber={setNumber} />
              <EnterNumber setNumber={setNumber} />
              <EnterNumber setNumber={setNumber} />
            </Stack>
          </Center>
        ) : (
          <Center>
            <OTP />
            <Font size="24px">Утасны дугаараа оруулна уу.</Font>
            <Font style={styles.send} opacity={0.5}>
              Бид баталгаажуулах код илгээх болно.
            </Font>
            <Stack align="center" marginTop={40}>
              <Font size="26px" opacity={0.5}>
                +976
              </Font>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={value}
                maxLength={8}
                onChangeText={e => checkNumber(e)}
                autoFocus
              />
            </Stack>
          </Center>
        )}
      </Margin>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 5,
    width: 135,
    fontSize: 26,
  },

  enter: {
    textAlign: 'center',
    marginTop: 20,
  },
  send: {
    marginTop: 10,
  },
  number: {
    fontSize: 26,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 13,
    marginLeft: 10,
  },
});
