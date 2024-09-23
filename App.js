import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from "react";
import {AntDesign} from '@expo/vector-icons'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads' 

const adUnitIdTop = "ca-app-pub-3940256099942544/6300978111"//"ca-app-pub-1985971607756371/2941527958";
const adUnitIdBottom = "ca-app-pub-3940256099942544/6300978111" //"ca-app-pub-1985971607756371/8762576096";
const showAds = false;

const App = () => {
  const [inputVolume, setInputVolume] = useState('');
  const [inputABV, setInputABV] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputVolume2, setInputVolume2] = useState('');
  const [inputABV2, setInputABV2] = useState('');
  const [inputPrice2, setInputPrice2] = useState('');
  const [inputVolume3, setInputVolume3] = useState('');
  const [inputABV3, setInputABV3] = useState('');
  const [inputPrice3, setInputPrice3] = useState('');
  const [showInput2, setShowInput2] = useState(false);
  const [showInput3, setShowInput3] = useState(false);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showResult1, setShowResult1] = useState(false);
  const [showResult2, setShowResult2] = useState(false);
  const [showResult3, setShowResult3] = useState(false);
  const [showBottomAd, setShowBottomAd] = useState(true);

  const calculate = () => {
    console.log(this);
    if (!inputVolume) {
      alert("Volume must be filled out for drink #1")
      return;
    }
    else if (!inputABV) {
      alert("ABV must be filled out for drink #1")
      return;
    }
    else if (!inputPrice) {
      alert("Price must be filled out for drink #1")
      return;
    }
    else if (showInput2 && !inputVolume2) {
      alert("Volume must be filled out for drink #2")
      return;
    }
    else if (showInput2 && !inputABV2) {
      alert("ABV must be filled out for drink #2")
      return;
    }
    else if (showInput2 && !inputPrice2) {
      alert("Price must be filled out for drink #2")
      return;
    }
    else if (showInput3 && !inputVolume3) {
      alert("Volume must be filled out for drink #3")
      return;
    }
    else if (showInput3 && !inputABV3) {
      alert("ABV must be filled out for drink #3")
      return;
    }
    else if (showInput3 && !inputPrice3) {
      alert("Price must be filled out for drink #3")
      return;
    }

    //Do calculations
    setValue((inputVolume * inputABV / 100 / inputPrice).toFixed(3));
    setShowResult1(true);

    if (showInput2) {
      setValue2((inputVolume2 * inputABV2 / 100 / inputPrice2).toFixed(3));
      setShowResult2(true);
    }
    if (showInput3) {
      setValue3((inputVolume3 * inputABV3 / 100 / inputPrice3).toFixed(3));
      setShowResult3(true);
    }
    setShowResults(true);
    setShowBottomAd(true);
    Keyboard.dismiss();
  }

  const addInput = () => {
    if (showInput3) {
      alert("Only three inputs are supported")
    }
    else if (showInput2 == false) {
      setShowInput2(true);
    }
    else if (showInput3 == false) {
      setShowInput3(true);
    }
  }

  const removeInput = () => {
    if (showInput2 == false) {
      alert("There must be at least input")
    }
    else if (showInput3) {
      setShowInput3(false);
      setShowResult3(false);
      setInputABV3('');
      setInputPrice3('');
      setInputVolume3('');
    }
    else if (showInput2) {
      setShowInput2(false);
      setShowResult2(false);
      setInputABV2('');
      setInputPrice2('');
      setInputVolume2('');
    }
  }

  //Input change handlers
  const handleInputVolume = (newText) => {
    clearResults();
    setInputVolume(newText); 
  }

  const handleInputABV = (newText) => {
    clearResults();
    setInputABV(newText); 
  }

  const handleInputPrice = (newText) => {
    clearResults();
    setInputPrice(newText); 
  }

  const handleInputVolume2 = (newText) => {
    clearResults();
    setInputVolume2(newText); 
  }

  const handleInputABV2 = (newText) => {
    clearResults();
    setInputABV2(newText); 
  }

  const handleInputPrice2 = (newText) => {
    clearResults();
    setInputPrice2(newText); 
  }

  const handleInputVolume3 = (newText) => {
    clearResults();
    setInputVolume3(newText); 
  }

  const handleInputABV3 = (newText) => {
    clearResults();
    setInputABV3(newText); 
  }

  const handleInputPrice3 = (newText) => {
    clearResults();
    setInputPrice3(newText); 
  }

  const clearResults = () => {
    setShowResult1(false);
    setShowResult2(false);
    setShowResult3(false); 
    setShowBottomAd(false);
  }

  const touchScreen = () => {
    Keyboard.dismiss();
    setShowBottomAd(true);
  }

  return (
    <TouchableWithoutFeedback onPress = {touchScreen} accessible = {false}>
    <View style={styles.container}>
      {showAds && <View style={styles.adSection}>
        <BannerAd unitId = {adUnitIdTop} size = {BannerAdSize.ANCHORED_ADAPTIVE_BANNER}/>
      </View>}
      <View style={styles.topSection}>
        <Text style={styles.headerText}>Welcome to the ABV Value Calculator!</Text>
        <Text style={styles.descriptionText}>Want to get the most alcohol content for your money spent? Compare ABV, volume, and price across drinks to get the best deal.</Text>
      </View> 
      <View style = {styles.inputSection}>
        <View style = {{flexDirection: 'row', marginHorizontal: 10}}>
          <View style = {{justifyContent: "center", marginRight: 10}}>
            <Text style={{fontWeight: 'bold'}}>#1</Text>
          </View>
          <TextInput style = {styles.input}
            keyboardType = 'numeric'
            underlineColorAndroid = 'transparent'
            placeholder = 'Volume'
            placeholderTextColor = "#9a73ef"
            onChangeText = {newText => handleInputVolume(newText)}
            value = {inputVolume}
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
            onChangeText = {newText => handleInputABV(newText)}
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
            onChangeText = {newText => handleInputPrice(newText)}
            value = {inputPrice}
            textAlign = 'center'/>
        </View> 
      </View>
      {showInput2 &&
      <View style = {styles.inputSection}>
        <View style = {{flexDirection: 'row', marginHorizontal: 10}}>
          <View style = {{justifyContent: "center", marginRight: 10}}>
              <Text style={{fontWeight: 'bold'}}>#2</Text>
          </View>
          <TextInput style = {styles.input}
            keyboardType = 'numeric'
            underlineColorAndroid = 'transparent'
            placeholder = 'Volume'
            placeholderTextColor = "#9a73ef"
            onChangeText = {newText => handleInputVolume2(newText)}
            value = {inputVolume2}
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
            onChangeText = {newText => handleInputABV2(newText)}
            value = {inputABV2}
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
            onChangeText = {newText => handleInputPrice2(newText)}
            value = {inputPrice2}
            textAlign = 'center'/>
        </View> 
      </View>
      }
      {showInput3 &&
      <View style = {styles.inputSection}>
        <View style = {{flexDirection: 'row', marginHorizontal: 10}}>
          <View style = {{justifyContent: "center", marginRight: 10}}>
              <Text style={{fontWeight: 'bold'}}>#3</Text>
          </View>
          <TextInput style = {styles.input}
            keyboardType = 'numeric'
            underlineColorAndroid = 'transparent'
            placeholder = 'Volume'
            placeholderTextColor = "#9a73ef"
            onChangeText = {newText => handleInputVolume3(newText)}
            value = {inputVolume3}
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
            onChangeText = {newText => handleInputABV3(newText)}
            value = {inputABV3}
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
            onChangeText = {newText => handleInputPrice3(newText)}
            value = {inputPrice3}
            textAlign = 'center'/>
        </View> 
      </View>
      }
      <View style = {{flexDirection: 'row', paddingTop: 20}}>
        <View style = {{marginHorizontal: 10}}>
          <AntDesign name = 'pluscircleo' 
            size = {40}
            color = {showInput3 ? 'gray' : '#7a42f4'}
            onPress = {addInput}/>
        </View>
        <View style = {{marginHorizontal: 10}}>
          <AntDesign name = 'minuscircleo' 
          size = {40}
          color = {showInput2 == false ? 'gray' : '#7a42f4'}
          onPress = {removeInput}/>
        </View>
      </View>
      <View style = {{paddingTop: 20}}>
        <TouchableOpacity style={styles.button}
          onPress = {calculate}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
      </View>
      <View>
        {showResults &&
        <View style = {{paddingTop: 40}}>
          {showResult1 && 
          <Text style={{fontSize: 16}}>Drink #1 has {value} oz of alcohol per dollar</Text>}
          {showResult2 && 
          <View style = {{paddingTop: 20}}>
            <Text style={{fontSize: 16}}>Drink #2 has {value2} oz of alcohol per dollar</Text>
          </View>}
          {showResult3 && 
          <View style = {{paddingTop: 20}}>
            <Text style={{fontSize: 16}}>Drink #3 has {value3} oz of alcohol per dollar</Text>
          </View>}
        </View>
        }
      </View>
      <View style={styles.adSectionBottom}>
        {showBottomAd && showAds && <BannerAd unitId = {adUnitIdBottom} size = {BannerAdSize.ANCHORED_ADAPTIVE_BANNER}/>}
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  adSection: {
    alignItems: 'center',
    paddingTop: 20
  },
  adSectionBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15
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
    //paddingTop: 50,
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
    paddingHorizontal: 15,
    paddingTop: showAds ? 10 : 70
  }
});

export default App