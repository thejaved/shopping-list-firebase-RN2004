import {Component} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {}

export default class SplashController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    let Token = await AsyncStorage.getItem('Token');
    setTimeout(() => {
      if (Token) this.props.navigation?.navigate('AppDrawer');
      else this.props.navigation?.navigate('Auth');
    }, 500);
  }
}
