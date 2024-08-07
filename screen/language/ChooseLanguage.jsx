import React from 'react';
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import ChooseLanguageForm from './ChooseLanguageForm';

export default function ChooseLanguage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.description}>
            Select the language of your choice:
          </Text>
        </View>

        <ChooseLanguageForm nextRoute={'Signup'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  headerContainer: {
    padding: 16,
    color: 'black',
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  description: {
    fontSize: 16,
    color: '#666666',
  },
});
