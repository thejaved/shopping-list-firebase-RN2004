import {Home, Profile} from '../screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppDrawer from './AppDrawer';

const Tab = createBottomTabNavigator();

function AppBottomTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="AppDrawer" component={AppDrawer} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default AppBottomTabs;
