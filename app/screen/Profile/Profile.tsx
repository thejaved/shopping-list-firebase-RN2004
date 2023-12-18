import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import ProfileController from './ProfileController';

export default class Profile extends ProfileController {
  render() {
    return (
      <SafeAreaView>
        <Text>Profile</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
