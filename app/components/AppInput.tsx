import React from 'react';
import {colors, fonts} from '../config';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';

interface P {
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const AppInput: React.FC<P> = ({placeholder, containerStyle}) => {
  return (
    <View style={[styles.inputContianer, containerStyle]}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputContianer: {
    width: '100%',
    height: responsiveHeight(6),
  },
  input: {
    width: '100%',
    height: '100%',
    borderBottomWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    fontFamily: fonts.KanitRegular,
    paddingHorizontal: responsiveWidth(2),
    borderTopLeftRadius: responsiveWidth(2),
    borderTopRightRadius: responsiveWidth(2),
  },
});
