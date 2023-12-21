import React from 'react';
import {colors} from '../../config';
import ViewPostController from './ViewPostController';
import {StyleSheet, SafeAreaView} from 'react-native';
import {AppHeader} from '../../components';

export default class ViewPost extends ViewPostController {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}></SafeAreaView>
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
