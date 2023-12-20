import AppBottomTabs from './AppBottomTabs';
import CustomDrawer from '../components/CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors, fonts} from '../config';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.primary,
        drawerLabelStyle: {
          fontFamily: fonts.KanitRegular,
        },
      }}>
      <Drawer.Screen name="Overview" component={AppBottomTabs} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
