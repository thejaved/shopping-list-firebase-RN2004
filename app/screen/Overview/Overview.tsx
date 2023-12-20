import React from 'react';
import {colors} from '../../config';
import {AppHeader} from '../../components';
import OverviewController from './OverviewController';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';

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
