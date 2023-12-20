import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../config';
import {StyleProp, TouchableOpacityProps, ViewStyle} from 'react-native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelColor?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  containerStyle,
  labelColor = colors.white,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, containerStyle]}
      {...props}>
      <Text style={[styles.labelTitleStyle, {color: labelColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(5),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(2),
  },
  labelTitleStyle: {
    fontFamily: fonts.KanitRegular,
  },
});
