import React from 'react';
import {colors} from '../../config';
import {ActivityIndicator} from 'react-native';
import SplashController from './SplashController';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';

export default class Splash extends SplashController {
  render() {
    return (
      <>
        <StatusBar backgroundColor={colors.bgColor} barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer}>
            <ActivityIndicator size="large" color={colors.white} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
