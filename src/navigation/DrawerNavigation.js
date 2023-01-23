import * as React from 'react';
import Dashboard from '../screen/dashboard/Dashboard'
import DashboardLands from '../screen/dashboard/DashboardLands'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pelanggan from '../screen/pelanggan/Pelanggan'
import SalesLands from '../screen/sales/SalesLands';
import Sales from '../screen/sales/Sales';
import LaporanPersediaan from '../screen/laporan/LaporanPersediaan';
import LaporanPembelian from '../screen/laporan/LaporanPembelian';
import LaporanPenjualan from '../screen/laporan/LaporanPenjualan';
import LaporanKeuangan from '../screen/laporan/LaporanKeuangan';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            {TYPE_DEVICE === 2 ? <Drawer.Screen name="Dashboard" component={DashboardLands} options={{ headerShown: false }} /> :
                <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />}

            <Drawer.Screen name="Pelanggan" component={Pelanggan} options={{ headerShown: false }} />
            {TYPE_DEVICE === 2 ? <Drawer.Screen name="Penjualan" component={SalesLands} options={{ headerShown: false }} /> :
                <Drawer.Screen name="Penjualan" component={Sales} options={{ headerShown: false }} />}
            
            <Drawer.Screen name="Laporan Persediaan" component={LaporanPersediaan} options={{ headerShown: false }} />
            <Drawer.Screen name="Laporan Pembelian" component={LaporanPembelian} options={{ headerShown: false }} />
            <Drawer.Screen name="Laporan Penjualan" component={LaporanPenjualan} options={{ headerShown: false }} />
            <Drawer.Screen name="Laporan Keuangan" component={LaporanKeuangan} options={{ headerShown: false }} />


        </Drawer.Navigator>
    )
}

export default DrawerNavigation