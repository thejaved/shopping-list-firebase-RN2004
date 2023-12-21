import {colors} from '../config';
import {CreatePost, Overview, Profile} from '../screen';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

function AppBottomTabs(props: any) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          height: responsiveHeight(8),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Overview}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign
              name="laptop"
              size={responsiveFontSize(3)}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              style={styles.createButtonStyle}
              onPress={() => props.navigation.navigate('CreatePost')}>
              <AntDesign
                name="plus"
                size={responsiveFontSize(3)}
                color={colors.white}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={responsiveFontSize(3)} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppBottomTabs;

const styles = StyleSheet.create({
  createButtonStyle: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    backgroundColor: colors.primary,
    top: responsiveHeight(-4),
    borderRadius: responsiveWidth(7.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
