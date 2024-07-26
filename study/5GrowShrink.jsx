import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Fifth = () => {
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
  },
  box1: {
    // default top left
    backgroundColor: 'red',
    height: 100,
    width: 100,
    flexBasis: 120,
  },
  box2: {
    // default top left
    backgroundColor: 'green',
    height: 100,
    width: 80,
    flexGrow: 1,
  },
  box3: {
    // default top left
    backgroundColor: 'blue',
    height: 100,
    width: 80,
    flexShrink: 1,
  },
});

export default Fifth;
