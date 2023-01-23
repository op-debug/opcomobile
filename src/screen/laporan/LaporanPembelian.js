import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native"
import IconMenu from '../../component/IconMenu';
import { useNavigation } from '@react-navigation/native';


const LaporanPembelian = ()=>{
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <IconMenu />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                onPress={() => navigation.navigate('LaporanOrderPembelian')}
                style={styles.menu}>
                    <Text style={styles.label}>LAPORAN ORDER PEMBELIAN</Text>
                </TouchableOpacity>
              
                <TouchableOpacity style={styles.menu}
                onPress={() => navigation.navigate('LaporanPembelian')}
                >
                    <Text style={styles.label}>LAPORAN PEMBELIAN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu}
                onPress={() => navigation.navigate('LaporanReturPembelain')}
                >
                    <Text style={styles.label}>LAPORAN RETUR PEMBELIAN</Text>
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

export default LaporanPembelian