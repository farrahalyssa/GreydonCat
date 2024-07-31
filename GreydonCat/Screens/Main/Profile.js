import React from "react";
import {SafeAreaView, Text, TouchableOpacity, Image, StyleSheet} from "react-native";
import ProfileStats from "./ProfileStats";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FirebaseConfig";
import { FIREBASE_APP } from "../../FirebaseConfig";
import { useNavigation } from '@react-navigation/native';

export default function Profile(){
    const db = FIREBASE_DB;
    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();
    async function handleLogout(){
            try {
              await auth.signOut();
              console.log('User signed out!');
              navigation.replace('LoginScreen');
            } catch (error) {
              console.error('Error signing out: ', error);
            }
    }

    async function deleteAccount(){

       
        const user = auth.currentUser;

            if (user) {
              const userId = user.uid;
          
              try {
                await user.delete();
                console.log('User account deleted');
                navigation.replace('LoginScreen');
              } catch (error) {
                console.error('Error deleting account: ', error);
              }
    }
}
    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/FakeGreydon.jpg')} style={styles.imageContainer}/>
            <Text style={styles.textName}>Avnee</Text>
            <Text style={styles.username}>@Pixie_gymnast1</Text>
            <Text style={styles.statusText}>ACTIVE</Text>
            <Text style={styles.bioText}>💅💅💅💅DTI queen💅💅💅💅</Text>
            <ProfileStats/>
            <TouchableOpacity style={styles.submit} onPress={handleLogout}><Text style={styles.submitText}>Log out</Text></TouchableOpacity>
            <TouchableOpacity style={styles.submit} onPress={deleteAccount}><Text style={styles.submitText}>Delete account</Text></TouchableOpacity>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  
    imageContainer:{
        borderRadius:'100%',
        width:200,
        height:200,
        marginTop:'10%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textName:{
        fontSize:20,
        marginTop: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    username:{
        
        textAlign: 'center',

    },
    statusText:{
        fontWeight: 'bold',
        color: '#009e49',
        textAlign: 'center',
        marginTop:15,
    },
    bioText:{
        marginHorizontal:50,
        textAlign: 'center',
        marginTop:30,
    },
    submit: {
        backgroundColor: '#8baaa7',
        borderRadius: 16,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: '80%',
        marginHorizontal:'auto',
      },
      submitText: {
        color: '#FCFCFC',
      },
});