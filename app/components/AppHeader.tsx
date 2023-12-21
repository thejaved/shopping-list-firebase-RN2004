import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {colors, fonts} from '../config';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface P {
  title: string;
  onPressRightIcon?: (event: GestureResponderEvent) => void;
}

const AppHeader: React.FC<P> = ({title, onPressRightIcon}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>{title}</Text>
      <View style={styles.rightContainer}>
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
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveHeight(10),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  labelTitle: {
    color: colors.primary,
    marginLeft: responsiveWidth(2),
    fontFamily: fonts.KanitRegular,
    fontSize: responsiveFontSize(2),
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(4),
  },
  menuIcon: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    marginLeft: responsiveWidth(2),
    borderRadius: responsiveWidth(5),
  },
});
