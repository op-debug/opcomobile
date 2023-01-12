
import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba9',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba8',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba6',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba5',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        nama: 'XO2022/11/01',
        email: 'Priyo Subarkah',
        no_telp: '081328675727',
    },
];

const Item = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={styles.listPiutang} width={Dimensions.get("window").width -50}>
                <View>
                    <Text style={styles.label}>Nama</Text>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.label}>No.Telp</Text>
                </View>
                <View>
                    <Text>: {item.nama}</Text>
                    <Text>: {item.email}</Text>
                    <Text>: {item.no_telp}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const ListPelanggan = () => {
    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
        />
    )
}
// console.log(width)
const styles = StyleSheet.create({
    listPiutang: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: 20,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#cacaca',
        borderRadius: 20,
    },
    label: {
        width: width/2 ,
    },
})

export default ListPelanggan