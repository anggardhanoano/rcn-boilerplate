import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Secondary = () => {

  return (
    <View style={styles.mainContainer}>
      <Text>This is Secondary page</Text>
      <Text onPress={() => Actions.main()}>Back</Text>
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

export default Secondary;
