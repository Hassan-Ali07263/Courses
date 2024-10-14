import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainLogo } from '../../assets/svgs';
import { COLORS, FONTS } from '../../enums/FontStyles';
import Bottons from '../../components/Bottons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.view}>
            <MainLogo />
            <Text style={styles.text}>Welcome to Ajheryuk</Text>
            <Text style={styles.text1}>Best and popular apps for live education course from home</Text>
            <Bottons onPress={()=>navigation.navigate("Login")} title={"Get Started"} backgroundcolor={COLORS.red} width={"100%"} height={56} borderradius={8} color={COLORS.white} fontFamily={FONTS.medium} fontSize={16} justifycontent={"center"} alignItems={"center"} elevation={5} shadowopacity={1} />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: "30%",
        alignItems: "center",
    },
    text: {
        fontFamily: FONTS.semibold,
        fontSize: 24,
        color: COLORS.black,
        marginTop: "22%"
    },
    text1: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.grey,
        textAlign: "center",
        marginBottom: "17%"
    }
})
export default Welcome;