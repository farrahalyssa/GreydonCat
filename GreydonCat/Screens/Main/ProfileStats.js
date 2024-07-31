import React from "react";
import {SafeAreaView, Text, TouchableOpacity, Image, StyleSheet} from "react-native";

export default function ProfileStats(){
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.stat}>
                <Text><Text style={{fontWeight:'bold'}}>∞</Text> Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.stat}>
                <Text><Text style={{fontWeight:'bold'}}>2</Text> Unread</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:50,
        width:'65%',
        marginHorizontal:'auto',
        marginBottom:100,
      },
      stat: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:'auto',

      }    
});