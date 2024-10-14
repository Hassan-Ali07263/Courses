import React from 'react';
import {TextInput } from 'react-native';

const Input=({placeholder,placeholdertextcolor,background,color,paddingHorizontal,height,width,radius,marginVertical,keyboard,secure,value,onchange})=> {
  return (
    <TextInput 
    style={{
        backgroundColor:background,
        color:color,
        height:height,
        width:width,
        paddingHorizontal:paddingHorizontal,
        borderRadius:radius,
        marginVertical:marginVertical,
    }}
    placeholder={placeholder}
    placeholderTextColor={placeholdertextcolor}
    keyboardType={keyboard}
    secureTextEntry={secure}
    value={value}
    onChangeText={onchange}
    />
  );
}
export default Input;