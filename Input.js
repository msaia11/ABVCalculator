import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ProgressViewIOSComponent } from 'react-native';
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Input = ({volume, onChangeVolume, id}) => {
  const [inputVolume, setInputVolume] = useState('');
  const [inputABV, setInputABV] = useState('');
  const [inputPrice, setInputPrice] = useState('');

  const handleChange = (text) => {
    onChangeVolume(id, text);
  }

  return (
    <View style = {styles.inputSection}>
      <View style = {{flexDirection: 'row', marginHorizontal: 10}}>
        <TextInput style = {styles.input}
          keyboardType = 'numeric'
          underlineColorAndroid = 'transparent'
          placeholder = 'Volume'
          placeholderTextColor = "#9a73ef"
          onChangeText = {(text) => {
            handleChange(text) }}
          value = {volume}
          textAlign = 'center'/>
          <View style = {{justifyContent: "center"}}>
            <Text>oz</Text>
          </View>
      </View>
      <View style = {{flexDirection: 'row', marginHorizontal: 10}}>
        <TextInput style = {styles.input}
          keyboardType = 'numeric'
          underlineColorAndroid = 'transparent'
          placeholder = 'ABV'
          placeholderTextColor = "#9a73ef"
          onChangeText = {setInputABV}
          value = {inputABV}
          textAlign = 'center'/>
          <View style = {{justifyContent: "center"}}>
            <Text>%</Text>
          </View>
      </View>
      <View style = {{flexDirection: 'row', marginHorizontal: 10}}>
        <View style = {{justifyContent: "center"}}>
          <Text>$</Text>
        </View>
        <TextInput style = {styles.input}
          keyboardType = 'numeric'
          underlineColorAndroid = 'transparent'
          placeholder = 'Price'
          placeholderTextColor = "#9a73ef"
          onChangeText = {setInputPrice}
          value = {inputPrice}
          textAlign = 'center'/>
      </View> 
      <View>
        <TextInput>{volume}</TextInput>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  adSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7a42f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    width: '40%',
  },
  buttonText:{
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#f5deb3',
    paddingTop: 100,
    alignItems: 'center',
  },
  descriptionText: {
    paddingTop: 20
  },
  headerText: {
    fontSize: 20
  },
  input: {
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: 50,
    borderRadius: 10,
  },
  inputSection: {
    flexDirection: 'row',
    paddingTop: 25,
  },
  topSection: {
    paddingHorizontal: 15
  }
});

export default Input