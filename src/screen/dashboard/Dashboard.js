import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Chart from './component/chart'
import ListPiutang from './component/listPiutang'
import IconMenu from '../../component/IconMenu';
import LogoutMenu from '../../component/LogoutMenu';


const Dashboard = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ 
                flexDirection: 'row', 
                marginBottom:10 }}>
                <IconMenu />
                <Text style={{ 
                    width: '75%',
                    marginLeft: 10,
                    marginTop: 32,
                    fontSize: 20,
                    fontWeight: 'bold' }}>Dashboard</Text>
                <LogoutMenu/>
            </View>
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
        marginBottom: 10
    },
    piutang: {
        alignItems: 'center',
        flex: 1
    },

})


export default Dashboard