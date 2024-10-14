import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../assets/images';
import { Notification } from '../../assets/svgs';
import { COLORS, FONTS } from '../../enums/FontStyles';
import Chats from '../../components/Chats';

const Messages = () => {
  return (
    <View style={styles.view}>
      <View style={styles.view1}>
        <View style={styles.view3}>
          <Image style={styles.img} source={IMAGES.ProfileMan} />
          <View>
            <Text style={styles.text}>My Messages</Text>
            <View style={styles.view2}>
              <Text style={styles.text1}>2 new messages</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Notification />
        </TouchableOpacity>
      </View>

        <Chats/>
      
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
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.grey,
  },
  view2: {
    flexDirection: "row",
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
  },
})
export default Messages;