import React from 'react';
import {colors, fonts} from '../../config';
import {AppHeader2, AppInput, TextInputArea} from '../../components';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import CreatePostController from './CreatePostController';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default class CreatePost extends CreatePostController {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <AppHeader2
            loading={this.state.isLoading}
            onPressBack={this.handleBack}
            onPressPublish={this.handlePublish}
          />
          <View style={styles.innerContianer}>
            <TouchableOpacity
              style={styles.imagePickerContainer}
              onPress={this.handleImagePicker}>
              {this.state.imagePath !== '' ? (
                <ImageBackground
                  style={styles.imagePickerContainer}
                  source={{uri: this.state.imagePath}}>
                  <Text style={styles.lablePickerStyle}>Change Image</Text>
                </ImageBackground>
              ) : (
                <Text style={styles.lablePickerStyle}>Pick Feature Image</Text>
              )}
            </TouchableOpacity>
            <AppInput
              value={this.state.title}
              placeholder="Enter Title"
              onChangeText={this.handleTitle}
              containerStyle={styles.inputContainerStyle}
            />
            <TextInputArea
              value={this.state.description}
              placeholder="Type desciption..."
              onChangeText={this.handleDesciption}
              containerStyle={styles.inputContainerStyle}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  innerContianer: {
    padding: responsiveWidth(5),
  },
  imagePickerContainer: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    borderStyle: 'dashed',
    justifyContent: 'center',
    height: responsiveHeight(20),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(4),
    overflow: 'hidden',
  },
  imagePickedStyle: {
    width: '100%',
    height: '100%',
  },
  lablePickerStyle: {
    fontFamily: fonts.KanitRegular,
  },
  inputContainerStyle: {
    marginTop: responsiveWidth(5),
  },
});
