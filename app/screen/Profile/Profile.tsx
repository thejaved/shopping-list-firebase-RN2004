import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import ProfileController from './ProfileController';
import AppHeader from '../../components/AppHeader';

export default class Profile extends ProfileController {
  render() {
    return (
      <SafeAreaView>
        <AppHeader title="Profile" />
        <Text>Profile</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
