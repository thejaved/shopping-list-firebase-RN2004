import React from 'react';
import {colors, fonts} from '../../config';
import AuthController from './AuthController';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {bgImage} from '../../assets/images';
import {AppButton, AppInput} from '../../components';

export default class Auth extends AuthController {
  renderLogin = () => {
    return (
      <>
        <AppInput placeholder="Email" />
        <AppInput
          placeholder="Password"
          containerStyle={styles.inputContainerStyle}
        />
        <AppButton
          title="Sign Up Today!"
          onPress={this.handleSwitch}
          containerStyle={styles.buttonContainerStyle1}
        />
        <AppButton title="Login" containerStyle={styles.buttonContainerStyle} />
      </>
    );
  };

  renderSignUp = () => {
    return (
      <>
        <AppInput placeholder="Full Name" />
        <AppInput
          placeholder="Email"
          containerStyle={styles.inputContainerStyle}
        />
        <AppInput
          placeholder="Password"
          containerStyle={styles.inputContainerStyle}
        />
        <AppInput
          placeholder="Confirm Password"
          containerStyle={styles.inputContainerStyle}
        />
        <AppButton
          title="Login"
          onPress={this.handleSwitch}
          containerStyle={styles.buttonContainerStyle1}
        />
        <AppButton
          title="Sign Up"
          containerStyle={styles.buttonContainerStyle}
        />
      </>
    );
  };

  render() {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollViewStyle}>
            <ImageBackground
              resizeMode="cover"
              style={styles.bgContainer}
              source={bgImage}>
              <View style={styles.bgInnerContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.headingText}>
                    {this.state.isRegister
                      ? 'Create Your Account'
                      : 'Welcome Back!'}
                  </Text>
                  <Text style={styles.desText}>
                    {this.state.isRegister
                      ? 'Sign up to unlock exclusive features and personalized content.'
                      : 'Your adventure awaits! Enter your credentials to resume your experience.'}
                  </Text>
                </View>
                <View style={styles.formContainer}>
                  {this.state.isRegister
                    ? this.renderSignUp()
                    : this.renderLogin()}
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
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
  scrollViewStyle: {
    flex: 1,
  },
  bgContainer: {
    width: '100%',
    height: responsiveHeight(100),
  },
  bgInnerContainer: {
    width: '100%',
    height: responsiveHeight(100),
    zIndex: 100,
    backgroundColor: '#00000090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '88%',
    paddingVertical: responsiveWidth(5),
  },
  headingText: {
    fontSize: responsiveFontSize(4),
    fontFamily: fonts.KanitRegular,
    color: colors.white,
  },
  desText: {
    fontFamily: fonts.KanitRegular,
    color: colors.white,
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#ffffff50',
    borderRadius: responsiveWidth(2),
    borderWidth: 2,
    borderColor: colors.white,
    padding: responsiveWidth(5),
  },
  inputContainerStyle: {
    marginTop: responsiveWidth(3),
  },
  buttonContainerStyle: {
    marginTop: responsiveWidth(3),
  },
  buttonContainerStyle1: {
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: responsiveWidth(3),
    backgroundColor: 'transparent',
  },
});
