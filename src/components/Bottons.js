import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Bottons = ({title,position,bottom,backgroundcolor,marginHorizontal,width,height,borderradius,color,fontFamily,fontSize,marginVertical,justifycontent,alignItems,elevation,shadowopacity,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}
        style={{
            backgroundColor:backgroundcolor,
            height:height,
            width:width,
            justifyContent:justifycontent,
            alignItems:alignItems,
            borderRadius:borderradius,
            elevation:elevation,
            shadowOpacity:shadowopacity,
            marginVertical:marginVertical,
            marginHorizontal:marginHorizontal,
            position:position,
            bottom:bottom

        }}>
            <Text style={{
                color:color,
                fontFamily:fontFamily,
                fontSize:fontSize
            }}>{title}</Text>
        </TouchableOpacity>
    );
}
export default Bottons;