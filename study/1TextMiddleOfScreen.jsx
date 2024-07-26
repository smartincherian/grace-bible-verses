import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const First = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grace Is Enough</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default First;
