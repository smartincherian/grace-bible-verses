import THEME from '../../commonConstants/theme';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {LANGUAGE} from '../../commonConstants/language';
import {useGetVersesMutation} from '../../store/verses/service';
import {RootState} from '../../store';

const USER_LANGUAGE = LANGUAGE.MALAYALAM;

const renderItem = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item[USER_LANGUAGE]}</Text>
  </View>
);

export const Home = () => {
  const [getVerses] = useGetVersesMutation();
  const {verses} = RootState()?.versesData;

  useEffect(() => {
    getVersesHandler();
  }, []);

  const getVersesHandler = async () => {
    try {
      await getVerses();
    } catch (error) {
      console.error('Error fetching verses:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={verses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
