import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet,TouchableOpacity,Alert } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, Timestamp, doc, setDoc } from 'firebase/firestore';

export default function SignUpScreen() {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const firestore = getFirestore();
  
    const handleRegister = async () => {
      setLoading(true);
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        
        if (auth.currentUser?.uid) {
          const uid = auth.currentUser.uid;
          await setDoc(doc(firestore, 'users', uid), {
            name: name,
            email: email,
            username: username,
            createdAt: Timestamp.fromDate(new Date()),
          });
          console.log(response);
          Alert.alert("Account registered.")
        } else {
          throw new Error("User ID is undefined.");
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          alert('Registration failed: ' + error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.createText}>Create an account</Text>
            <TextInput 
                placeholder="Name" 
                style={styles.input}
                value={name}
                autoCapitalize="none"
                onChangeText={(text) => setName(text)}
                />

            <TextInput 
            placeholder="Username" 
            style={styles.input} 
            value={username}
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)} 
            />

            <TextInput  
            placeholder="Email"  
            style={styles.input} 
            value={email}
            autoCapitalize="none"
            onChangeText={(text)=>{setEmail(text)}}
            />

            <TextInput 
            placeholder="Password" 
            style={styles.input} 
            value={password}
            onChangeText = {(text)=>{setPassword(text)}}
            secureTextEntry
            />
            <TouchableOpacity style = {styles.submit} onPress={handleRegister}><Text style={styles.submitText}>Sign up</Text></TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    createText: {
        color: '#2E3444',
        fontSize: 30,
        marginBottom: 85,
        marginTop: 100,
        textAlign: 'center',
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
        width: "80%",
        },
    submitText: {
        color: '#FCFCFC',
        },
});
