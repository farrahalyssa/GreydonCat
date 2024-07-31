import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MessageBubble from './MessageBubble';
import { TextInput } from 'react-native-gesture-handler';

export default function Messaging(){
    const messages = [
        { id: '1', text: 'Wanna play roblox', isSender: true },
        { id: '2', text: 'Who is this', isSender: false },
        { id: '3', text: "I'm your mom's friend, Liz Smith", isSender: true },
        { id: '4', text: 'I am fine too. What are you up to?', isSender: false },
        { id: '5', text: 'Just working on some code. You?', isSender: true },
        { id: '6', text: 'Same here. Working on a new project.', isSender: false },
        { id: '7', text: 'Sounds interesting! What is it about?', isSender: true },
        { id: '8', text: 'It\'s a mobile app for managing tasks.', isSender: false },
        { id: '9', text: 'That sounds really useful!', isSender: true },
        { id: '10', text: 'Yeah, I hope it will help people stay organized.', isSender: false },
      ];
      

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageBubble message={item.text} isSender={item.isSender} />}
        keyExtractor={(item) => item.id}
      />
      <TextInput style={styles.typeBox} placeholder="Type something..."></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  typeBox: {
    borderRadius:"25%",
    borderWidth: 1,
    padding:20,
    borderColor: '#8BAAA6',
    backgroundColor: '#f2efef',
    marginBottom:40,
    width:'95%',
    marginHorizontal:'auto'
  }
});

