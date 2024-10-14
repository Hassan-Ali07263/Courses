import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { COLORS, FONTS } from '../../enums/FontStyles';
import { IMAGES } from '../../assets/images';
import Bottons from '../../components/Bottons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation=useNavigation();
  const logouts=async()=>{
    await AsyncStorage.setItem("val","false");
    navigation.navigate("Login")
  }
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLORS.red} barStyle={"light-content"} />
      <View style={styles.view1}>
        <Image style={styles.img} source={IMAGES.FinalProfile} />
        <Text style={styles.text}>Khuzaima</Text>
        <Text style={styles.text1}>Grade:C ID:S7689</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text2}>User Details</Text>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Text style={styles.text3}>Name</Text>
            <Text style={styles.text4}>Khuzaima</Text>
          </View>

          <View style={styles.view4}>
            <Text style={styles.text3}>Register Course</Text>
            <Text style={styles.text4}>UI/UX Designing</Text>
          </View>

          <View style={styles.view4}>
            <Text style={styles.text3}>Gender</Text>
            <Text style={styles.text4}>Male</Text>
          </View>

          <View style={styles.view4}>
            <Text style={styles.text3}>Roll Number</Text>
            <Text style={styles.text4}>09</Text>
          </View>

          <View style={styles.view4}>
            <Text style={styles.text3}>Learning Mode</Text>
            <Text style={styles.text4}>Physical Learning</Text>
          </View>

          <View style={styles.view4}>
            <Text style={styles.text3}>Address</Text>
            <Text style={styles.text4}>W Block Street 4</Text>
          </View>

          <View style={styles.view5}>
            <Text style={styles.text3}>Institute Branch</Text>
            <Text style={styles.text4}>Dev Soft Global Services</Text>
          </View>
        </View>

      <Bottons onPress={()=>logouts()} title={"Log out"} backgroundcolor={COLORS.red} width={"100%"} height={42} borderradius={26} color={COLORS.white} fontFamily={FONTS.regular} fontSize={14} justifycontent={"center"} alignItems={"center"} elevation={10} shadowopacity={1} marginVertical={40} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  view1: {
    backgroundColor: COLORS.red,
    flex: 1,
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30
  },
  view2: {
    flex: 2.5,
    marginHorizontal: 20,
    marginVertical: 20
  },
  img: {
    height: 96,
    width: 96,
    borderRadius: 90
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: 18,
    color: COLORS.white
  },
  text1: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLORS.red,
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    borderRadius: 5
  },
  text2: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.red
  },
  text3: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.black,
    flex: 1,
    padding: 10

  },
  text4: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.red,
    flex: 1,
    padding: 10
  },
  view4: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: COLORS.red1
  },
  view5: {
    flexDirection: "row",
  },
  view3: {
    backgroundColor: COLORS.pink,
    borderWidth: 1,
    borderColor: COLORS.red1,
    borderRadius: 17
  }
})
export default Profile;