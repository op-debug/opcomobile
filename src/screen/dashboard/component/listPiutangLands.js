
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
        no_faktur: 'XO2022/11/01',
        pelanggan: 'Priyo Subarkah',
        nominal: '200000',
        hari: '30',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bal',
        no_faktur: 'XO2022/11/01',
        pelanggan: 'Priyo Subarkah',
        nominal: '200000',
        hari: '30',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bak',
        no_faktur: 'XO2022/11/01',
        pelanggan: 'Priyo Subarkah',
        nominal: '200000',
        hari: '30',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ban',
        no_faktur: 'XO2022/11/01',
        pelanggan: 'Priyo Subarkah',
        nominal: '200000',
        hari: '30',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baw',
        no_faktur: 'XO2022/11/01',
        pelanggan: 'Priyo Subarkah',
        nominal: '200000',
        hari: '30',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bae',
        no_faktur: 'XO2022/11/01',
        pelanggan: 'Priyo Subarkah',
        nominal: '200000',
        hari: '30',
    },
];

const Item = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={styles.listPiutang} width={Dimensions.get("window").width /2.5}>
                <View>
                    <Text style={styles.label}>No Faktur</Text>
                    <Text style={styles.label}>Pelanggan</Text>
                    <Text style={styles.label}>Nominal</Text>
                    <Text style={styles.label}>Keterlambatan</Text>
                </View>
                <View>
                    <Text>: {item.no_faktur}</Text>
                    <Text>: {item.pelanggan}</Text>
                    <Text>: {item.nominal}</Text>
                    <Text>: {item.hari} Hari</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const ListPiutang = () => {
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
        width: width/4.5 ,
    },
})

export default ListPiutang