import React from 'react';
import {colors, fonts} from '../../config';
import ViewPostController from './ViewPostController';
import {AppHeader, AppHeader2} from '../../components';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default class ViewPost extends ViewPostController {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <AppHeader2
            isPublish
            title="View Post"
            lablePublish="Delete"
            onPressBack={this.handleBack}
            loading={this.state.isLoading}
            onPressPublish={this.handleDelete}
          />
          <View style={styles.innerContainer}>
            {this.state.paramsData !== null && (
              <>
                <Image
                  style={styles.imageBg}
                  source={{uri: this.state.paramsData?.imageUrl}}
                />
                <View style={styles.textContent}>
                  <Text style={styles.labelTitleStyle}>
                    {this.state.paramsData?.title}
                  </Text>
                  <Text style={styles.labelDescriptionStyle}>
                    {this.state.paramsData?.description}
                  </Text>
                </View>
              </>
            )}
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
  innerContainer: {
    padding: responsiveWidth(4),
  },
  imageBg: {
    width: '100%',
    height: responsiveHeight(25),
    borderRadius: responsiveWidth(5),
  },
  textContent: {
    paddingHorizontal: responsiveWidth(2),
  },
  labelTitleStyle: {
    fontFamily: fonts.KanitRegular,
    fontSize: responsiveFontSize(3),
    marginTop: responsiveWidth(3),
  },
  labelDescriptionStyle: {
    fontFamily: fonts.KanitRegular,
    marginTop: responsiveWidth(1),
  },
});
