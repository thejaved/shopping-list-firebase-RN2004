import {Home, Profile} from '../screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppBottomTabs from './AppBottomTabs';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppBottomTabs"
        component={AppBottomTabs}
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
