import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {Component} from 'react';
import {BackHandler} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface post {
  id: string;
  title: string;
  imageUrl: string;
  timestamp: number;
  description: string;
}
interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {
  allPost: post[];
  refreshing: boolean;
}

export default class OverviewController extends Component<P, S> {
  private backHandler: any;

  constructor(props: P) {
    super(props);
    this.state = {
      allPost: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
    this.handleGetAllPost();
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

  handleGetAllPost = async () => {
    try {
      const authId = await AsyncStorage.getItem('AUTHID');
      if (authId) {
        this.setState({refreshing: true});
        const userDoc = await firestore().collection('users').doc(authId).get();
        this.setState({
          allPost: userDoc.data()?.posts ?? [],
          refreshing: false,
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  handlePost = (item: any) => this.props.navigation?.navigate('ViewPost', item);

  onRefresh = () => {
    this.setState({refreshing: true});
    this.handleGetAllPost();
  };
}
