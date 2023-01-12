import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import ChartPenjualanLands from './component/chartPenjualanLands'
import ChartBarangLands from './component/chartBarangLands'
import ListPiutang from './component/listPiutangLands'
import IconMenu from '../../component/IconMenu'

const Dashboard = () => {
    return (
        <View style={{ flex: 1 }}>
            <IconMenu />
            <View style={styles.detail}>
                <View style={styles.chartDetail}>
                    <View style={styles.chart} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Grafik Penjualan 1 Minggu</Text>
                        <ChartPenjualanLands />
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Grafik Barang Terlaris</Text>
                        <ChartBarangLands />
                    </View>
                </View>
                <View style={styles.piutang}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Piutang Lewat Jatuh Tempo 30 Hari</Text>
                    <ListPiutang />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chart: {
        flex: 1,
        alignItems: 'center',
    },
    detail:{
        flexDirection: 'row',
    },
    chartDetail: {
        flex:1,
    },
    piutang: {
        alignItems: 'center',
        marginBottom: 20,
        flex: 1
    },

})


export default Dashboard