import React from "react";
import {View, Image, StyleSheet} from "react-native";

export default function Logo(){
    return(
        <View>
        <Image source={require('../assets/2.png')} style={styles.container}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: 350,
        height: 350,
        padding: 0,
        marginBottom: -60,
    }
});