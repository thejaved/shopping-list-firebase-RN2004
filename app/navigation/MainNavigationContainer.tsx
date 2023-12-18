import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

export default class MainNavigationContainer extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }
}
