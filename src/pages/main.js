import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import counterActions from '../store/counter/constants';
import Counter from '../components/Counter';
import {useDispatch} from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <Counter />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => dispatch(counterActions.counterSubtract())}>
          <Text>DECREASE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(counterActions.counterAdd())}>
          <Text>INCREASE</Text>
        </TouchableOpacity>
      </View>
      <Text onPress={() => Actions.secondary()}>Go To Secondary Page</Text>
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Main;
