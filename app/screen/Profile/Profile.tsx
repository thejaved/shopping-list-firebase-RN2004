import React from 'react';
import {colors} from '../../config';
import {AppHeader} from '../../components';
import ProfileController from './ProfileController';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

export default class Profile extends ProfileController {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title="Profile" />
        <Text>Profile</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
});
