import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import Input from './Input';
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS } from '../enums/FontStyles';
import { IMAGES } from '../assets/images';

const chatting = [
    {
        id: 1,
        name: "Roger Hulg",
        description: "Hey, can i ask something? i need your help please",
        time: "15 min",
        image: IMAGES.Author
    },
    {
        id: 2,
        name: "Hilman Nuris",
        description: "thank’s for your information dude!",
        time: "Yesterday",
        image: IMAGES.ProfileMan
    },
    {
        id: 3,
        name: "Erick Lawrence",
        description: "Did you take the free illustration class yesterday?",
        time: "Yesterday",
        image: IMAGES.Author
    },
    {
        id: 4,
        name: "Jennifer Dunn",
        description: "Hey Samuel, where did you get your point? can we exchange?",
        time: "2 week ago",
        image: IMAGES.ProfileMan
    },
    {
        id: 5,
        name: "Andy Warhol",
        description: "Hey, can i ask something? i need your help please",
        time: "15 min",
        image: IMAGES.Author
    },
    {
        id: 6,
        name: "Roger Hulg",
        description: "Hey, can i ask something? i need your help please",
        time: "15 min",
        image: IMAGES.Author
    },
    {
        id: 7,
        name: "Thomas Partrey",
        description: "Hey, can i ask something? i need your help please",
        time: "15 min",
        image: IMAGES.Author
    },
    {
        id: 8,
        name: "Roger Hulg",
        description: "Hey, can i ask something? i need your help please",
        time: "15 min",
        image: IMAGES.Author
    },
    {
        id: 9,
        name: "Roger Hulg",
        description: "Hey, can i ask something? i need your help please",
        time: "15 min",
        image: IMAGES.Author
    },
    {
        id: 10,
        name: "Roger Hulg",
        description: "Hey, can i ask something? i need your help please",
        time: "15 min",
        image: IMAGES.Author
    },
    {
        id: 11,
        name: "Roger Hulg",
        description: "Hey, can i ask something? i need your help please",
        time: "15 min",
        image: IMAGES.Author
    },
    {
        id: 12,
        name: "Roger Hulg",
        description: "Hey, can i ask something? i need your help please",
        time: "15 min",
        image: IMAGES.Author
    },
]
const Chats = () => {
    const [search, setSearch] = useState('')
    const [data,setData]=useState(chatting)
    
    const filterFun=(text)=>{
        setSearch(text)
        const filtering=data.filter(item=> item?.name.toLowerCase().includes(text.toLowerCase()));
        setData(filtering);
    }
    return (
        <ScrollView style={styles.view}>
            <View style={styles.view1}>
                <Input placeholder={"Search here"} placeholdertextcolor={COLORS.placeholder} background={COLORS.Inputback} color={COLORS.black} paddingHorizontal={15} height={56} width={"80%"} value={search} onchange={(text) => filterFun(text)} />
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="search-outline" color={COLORS.white} size={20} />
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.button1}>
                                <Image style={styles.img} source={item.image} />
                                <View style={styles.view3}>
                                    <View style={styles.view2}>
                                        <Text style={styles.text1}>{item.name}</Text>
                                        <Text style={styles.text2}>{item.time}</Text>
                                    </View>
                                    <Text style={styles.text}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal: 15
    },
    view1: {
        flexDirection: "row",
        backgroundColor: COLORS.Inputback,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom:20
    },
    button: {
        height: 44,
        width: 44,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.red,
        borderRadius: 8
    },
    text1: {
        fontFamily: FONTS.semibold,
        fontSize: 16,
        color: COLORS.darkgrey
    },
    text2: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.textgrey
    },
    button1: {
        flexDirection: "row",
        paddingTop:10,

    },
    img: {
        height: 40,
        width: 40,
        marginRight: 15
    },
    view2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.grey,
    },
    view3: {
        flex: 1,
        borderBottomWidth:1,
        paddingBottom:15,
        borderColor:COLORS.textgrey
    }
})
export default Chats;