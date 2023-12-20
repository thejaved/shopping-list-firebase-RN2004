import React from 'react';
import {colors, fonts} from '../config';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface P {
  title: string;
  onPressRightIcon?: () => null;
}

const AppHeader: React.FC<P> = ({title, onPressRightIcon}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>{title}</Text>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.btnContainer}>
          <AntDesign
            name="plus"
            color={colors.white}
            size={responsiveFontSize(2)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressRightIcon}
          style={[styles.btnContainer, styles.menuIcon]}>
          <AntDesign
            name="menu-fold"
            color={colors.white}
            size={responsiveFontSize(2)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: responsiveHeight(10),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  labelTitle: {
    color: colors.primary,
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    fontFamily: fonts.KanitRegular,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(5),
    marginLeft: responsiveWidth(2),
  },
});
