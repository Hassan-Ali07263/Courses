import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../enums/AppEnums';
import * as ui from "../screens/index"
import { COLORS } from '../enums/FontStyles';
import { Image, View } from 'react-native';
import { IMAGES } from '../assets/images';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: COLORS.red,
            tabBarInactiveTintColor: COLORS.placeholder,
            tabBarStyle: { height: 55 },

        }}>

            <Tab.Screen options={{
                tabBarIcon: ({ focused, size }) => (
                    <View style={{ alignItems: "center" }}>
                        <Image source={focused ? IMAGES.MenuAct : IMAGES.Menuin}
                            style={{ height: size, width: size }} />
                        {focused && (
                            <View
                                style={{
                                    height: 4,
                                    borderRadius: 10,
                                    backgroundColor: COLORS.red,
                                    width: 15,
                                    marginTop: 6,
                                }}
                            />
                        )}
                    </View>
                ),
            }}
                name={SCREENS.HOME} component={ui.Home} />

            <Tab.Screen options={{
                tabBarIcon: ({ focused, size }) => (
                    <View style={{ alignItems: "center" }}>
                        <Image source={focused ? IMAGES.CourseAct : IMAGES.coursein}
                            style={{ height: size, width: size }} />
                        {focused && (
                            <View
                                style={{
                                    height: 4,
                                    borderRadius: 10,
                                    backgroundColor: COLORS.red,
                                    width: 15,
                                    marginTop: 6,
                                }}
                            />
                        )}
                    </View>
                ),
            }} name={SCREENS.COURSES} component={ui.Courses} />

            <Tab.Screen options={{
                tabBarIcon: ({ focused, size }) => (
                    <View style={{ alignItems: "center" }}>
                    <Image source={focused ? IMAGES.MessageAct : IMAGES.Messagein}
                        style={{ height: size, width: size }} />
                    {focused && (
                        <View
                            style={{
                                height: 4,
                                borderRadius: 10,
                                backgroundColor: COLORS.red,
                                width: 15,
                                marginTop: 6,
                            }}
                        />
                    )}
                </View>
                ),
            }} name={SCREENS.MESSAGES} component={ui.Messages} />

            <Tab.Screen options={{
                tabBarIcon: ({ focused, size }) => (
                    <View style={{ alignItems: "center" }}>
                        <Image source={focused ? IMAGES.ProfileAct : IMAGES.Profilein}
                            style={{ height: size, width: size }} />
                        {focused && (
                            <View
                                style={{
                                    height: 4,
                                    borderRadius: 10,
                                    backgroundColor: COLORS.red,
                                    width: 15,
                                    marginTop: 6,
                                }}
                            />
                        )}
                    </View>
                ),
            }} name={SCREENS.PROFILE} component={ui.Profile} />

        </Tab.Navigator>
    );
}
export default BottomTabs;