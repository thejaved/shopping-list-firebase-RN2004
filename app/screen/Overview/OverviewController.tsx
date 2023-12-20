import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {Component} from 'react';
import {Alert, BackHandler} from 'react-native';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {}

export default class OverviewController extends Component<P, S> {
  private backHandler: any;

  constructor(props: P) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    console.log('BackPress');
    return true;
  };

  onToggleDrawer = () => {
    this.props.navigation?.dispatch(DrawerActions.toggleDrawer());
  };
}
