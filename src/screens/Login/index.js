import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native';
import Input from '../../components/Input';
import { COLORS, FONTS } from '../../enums/FontStyles';
import { Facebook, Google, Logo } from '../../assets/svgs';
import Feather from "react-native-vector-icons/Feather";
import Bottons from '../../components/Bottons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();

  const [show, setShow] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const Logined=async()=>{
    const Email=await AsyncStorage.getItem("Email")
    console.log(Email)
    const Password=await AsyncStorage.getItem("Password")
    console.log(Password)
    if(email === Email && password===Password)
    {
      navigation.navigate("BottomTabs")
    }
    else
    {
      Alert.alert("Something is missing");
    }
  }
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
      <Logo />

      <Input keyboard={"email-address"} placeholder={"Email"} placeholdertextcolor={COLORS.placeholder} background={COLORS.Inputback} color={COLORS.black} paddingHorizontal={15} height={56} width={"100%"} radius={6} marginVertical={10} value={email} onchange={(text) => setEmail(text)} />

      <View style={styles.view1}>
        <Input placeholder={"Password"} placeholdertextcolor={COLORS.placeholder} secure={show} background={COLORS.Inputback} color={COLORS.black} paddingHorizontal={15} height={56} width={"90%"} radius={6} value={password} onchange={(text) => setPassword(text)} />

        <TouchableOpacity onPress={() => setShow(!show)}>
          <Feather name={!show ? "eye" : "eye-off"} size={20} color={COLORS.placeholder} />
        </TouchableOpacity>
      </View>

      <Bottons onPress={()=>Logined()} title={"Log in"} backgroundcolor={COLORS.red} width={"100%"} height={56} borderradius={8} color={COLORS.white} fontFamily={FONTS.medium} fontSize={16} justifycontent={"center"} alignItems={"center"} elevation={10} shadowopacity={1} marginVertical={20} />

      <Bottons title={"Forgot Password?"} color={COLORS.blue} fontFamily={FONTS.medium} fontSize={16} />

      <View style={styles.view3}>
        <View style={styles.view2}></View>
        <Text style={styles.text}>or</Text>
        <View style={styles.view2}></View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Facebook />
        <Text style={styles.text1}>Log in with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1}>
        <Google />
        <Text style={styles.text2}>Log in with Google</Text>
      </TouchableOpacity>

      <View style={styles.view4}>
        <Text style={styles.text4}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.text3}>Sign up</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    alignItems: "center"
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.Inputback,
    width: "100%",
    borderRadius: 6,
    height: 56,
    marginVertical: 10
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.placeholder,
    marginVertical: 10,
    marginHorizontal: 10
  },
  view2: {
    borderTopWidth: 1,
    width: "45%",
    borderColor: COLORS.placeholder
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.white,
    marginLeft: 15
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.black,
    marginLeft: 15
  },
  button: {
    height: 56,
    width: "100%",
    backgroundColor: COLORS.blue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 10
  },
  button1: {
    height: 56,
    width: "100%",
    backgroundColor: COLORS.Inputback,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 10
  },
  view4: {
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
    marginBottom: 20

  },
  text3: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.blue
  },
  text4: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.placeholder
  }
})
export default Login;