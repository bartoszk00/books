import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import React, { useState } from "react";
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";


export default function ScreenTab1F({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require("./log2.png")} />
        <Text style={styles.mytext}>Najpopularniejsze książki</Text>
        <Text style={styles.mytexta}>xxxhPa</Text>
        <Text style={styles.mytexta}>dobre ciśnienie do czytania</Text>
        <ScrollView style={styles.scrollView}>
                                    <View style={styles.sview}>
                                     <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
                                     <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
                                     <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
                                     <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
                                     <StatusBar style="auto" />
                                    </View>
                                    <View style={styles.sview}>
                                        <Text style={styles.mytextb}>Ksiazka1</Text>
                                        <Text style={styles.mytextb}>Ksiazka2</Text>
                                        <Text style={styles.mytextb}>Ksiazka3</Text>
                                        <Text style={styles.mytextb}>Ksiazka4</Text>
                                    </View>
                                </ScrollView>
                                <ScrollView style={styles.scrollView}>
                                                                    <View style={styles.sview}>
                                                                     <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
                                                                     <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
                                                                     <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
                                                                     <Image style={styles.imagek} source={require("./ksiazka2.jpeg")} />
                                                                     <StatusBar style="auto" />
                                                                    </View>
                                                                    <View style={styles.sview}>
                                                                        <Text style={styles.mytextb}>Ksiazka5</Text>
                                                                        <Text style={styles.mytextb}>Ksiazka6</Text>
                                                                        <Text style={styles.mytextb}>Ksiazka7</Text>
                                                                        <Text style={styles.mytextb}>Ksiazka8</Text>
                                                                    </View>
                                                                </ScrollView>
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
    sview: {
           flexDirection: 'row',

        },

  image: {
    marginBottom: 5,
  },

   imagek: {
         marginBottom: 5,
         height: 145,
         width: 80,
         marginLeft: 5,
         marginTop: 1,
       },
    imagek2: {
          marginBottom: 5,
          height: 150,
          width: 100,
          marginRight: 260,
          marginTop: 1,
    },
  loginText:{
    placeholderTextColor: "#FFFFFF",
  },

  mytext:{
    height: 30,
    marginBottom: 20,
  },

  mytexta:{
      height: 30,
      marginTop: 0,
      marginBottom: 0,
      color: "green",
    },
     mytextb:{
          height: 30,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 25,
          textAlign: 'center',
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
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#1D33DE",
  },
});