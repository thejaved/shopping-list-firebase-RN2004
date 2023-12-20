import AppDrawer from './AppDrawer';
import {Auth, Profile, Splash} from '../screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppDrawer"
        component={AppDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
