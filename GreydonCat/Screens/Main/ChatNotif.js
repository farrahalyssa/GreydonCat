import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity, Image, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Messaging from './Messaging';


export default function ChatNotif(){
    const navigation = useNavigation();

return(
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate(Messaging)}}>
            <Image source={require('../../assets/FakeLiz.jpg')} style={styles.imageContainer}/>
            <Text style={styles.text}><Text style={{fontWeight:'bold'}}>Liz</Text>: Yeah, I hope it will help people stay organized.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
            <Image source={require('../../assets/FakeConcrete.jpg')} style={styles.imageContainer}/>
            <Text style={styles.text}><Text style={{fontWeight:'bold'}}>Concrete</Text>: :3</Text>
        </TouchableOpacity>
    </SafeAreaView>
);
}

const styles=StyleSheet.create({
    container: {
        width:'80%',
    },
    imageContainer:{
        borderRadius:'100%',
        width:80,
        height:80,
        marginTop:'10%',
        marginLeft:'5%'
    },
    buttonContainer:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    text:{
        marginTop:40,
        marginLeft:20,
    }
});