import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {Component} from 'react';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {}

export default class OverviewController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {};
  }

  onToggleDrawer = () => {
    this.props.navigation?.dispatch(DrawerActions.toggleDrawer());
  };
}
