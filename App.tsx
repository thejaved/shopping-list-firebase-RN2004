import {View} from 'react-native';
import {colors} from './app/config';
import {StatusBar} from 'react-native';
import React, {Component} from 'react';
import {MainNavigationContainer} from './app/navigation';
import 'react-native-gesture-handler';

export class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={colors.white} />
        <MainNavigationContainer />
      </>
    );
  }
}

export default App;
