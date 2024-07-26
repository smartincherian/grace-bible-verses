import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Third = () => {
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
    alignItems: 'center', // horizontal // vertical in case of row
    justifyContent: 'center',
    flexDirection: 'row',
  },
  box1: {
    // default top left
    backgroundColor: 'red',
    height: 100,
    width: 100,
    // alignSelf: 'flex-start',
  },
  box2: {
    // default top left
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  box3: {
    // default top left
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});

export default Third;
