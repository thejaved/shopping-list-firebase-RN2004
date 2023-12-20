import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = (props: any) => {
  const logOut = async () => {
    await AsyncStorage.removeItem('AUTHID');
    props.navigation.navigate('Splash');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.logOutContainer}>
        <AntDesign
          name="logout"
          size={responsiveFontSize(2)}
          color={colors.white}
        />
        <TouchableOpacity onPress={logOut}>
          <Text style={styles.lableLogOutStyle}>LogOut</Text>
        </TouchableOpacity>
      </View>
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
  logOutContainer: {
    width: '100%',
    height: responsiveHeight(8),
    backgroundColor: colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(5),
  },
  lableLogOutStyle: {
    fontFamily: fonts.KanitRegular,
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    color: colors.white,
  },
});
