import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[stil.tipka, props.style]}>
        <Text style={[stil.naslov, props.stilNaslov]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
    tipka: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 5
    },
    naslov: {
      fontSize: 16
    }
  });
  
  export default Tipka;