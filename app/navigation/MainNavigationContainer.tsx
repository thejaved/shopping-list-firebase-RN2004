import * as React from 'react';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native';

export default class MainNavigationContainer extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }
}
