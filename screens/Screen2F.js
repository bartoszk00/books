import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import React, { useState } from "react";
import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";


export default function Screen2F({navigation}) {
  const [accelerometerData, setAccelerometerData] = useState({});

    useEffect(() => {
      const subscribe = Accelerometer.addListener(accelerometerData => {
        setAccelerometerData(accelerometerData);
      });

      return () => {
        subscribe.remove();
      };
    }, []);
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require("./log2.png")} />
        { accelerometerData.x > 0.53 ? (
                navigation.navigate("Rejestr", {language: "english"})
         ) : null }
        <Text style={styles.mytext}>Opis</Text>
        <TouchableOpacity style={styles.loginBtnd} onPress={()=>navigation.navigate("Rejestr", {language: "english"})}>
                <Text style={styles.loginText}>&lt;-</Text>
        </TouchableOpacity>
        <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
        <Text style={styles.mytexta}>Książka1</Text>
        <Text style={styles.mytexta}>Opis książki 1</Text>
        <View style={styles.sdview}>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Rezerwuj</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Ulubiona</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Usuń</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
  sdview: {
             flexDirection: 'row',
             marginTop: 0,
    },

  image: {
    marginBottom: 5,
  },

   imagek: {
      marginBottom: 5,
      height: 300,
      width: 300,
      marginRight: 0,
      marginTop: 0,
    },
    imagek2: {
          marginBottom: 5,
          height: 400,
          width: 200,
          marginRight: 260,
          marginTop: 1,
    },
  loginText:{
    placeholderTextColor: "#FFFFFF",
  },

  mytext:{
    height: 30,
    marginBottom: 0,
  },

  mytexta:{
      height: 30,
      marginTop: 0,
      marginBottom: 0,
      marginRight: 200,
    },
 mytextb:{
       height: 30,
       marginTop: 0,
       marginBottom: 0,
       marginLeft:25,
     },

  loginText:{
    color: "white",
  },

  newtext:{
    marginRight: 220,
    marginBottom:10,
  },

  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "70%",
    height: 40,
    marginBottom: 20,
    alignItems: "flex-start",
    borderColor: "#d4d5d9",
    borderWidth: 1,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 180,
    marginTop: 10,
  },

  loginBtn: {
    width: "30%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#1D33DE",
    marginRight: 10,
  },
  loginBtnd: {
      width: "10%",
      borderRadius: 10,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 280,
      backgroundColor: "#808080",
    },
});