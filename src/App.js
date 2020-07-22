/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Main from './pages/main';
import Secondary from './pages/secondary';

const App: () => React$Node = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="main" component={Main} title="Main" initial />
        <Scene key="secondary" component={Secondary} title="Secondary" />
      </Scene>
    </Router>
  );
};

export default App;
