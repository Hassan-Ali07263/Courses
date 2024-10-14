import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, ImageBackground, Modal } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS } from '../../enums/FontStyles';
import { IMAGES } from '../../assets/images';
import { Calendar, Play, Watch } from '../../assets/svgs';
import Bottons from '../../components/Bottons';
import Input from '../../components/Input';
import Radio from '../../components/Radio';
import { useNavigation } from '@react-navigation/native';

const Courses = () => {
  const navigation=useNavigation();

  const [heart, setHeart] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [open,setOpen] =useState(false);
  const [check,setCheck]=useState(false);

  const data = [
    {
      id: 1,
      name: "How to get feedback on their products in just 5 days",
      time: "04:10m"
    },
    {
      id: 2,
      name: "How to decide which prototype to implement",
      time: "05:20m"
    },
    {
      id: 3,
      name: "How to get feedback on their products in just 5 days",
      time: "04:10m"
    },
    {
      id: 4,
      name: "How to decide which prototype to implement",
      time: "06:20m"
    },
    {
      id: 5,
      name: "How to get feedback on their products in just 5 days",
      time: "04:10m"
    }
  ]
  return (
    <View style={styles.view}>

      <View style={styles.view1}>
        <TouchableOpacity onPress={()=>navigation.goBack()}
        style={styles.button}>
          <Ionicons name="chevron-back" size={20} color={COLORS.red} />
        </TouchableOpacity>
        <Text style={styles.text}>Course Details</Text>
        <TouchableOpacity onPress={() => setHeart(!heart)}>
          <Ionicons name={heart ? "heart" : "heart-outline"} size={20} color={COLORS.red} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.view2}>
        <Image style={styles.img} source={IMAGES.courseBack} />

        <Text style={styles.text1}>Step design sprint for beginner</Text>

        <View style={styles.view4}>
          <View style={styles.view3}>
            <Text style={styles.text2}>6 lessons</Text>
          </View>

          <View style={styles.view5}>
            <Text style={styles.text2}>Design</Text>
          </View>

          <View style={styles.view6}>
            <Text style={styles.text2}>Free</Text>
          </View>
        </View>

        <Text style={styles.text3}>In this course I'll show the step by step, day by day process to build better products, just as Google, Slack, KLM and manu other do.</Text>

        <View style={styles.view8}>
          <View style={styles.view7}>
            <Image style={styles.img1} source={IMAGES.Author} />
            <View>
              <Text style={styles.text4}>Laurel Seilha</Text>
              <Text style={styles.text5}>Product Designer</Text>
            </View>
          </View>
          <View>
            <View style={styles.view9}>
              <Watch />
              <Text style={styles.text6}>5h 21m</Text>
            </View>
            <View style={styles.view10}>
              <Text style={styles.text2}>Free e-book</Text>
            </View>
          </View>
        </View>

        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.view11}>
                  <ImageBackground style={styles.imgback} source={IMAGES.BaseBack} >
                    <Play />
                  </ImageBackground>
                  <View style={styles.view12}>
                    <Text style={styles.text7}>{item.name}</Text>
                    <Text style={styles.text8}>{item.time}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </ScrollView>
      <Bottons onPress={()=>setOpen(true)} title={"Follow class"} backgroundcolor={COLORS.red} height={56} width={"92%"} justifycontent={"center"} alignItems={"center"} color={COLORS.white} fontFamily={FONTS.medium} fontSize={16} marginHorizontal={15} marginVertical={10} position={"absolute"} bottom={10} borderradius={8} shadowopacity={1} elevation={5} />

      <Modal transparent={true} visible={open}>
        <View style={styles.view13}>
          <View style={styles.view14}>
            <View style={styles.view15}></View>

            <View style={styles.view17}>
              <View>
                <Text style={styles.text9}>Available time</Text>
                <Text style={styles.text10}>Adjust to your schedule</Text>
              </View>

              <TouchableOpacity style={styles.view16}>
                <Calendar />
              </TouchableOpacity>
            </View>

            <View style={styles.view18}>
              <Text style={styles.text11}>All</Text>
              <Text style={styles.text11}>All</Text>
              <Text style={styles.text11}>All</Text>
              <Text style={styles.text11}>All</Text>
              <Text style={styles.text11}>All</Text>
              <Text style={styles.text11}>All</Text>
              <Text style={styles.text11}>All</Text>
              <Text style={styles.text11}>All</Text>
              <Text style={styles.text11}>All</Text>
            </View>

            <Text style={styles.text12}>Email</Text>
            <Input keyboard={"email-address"} placeholder={"Placeholder"} placeholdertextcolor={COLORS.placeholder} background={COLORS.Inputback} color={COLORS.black} paddingHorizontal={15} height={56} width={"100%"} radius={6} value={email} onchange={(text) => setEmail(text)} />

            <Text style={styles.text12}>Telp number</Text>
            <Input placeholder={"Placeholder"} placeholdertextcolor={COLORS.placeholder} background={COLORS.Inputback} color={COLORS.black} paddingHorizontal={15} height={56} width={"100%"} radius={6} value={phone} onchange={(text) => setPhone(text)} />

            <Text style={styles.text12}>Schedule date & time</Text>

            <TouchableOpacity onPress={()=>setCheck(!check)}
            style={styles.view19}>
              <Radio check={check} onPress={()=>setCheck(!check)}/>
            <Text style={styles.text10}>12 October, 2020 at 09:45 AM</Text>
            </TouchableOpacity>

            <Bottons onPress={()=>setOpen(false)} title={"Log in"} backgroundcolor={COLORS.red} height={56} width={"100%"} justifycontent={"center"} alignItems={"center"} color={COLORS.white} fontFamily={FONTS.medium} fontSize={16} marginVertical={20} borderradius={8} shadowopacity={1} elevation={5} />

          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  text: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLORS.darkgrey
  },
  view1: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15
  },
  button: {
    backgroundColor: COLORS.lightgrey,
    padding: 5,
    borderRadius: 10
  },
  img: {
    marginVertical: 10,
    height: 270,
    width: "100%",
    borderRadius: 30
  },
  view2: {
    marginHorizontal: 15
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 24,
    color: COLORS.darkgrey
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLORS.white
  },
  view3: {
    backgroundColor: COLORS.greenBlue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  view5: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginLeft: 10

  },
  view6: {
    backgroundColor: COLORS.purple,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginLeft: 10
  },
  text3: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.grey,
    marginVertical: 10
  },
  img1: {
    height: 40,
    width: 40,
    marginRight: 10
  },
  text4: {
    fontFamily: FONTS.semibold,
    fontSize: 16,
    color: COLORS.darkgrey
  },
  text5: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLORS.grey
  },
  view7: {
    flexDirection: "row",
    alignItems: "center"
  },
  view8: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text6: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLORS.grey,
    marginLeft: 5
  },
  view9: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end"
  },
  view10: {
    backgroundColor: COLORS.yellow,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  text7: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLORS.darkgrey
  },
  text8: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.placeholder
  },
  imgback: {
    height: 67,
    width: 67,
    marginRight: 10,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  view11: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.Inputback,
    borderRadius: 8,
    marginVertical: 10
  },
  view12: {
    width: "75%"
  },
  view13: {
    flex: 1,
    justifyContent: "flex-end"
  },
  view14: {
    height: "85%",
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 5,
    shadowOpacity: 1,
    paddingHorizontal: 15
  },
  view15: {
    height: 10,
    width: "30%",
    alignSelf: "center",
    backgroundColor: COLORS.grey,
    borderRadius: 20,
    marginTop: 15
  },
  text9: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLORS.darkgrey
  },
  text10: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.grey
  },
  view16: {
    backgroundColor: COLORS.grey,
    padding: 10,
    borderRadius: 10
  },
  view17: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 20
  },
  text11: {
    backgroundColor: COLORS.red1,
    padding: 15,
    color: COLORS.white,
    fontFamily: FONTS.medium,
    margin: 10,
    borderRadius: 8

  },
  view18: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "60%"
  },
  text12: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLORS.darkgrey,
    marginTop: 10
  },
  view19:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:10
  }
})
export default Courses;