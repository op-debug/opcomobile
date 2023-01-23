import React, { useEffect, useContext, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screen/auth/Login'
import Register from '../screen/auth/Register'
import ForgotPassword from '../screen/auth/ForgotPassword'
import DrawerNavigation from './DrawerNavigation'
import FormPelanggan from '../screen/pelanggan/FormPelanggan';
import * as ScreenOrientation from 'expo-screen-orientation'
import * as Device from 'expo-device';
import LaporanHistorisBarang from '../screen/laporan/component/LaporanHistorisBarang';
import LaporanPersediaanBarang from '../screen/laporan/component/LaporanPersediaanBarang';
import LaporanOrderPembelian from '../screen/laporan/component/LaporanOrderPembelian';
import LaporanPembelian from '../screen/laporan/component/LaporanPembelian';
import LaporanReturBeli from '../screen/laporan/component/LaporanReturBeli';
import LaporanOrderPenjualan from '../screen/laporan/component/LaporanPembelian';
import LaporanPenjualan from '../screen/laporan/component/LaporanPenjualan';
import LaporanReturJual from '../screen/laporan/component/LaporanReturJual';
import LaporanPembayaran from '../screen/laporan/component/LaporanPembayaran';
import LaporanPenerimaan from '../screen/laporan/component/LaporanPenerimaan';
import LaporanHutang from '../screen/laporan/component/LaporanHutang';
import LaporanPiutang from '../screen/laporan/component/LaporanPiutang';
import LaporanKasHarian from '../screen/laporan/component/LaporanKasHarian';
import LaporanLabaRugiKotor from '../screen/laporan/component/LaporanLabaRugiKotor';
import { UserContext } from '../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const index = () => {
    const { isLoggedIn, dispatch } = useContext(UserContext);
    const [login, setLogin] = useState(isLoggedIn);

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
        getDataLogin();
    }, [isLoggedIn]);


    const getDataLogin = async () => {
        let dataLogin = await AsyncStorage.getItem('dataLogin');
        let isLogin;

        if (dataLogin && dataLogin !== '') {
            dataLogin = JSON.parse(dataLogin);

            isLogin = dataLogin.isLoggedIn;

            dispatch({ type: 'USER_LOGIN', login: dataLogin });
        }
        setLogin(isLogin);
    }


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!login ? (
                    <>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Home" component={DrawerNavigation} options={{ headerShown: false }} />
                        <Stack.Screen name="FormPelanggan" component={FormPelanggan} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanPersediaanBarang" component={LaporanPersediaanBarang} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanHistorisBarang" component={LaporanHistorisBarang} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanOrderPembelian" component={LaporanOrderPembelian} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanPembelian" component={LaporanPembelian} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanReturPembelain" component={LaporanReturBeli} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanOrderPenjualan" component={LaporanOrderPenjualan} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanPenjualan" component={LaporanPenjualan} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanReturPenjualan" component={LaporanReturJual} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanKasHarian" component={LaporanKasHarian} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanHutang" component={LaporanHutang} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanPiutang" component={LaporanPiutang} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanPembayaran" component={LaporanPembayaran} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanPenerimaan" component={LaporanPenerimaan} options={{ headerShown: false }} />
                        <Stack.Screen name="LaporanLaba/Rugi" component={LaporanLabaRugiKotor} options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index