import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Component} from 'react';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {
  userName: string;
  bio: string;
}

export default class ProfileController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      userName: '',
      bio: '',
    };
  }
  async componentDidMount() {
    try {
      let userStorage = await AsyncStorage.getItem('USERDETAILS');
      const user = JSON.parse(userStorage || '{}');
      const fullName = user.fullName || '';
      const bio = user.bio || '';
      this.setState({userName: fullName, bio});
    } catch (error) {
      console.error('Error reading user details:', error);
    }
  }
}
