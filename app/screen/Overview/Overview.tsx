import React from 'react';
import {colors, fonts} from '../../config';
import {AppHeader} from '../../components';
import OverviewController, {post} from './OverviewController';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default class Overview extends OverviewController {
  ListEmptyComponent = () => (
    <View style={styles.labelPostContainer}>
      <Text style={styles.labelPost}>No post available</Text>
    </View>
  );
  ListFooterComponent = () => <View style={styles.extraSpace} />;

  renderItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.postItemContainer}>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
        <View style={styles.postContent}>
          <Text style={styles.labelTitleStyle}>{item.title}</Text>
          <Text numberOfLines={2} style={styles.labelDescriptionStyle}>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

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
          <FlatList
            style={styles.flatlist}
            data={this.state.allPost}
            keyExtractor={item => item.id}
            refreshing={this.state.refreshing}
            onRefresh={() => this.onRefresh()}
            renderItem={this.renderItem}
            ListEmptyComponent={this.ListEmptyComponent}
            ListFooterComponent={this.ListFooterComponent}
          />
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
  flatlist: {
    paddingHorizontal: responsiveWidth(5),
  },
  postItemContainer: {
    width: '100%',
    marginTop: responsiveWidth(5),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(2),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: responsiveHeight(20),
  },
  postContent: {
    padding: responsiveWidth(2),
  },
  labelTitleStyle: {
    color: colors.black,
    fontFamily: fonts.KanitSemiBold,
    fontSize: responsiveFontSize(2.5),
  },
  labelDescriptionStyle: {
    fontFamily: fonts.KanitRegular,
  },
  extraSpace: {
    height: responsiveHeight(10),
  },
  labelPostContainer: {
    width: '100%',
    height: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelPost: {
    fontFamily: fonts.KanitRegular,
  },
});
