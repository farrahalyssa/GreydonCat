import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './Navigator/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MessageList from './Screens/Main/MessageList';

export default function App() {
  return (
      <NavigationContainer>
      <AuthNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
