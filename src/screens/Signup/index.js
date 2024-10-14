import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native';
import Input from '../../components/Input';
import { COLORS, FONTS } from '../../enums/FontStyles';
import { Facebook, Google, Logo } from '../../assets/svgs';
import Feather from "react-native-vector-icons/Feather";
import Bottons from '../../components/Bottons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();

  const [show, setShow] = useState(true);
  const [name,setName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigningUp=async()=>{
    if(name != "" && email!="" && password !="")
    {
      await AsyncStorage.setItem("FullName",name);
    await AsyncStorage.setItem("Email",email);
    await AsyncStorage.setItem("Password",password);
    navigation.navigate("Login")
    }
    else
    {
      Alert.alert("Oops","looks like someting went wrong")
    }

  }
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
      <Logo />

      <Input placeholder={"Fullname"} placeholdertextcolor={COLORS.placeholder} background={COLORS.Inputback} color={COLORS.black} paddingHorizontal={15} height={56} width={"100%"} radius={6} marginVertical={10} value={name} onchange={(text) => setName(text)} />

      <Input keyboard={"email-address"} placeholder={"Email"} placeholdertextcolor={COLORS.placeholder} background={COLORS.Inputback} color={COLORS.black} paddingHorizontal={15} height={56} width={"100%"} radius={6} marginVertical={10} value={email} onchange={(text) => setEmail(text)} />

      <View style={styles.view1}>
        <Input placeholder={"Password"} placeholdertextcolor={COLORS.placeholder} secure={show} background={COLORS.Inputback} color={COLORS.black} paddingHorizontal={15} height={56} width={"90%"} radius={6} value={password} onchange={(text) => setPassword(text)} />

        <TouchableOpacity onPress={() => setShow(!show)}>
          <Feather name={!show ? "eye" : "eye-off"} size={20} color={COLORS.placeholder} />
        </TouchableOpacity>
      </View>

      <Bottons onPress={()=>SigningUp()} title={"Sign Up"} backgroundcolor={COLORS.red} width={"100%"} height={56} borderradius={8} color={COLORS.white} fontFamily={FONTS.medium} fontSize={16} justifycontent={"center"} alignItems={"center"} elevation={10} shadowopacity={1} marginVertical={15} />

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

      <View style={styles.view5}>
        <Text style={styles.text5}>By signing up you accept the </Text>
        <TouchableOpacity>
          <Text style={styles.text6}>Terms and service</Text>
        </TouchableOpacity>
        <Text style={styles.text5}>and </Text>
        <TouchableOpacity>
          <Text style={styles.text6}>Privacy policy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view4}>
        <Text style={styles.text4}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text3}>Log in</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
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
  },
  text5:{
    fontFamily:FONTS.regular,
    fontSize:14,
    color:COLORS.placeholder,
  },
  text6:{
    fontFamily:FONTS.medium,
    fontSize:14,
    color:COLORS.blue,
  },
  view5:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    marginVertical:10
  }
})
export default Signup;