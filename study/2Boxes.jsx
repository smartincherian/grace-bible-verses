import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Second = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}></View>
      <View style={styles.container2}></View>
      <View style={styles.container3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center', why this is removed?
    backgroundColor: 'blue',
    // flexDirection: 'row',
    // flexDirection: 'row-reverse',
    // flexDirection: 'column-reverse',
  },
  container1: {
    flex: 3, // increase the ratio if required
    backgroundColor: 'green',
  },
  container2: {
    flex: 2,
    backgroundColor: 'red',
  },
  container3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default Second;
