import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';

var firebaseConfig = {
  apiKey: "AIzaSyCUglAox_6DJ83TLMmhQvTBvhIJgNyso98",
  authDomain: "news-site-30650.firebaseapp.com",
  projectId: "news-site-30650",
  storageBucket: "news-site-30650.appspot.com",
  messagingSenderId: "647658439837",
  appId: "1:647658439837:web:8e96807dc6d83c18c0c074",
  measurementId: "G-6ZS3XKZL11"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Buket Ajda Tarik</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
