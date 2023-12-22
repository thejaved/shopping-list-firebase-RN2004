import {Component} from 'react';
import {BackHandler, Alert} from 'react-native';
import {
  getUserById,
  loginUser,
  registerUser,
} from '../../controllers/AuthController';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {
  isRegister: boolean;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isLoading: boolean;
}

export default class AuthController extends Component<P, S> {
  private backHandler: any;

  constructor(props: P) {
    super(props);
    this.state = {
      isRegister: false,
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
    };
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

  handleSwitch = () =>
    this.setState({
      isRegister: !this.state.isRegister,
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

  handleFullNameText = (val: string) => this.setState({fullName: val});

  handleEmailText = (val: string) => this.setState({email: val});

  handlePasswordText = (val: string) => this.setState({password: val});

  handleConfirmPasswordText = (val: string) =>
    this.setState({confirmPassword: val});

  validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      Alert.alert('Validation Error', 'Email cannot be empty');
      return false;
    } else if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return false;
    }
    return true;
  };

  validatePassword = (password: string): boolean => {
    if (password.length < 6) {
      Alert.alert(
        'Validation Error',
        'Password must be at least 6 characters long',
      );
      return false;
    }
    return true;
  };

  validateFullName = (fullName: string): boolean => {
    if (!fullName.trim()) {
      Alert.alert('Validation Error', 'Full Name cannot be empty');
      return false;
    }
    return true;
  };

  validateConfirmPassword = (
    password: string,
    confirmPassword: string,
  ): boolean => {
    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match');
      return false;
    }
    return true;
  };

  handleSignUp = async () => {
    const {fullName, email, password, confirmPassword} = this.state;
    if (
      this.validateFullName(fullName) &&
      this.validateEmail(email) &&
      this.validatePassword(password) &&
      this.validateConfirmPassword(password, confirmPassword)
    ) {
      try {
        this.setState({isLoading: true});
        const user = await registerUser({fullName, email, password});

        if (user !== undefined && user !== null) {
          await AsyncStorage.setItem('AUTHID', user.id);
          this.setState({isLoading: false});
          let userDoc = await getUserById(user.id);
          await AsyncStorage.setItem('USERDETAILS', JSON.stringify(userDoc));
          this.props.navigation?.navigate('Splash');
        } else this.setState({isLoading: false});
      } catch (error) {
        console.error('Error during sign-up:', error);
      }
    }
  };

  handleLogin = async () => {
    try {
      const {email, password} = this.state;
      this.setState({isLoading: true});
      const user = await loginUser(email, password);
      if (user !== undefined && user !== null) {
        await AsyncStorage.setItem('AUTHID', user.id);
        this.setState({isLoading: false});
        let userDoc = await getUserById(user.id);
        await AsyncStorage.setItem('USERDETAILS', JSON.stringify(userDoc));
        this.props.navigation?.navigate('Splash');
      } else this.setState({isLoading: false});
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };
}
