import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, FlatList, ImageBackground, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../enums/FontStyles';
import { IMAGES } from '../../assets/images';
import { Calls, Notification, Reward, Watch } from '../../assets/svgs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

  const [use, setUse] = useState(1);

  useEffect(()=>{
    values();
  },[])

  const values=async()=>{
    await AsyncStorage.setItem("val","true")
    const val=await AsyncStorage.getItem("val")
    console.log(val)
  }

  const data = [
    {
      id: 1,
      image: IMAGES.Man1
    },
    {
      id: 2,
      image: IMAGES.Man2
    },
    {
      id: 3,
      image: IMAGES.Man3
    },
    {
      id: 4,
      image: IMAGES.Man4
    },
    {
      id: 5,
      image: IMAGES.Man1
    },
  ]

  const sliders = [
    {
      id: 1,
      name: "Laurel Seilha",
      status: "Product Designer",
      discription: "Step design sprint for beginner",
      time: "5h 21m",
      authorimg: IMAGES.Author,
      backimage: IMAGES.HomeAll,
    },
    {
      id: 2,
      name: "Laurel",
      status: "Product Designer",
      discription: "Step design sprint for beginner",
      time: "5h 21m",
      authorimg: IMAGES.Author,
      backimage: IMAGES.HomeAll,
    },
    {
      id: 3,
      name: "Laurel Seilha",
      status: "Product Designer",
      discription: "Step design sprint for beginner",
      time: "5h 21m",
      authorimg: IMAGES.Author,
      backimage: IMAGES.HomeAll,
    },
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={styles.view10}>
        <ImageBackground style={styles.imgback} source={item.backimage} >
          <Text style={styles.text7}>Free e-book</Text>
          <View style={styles.view9}>
            <Text style={styles.text8}>{item.discription}</Text>
            <View style={styles.view11}>
              <Watch />
              <Text style={styles.text9}>{item.time}</Text>
            </View>

            <View style={styles.view13}>
              <View style={styles.view12}>
                <Text style={styles.text10}>6 lessons</Text>
              </View>

              <View style={styles.view14}>
                <Text style={styles.text10}>Design</Text>
              </View>

              <View style={styles.view15}>
                <Text style={styles.text10}>Free</Text>
              </View>
            </View>

            <View style={styles.view16}>
              <Image style={styles.img2} source={item.authorimg} />
              <View style={styles.view17}>
                <Text style={styles.text11}>{item.name}</Text>
                <Text style={styles.text12}>{item.status}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLORS.greywhite} barStyle={"dark-content"} />
      <View style={styles.view1}>
        <View style={styles.view3}>
          <Image style={styles.img} source={IMAGES.ProfileMan} />
          <View>
            <Text style={styles.text}>Hallo, Samue!</Text>
            <View style={styles.view2}>
              <Reward />
              <Text style={styles.text1}>+1600</Text>
              <Text style={styles.text2}>Points</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Notification />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.view4}>
                <Image style={styles.img1} source={item.image} />
                <TouchableOpacity style={styles.button}>
                  <Calls />
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>

      <View style={styles.view6}>
        <Text style={styles.text3}>Upcoming </Text>
        <Text style={styles.text4}>course of this week</Text>
      </View>

      <View style={styles.view5}>
        <TouchableOpacity onPress={() => setUse(1)}
          style={use === 1 ? styles.button1 : styles.button2}>
          <Text style={use === 1 ? styles.text5 : styles.text6}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setUse(2)}
          style={use === 2 ? styles.button1 : styles.button2}>
          <Text style={use === 2 ? styles.text5 : styles.text6}>UI/UX</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setUse(3)}
          style={use === 3 ? styles.button1 : styles.button2}>
          <Text style={use === 3 ? styles.text5 : styles.text6}>Illustration</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setUse(4)}
          style={use === 4 ? styles.button1 : styles.button2}>
          <Text style={use === 4 ? styles.text5 : styles.text6}>3D Animation</Text>
        </TouchableOpacity>
      </View>

      {
        use === 1 ? <View style={styles.view8}>
          <FlatList
            data={sliders}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
          : null
      }


    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  img: {
    height: 40,
    width: 40,
    marginRight: 15
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 15
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.darkgrey
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLORS.yellow,
    marginLeft: 5
  },
  text2: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.yellow,
  },
  view2: {
    flexDirection: "row",
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
  },
  img1: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderColor: COLORS.red,
    borderRadius: 25,
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  view4: {
    paddingHorizontal: 10,
    paddingBottom: 10

  },
  text3: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLORS.darkgrey
  },
  text4: {
    fontFamily: FONTS.regular,
    fontSize: 18,
    color: COLORS.darkgrey
  },
  view6: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 10
  },
  button1: {
    backgroundColor: COLORS.red,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10
  },
  text5: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.white
  },
  button2: {
    backgroundColor: COLORS.Inputback,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10
  },
  text6: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.grey
  },
  view5: {
    flexDirection: "row",
    marginHorizontal: 10
  },
  imgback: {
    flex: 1,
    alignSelf: "center",
    borderRadius: 50,
    margin: 20,
    padding: 20,
    borderRadius: 20

  },
  view8: {
    flex: 1,
    alignItems: "center",
  },
  text7: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: 10,
    backgroundColor: COLORS.yellow,
    padding: 5,
    borderRadius: 10,
    width: "30%",
    height:25,
    textAlign: "center",
  },
  view9: {
    marginTop: "80%"
  },
  text8: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLORS.white,
  },
  view10: {
    flex: 1
  },
  view11: {
    flexDirection: "row",
    alignItems: "center"
  },
  text9: {
    marginLeft: 10,
    color: COLORS.textgrey,
    fontFamily: FONTS.medium,
    fontSize: 10
  },
  text10: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLORS.white
  },
  view12: {
    backgroundColor: COLORS.greenBlue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4
  },
  view13: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  view14: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginLeft: 10

  },
  view15: {
    backgroundColor: COLORS.purple,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginLeft: 10
  },
  text11:{
    fontFamily:FONTS.semibold,
    fontSize:16,
    color:COLORS.white
  },
  text12:{
    fontFamily:FONTS.medium,
    fontSize:10,
    color:COLORS.textgrey
  },
  img2:{
    height:40,
    width:40
  },
  view16:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:15
  },
  view17:{
    marginLeft:20
  }

})
export default Home;