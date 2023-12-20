import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import HomeController from './HomeController';
import AppHeader from '../../components/AppHeader';
import {colors} from '../../config';

export default class Home extends HomeController {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title="Products" onPressRightIcon={this.onToggleDrawer} />
        <Text>Products</Text>
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
