import {Component} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {deletePost} from '../../controllers/PostController';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

interface P {
  route?: any;
  navigation?: NavigationProp<ParamListBase>;
}

interface item {
  id: string;
  title: string;
  imageUrl: string;
  timestamp: number;
  description: string;
}

interface S {
  paramsData: item | null;
  isLoading: boolean;
}

export default class ViewPostController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      paramsData: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    const item = this.props.route.params.item;
    this.setState({paramsData: item});
  }

  handleBack = () => this.props.navigation?.goBack();

  handleDelete = () => {
    Alert.alert('Confirmation', 'Are you sure you want to delete this post?', [
      {text: 'No'},
      {
        text: 'Yes',
        onPress: async () => {
          let authId = await AsyncStorage.getItem('AUTHID');
          if (authId && this.state.paramsData) {
            this.setState({isLoading: true});
            await deletePost(authId, this.state.paramsData?.id);
            this.setState({isLoading: false});
            this.props.navigation?.navigate('AppDrawer');
          }
        },
      },
    ]);
  };
}
