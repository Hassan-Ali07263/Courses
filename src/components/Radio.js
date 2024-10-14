import React from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../enums/FontStyles';
import { Check } from '../assets/svgs';

const Radio=({check,onPress})=> {
  return (
    <TouchableOpacity onPress={onPress}
    style={styles.view }>
        {
            check===true ? <Check/>:null
        }
     </TouchableOpacity>
  );
}


const styles=StyleSheet.create({
    view:{
        height:20,
        width:20,
        backgroundColor:COLORS.pink,
        borderRadius:5,
        marginRight:10,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Radio;