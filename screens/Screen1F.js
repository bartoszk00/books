import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import React, { useState } from "react";
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Screen1F({navigation}) {
  return (
      <View style={styles.container}>
            <Image style={styles.image} source={require("./log2.png")} />
            <Text style={styles.mytext}>Rejestracja</Text>
            <StatusBar style="auto" />
            <Text style={styles.newtext}>Imię</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Wprowadź swoje imię"
                placeholderTextColor="#acaebd"
                onChangeText={(login) => setLogin(login)}
              />
            </View>
            <Text style={styles.nazwtext}>Nazwisko</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Wprowadź swoje nazwisko"
                placeholderTextColor="#acaebd"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <Text style={styles.newtext}>Email</Text>
             <View style={styles.inputView}>
                 <TextInput
                      style={styles.TextInput}
                      placeholder="Wprowadź swój email"
                      placeholderTextColor="#acaebd"
                      onChangeText={(login) => setLogin(login)}
                  />
              </View>
              <Text style={styles.newtext}>Hasło</Text>
               <View style={styles.inputView}>
                   <TextInput
                        style={styles.TextInput}
                        placeholder="Wprowadź hasło"
                        placeholderTextColor="#acaebd"
                        onChangeText={(login) => setLogin(login)}
                    />
               </View>

            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Domowa", {language: "english"})}>
              <Text style={styles.loginText}>Rejestruj</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Domowa", {language: "english"})}>
                    <Text style={styles.forgot_button}>Logowanie</Text>
            </TouchableOpacity>
          </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 5,

  },

  loginText:{
    placeholderTextColor: "#FFFFFF",
  },

  mytext:{
    height: 30,
    marginBottom: 20,
  },

  loginText:{
    color: "white",
  },

  newtext:{
    marginRight: 220,
    marginBottom:10,
  },
  nazwtext:{
    marginRight: 190,
    marginBottom:10,
  },

  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "70%",
    height: 40,
    marginBottom: 20,
    alignItems: "left",
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
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#1D33DE",
  },
});