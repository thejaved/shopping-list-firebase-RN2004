import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import ProfileController from './ProfileController';
import AppHeader from '../../components/AppHeader';
import {colors} from '../../config';

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
