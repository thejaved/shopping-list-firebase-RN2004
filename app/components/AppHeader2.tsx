import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
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
  loading?: boolean;
  isPublish?: boolean;
  lablePublish?: string;
  onPressBack?: ((event: GestureResponderEvent) => void) | undefined;
  onPressPublish?: ((event: GestureResponderEvent) => void) | undefined;
}

const AppHeader2: React.FC<P> = ({
  title,
  loading,
  isPublish,
  onPressBack,
  lablePublish,
  onPressPublish,
}) => {
  return (
    <View style={styles.createPostHeader}>
      <View style={styles.leftContent}>
        <TouchableOpacity onPress={onPressBack}>
          <AntDesign
            name="arrowleft"
            color={colors.black}
            size={responsiveFontSize(3)}
          />
        </TouchableOpacity>
        <Text style={styles.labelCreatePostStyle}>{title}</Text>
      </View>
      {isPublish && (
        <TouchableOpacity style={styles.btnPublish} onPress={onPressPublish}>
          {loading && <ActivityIndicator color={colors.white} />}
          {!loading && (
            <Text style={styles.labelPublishStyle}>
              {lablePublish ? lablePublish : 'Publish'}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader2;

const styles = StyleSheet.create({
  createPostHeader: {
    width: '100%',
    height: responsiveHeight(8),
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelCreatePostStyle: {
    color: colors.black,
    fontFamily: fonts.KanitRegular,
    fontSize: responsiveFontSize(2.5),
    marginLeft: responsiveWidth(2),
  },
  btnPublish: {
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(2),
    paddingVertical: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4),
  },
  labelPublishStyle: {
    color: colors.white,
    fontFamily: fonts.KanitRegular,
  },
});
