import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../../enums/FontStyles';
import { IMAGES } from '../../assets/images';
import { MainLogo } from '../../assets/svgs';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            check();
        }, 2000)
    }, [])

    const check=async()=>{
        const checking=await AsyncStorage.getItem("val")
        console.log(checking);
        if(checking==="true")
        {
            navigation.navigate("BottomTabs")
        }
        else{
            navigation.navigate("Onboarding")
        }
    }

    return (
        <ImageBackground style={styles.imgBack} source={IMAGES.SplashBack}>
            <StatusBar barStyle={"dark-content"} backgroundColor={COLORS.greywhite} />
            <MainLogo />
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    imgBack: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Splash;