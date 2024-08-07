import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseLanguage from '../screen/language/ChooseLanguage';

const Stack = createNativeStackNavigator();

const PublicNavigation = ({initialRouteName}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Group>
        <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PublicNavigation;
