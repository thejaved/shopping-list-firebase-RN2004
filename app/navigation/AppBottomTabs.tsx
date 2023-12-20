import {colors} from '../config';
import {Overview, Profile} from '../screen';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function AppBottomTabs() {
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
