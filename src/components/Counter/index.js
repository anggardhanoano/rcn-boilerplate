import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Counter = () => {
  const {counterValue} = useSelector((state) => ({
    counterValue: state.counter.count,
  }));

  return (
    <View>
      <Text style={styles.text}>{counterValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: 30,
    color: 'blue',
    margin: 20,
  },
});

export default Counter;
