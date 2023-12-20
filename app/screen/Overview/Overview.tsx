import React from 'react';
import {colors} from '../../config';
import {AppHeader} from '../../components';
import OverviewController from './OverviewController';
import {Text, StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';

export default class Overview extends OverviewController {
  render() {
    return (
      <>
        <StatusBar
          translucent={false}
          barStyle="dark-content"
          backgroundColor={colors.white}
        />
        <SafeAreaView style={styles.container}>
          <AppHeader title="Overview" onPressRightIcon={this.onToggleDrawer} />
          <Text>Overview</Text>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
});
