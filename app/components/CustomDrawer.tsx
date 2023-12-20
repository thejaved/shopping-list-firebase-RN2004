import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {colors} from '../config';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    width: '100%',
    height: responsiveHeight(25),
    backgroundColor: colors.primary,
  },
});
