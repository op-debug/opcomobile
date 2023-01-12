import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Chart from './component/chart'
import ListPiutang from './component/listPiutang'
import IconMenu from '../../component/IconMenu';

const Dashboard = () => {
    return (
        <View style={{ flex: 1 }}>
            <IconMenu />
            <View style={styles.chart}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Grafik Penjualan 1 Minggu</Text>
                <Chart />
            </View>
            <View style={styles.piutang}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Piutang Lewat Jatuh Tempo</Text>
                <ListPiutang />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chart: {
        flex: 1,
        alignItems: 'center',
        marginBottom:10
    },
    piutang: {
        alignItems: 'center',
        flex: 1
    },

})


export default Dashboard