import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GraceList} from '../../components/List';
import {LANGUAGE_LIST} from './constants';

export default function ChooseLanguageForm({nextRoute}) {
  const navigation = useNavigation();
  const route = useRoute();
  const {onChange, value} = route?.params || {};
  const [language, setLanguage] = React.useState(value || 'en');
  const isFocused = useIsFocused();

  const onConfirmLanguage = () => {
    console.log('Language confirmed:', language);
    // Uncomment and implement your logic
    // dispatch(setCurrentUserSettings({ appLanguage: language }));
    // onChange && onChange(language);
    // Boolean(nextRoute) ? navigation.navigate(nextRoute) : navigation.goBack();
  };

  const handleLanguageChange = async id => {
    console.log({id});
  };

  return <GraceList items={LANGUAGE_LIST} defaultItem={'ma'} />;
}
