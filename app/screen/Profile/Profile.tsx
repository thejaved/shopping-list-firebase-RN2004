import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ProfileController from './ProfileController';

export default class Profile extends ProfileController {
  render() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
