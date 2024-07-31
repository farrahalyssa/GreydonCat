import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Main/Profile';
import Messaging from '../Screens/Main/Messaging';
import MessageList from '../Screens/Main/MessageList';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator initialRouteName='Profile' screenOptions={{
        tabBarActiveTintColor: '#8BAAA6',
        tabBarInactiveTintColor: '#0d0d0d',
        headerTintColor: '#F2F2F2',
        headerBackTitleVisible: false,
        headerStyle:{ backgroundColor: '#8BAAA6', 
      },
     
      }}>
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="MessageList" component={MessageList}/>
    </Tab.Navigator>
  );
}