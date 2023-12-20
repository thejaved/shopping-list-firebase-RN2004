import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {Component} from 'react';

interface P {
  navigation: NavigationProp<ParamListBase>;
}
interface S {}

export default class HomeController extends Component<P, S> {
  onToggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };
}
