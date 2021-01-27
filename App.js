import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import * as firebase from "firebase";
import * as FirebaseCore from 'expo-firebase-core'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  

componentDidMount = () => {
  console.log(FirebaseCore.DEFAULT_APP_OPTIONS);
}

render(){
  return (
    <View>
      <Text>Ajda buket tarık</Text>
    </View>
  );
}
}