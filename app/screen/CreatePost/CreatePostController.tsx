import {Component} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {createPost} from '../../controllers/PostController';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {
  imagePath: string;
  title: string;
  description: string;
  isLoading: boolean;
}

export default class CreatePostController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      imagePath: '',
      title: '',
      description: '',
      isLoading: false,
    };
  }
  handleBack = () => this.props.navigation?.goBack();

  handleTitle = (val: string) => this.setState({title: val});
  handleDesciption = (val: string) => this.setState({description: val});

  handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.setState({imagePath: image.path});
    });
  };

  handlePublish = async () => {
    this.setState({isLoading: true});
    try {
      await this.validateAndCreatePost();
    } catch (error) {
      console.error('Error creating post:', error);
      Alert.alert('Error', 'Failed to create post');
    } finally {
      this.setState({isLoading: false});
    }
  };

  validateAndCreatePost = async () => {
    const {imagePath, title, description} = this.state;
    const authId = await AsyncStorage.getItem('AUTHID');

    if (imagePath === '') {
      Alert.alert(
        'Image Required',
        'Please pick an image before publishing your post',
      );
      return;
    }
    if (title.length <= 5 || description.length <= 10) {
      Alert.alert(
        'Validation Error',
        'Title must be more than 5 characters, and description must be more than 10 characters',
      );
      return;
    }

    if (authId) {
      await createPost(authId, imagePath, title, description);
      this.setState({
        imagePath: '',
        title: '',
        description: '',
      });
      Alert.alert('Success', 'Post created successfully');
    }
  };
}
