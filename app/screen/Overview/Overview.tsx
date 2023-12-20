import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import OverviewController from './OverviewController';
import AppHeader from '../../components/AppHeader';
import {colors} from '../../config';

export default class Overview extends OverviewController {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title="Overview" onPressRightIcon={this.onToggleDrawer} />
        <Text>Overview</Text>
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
