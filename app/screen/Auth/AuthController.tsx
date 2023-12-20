import {Component} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {
  isRegister: boolean;
}

export default class AuthController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      isRegister: false,
    };
  }

  handleSwitch = () => this.setState({isRegister: !this.state.isRegister});
}
