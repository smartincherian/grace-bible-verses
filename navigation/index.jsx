import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import PublicNavigation from './PublicNavigation';

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f5f5f5',
  },
};

const Navigation = () => {
  const navigationRef = React.useRef();

  const didMount = async () => {
    try {
    } catch (error) {}
  };

  React.useEffect(() => {
    didMount();
  }, []);

  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <PublicNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
