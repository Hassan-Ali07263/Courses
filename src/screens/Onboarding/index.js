import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS } from '../../enums/FontStyles';
import { IMAGES } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const swipperRef = useRef(null);

  const next = () => {
    swipperRef.current.scrollBy(1);
  }
  return (
    <Swiper ref={swipperRef} activeDotColor={COLORS.white} scrollEnabled={false}>

      <View style={styles.view}>
        <View style={styles.view1}>
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}
            style={styles.button}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}>Apply for courses and find jobs to grow your career</Text>
          <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>

          <TouchableOpacity onPress={next}
            style={styles.button1}>
            <Text style={styles.text3}>Next</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.img} source={IMAGES.Onboard1} />

      </View>


      <View style={styles.view}>
        <View style={styles.view1}>
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}
            style={styles.button}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}>Track Your Students Attendance Seamlessly</Text>
          <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>

          <TouchableOpacity onPress={next}
            style={styles.button1}>
            <Text style={styles.text3}>Next</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.img} source={IMAGES.Onboard2} />
        <Image style={styles.img1} source={IMAGES.Onboard22} />

      </View>


      <View style={styles.view}>
        <View style={styles.view1}>

        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}>Track All Activity And Daily Test </Text>
          <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}
            style={styles.button1}>
            <Text style={styles.text3}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.img} source={IMAGES.Onboard3} />
      </View>

    </Swiper>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  view2: {
    flex: 2,
    backgroundColor: COLORS.red,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30
  },
  view1: {
    flex: 1,
    paddingHorizontal: 20,
  },
  button: {
    padding: 5,
    alignSelf: "flex-end"
  },
  text: {
    color: COLORS.darkgrey,
    fontFamily: FONTS.medium,
    fontSize: 16,
    paddingTop: 20
  },
  img: {
    position: "absolute",
    height: 250,
    width: 280,
    alignSelf: "center",
    top: "12%"
  },
  text1: {
    fontFamily: FONTS.medium,
    fontSize: 22,
    color: COLORS.white,
    textAlign: "center"
  },
  text2: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.lightgrey,
    textAlign: "center",
    marginTop: 10
  },
  button1: {
    backgroundColor: COLORS.white,
    width: "100%",
    height: 46,
    borderRadius: 20,
    borderColor: COLORS.red,
    shadowOpacity: 1,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%"
  },
  text3: {
    fontFamily: FONTS.regular,
    fontSize: 18,
    color: COLORS.red
  },
  img1: {
    width: 85,
    height: 190,
    position: "absolute",
    right: "25%",
    top: "22%"
  }
})
export default Onboarding;