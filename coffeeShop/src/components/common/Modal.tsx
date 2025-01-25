import React, {useEffect, useRef} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

export const SuccesModal = ({modalVisible}: {modalVisible: boolean}) => {
  const animationRef = useRef<any>(null);
  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AnimatedLottieView
              ref={animationRef}
              source={require('../../animation/Succes.json')}
              autoPlay
              loop={true}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    height: 110,
    width: 110,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
