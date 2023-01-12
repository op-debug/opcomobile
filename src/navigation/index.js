import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screen/auth/Login'
import Register from '../screen/auth/Register'
import ForgotPassword from '../screen/auth/ForgotPassword'
import DrawerNavigation from './DrawerNavigation'
import FormPelanggan from '../screen/pelanggan/FormPelanggan';
import * as ScreenOrientation from 'expo-screen-orientation'
import * as Device from 'expo-device';

const Stack = createNativeStackNavigator();

const index = () => {
    useEffect(() => {
        Device.getDeviceTypeAsync().then((deviceType) => {
            global.TYPE_DEVICE = deviceType;
            if (deviceType == 2) {
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
            }
            else {
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
            }
        });
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="FormPelanggan" component={FormPelanggan} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index