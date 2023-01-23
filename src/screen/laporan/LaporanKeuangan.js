import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native"
import IconMenu from '../../component/IconMenu';
import { useNavigation } from '@react-navigation/native';


const LaporanKeuangan = ()=>{
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <IconMenu />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                onPress={() => navigation.navigate('LaporanHutang')}
                style={styles.menu}>
                    <Text style={styles.label}>LAPORAN HUTANG</Text>
                </TouchableOpacity>
              
                <TouchableOpacity style={styles.menu}
                onPress={() => navigation.navigate('LaporanPiutang')}
                >
                    <Text style={styles.label}>LAPORAN PIUTANG</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu}
                onPress={() => navigation.navigate('LaporanPembayaran')}
                >
                    <Text style={styles.label}>LAPORAN PEMBAYAAN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu}
                onPress={() => navigation.navigate('LaporanPenerimaan')}
                >
                    <Text style={styles.label}>LAPORAN PENERIMAAN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu}
                onPress={() => navigation.navigate('LaporanKasHarian')}
                >
                    <Text style={styles.label}>LAPORAN KAS HARIAN</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.menu}
                onPress={() => navigation.navigate('LaporanLaba/Rugi')}
                >
                    <Text style={styles.label}>LAPORAN KAS LABA/RUGI</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:30,
        top:20,
        marginRight:30
    },
    menu:{
        borderBottomWidth:2,
        borderBottomColor:'#000',
        marginBottom:20,
        paddingBottom:10,
        paddingTop:10
        
    },
    label:{
        fontWeight: 'bold',
        fontSize:20,
    }

})

export default LaporanKeuangan