import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import HomeController from './HomeController';

export default class Home extends HomeController {
  render() {
    return (
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
