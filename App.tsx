import React from 'react';
import Navigation from './navigation';
import {PaperProvider} from 'react-native-paper';
import {theme} from './theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
};

export default App;
