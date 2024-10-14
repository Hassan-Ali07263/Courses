import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../enums/AppEnums';
import * as ui from "../screens/index"
import BottomTabs from './BottomTabs';

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={SCREENS.SPLASH} component={ui.Splash} />
                <Stack.Screen name={SCREENS.ONBOARDING} component={ui.Onboarding} />
                <Stack.Screen name={SCREENS.WELCOME} component={ui.Welcome} />
                <Stack.Screen name={SCREENS.LOGIN} component={ui.Login} />
                <Stack.Screen name={SCREENS.SIGNUP} component={ui.Signup} />
                <Stack.Screen name='BottomTabs' component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNavigation;