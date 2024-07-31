import React, { useState } from "react";
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import Logo from "../Logo";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const ARCHIVES_DB = FIREBASE_DB;

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', response.user.email);
      navigation.navigate('MainNavigator', {
        screen: 'Profile'
      });
      const userId = response.user.uid;
      const userDocRef = doc(ARCHIVES_DB, 'users', userId);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log('User data:', userData);
      } else {
        console.log('No such document.');
        Alert.alert('User data not found.');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      Alert.alert('Login failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePress = () => {
    navigation.navigate('SignUpScreen'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.submit} onPress={handleLogin}>
        <Text style={styles.submitText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>
      <TouchableOpacity style={styles.submit} onPress={handlePress}>
        <Text style={styles.submitText}>Create an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 51,
    borderRadius: 16,
    backgroundColor: '#E3E3E3',
    borderColor: '#E3E3E3',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    width: '80%',
  },
  submit: {
    backgroundColor: '#8baaa7',
    borderRadius: 16,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    width: '80%',
  },
  submitText: {
    color: '#FCFCFC',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    width: "80%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#8C9A9B',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 13,
  },
});
