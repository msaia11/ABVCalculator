import { useState } from "react"
import Input from "./Input";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


const InputContainer = props => {
  const [volumes, setVolumes] = useState({});
  const hanldeVolumeChange = (volumeId, volume) => {
    setVolumes({...volumes, [volumeId]: volume});
  };

  const inputs = props.inputs.map(input => (
    <Input
      key={input}
      id={input}
      onChangeVolume={hanldeVolumeChange}
      volume={volumes[input]}/>
  ))

  return (
    <View>
      {inputs}
    </View>
  )
}

export default InputContainer;