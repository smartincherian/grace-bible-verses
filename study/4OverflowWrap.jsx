import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Fourth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // justifyContent: 'center', // vertical // horizontal in case of row
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flexWrap: 'wrap-reverse',
  },
  box1: {
    // default top left
    backgroundColor: 'red',
    height: 100,
    width: 150,
  },
  box2: {
    // default top left
    backgroundColor: 'green',
    height: 100,
    width: 150,
  },
  box3: {
    // default top left
    backgroundColor: 'blue',
    height: 100,
    width: 150,
  },
});

export default Fourth;
