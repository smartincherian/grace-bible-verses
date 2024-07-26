import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Seventh = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Hello</Text>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: 20,
  },
  box1: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'black',
    borderBottomColor: 'yellow',
    borderStyle: 'dotted',
    left: 50,
    zIndex: 1,
    top: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  box2: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  box3: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Seventh;
