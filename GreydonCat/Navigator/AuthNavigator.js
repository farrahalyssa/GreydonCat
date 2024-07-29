import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'   screenOptions={{
        headerTintColor: '#0D0D0D',
        headerBackTitleVisible: false,
        headerStyle:{ backgroundColor: '#F8F3FA', 

      },
     
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerTitle: ' ', headerBackTitleVisible: false,
}} />
    </Stack.Navigator>
  );
}