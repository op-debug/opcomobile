import * as React from 'react';
import Dashboard from '../screen/dashboard/Dashboard'
import DashboardLands from '../screen/dashboard/DashboardLands'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pelanggan from '../screen/pelanggan/Pelanggan'
import SalesLands from '../screen/sales/SalesLands';
import Sales from '../screen/sales/Sales';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            {TYPE_DEVICE === 2 ? <Drawer.Screen name="Dashboard" component={DashboardLands} options={{ headerShown: false }} /> :
                <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />}

            <Drawer.Screen name="Pelanggan" component={Pelanggan} options={{ headerShown: false }} />
            {TYPE_DEVICE === 2 ? <Drawer.Screen name="Penjualan" component={SalesLands} options={{ headerShown: false }} /> :
                <Drawer.Screen name="Penjualan" component={Sales} options={{ headerShown: false }} />}


        </Drawer.Navigator>
    )
}

export default DrawerNavigation